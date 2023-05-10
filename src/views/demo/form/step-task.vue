<template>
  <page-container desc="将一个冗长或用户不熟悉的表单任务分成多个步骤，分布提交，确保用户操作面板的精简。" bg>
    <f-card :bordered="false" class="mb-16">
      <f-steps :current="currentStep" size="small">
        <f-step title="选择目标数据模型"></f-step>
        <f-step title="字段映射"></f-step>
        <f-step title="任务设置"></f-step>
        <f-step title="保存"></f-step>
      </f-steps>
    </f-card>
    <!--步骤提交内容-->
    <f-collapse-wrap v-show="currentStep === 2" :title="stepTitle">
      <div class="p16">
        <f-form ref="formRef" :model="formObj" :rules="ruleValidate" label-position="top">
          <basic-tasks
            v-model="formObj"
            :planInfo="planInfo"
            :copyFormObj="copyFormObj"
            :checkCsExchangeAble="checkCsExchangeAble"
          ></basic-tasks>
        </f-form>
      </div>
    </f-collapse-wrap>
  </page-container>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'StepTask',
})
</script>
<script setup>
import { computed, ref } from 'vue'
import BasicTasks from '@/views/demo/form/components/basicTasks.vue'

const formObj = ref({}) // 修改form对象
const planInfo = ref({}) // 方案信息
const copyFormObj = ref({}) // 拷贝form对象
const currentStep = ref(0) // 步骤进度
const stepTitle = computed(
  () =>
    ({
      0: '选择目标数据模型',
      1: '字段映射',
      2: '任务设置',
    }[currentStep.value]),
)
const checkCsExchangeAble = ref({
  sourceType: '', //存储元数据来源
  storageId: '', //贴源库存储元数据表ID
  storageName: '', //贴源库存储元数据表元数据名称（表名）
})
const ruleValidate = {
  taskName: [{ required: true, message: '任务名称必填', trigger: 'blur' }],
  configQueryId: [{ required: true, message: '源节点主键必填', trigger: 'blur' }],
  strategy: [{ required: true, message: '执行策略必填', trigger: 'change' }],
  triggerType: [{ required: true, message: '触发方式必选', trigger: 'change' }],
  configQueryDate: [{ required: true, message: '排序字段必填', trigger: 'change' }],
  scheduleConf: [{ required: true, message: '调度方式必填项', trigger: 'change' }],
  executorRouteStrategy: [{ required: true, message: '路由策略必填', trigger: 'change' }],
  misfireStrategy: [{ required: true, message: '调度过期策略必填', trigger: 'change' }],
}

</script>
