import { computed, inject, reactive, ref, toRefs } from 'vue'
import { deepCopy, isEmpty, throwError } from '@/utils/util'
import { getTableItems, getMetaStorageDetail } from '@/api/modules/step-task.api'
import { Message } from 'f-ui-one'

export default function useItemMap(props, emit) {
  // ***** 源表和目标表列表 ***** //
  const sourceTableRef = ref(null)
  const targetTableRef = ref(null)
  const tables = reactive({
    tableSourceData: {},
    tableSourceItems: [],
    tableTargetData: {},
    tableTargetItems: [],
    tableList1: [], // 缓存源数据源
    tableList2: [], // 缓存目标数据源
    completeFields: [], // 缓存字段信息
    itemMaps: [], // 映射关系
    currentRow1Index: -1, // 第一个表格选中的行索引
    currentRow1: null, // 第一个表格选中的行
    currentRow2: null, // 第2个表格选中的行
  })

  const mapObj = computed({
    get: () => props.formObj,
    set: val => emit('update:formObj', val),
  })

  // 自动映射状态
  let autoMapFlag = ref(true)
  const currentStep = inject('TaskStep')

  const itemloading = ref(false)
  // 获取源资源信息项
  const getSourceItems = async () => {
    tables.tableSourceData = {
      tableName: 'aaa',
    }
    mapObj.value.nodeTableName = 'aaa'
    changeStep()
    tables.tableSourceItems = [
      {
        "name": "id",
        "desc": null,
        "required": true,
        "dataType": "varchar"
      },
      {
        "name": "update_date",
        "desc": null,
        "required": true,
        "dataType": "timestamp"
      },
      {
        "name": "name",
        "desc": null,
        "required": false,
        "dataType": "varchar"
      },
      {
        "name": "age",
        "desc": null,
        "required": false,
        "dataType": "int2"
      },
      {
        "name": "sex",
        "desc": null,
        "required": false,
        "dataType": "varchar"
      }
    ]
    tables.tableList1 = deepCopy(tables.tableSourceItems)
  }
  // 获取目标资源信息项
  const getTargetItems = async () => {
    mapObj.value.metadataName = 'bbb'
    changeStep()
    tables.tableTargetItems = [
      {
        "name": "js_id",
        "desc": "教师编号",
        "required": true,
        "dataType": "varchar"
      },
      {
        "name": "js_name",
        "desc": "教师姓名",
        "required": true,
        "dataType": "varchar"
      },
      {
        "name": "bz",
        "desc": "备注",
        "required": false,
        "dataType": "varchar"
      },
      {
        "name": "qhdm",
        "desc": "区划代码",
        "required": false,
        "dataType": "varchar"
      },
      {
        "name": "birthday",
        "desc": "出生日期",
        "required": false,
        "dataType": "varchar"
      }
    ]
    console.log(tables.tableTargetItems)
    tables.tableList2 = deepCopy(tables.tableTargetItems)
  }

  function changeStep() {
    currentStep.value = 0
    if (tables.tableSourceData.tableName) {
      currentStep.value = 1
    }
  }

  // ***** 右侧操作事件 ***** //
  function clearSourceTable() {
    tables.tableSourceData = {}
    tables.tableSourceItems = []
    tables.tableList1 = []
    mapObj.value.nodeTableName = ''
    cancelAllMap()
  }

  function clearTargetTable() {
    tables.tableTargetData = {}
    tables.tableTargetItems = []
    tables.tableList2 = []
    mapObj.value.metadataKey = ''
    mapObj.value.metadataName = ''
    cancelAllMap()
  }

  // 获取两个数据的交集字段
  const intersectionFields = computed(() => {
    if (isEmpty(tables.tableSourceItems) || isEmpty(tables.tableTargetItems)) return []
    const sourceNames = tables.tableSourceItems.map(v => v.name)
    const targetNames = tables.tableTargetItems.map(v => v.name)
    let convertArray = []
    targetNames.forEach(i => convertArray.push(i.toLowerCase()))
    //获取两个数组的交集
    let sourceArray = sourceNames.filter(v => convertArray.includes(v.toLowerCase()))
    //过滤忽略大小写后，重复的字段
    let test2 = []
    let test3 = []
    sourceArray.forEach(item => {
      test2.push(item.toLowerCase())
    })
    for (let i = 0; i < sourceArray.length; i++) {
      const newArray = test2.filter(v => v === sourceArray[i].toLowerCase())
      if (newArray.length === 1) {
        test3.push(sourceArray[i])
      }
    }
    return test3
  })

  const targetHasNoMatch = computed(() => !!tables.tableTargetItems.find(v => v.required))

  // 大小写忽略后，自动映射的匹配规则
  // 1、如果字段完全一致，匹配优先级最高
  // 2、如果大小写忽略后，只有唯一映射的，可以匹配
  // 3、如果大小写忽略后，有重复的不匹配
  // 4、字段不相同，不匹配
  // 自动映射
  function autoMap() {
    // 备份下已经配置的映射，目的是为了恢复一些手动映射的系统字段
    tables.completeFields = deepCopy(tables.itemMaps)
    autoMapFlag.value = true
    //判断映射关系中是否有手动映射的字段
    const row = tables.itemMaps.find(item => item.sourceName === '')
    if (row) {
      //如果有，触发全部重置
      cancelAllMap()
    }
    //对映射关系进行过滤，过滤掉手动映射的数据
    tables.itemMaps = tables.itemMaps.filter(item => item.sourceName !== '')
    // 自动映射时以targetSource为基础即以fields2集合做遍历，并对fields1集合逐一匹配，如有名称相同的则push至右侧映射列表
    intersectionFields.value.forEach(name => {
      const index1 = tables.tableSourceItems.findIndex(i => {
        if (i.name.toLowerCase() === name.toLowerCase()) return i
      })
      const index2 = tables.tableTargetItems.findIndex(i => {
        if (i.name.toLowerCase() === name.toLowerCase()) return i
      })
      const target = tables.tableTargetItems[index2]
      // 拼接一条新数据至映射数组
      tables.itemMaps.push({
        sourceName: name,
        targetName: target.name,
        dataType: target?.dataType,
        ctrlType: target?.ctrlType,
        desc: target?.desc,
        dictMap: [],
        defaultValue: '',
        transValue: '',
      })
      // 移除两个匹配项
      index1 !== -1 && tables.tableSourceItems.splice(index1, 1)
      index2 !== -1 && tables.tableTargetItems.splice(index2, 1)
    })
    Message.success('自动映射执行完毕!')
  }

  function handleLink({ source, dest }) {
    tables.currentRow1 = source
    tables.currentRow2 = dest
    // 拼接一条新数据至映射数组
    tables.itemMaps.push({
      sourceName: source ? source.name : '',
      targetName: dest.name,
      dataType: dest?.dataType,
      ctrlType: dest?.ctrlType,
      desc: dest?.desc,
      dictMap: [],
      defaultValue: '',
      transValue: '',
    })
    // 移除前两个表格中的对应数据
    removeTableRow()
    changeStep()
  }

  // 取消所有映射
  function cancelAllMap() {
    tables.itemMaps.forEach((item, index) => {
      // 显示恢复至两个表格
      unshiftTable(item.sourceName, item.targetName)
    })
    tables.itemMaps = []
    changeStep()
    //开启自动映射按钮
    autoMapFlag.value = false
  }

  // 取消一个映射
  function cancelOneMap(row, index) {
    // 显示恢复至两个表格
    unshiftTable(row.sourceName, row.targetName)
    // 移除我自己
    tables.itemMaps.splice(index, 1)
    //开启自动映射按钮
    autoMapFlag.value = false
  }

  // 源资源行点击触发
  function handleSourceClick(currentRow, index) {
    if (tables.currentRow1Index !== index) {
      tables.currentRow1Index = index
      tables.currentRow1 = currentRow
      return
    }
    sourceTableRef.value && sourceTableRef.value.clearCurrentRow()
    tables.currentRow1Index = -1
    tables.currentRow1 = null
  }

  // 目标资源当前行改变
  function handleCurrentChange2(currentRow) {
    tables.currentRow2 = currentRow
  }

  // 取消映射后从顶部恢复两个项
  function unshiftTable(sourceName, targetName) {
    const row1 = tables.tableList1.find(i => i.name.toLowerCase() === sourceName.toLowerCase())
    const row2 = tables.tableList2.find(i => i.name.toLowerCase() === targetName.toLowerCase())
    // 给顶部塞入（恢复）两个值
    if (row1) tables.tableSourceItems.unshift(row1)
    if (row2) tables.tableTargetItems.unshift(row2)
  }

  // 移除两个表格的选中项
  function removeTableRow() {
    if (tables.currentRow1) {
      const index1 = tables.tableSourceItems.findIndex(i => i.name === tables.currentRow1.name)
      tables.tableSourceItems.splice(index1, 1)
      tables.currentRow1Index = -1
      tables.currentRow1 = null
      sourceTableRef.value && sourceTableRef.value.clearCurrentRow()
    }
    if (tables.currentRow2) {
      const index2 = tables.tableTargetItems.findIndex(i => i.name === tables.currentRow2.name)
      tables.tableTargetItems.splice(index2, 1)
      tables.currentRow2 = null
      targetTableRef.value && targetTableRef.value.clearCurrentRow()
    }
  }

  // 映射编辑
  const mappingEditRef = ref('')
  const editForm = ref({})
  // 映射编辑
  function handleMapEdit(row, index) {
    editForm.value = deepCopy({ ...row, index })
    mappingEditRef.value &&
      mappingEditRef.value.open({ activeTab: row.defaultValue ? 'tab1' : 'tab2' })
  }

  // 映射编辑保存
  function saveEditForm() {
    const {
      index,
      sourceName,
      targetName,
      dataType,
      ctrlType,
      desc,
      dictMap,
      defaultValue,
      transValue,
    } = editForm.value
    tables.itemMaps[index].sourceName = sourceName
    tables.itemMaps[index].targetName = targetName
    tables.itemMaps[index].dataType = dataType
    tables.itemMaps[index].ctrlType = ctrlType
    tables.itemMaps[index].desc = desc
    tables.itemMaps[index].dictMap = dictMap
    tables.itemMaps[index].defaultValue = defaultValue
    tables.itemMaps[index].transValue = transValue
  }

  // 根据已有的映射回显数据值
  async function echoData(source, target, itemMap) {

    await getSourceItems(source)
    await getTargetItems(target)
    tables.itemMaps = []
    // 自动映射时以targetSource为基础即以fields2集合做遍历，并对fields1集合逐一匹配，如有名称相同的则push至右侧映射列表
    itemMap.forEach(item => {
      const index1 = tables.tableSourceItems.findIndex(i => i.name === item.sourceName)
      const index2 = tables.tableTargetItems.findIndex(i => i.name === item.targetName)
      // 移除两个匹配项
      if (index1 > -1) {
        tables.tableSourceItems.splice(index1, 1)
      }
      if (index2 > -1) {
        tables.tableTargetItems.splice(index2, 1)
      }
      // 拼接一条新数据至映射数组
      tables.itemMaps.push({
        sourceName: item.sourceName,
        targetName: item.targetName,
        dataType: item.dataType,
        ctrlType: item.ctrlType,
        desc: item.desc,
        dictMap: item.dictMap,
        defaultValue: item.defaultValue,
        transValue: item.transValue,
      })
    })
  }

  // const sourceRef = ref('')
  // const writerRef = ref('')
  // 配置按钮（todo：弹窗编辑后，载入对应数据源的字段列表
  async function loadSourceFields() {
    await getSourceItems()
    // sourceRef.value && sourceRef.value.open()
  }

  async function loadWriterFields() {
    await getTargetItems()
    // writerRef.value && writerRef.value.open()
  }

  function handleSourceSubmit(nodeTableName) {
    cancelAllMap()
    getSourceItems(nodeTableName)
  }

  function handleTargetSubmit(selectObj) {
    cancelAllMap()
    getTargetItems(selectObj.value)
  }


  return {
    // ***** 源表和目标表列表 ***** //
    ...toRefs(tables),
    sourceTableRef,
    targetTableRef,
    // ***** 右侧操作事件 ***** //
    clearSourceTable,
    clearTargetTable,
    // 自动映射按钮状态
    autoMapFlag,
    autoMap,
    handleLink,
    cancelOneMap,
    cancelAllMap,
    handleSourceClick,
    handleCurrentChange2,
    intersectionFields,
    targetHasNoMatch,
    handleMapEdit,
    mappingEditRef,
    editForm,
    saveEditForm,
    echoData,

    loadSourceFields,
    loadWriterFields,
    // sourceRef,
    // writerRef,
    handleSourceSubmit,
    handleTargetSubmit,
    changeStep,
    mapObj,
    getSourceItems,
    itemloading,
  }
}
