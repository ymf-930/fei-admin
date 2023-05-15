<template>
  <div class="expr-choose">
    <div class="left">
      <div class="params">
        <div class="title">参数配置</div>
        <div class="param-list">
          <div class="param-item" style="padding: 0 15px; color: #999" v-if="params.length === 0">
            选择右侧函数填充参数
          </div>
          <div v-for="(item, index) in params" :key="index" class="param-item">
            <div class="param-title">
              <f-tag type="info" :tag-style="{ height: '28px', lineHeight: '28px' }">
                {{ item.title }}
              </f-tag>
            </div>
            <div class="param-value">
              <f-select
                v-if="item.itemFlag"
                appendToBody
                v-model="params[index].name"
                style="width: 250px"
                size="small"
                @change="setInputText"
              >
                <f-option
                  v-for="v in sourceList"
                  :key="v.name"
                  :value="v.name"
                  :label="v.name"
                ></f-option>
              </f-select>
              <f-input
                v-else
                style="width: 250px"
                v-model="params[index].name"
                placeholder="参数名称"
                clearable
                size="small"
                @change="setInputText"
              ></f-input>
              <f-tag
                v-if="!params[index].name && params[index].name !== 0"
                style="margin-left: 10px"
                type="danger"
                size="mini"
              >
                参数值不能为空
              </f-tag>
            </div>
          </div>
        </div>
      </div>

      <div class="el-str">
        <div class="title">编辑表达式</div>
        <div class="input">
          <f-input
            v-model="inputText"
            type="textarea"
            :rows="4"
            no-resize
            @change="inputChange"
          ></f-input>
        </div>
      </div>

      <div class="help-wrap" flex="box:mean">
        <ul class="help" style="border-right: 1px solid #eeeeee">
          <li>提示：</li>
          <li>1) 右侧选择函数初始化参数。</li>
          <li>2) 参数更改后会重置表达式。</li>
          <li>3) 最后编辑修改表达式后确认提交。</li>
        </ul>

        <ul class="help">
          <li>表达式提示：</li>
<!--          <li>1) 数值类型: #num+1、 #num1+#num2、 1+1。</li>-->
<!--          <li>2) 字符类型: #str1+#str2、 '你'+'好'。</li>-->
          <li>1) 数值类型: #num+1、 1+1。</li>
          <li>2) 字符类型: #str1+'X'、 '你'+'好'。</li>
        </ul>
      </div>
    </div>

    <div class="right">
      <div class="methods-title">函数分类</div>
      <div class="methods-type">
        <span
          :class="['tab', { active: methodType === 'string' }]"
          @click="changeMethodType('string')"
        >
          字符
        </span>
        <span
          :class="['tab', { active: methodType === 'number' }]"
          @click="changeMethodType('number')"
        >
          数值
        </span>
        <span :class="['tab', { active: methodType === 'time' }]" @click="changeMethodType('time')">
          时间
        </span>
        <span
          :class="['tab', { active: methodType === 'condition' }]"
          @click="changeMethodType('condition')"
        >
          条件
        </span>
      </div>

      <ul class="methods-list">
        <f-table
          :data="list"
          :columns="columns"
          size="small"
          :loading="loading"
          maxHeight="500"
          highlight-row
          @current-change="handleSelectBtn"
        ></f-table>
      </ul>
    </div>
  </div>
</template>

<script>
import { computed, reactive, toRefs } from 'vue'
import { getMethods } from '@/api/modules/step-task.api'
import { deepCopy, isEmpty, throwError } from '@/utils/util'

export default {
  name: 'expr-editor',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    sourceName: {
      type: String,
      default: '',
    },
    targetName: {
      type: String,
      default: '',
    },
    sourceList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  // emits: ['update:modelValue', 'update:sourceName'],
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const status = reactive({
      visible: false,
      loading: false,
      list: [],
      columns: [
        { title: '方法名称', key: 'methodName' },
        { title: '方法描述', key: 'methodTitle', tooltip: true },
      ],
      sourceName: '',
      targetName: '',
      methodType: 'string', // int
      curRow: null,
      method: '',
      params: [],
      inputText: props.modelValue,
      sourceFieldsMap: {},
    })
    const displayText = computed(() => {
      return `#${status.method}(${status.params
        .map(item => (item.itemFlag ? '#' + item.name : item.name))
        .join(',')})`
    })

    // 获取参数函数
    async function getMethodsData() {
      status.loading = true
      try {
        status.list = await getMethods(status.methodType)
      } catch (e) {
        throwError('expr-editor/getMethodsData', e)
      }
      status.loading = false
    }

    // 下拉框回显
    function echoSelect(originStr) {
      if (!isEmpty(originStr)) {
        let temp
        if (originStr.indexOf(',') !== -1) {
          temp = originStr.substring(originStr.indexOf('('), originStr.indexOf(','))
        } else {
          temp = originStr.substring(originStr.indexOf('('), originStr.lastIndexOf(')'))
        }
        if (temp.indexOf('#') === -1) {
          return
        }
        const echoField = temp.substring(temp.indexOf('#') + 1)
        // 此处为了过滤无参方法
        if (echoField !== '(') {
          status.params[0] = { title: '源字段', name: echoField, itemFlag: true }
        }
      }
    }

    function changeMethodType(type) {
      status.methodType = type
      getMethodsData()
    }

    function handleSelectBtn(row) {
      status.curRow = deepCopy(row)
      status.params = deepCopy(row.params)
      status.method = row.methodName
      // if (props.sourceName && status.params.length > 0 && status.params[0].itemFlag && status.params[0].title === '源字段') {
      if (props.sourceName && status.params.length > 0 && status.params[0].itemFlag) {
        status.params[0].name = props.sourceName
      }
      setInputText()
    }

    function setInputText() {
      status.inputText = displayText.value
      // console.log(status.params)
      // console.log(status.inputText)
      // if (status.params[0]?.name && status.params[0].title === '源字段'){
      // if (status.params[0]?.name){
      //   emit('update:sourceName', status.params[0].name)
      // }
      emit('update:modelValue', status.inputText)
    }

    function inputChange(val) {
      emit('update:modelValue', val)
    }

    getMethodsData()
    echoSelect(props.modelValue)
    return {
      ...toRefs(status),
      setInputText,
      changeMethodType,
      handleSelectBtn,
      inputChange,
    }
  },
}
</script>

<style scoped lang="stylus">
.expr-choose {
  display: flex;
  width: 100%;
  background: #fff;
  margin-bottom: 16px;
  border: 1px solid #eeeeee;
  .left {
    width: calc(100% - 300px);
    min-height: 402px;
    .params {
      position: relative;
      display: flex;
      height: 120px;
      border-bottom: 1px solid #eee;
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        font-size: 18px;
        background: #fafafa;
        border-right: 1px solid #eee;
      }

      .param-list {
        position: relative;
        width: calc(100% - 150px);
        .param-item {
          display: flex;
          height: 40px;
          line-height: 40px;
          .param-title {
            width: 170px;
            padding: 0 15px;
            text-align: center;
            span {
              margin: 0;
              width: 100%;
            }
          }

          .param-value {
            padding: 0 15px;
            width: calc(100% - 150px);
          }
        }
        &:before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 40px;
          height: 1px;
          background-color: #eeeeee;
        }
        &:after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: 80px;
          height: 1px;
          background-color: #eeeeee;
        }
      }
      &:before {
        content: '';
        position: absolute;
        left: 320px
        top: 0;
        bottom: 0;
        width: 1px;
        background-color: #eeeeee;
      }
    }
    .el-str {
      display: flex;
      height: 140px;
      border-bottom: 1px solid #eee;
      .title {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        border-right: 1px solid #eee;
        font-size: 18px;
        background: #fafafa;
      }

      .input {
        width: calc(100% - 150px);
        padding: 16px;
      }
    }

    .help-wrap {
      height: calc(100% - 260px);
      ul {
        padding: 15px;
        font-size: 12px;
        li {
          line-height: 24px;
        }
      }
    }
  }
  .right {
    width: 300px;
    min-height: 300px;
    border-left: 1px solid #eee;
  }

  .methods-title {
    line-height: 40px;
    background: #fafafa;
    text-align: center;
    border-bottom: 1px solid #eee;
  }

  .methods-type {
    border-bottom: 1px solid #eee;
    display: flex;

    .tab {
      line-height: 40px;
      width: 50%;
      text-align: center;
      cursor: pointer;
      transition: all .2s;

      &:not(last-child) {
        border-right: 1px solid #eee;
      }

      &:hover {
        color: #1089ff;
      }

      &.active {
        color: #1089ff;
        background: #f3f9ff;
        font-weight: 500;
      }
    }
  }

  .methods-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    padding: 0 10px;
  }
}
</style>
