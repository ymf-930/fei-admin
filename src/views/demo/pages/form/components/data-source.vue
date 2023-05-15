<template>
  <f-drawer v-model="visible" title="源数据表" :width="500" :mask-closable="false">
    <div>
      <f-form ref="formRef" :model="formObj" :rules="ruleValidate" label-width="110px">
        <f-form-item label="源节点">
          <f-input :model-value="sourceLinkMeta" disabled></f-input>
        </f-form-item>
        <f-form-item label="源数据表" prop="nodeTableName">
          <f-select
            v-model="formObj.nodeTableName"
            placeholder="请选择"
            clearable
            filterable
            @change="tableChange"
          >
            <f-option
              v-for="item in sourceTableList"
              :key="item.name"
              :label="item.name"
              :value="item.name"
            />
          </f-select>
        </f-form-item>
        <f-loading fix show-text="加载中..." v-if="itemloading"></f-loading>

        <f-form-item label="源节点主键" prop="configQueryId" v-if="tableSourceItems.length > 0">
          <f-select v-model="formObj.configQueryId" placeholder="请选择" filterable>
            <f-option
              v-for="item in tableSourceItems"
              :key="item.name"
              :label="item.mame"
              :value="item.name"
            />
          </f-select>
        </f-form-item>

        <f-form-item label="排序字段" prop="configQueryDate" v-if="tableSourceItems.length > 0">
          <f-select v-model="formObj.configQueryDate" placeholder="请选择" filterable>
            <f-option
              v-for="item in tableSourceItems"
              :key="item.name"
              :label="item.mame"
              :value="item.name"
            />
          </f-select>
        </f-form-item>

        <f-form-item label="过滤条件">
          <f-input
            type="textarea"
            v-model.trim="formObj.configQueryCondition"
            placeholder="请输入过滤条件，开头无需用and(flag = '1' and import_check_flag = '1')"
            clearable
            show-word-count
          ></f-input>
        </f-form-item>

        <f-form-item label="">
          <f-button @click="handleCancle">关 闭</f-button>
          <f-button type="primary" @click="handleSubmit" :loading="loading">提 交</f-button>
        </f-form-item>
      </f-form>
    </div>
  </f-drawer>
</template>

<script setup>
import { ref, computed, nextTick, watch } from 'vue'
import { Message } from 'f-ui-one'

const emit = defineEmits(['update:modelValue', 'change', 'clear'])

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  },
  sourceLinkMeta: {
    type: String,
    default: '',
  },
  sourceTableList: {
    type: Array,
    default: () => [],
  },
  tableSourceItems: {
    type: Array,
    default: () => [],
  },
  planCategory: {
    type: String,
    default: '',
  },
  itemloading: {
    type: Boolean,
    default: false,
  },
})

const visible = ref(false)

const formObj = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})

const loading = ref(false)
async function open() {
  visible.value = true
}
const ruleValidate = ref({
  nodeTableName: [{ required: true, message: '不能为空', trigger: 'change' }],
  configQueryId: [{ required: true, message: '不能为空', trigger: 'blur' }],
  configQueryDate: [{ required: true, message: '不能为空', trigger: 'change' }],
})

const formRef = ref(null)

function handleSubmit() {
  formRef.value &&
    formRef.value.validate(valid => {
      if (valid) {
        visible.value = false
      } else {
        Message.error('表单校验错误，请填写正确后再次提交！')
        return false
      }
    })
}

function handleCancle() {
  visible.value = false
}
async function tableChange(name) {
  if (name) {
    await nextTick()
    emit('change', { nodeTableName: name })
  } else {
    emit('clear')
  }
  formObj.value.configQueryId = ''
  formObj.value.configQueryDate = ''
}

watch(
  () => props.tableSourceItems,
  val => {
    if (val) {
      let list = val.map(item => item.name)
      if (list.includes('id')) {
        formObj.value.configQueryId = 'id'
      }
      if (list.includes('update_date')) {
        formObj.value.configQueryDate = 'update_date'
      }
    }
  },
  { immediate: true },
)

defineExpose({
  open,
})
</script>
<style lang="stylus" scoped>
:deep(.fei-form-item__label){
  line-height: 28px;
  height: 28px;
}
</style>
