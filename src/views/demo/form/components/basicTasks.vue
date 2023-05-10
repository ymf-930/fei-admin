<template>
  <f-row :gutter="16">
    <f-col :span="tesKNameWidth">
      <f-form-item label="任务名称" prop="taskName">
        <f-input v-model="formObj.taskName" clearable></f-input>
      </f-form-item>
    </f-col>
    <!-- 通用交换，上报交换，数据同步策略可以配置增量和全量，其余的方案只能配置增量 -->
    <f-col
      span="8"
      v-show="planInfo.planCategory === GENERIC_CATE || planInfo.planCategory === SUBMIT_EXCHANGE"
    >
      <f-form-item label="数据同步策略" prop="syncStrategy">
        <f-select v-model="formObj.syncStrategy" clearable>
          <f-option
            v-for="(value, key) in SYNC_STRATEGY.MAPPING"
            :key="key"
            :label="value"
            :value="key"
            :disabled="
              planInfo.planCategory !== GENERIC_CATE &&
              planInfo.planCategory !== SUBMIT_EXCHANGE &&
              key === 'all'
            "
          ></f-option>
        </f-select>
      </f-form-item>
    </f-col>
    <!----方案类别是通用交换 上报交换，脚本交换  归档交换 触发方式是手动，定时 2023年4月底-->
    <f-col
      span="8"
      v-if="
        [GENERIC_CATE, SUBMIT_EXCHANGE, SCRIPT_EXCHANGE, ARCHIVE_EXCHANGE].includes(
          planInfo.planCategory,
        )
      "
    >
      <f-form-item label="触发方式" prop="triggerType">
        <f-radio-group v-model="formObj.triggerType">
          <template v-for="(value, key) in triggerTypeMap" :key="key">
            <f-radio :label="key" :disabled="key === 'MESSAGE'">{{ value }}</f-radio>
          </template>
        </f-radio-group>
      </f-form-item>
    </f-col>
    <!----帖源交换 触发方式为所有-->
    <f-col span="8" v-if="planInfo.planCategory === DATACOLLECT">
      <f-form-item label="触发方式" prop="triggerType">
        <f-radio-group v-model="formObj.triggerType">
          <template v-for="(value, key) in triggerTypeMap" :key="key">
            <f-radio :label="key">{{ value }}</f-radio>
          </template>
        </f-radio-group>
      </f-form-item>
    </f-col>
    <f-col span="8">
      <template v-if="formObj.triggerType === 'MESSAGE' && planInfo.planCategory === DATACOLLECT">
        <f-form-item label="任务依赖" prop="preDependType">
          <div flex style="width: 100%">
            <f-select v-model="formObj.preDependType">
              <f-option label="前置任务" value="TASK"></f-option>
            </f-select>
          </div>
        </f-form-item>
      </template>
    </f-col>
    <f-col span="8">
      <template v-if="formObj.triggerType === 'MESSAGE' && planInfo.planCategory === DATACOLLECT">
        <f-form-item label="前置任务" prop="preDependTASK">
          <f-button
            v-for="item in selectedList"
            :key="item.id"
            type="success"
            plain
            @click="handleDeletePreDependOn(item)"
          >
            {{ item.taskName }}
            <f-icon name="close" />
          </f-button>
          <f-button icon="plus-circle" @click="handleOpen" background>选 择</f-button>
        </f-form-item>
      </template>
    </f-col>
  </f-row>

  <template v-if="formObj.triggerType === 'CRON'">
    <f-row :gutter="16">
      <f-col span="8">
        <f-form-item label="调度策略" prop="scheduleConf">
          <cron-expression-modal
            v-model:scheduleConf="formObj.scheduleConf"
            :isCreate="pageStatus.isCreate"
            v-model:scheduleConfStr="formObj.scheduleConfStr"
          ></cron-expression-modal>
        </f-form-item>
      </f-col>
      <f-col span="8">
        <f-form-item label="路由策略" prop="executorRouteStrategy">
          <f-select v-model="formObj.executorRouteStrategy" clearable>
            <template v-for="(value, key) in executorRouteStrategyMap" :key="key">
              <f-option :label="value" :value="key"></f-option>
            </template>
          </f-select>
        </f-form-item>
      </f-col>

      <f-col span="8">
        <f-form-item prop="misfireStrategy">
          <template #label>
            <span class="pr-10">调度过期策略</span>
            <f-popover trigger="hover" title="解释说明" width="400px">
              <f-icon name="warning-circle"></f-icon>
              <template #content>
                <f-desc :column="1">
                  <f-desc-item label="调度过期策略">
                    调度中心错过了调度时间的补偿处理策略
                  </f-desc-item>
                </f-desc>
                <p>忽略：忽略本次调度,不会触发任务</p>
                <p>立即执行一次：立即触发一次调度任务</p>
              </template>
            </f-popover>
          </template>
          <f-select v-model="formObj.misfireStrategy" clearable>
            <template v-for="(value, key) in misfireStrategyMap" :key="key">
              <f-option :label="value" :value="key"></f-option>
            </template>
          </f-select>
        </f-form-item>
      </f-col>
    </f-row>

    <f-row :gutter="16">
      <f-col span="8">
        <f-form-item prop="executorBlockStrategy">
          <template #label>
            <span class="pr-10">阻塞处理策略</span>
            <f-popover trigger="hover" title="解释说明" width="540px">
              <f-icon name="warning-circle"></f-icon>
              <template #content>
                <f-desc :column="1">
                  <f-desc-item label="阻塞处理策略">
                    由于调度过于密集，执行器来不及处理时的处理策略
                  </f-desc-item>
                </f-desc>
                <p>单机串行：任务依次排队执行</p>
                <p>丢弃后续调度：当上一个任务没有执行完，当前这个任务不会执行</p>
                <p>覆盖之前调度：之前的任务没有执行完，就会取消之前的任务，执行当前这个任务</p>
              </template>
            </f-popover>
          </template>
          <f-select v-model="formObj.executorBlockStrategy" clearable>
            <template v-for="(value, key) in executorBlockStrategyMap" :key="key">
              <f-option :label="value" :value="key"></f-option>
            </template>
          </f-select>
        </f-form-item>
      </f-col>

      <f-col span="8">
        <f-form-item label="任务超时时间">
          <f-input-number
            v-model="formObj.executorTimeout"
            :min="0"
            :precision="0"
            style="width: 100%"
          ></f-input-number>
        </f-form-item>
      </f-col>

      <f-col span="8">
        <f-form-item label="失败重试次数">
          <f-input-number
            v-model="formObj.executorFailRetryCount"
            :min="0"
            :precision="0"
            style="width: 100%"
          ></f-input-number>
        </f-form-item>
      </f-col>
    </f-row>
  </template>

  <f-form-item label="描述">
    <f-input v-model="formObj.taskDesc" type="textarea" :rows="3"></f-input>
  </f-form-item>
</template>

<script setup>
import { computed } from 'vue'
import { SYNC_STRATEGY } from '@/api/modules/step-task.api'
import {
  GENERIC_CATE, //通用
  DATACOLLECT, //帖源
  SUBMIT_EXCHANGE, //上报
  SCRIPT_EXCHANGE, //脚本
  ARCHIVE_EXCHANGE, //归档
} from '@/api/const.api'
import CronExpressionModal from '@/components/Service/CronExpressions/cron-expression-modal.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  },
  selectList: {
    type: Array,
    default: () => [],
  },
  planInfo: {
    type: Object,
    default: () => {},
  },
  triggerTypeMap: {
    type: Object,
    default: () => {},
  },
  pageStatus: {
    type: Object,
    default: () => {},
  },
  executorRouteStrategyMap: {
    type: Object,
    default: () => {},
  },
  misfireStrategyMap: {
    type: Object,
    default: () => {},
  },
  executorBlockStrategyMap: {
    type: Object,
    default: () => {},
  },
})

const emit = defineEmits(['update:modelValue', 'update:selectList'])

const formObj = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})

const selectedList = computed({
  get: () => props.selectList,
  set: val => emit('update:selectList', val),
})

const tesKNameWidth = computed(() => {
  if ([DATACOLLECT, SCRIPT_EXCHANGE, ARCHIVE_EXCHANGE].includes(props.planInfo.planCategory)) {
    return 16
  } else {
    return 8
  }
})

//删除已经选择的一个前置任务
function handleDeletePreDependOn(row) {
  const index = selectedList.value.findIndex(item => item.id === row.id)
  selectedList.value.splice(index, 1)
}

</script>
