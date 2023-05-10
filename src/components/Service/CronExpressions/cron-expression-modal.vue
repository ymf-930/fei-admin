<template>
  <div>
    <f-input readonly :model-value="showCron">
      <template #append>
        <f-button background @click="handleOpen">选择</f-button>
      </template>
    </f-input>
    <cron-expressions ref="cronRef" @select="handleOK"></cron-expressions>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'cron-expression-modal',
})
</script>
<script setup>
import { ref, watch } from 'vue'
import CronExpressions from '@/components/Service/CronExpressions/index.vue'
import { SCHEDULECONF, SCHEDULECONFSTR } from '@/api/const.api'

const emit = defineEmits(['update:scheduleConf', 'update:scheduleConfStr'])
const props = defineProps({
  scheduleConf: {
    type: String,
    default: SCHEDULECONF,
  },
  isCreate: {
    type: Boolean,
    default: true,
  },
  scheduleConfStr: {
    type: String,
    default: SCHEDULECONFSTR,
  },
})

const cronRef = ref(null)
const showCron = ref(null) // 当前资源信息

// 打开cron编辑器
function handleOpen() {
  cronRef.value && cronRef.value.open(props.scheduleConf, props.isCreate)
}
function handleOK(takeCronExpression, scheduleConfStr) {
  showCron.value = scheduleConfStr
  emit('update:scheduleConf', takeCronExpression) //回显出来cron表达式的内容
  emit('update:scheduleConfStr', scheduleConfStr) //回显出来cron中文表达式的内容
}

watch(
  () => props.scheduleConfStr,
  value => {
    showCron.value = value
  },
  { immediate: true },
)

defineExpose({
  handleOpen,
})
</script>
