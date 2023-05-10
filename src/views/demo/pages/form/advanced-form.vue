<template>
  <page-container desc="当一次性提交大量数据时，可使用高级表单。">
    <f-form :model="form" :rules="ruleValidate" status-icon label-width="85px" ref="formRef" label-position="top">
      <f-collapse-wrap title="基本信息" shadow="none">
        <div style="padding: 10px 24px">
          <f-row :gutter="24">
            <f-col span="6">
              <f-form-item prop="name" label="姓名">
                <f-input v-model="form.name" clearable></f-input>
              </f-form-item>
            </f-col>
            <f-col span="6">
              <f-form-item label="性别" prop="sex">
                <f-select v-model="form.sex" placeholder="请选择户籍地">
                  <f-option label="男" value="male"></f-option>
                  <f-option label="女" value="female"></f-option>
                </f-select>
              </f-form-item>
            </f-col>
            <f-col span="6">
              <f-form-item prop="mail" label="邮箱">
                <f-input v-model="form.mail" clearable></f-input>
              </f-form-item>
            </f-col>
            <f-col span="6">
              <f-form-item label="出生日期" prop="birthday">
                <f-date-picker v-model="form.birthday" type="date" placeholder="出生日期"></f-date-picker>
              </f-form-item>
            </f-col>
          </f-row>
        </div>
      </f-collapse-wrap>
      <f-collapse-wrap title="任务信息" shadow="none">
        <div style="padding: 10px 24px">
          <f-row :gutter="32">
            <f-col span="8">
              <f-form-item prop="taskName" label="任务名称">
                <f-input v-model="form.taskName" clearable></f-input>
              </f-form-item>
            </f-col>
            <f-col span="8">
              <f-form-item prop="taskDesc" label="任务描述">
                <f-input v-model="form.taskDesc" clearable></f-input>
              </f-form-item>
            </f-col>
            <f-col span="8">
              <f-form-item prop="taskDate" label="创建日期">
                <f-date-picker v-model="form.taskDate" type="date"></f-date-picker>
              </f-form-item>
            </f-col>
          </f-row>
          <f-row :gutter="30">
            <f-col span="8">
              <f-form-item prop="duty" label="责任人">
                <f-input v-model="form.duty" clearable></f-input>
              </f-form-item>
            </f-col>
            <f-col span="8">
              <f-form-item prop="execute" label="执行人">
                <f-input v-model="form.execute" clearable></f-input>
              </f-form-item>
            </f-col>
            <f-col span="8">
              <f-form-item prop="level" label="紧急程度">
                <f-radio-group v-model="form.level">
                  <f-radio label="0">
                    <f-tag type="danger">紧急</f-tag>
                  </f-radio>
                  <f-radio label="1">
                    <f-tag type="blue">急</f-tag>
                  </f-radio>
                  <f-radio label="2">
                    <f-tag type="success">一般</f-tag>
                  </f-radio>
                </f-radio-group>
              </f-form-item>
            </f-col>
          </f-row>
        </div>
      </f-collapse-wrap>
      <f-collapse-wrap title="人员信息" shadow="none">
        <div style="padding: 16px">
          <f-table :columns="columns" :data="list">
            <template #name="{ index, row }">
              <f-input type="text" v-model="editName" v-if="editIndex === index" size="small" clearable></f-input>
              <span v-else>{{ row.name }}</span>
            </template>
            <template #age="{ index, row }">
              <f-input-number type="text" v-model="editAge" v-if="editIndex === index" size="small"></f-input-number>
              <span v-else>{{ row.age }}</span>
            </template>
            <template #birthday="{ index, row }">
              <f-date-picker
                v-if="editIndex === index"
                size="small"
                v-model="editBirthday"
                type="date"
                placeholder="选择日期"
              ></f-date-picker>
              <span v-else>{{ row.birthday }}</span>
            </template>
            <template #hobby="{ index, row }">
              <f-select v-model="editHobby" clearable v-if="editIndex === index" size="small">
                <f-option v-for="(val, key) in hobbyMap" :key="key" :value="key" :label="val">{{ val }}</f-option>
              </f-select>
              <span v-else>{{ hobbyMap[row.hobby] }}</span>
            </template>
            <template #address="{ index, row }">
              <f-input type="text" v-model="editAddress" v-if="editIndex === index" size="small"></f-input>
              <span v-else>{{ row.address }}</span>
            </template>
            <template #action="{ index, row }">
              <div v-if="editIndex === index">
                <template v-if="editIsCreate">
                  <f-button @click="handleSave(index)" size="mini" type="success" transparent>新增</f-button>
                  <f-button type="danger" size="mini" transparent @click="handleRemove(index)">删除</f-button>
                </template>
                <template v-else>
                  <f-button size="mini" type="success" transparent @click="handleSave(index)">保存</f-button>
                  <f-button size="mini" type="primary" transparent @click="editIndex = -1">取消</f-button>
                </template>
              </div>
              <div v-else>
                <f-button
                  :type="editIsCreate ? 'default' : 'primary'"
                  size="mini"
                  :transparent="!editIsCreate"
                  @click="handleEdit(row, index)"
                  :disabled="editIsCreate"
                >
                  操作
                </f-button>
                <f-button
                  :type="editIsCreate ? 'default' : 'danger'"
                  size="mini"
                  :transparent="!editIsCreate"
                  @click="handleRemove(index)"
                  :disabled="editIsCreate"
                >
                  删除
                </f-button>
              </div>
            </template>
          </f-table>
          <div class="mt-8">
            <f-button icon="plus" dashed style="width: 100%" @click="handleAdd" :disabled="editIsCreate">新增</f-button>
          </div>
        </div>
      </f-collapse-wrap>
    </f-form>
    <template #rightFooter>
      <f-button @click="resetForm">重 置</f-button>
      <f-button type="primary" @click="submitForm">提 交</f-button>
    </template>
  </page-container>
</template>

<script>
import { reactive, ref, toRefs } from 'vue'
import { Message } from 'f-ui-one'
import dayjs from 'dayjs'

export default {
  name: 'AdvancedForm',
  setup() {
    const formRef = ref(null)
    const form = ref({
      name: '',
      sex: 'male',
      mail: '',
      birthday: '',
      taskName: '',
      taskDesc: '',
      taskDate: '',
      duty: '',
      execute: '',
      level: '', // 0：紧急 1： 急 3：一般
    })
    const list = ref([
      {
        name: '王小明',
        age: 18,
        birthday: '1990-04-22',
        hobby: '1',
        address: '北京市朝阳区芍药居',
      },
      {
        name: '张小刚',
        age: 25,
        birthday: '1990-11-11',
        hobby: '1',
        address: '北京市海淀区西二旗',
      },
      {
        name: '李小红',
        age: 30,
        birthday: '1985-02-05',
        hobby: '3',
        address: '上海市浦东新区世纪大道',
      },
      {
        name: '周小伟',
        age: 26,
        birthday: '1993-07-11',
        hobby: '1',
        address: '深圳市南山区深南大道',
      },
      {
        name: '张小发',
        age: 33,
        birthday: '1999-12-12',
        hobby: '2',
        address: '南京市龙眠大道',
      },
    ])
    const edit = reactive({
      editName: '',
      editAge: '',
      editBirthday: '',
      editHobby: '',
      editAddress: '',
      editIndex: -1,
      editIsCreate: false,
    })

    function handleEdit(row, index) {
      edit.editName = row.name
      edit.editAge = row.age
      edit.editHobby = row.hobby
      edit.editAddress = row.address
      edit.editBirthday = row.birthday
      edit.editIndex = index
    }

    function handleSave(index) {
      const { editName, editAge, editBirthday, editHobby, editAddress } = edit
      if (editName === '' || !editAge || editBirthday === '' || editHobby === '' || editAddress === '') {
        Message.error('请填写完整的信息！')
        return
      }
      list.value[index].name = edit.editName
      list.value[index].age = edit.editAge
      list.value[index].birthday = dayjs(edit.editBirthday).format('YYYY-MM-DD')
      list.value[index].hobby = edit.editHobby
      list.value[index].address = edit.editAddress
      edit.editIndex = -1
      edit.editIsCreate = false
    }

    function handleAdd() {
      const row = {
        name: '',
        age: null,
        birthday: '',
        hobby: '',
        address: '',
      }
      list.value.push(row)
      handleEdit(row, list.value.length - 1)
      edit.editIsCreate = true
    }

    function handleRemove(index) {
      list.value.splice(index, 1)
      edit.editIsCreate = false
    }

    function submitForm() {
      formRef.value.validate(valid => {
        if (valid) {
          Message.success('success submit!!')
        } else {
          Message.error('error submit!!')
          return false
        }
      })
    }

    function resetForm() {
      formRef.value.resetFields()
    }

    return {
      formRef,
      form,
      ruleValidate: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        sex: [{ required: true, message: '请选择性别', trigger: 'change' }],
        mail: [{ required: true, type: 'email', message: '请输入邮箱', trigger: 'blur' }],
        birthday: [{ required: true, type: 'date', message: '请选择出生日期', trigger: 'change' }],
        taskName: [{ required: true, message: '请输入任务名称', trigger: 'blur' }],
        taskDesc: [{ required: true, message: '请输入任务描述', trigger: 'blur' }],
        taskDate: [{ required: true, type: 'date', message: '请选择任务日期', trigger: 'change' }],
        duty: [{ required: true, message: '请输入责任人', trigger: 'blur' }],
        execute: [{ required: true, message: '请输入执行人', trigger: 'blur' }],
        level: [{ required: true, message: '勾选任务紧急程度', trigger: 'change' }],
      },
      columns: [
        { title: '姓名', slot: 'name' },
        { title: '年龄', slot: 'age' },
        { title: '出生日期', slot: 'birthday' },
        { title: '爱好', slot: 'hobby' },
        { title: '地址', slot: 'address' },
        { title: '操作', slot: 'action' },
      ],
      hobbyMap: { 1: '吃饭', 2: '睡觉', 3: '打豆豆' },
      list,
      ...toRefs(edit),
      submitForm,
      resetForm,
      handleSave,
      handleEdit,
      handleAdd,
      handleRemove,
    }
  },
}
</script>
