<template>
  <f-row :gutter="16">
    <f-col :span="8">
      <f-form-item label="任务名称" prop="taskName">
        <f-input v-model="formObj.taskName" clearable></f-input>
      </f-form-item>
    </f-col>
    <f-col span="8">
      <f-form-item label="调度策略" prop="scheduleConf">
        <cron-expression-modal
          v-model:scheduleConf="formObj.scheduleConf"
          v-model:scheduleConfStr="formObj.scheduleConfStr"
        ></cron-expression-modal>
      </f-form-item>
    </f-col>
  </f-row>
  <f-form-item label="描述">
    <f-input v-model="formObj.taskDesc" type="textarea" :rows="3"></f-input>
  </f-form-item>
</template>

<script setup>
import { computed } from 'vue'
import CronExpressionModal from '@/components/Service/CronExpressions/cron-expression-modal.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  }
})

const emit = defineEmits(['update:modelValue'])

const formObj = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})

</script>
