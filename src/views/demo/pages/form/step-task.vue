<template>
  <page-container desc='将一个冗长或用户不熟悉的表单任务分成多个步骤，分布提交，确保用户操作面板的精简。'>
    <f-card :bordered='false' class='mb-16'>
      <f-steps :current='currentStep' size='small'>
        <f-step title='选择目标数据模型'></f-step>
        <f-step title='字段映射'></f-step>
        <f-step title='任务设置'></f-step>
        <f-step title='保存'></f-step>
      </f-steps>
    </f-card>
    <!--步骤提交内容-->
    <div v-show='currentStep === 0 || currentStep === 1'>
      <gather-item-map
        ref='itemMapRef'
        v-model='formObj.itemMap'
        v-model:formObj='formObj'
        sourceLinkMeta='aaa'
        targetLinkMeta='bbb'
      ></gather-item-map>
    </div>
    <f-collapse-wrap v-show='currentStep === 2' :title='stepTitle'>
      <div class='p16'>
        <f-form ref='formRef' :model='formObj' :rules='ruleValidate' label-position='top'>
          <basic-tasks
            v-model='formObj'
          ></basic-tasks>
        </f-form>
      </div>
    </f-collapse-wrap>
    <f-card flex='main:right' :bordered='false' class='mt-16'>
      <template v-if='currentStep === 0 || currentStep === 1'>
        <f-button type='primary' @click='next'>下一步</f-button>
      </template>
      <template v-if='currentStep === 2'>
        <f-button @click='prev'>上一步</f-button>
        <f-button type='primary' @click='handleSubmit'>提 交</f-button>
      </template>
    </f-card>
  </page-container>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'StepTask',
})
</script>
<script setup>
import { computed, provide, ref } from 'vue'
import BasicTasks from '@/views/demo/pages/form/components/basicTasks.vue'
import { SCHEDULECONF, SCHEDULECONFSTR } from '@/api/const.api'
import GatherItemMap from '@/views/demo/pages/form/components/gather-item-map.vue'
import { Message } from 'f-ui-one'

const formObj = ref({}) // 修改form对象
const currentStep = ref(0) // 步骤进度
const itemMapRef = ref(null)

provide('TaskStep', currentStep)
const stepTitle = computed(
  () =>
    ({
      0: '选择目标数据模型',
      1: '字段映射',
      2: '任务设置',
    }[currentStep.value]),
)

const ruleValidate = {
  taskName: [{ required: true, message: '任务名称必填', trigger: 'blur' }],
  configQueryId: [{ required: true, message: '源节点主键必填', trigger: 'blur' }],
  scheduleConf: [{ required: true, message: '调度方式必填项', trigger: 'change' }],
}
initData()

function initData() {
  formObj.value = {
    // 独有的表单验证信息
    taskName: '', // 归集任务名称
    scheduleConf: SCHEDULECONF,
    scheduleConfStr: SCHEDULECONFSTR,
    configQueryId: 'id', // 源节点主键
    itemMap: [],
    taskDesc: '',
  }
}

// 上一步
function prev() {
  itemMapRef.value.changeStep()
}

// 下一步
function next() {
  if (!itemMapRef.value) return
  const { targetHasNoMatch, itemMaps } = itemMapRef.value
  if (itemMaps.length === 0) {
    Message.error('请配置字段映射！')
    return
  }
  if (targetHasNoMatch) {
    Message.error('目标资源还有必填字段没有配置映射')
    return
  }
  currentStep.value = 2
}

function handleSubmit() {
  Message.success('提交！！！')
}
</script>
