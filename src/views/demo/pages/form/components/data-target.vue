<template>
  <f-drawer v-model="visible" title="目标数据模型" :width="500" :mask-closable="false">
    <div>
      <f-form ref="formRef" :model="formObj" :rules="ruleValidate" label-width="110px">
        <f-form-item label="目标节点">
          <f-input :model-value="targetLinkMeta" disabled></f-input>
        </f-form-item>
        <f-form-item label="目标数据模型" prop="metadataKey">
          <f-select
            v-model="formObj.metadataKey"
            placeholder="请选择"
            clearable
            @change="tableChange"
            filterable
          >
            <f-option
              v-for="item in targetTableList"
              :key="item.id"
              :label="item.storageDesc"
              :value="item.metadataKey"
            />
          </f-select>
        </f-form-item>
        <f-loading fix show-text="加载中..." v-if="itemloading"></f-loading>

        <f-form-item label="自定义转换" prop="groovy">
          <template #label>
            <div flex="main:right" class="pr-10">
<!--              <IconTooltip popperWidth="300px" title="自定义转换" :titleStyle="{ fontSize: '14px' }"-->
<!--                           :tooltip=groovyTip>-->
<!--              </IconTooltip>-->
            </div>
          </template>
<!--          <EditorHelpInfo v-model="formObj.exConfig.groovy_code" lang="java" :title="'自定义转换'"></EditorHelpInfo>-->
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
import {ref, computed, watch} from 'vue'
import { Message } from 'f-ui-one'
import { deepCopy } from '@/utils/util'
// import IconTooltip from '@/components/Pages/ExchangeTask/components/IconTooltip/index.vue'
// import EditorHelpInfo from '@/components/Pages/ExchangeTask/components/target/EditorHelpInfo.vue'

const emit = defineEmits(['update:modelValue', 'change', 'clear'])
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  },
  targetLinkMeta: {
    type: String,
    default: '',
  },
  targetTableList: {
    type: Array,
    default: () => [],
  },
  tableTargetItems: {
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
const selectObj = ref('')

const loading = ref(false)

const groovyTip = `代码示例：record.addNewColumn(\"varchar22\", new StringColumn(\"tttt\",\"varcharm22\"));<br>return record;`

async function open() {
  visible.value = true
}

const ruleValidate = ref({
  metadataKey: [{ required: true, message: '不能为空', trigger: 'change' }],
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

function tableChange(metadataKey) {
  formObj.value.exConfig.ck_repeat = false
  formObj.value.exConfig.repeat_cache = true
  formObj.value.exConfig.repeat_cols = []
  formObj.value.exConfig.groovy_code = ''
  if (metadataKey) {
    let list = props.targetTableList.filter(item => item.metadataKey === metadataKey)
    selectObj.value = deepCopy(list[0])
    emit('change', selectObj)
  } else {
    emit('clear')
  }
}

watch(
  () => formObj.value.exConfig.repeat_cols,
  val => {
    formObj.value.repeat_cols = val
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
