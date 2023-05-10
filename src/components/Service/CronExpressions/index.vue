<template>
  <f-modal
    v-model="visible"
    width="1200px"
    append-to-body
    destroy-on-close
    :mask-closable="false"
    @closed="close"
  >
    <f-tabs v-model="activeTab" :data="CRON_TAB"></f-tabs>
    <div v-show="activeTab === 'tab0'">
      <f-radio-group v-model="secondsSocial" @change="handleChangeSeconds">
        <f-radio label="twitter" disabled>
          <span>每秒允许的通配符[, - * /]</span>
        </f-radio>
        <f-radio label="facebook">
          <span>周期从</span>
          <f-input-number
            :max="58"
            :min="0"
            v-model="secondsCycleStart"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
            @change="val => handleChange(val, 'seconds')"
          ></f-input-number>
          —
          <f-input-number
            :max="59"
            :min="secondsCycleStart + 1"
            v-model="secondsCycleEnd"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          秒
        </f-radio>
        <f-radio label="github">
          <span>从</span>
          <f-input-number
            :max="59"
            :min="0"
            v-model="secondsOnceStart"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          秒开始,每
          <f-input-number
            :max="59"
            :min="1"
            v-model="secondsInterval"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          秒执行一次
        </f-radio>
        <f-radio label="snapchat" class="checkbox">
          <span>指定</span>
          <f-checkbox-group v-model="triggerSecondPoint">
            <f-checkbox :label="index.toString()" v-for="(item, index) in 60" :key="index">
              <span>{{ 10 > index ? '0' + index : index }}</span>
            </f-checkbox>
          </f-checkbox-group>
        </f-radio>
      </f-radio-group>
    </div>
    <div v-show="activeTab === 'tab1'">
      <f-radio-group v-model="minutesSocial" @change="handleChangeMinutes">
        <f-radio label="twitter" disabled>
          <span>每分允许的通配符[, - * /]</span>
        </f-radio>
        <f-radio label="facebook">
          <span>周期从</span>
          <f-input-number
            :max="58"
            :min="0"
            v-model="minutesCycleStart"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
            @change="val => handleChange(val, 'minutes')"
          ></f-input-number>
          —
          <f-input-number
            :max="59"
            :min="minutesCycleStart + 1"
            v-model="minutesCycleEnd"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          分
        </f-radio>
        <f-radio label="github">
          <span>从</span>
          <f-input-number
            :max="59"
            :min="0"
            v-model="minutesOnceStart"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          分开始,每
          <f-input-number
            :max="59"
            :min="1"
            v-model="minutesInterval"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          分执行一次
        </f-radio>
        <f-radio label="snapchat" class="checkbox">
          <span>指定</span>
          <f-checkbox-group v-model="triggerMinutesPoint">
            <span>00</span>
            <f-checkbox :label="index.toString()" v-for="(item, index) in 60" :key="index">
              <span>{{ 10 > index ? '0' + index : index }}</span>
            </f-checkbox>
          </f-checkbox-group>
        </f-radio>
      </f-radio-group>
    </div>
    <div v-show="activeTab === 'tab2'">
      <f-radio-group v-model="hourSocial" @change="handleChangeHour">
        <f-radio label="twitter">
          <span>每时允许的通配符[, - * /]</span>
        </f-radio>
        <f-radio label="facebook">
          <span>周期从</span>
          <f-input-number
            :max="22"
            :min="0"
            v-model="hourCycleStart"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
            @change="val => handleChange(val, 'hour')"
          ></f-input-number>
          —
          <f-input-number
            :max="23"
            :min="hourCycleStart + 1"
            v-model="hourCycleEnd"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          小时
        </f-radio>
        <f-radio label="github">
          <span>从</span>
          <f-input-number
            :max="23"
            :min="0"
            v-model="hourOnceStart"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          小时开始,每
          <f-input-number
            :max="23"
            :min="1"
            v-model="hourInterval"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          小时执行一次
        </f-radio>
        <f-radio label="snapchat" class="checkbox">
          <span>指定</span>
          <f-checkbox-group v-model="triggerHourPoint">
            <span>00</span>
            <f-checkbox :label="index.toString()" v-for="(item, index) in 24" :key="index">
              <span>{{ 10 > index ? '0' + index : index }}</span>
            </f-checkbox>
          </f-checkbox-group>
        </f-radio>
      </f-radio-group>
    </div>
    <div v-show="activeTab === 'tab3'">
      <f-radio-group v-model="daySocial" @change="handleChangeDay">
        <f-radio label="twitter" :disabled="weekSocial === 'snapchat'">
          <span>每日允许的通配符[, - * / ? L]</span>
        </f-radio>
        <f-radio label="notSpecified">
          <span>不指定</span>
        </f-radio>
        <f-radio label="facebook" :disabled="weekSocial === 'snapchat'">
          <span>周期从</span>
          <f-input-number
            :max="30"
            :min="1"
            v-model="dayCycleStart"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
            @change="val => handleChange(val, 'day')"
          ></f-input-number>
          —
          <f-input-number
            :max="31"
            :min="2"
            v-model="dayCycleEnd"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          日
        </f-radio>
        <f-radio label="github" :disabled="weekSocial === 'snapchat'">
          <span>从</span>
          <f-input-number
            :max="31"
            :min="1"
            v-model="dayOnceStart"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          日开始,每
          <f-input-number
            :max="31"
            :min="1"
            v-model="dayInterval"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          天执行一次
        </f-radio>
        <f-radio label="lastDayOfMonth" :disabled="weekSocial === 'snapchat'">
          <span>本月最后一天</span>
        </f-radio>
        <f-radio label="snapchat" class="checkbox" :disabled="weekSocial === 'snapchat'">
          <span>指定</span>
          <f-checkbox-group v-model="triggerDayPoint">
            <f-checkbox
              :label="item.toString()"
              v-for="(item, index) in 31"
              :key="index"
              :disabled="weekSocial === 'snapchat'"
            >
              <span>{{ 10 > item ? '0' + item : item }}</span>
            </f-checkbox>
          </f-checkbox-group>
        </f-radio>
      </f-radio-group>
      <p v-show="weekSocial === 'snapchat'" style="margin-bottom: 15px; color: #f5222d">
        日和周不能同时指定
      </p>
    </div>
    <div v-show="activeTab === 'tab4'">
      <f-radio-group v-model="monthSocial" @change="handleChangeMonth">
        <f-radio label="twitter">
          <span>每月允许的通配符[, - * /]</span>
        </f-radio>
        <f-radio label="facebook">
          <span>周期从</span>
          <f-input-number
            :max="11"
            :min="1"
            v-model="monthCycleStart"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
            @change="val => handleChange(val, 'month')"
          ></f-input-number>
          —
          <f-input-number
            :max="12"
            :min="2"
            v-model="monthCycleEnd"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          月
        </f-radio>
        <f-radio label="github">
          <span>从</span>
          <f-input-number
            :max="12"
            :min="1"
            v-model="monthOnceStart"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          月开始,每
          <f-input-number
            :max="12"
            :min="1"
            v-model="monthInterval"
            arrow-up-icon="plus"
            arrow-down-icon="minus"
          ></f-input-number>
          月执行一次
        </f-radio>
        <f-radio label="snapchat" class="checkbox">
          <span>指定</span>
          <f-checkbox-group v-model="triggerMonthPoint">
            <f-checkbox :label="item.toString()" v-for="(item, index) in 12" :key="index">
              <span>{{ item }}</span>
            </f-checkbox>
          </f-checkbox-group>
        </f-radio>
      </f-radio-group>
    </div>
    <div v-show="activeTab === 'tab5'">
      <f-radio-group v-model="weekSocial" @change="handleChangeWeek">
        <f-radio label="notSpecified">
          <span>不指定</span>
        </f-radio>
        <f-radio label="snapchat" class="checkbox" :disabled="daySocial !== 'notSpecified'">
          <span>指定</span>
          <f-checkbox-group v-model="triggerWeekPoint">
            <f-checkbox
              :label="item.key"
              v-for="(item, index) in TRIGGERWEEK"
              :key="index"
              :disabled="daySocial !== 'notSpecified'"
            >
              <span>{{ item.label }}</span>
            </f-checkbox>
          </f-checkbox-group>
        </f-radio>
      </f-radio-group>
      <p v-show="daySocial !== 'notSpecified'" style="margin-bottom: 15px; color: #f5222d">
        日和周不能同时指定
      </p>
    </div>
    <div v-show="activeTab === 'tab6'">
      <f-radio-group v-model="yearSocial" @change="handleChangeYear">
        <f-radio label="twitter">
          <span>每年</span>
        </f-radio>
        <f-radio label="notSpecified">
          <span>不指定</span>
        </f-radio>
      </f-radio-group>
    </div>
    <p style="margin-bottom: -15px">表达式</p>
    <f-divider></f-divider>
    <p style="margin-bottom: 5px">表达式字段:</p>
    <f-row :gutter="20" class="gutter">
      <f-col span="4">
        <f-input placeholder="*" v-model="seconds" style="width: auto" readonly>
          <template #append>
            <f-button>秒</f-button>
          </template>
        </f-input>
      </f-col>
      <f-col span="4">
        <f-input placeholder="*" v-model="minutes" style="width: auto" readonly>
          <template #append>
            <f-button>分</f-button>
          </template>
        </f-input>
      </f-col>
      <f-col span="4">
        <f-input placeholder="*" v-model="hour" style="width: auto" readonly>
          <template #append>
            <f-button>时</f-button>
          </template>
        </f-input>
      </f-col>
      <f-col span="3">
        <f-input placeholder="*" v-model="day" style="width: auto" readonly>
          <template #append>
            <f-button>日</f-button>
          </template>
        </f-input>
      </f-col>
      <f-col span="3">
        <f-input placeholder="*" v-model="month" style="width: auto" readonly>
          <template #append>
            <f-button>月</f-button>
          </template>
        </f-input>
      </f-col>
      <f-col span="3">
        <f-input placeholder="?" v-model="week" style="width: auto" readonly>
          <template #append>
            <f-button>周</f-button>
          </template>
        </f-input>
      </f-col>
      <f-col span="3">
        <f-input v-model="year" style="width: auto" readonly>
          <template #append>
            <f-button>年</f-button>
          </template>
        </f-input>
      </f-col>
    </f-row>
    <p style="margin-top: 15px; margin-bottom: 5px">Cron表达式:</p>
    <f-input v-model="takeCronExpression" readonly class="input-item"></f-input>
    <p style="margin-top: 15px; margin-bottom: 5px">
      <action-button type="success" @click="handleRunningTime()">测试</action-button>
      最近运行10次时间:
    </p>
    <ul class="runntingTime demo-loading">
      <li v-for="(item, i) in running" :key="i">{{ item }}</li>
      <f-loading fix v-show="runLoading"></f-loading>
    </ul>
    <div class="footer">
      <f-button size="large" @click="handleClickCancel">取消</f-button>
      <f-button type="primary" size="large" @click="handleClickSubmit">确定</f-button>
    </div>
  </f-modal>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'cron-expressions',
})
</script>

<script setup>
import { ref, watch, computed } from 'vue'
import { Message } from 'f-ui-one'
import ActionButton from '@/components/Common/ActionButton/index.vue'
import {
  CRON_TAB,
  activeTab,
  secondsSocial,
  minutesSocial,
  hourSocial,
  daySocial,
  monthSocial,
  weekSocial,
  yearSocial,
  seconds,
  secondsCycleStart,
  secondsCycleEnd,
  secondsOnceStart,
  secondsInterval,
  triggerSecondPoint,
  minutes,
  minutesCycleStart,
  minutesCycleEnd,
  minutesOnceStart,
  minutesInterval,
  triggerMinutesPoint,
  hour,
  hourCycleStart,
  hourCycleEnd,
  hourOnceStart,
  hourInterval,
  triggerHourPoint,
  day,
  dayCycleStart,
  dayCycleEnd,
  dayOnceStart,
  dayInterval,
  triggerDayPoint,
  month,
  monthCycleStart,
  monthCycleEnd,
  monthOnceStart,
  monthInterval,
  triggerMonthPoint,
  week,
  triggerWeekPoint,
  year,
  handleChangeSeconds,
  handleChangeMinutes,
  handleChangeHour,
  handleChangeDay,
  handleChangeMonth,
  handleChangeWeek,
  handleChangeYear,
  assignment,
  resetValue,
  TRIGGERWEEK,
  handleChange,
} from '@/components/Service/CronExpressions/cronExpression'
import { runningTime } from '@/api/modules/cron.api'

const emit = defineEmits(['select'])
const visible = ref(false)

const cronArray = ref([])
const running = ref(null)
const runLoading = ref(false)
//周为指定的状态的话，日只能是不指定，并且日的值为?
//日为指定状态的话，周只能是不指定，并且周的值为?

watch(
  [
    () => triggerSecondPoint.value,
    () => secondsCycleStart.value,
    () => secondsCycleEnd.value,
    () => secondsOnceStart.value,
    () => secondsInterval.value,
    () => triggerMinutesPoint.value,
    () => minutesCycleStart.value,
    () => minutesCycleEnd.value,
    () => minutesOnceStart.value,
    () => minutesInterval.value,
    () => triggerHourPoint.value,
    () => hourCycleStart.value,
    () => hourCycleEnd.value,
    () => hourOnceStart.value,
    () => hourInterval.value,
    () => triggerDayPoint.value,
    () => dayCycleStart.value,
    () => dayCycleEnd.value,
    () => dayOnceStart.value,
    () => dayInterval.value,
    () => triggerMonthPoint.value,
    () => monthCycleStart.value,
    () => monthCycleEnd.value,
    () => monthOnceStart.value,
    () => monthInterval.value,
    () => triggerWeekPoint.value,
  ],
  ([
    curtriggerSecondPoint,
    cursecondsCS,
    cursecondsCE,
    cursecondsOS,
    cursecondsI,
    curtriggerMinutesPoint,
    curminutesCS,
    curminutesCE,
    curminutesOS,
    curminutesI,
    curtriggerHourPoint,
    curhourCS,
    curhourCE,
    curhourOS,
    curhourI,
    curtriggerDayPoint,
    curdayCS,
    curdayCE,
    curdayOS,
    curdayI,
    curtriggerMonthPoint,
    curmonthCS,
    curmonthCE,
    curmonthOS,
    curmonthI,
    curtriggerWeekPoint,
  ]) => {
    //秒
    secondsSocial.value = curtriggerSecondPoint.length > 0 ? 'snapchat' : secondsSocial.value
    if (secondsSocial.value === 'snapchat') {
      seconds.value = curtriggerSecondPoint
        .sort(function (a, b) {
          return a - b
        })
        .join(',')
    }
    if (secondsSocial.value === 'facebook') {
      seconds.value = `${cursecondsCS}-${cursecondsCE}`
    }
    if (secondsSocial.value === 'github') {
      seconds.value = `${cursecondsOS}/${cursecondsI}`
    }
    //分钟
    minutesSocial.value = curtriggerMinutesPoint.length > 0 ? 'snapchat' : minutesSocial.value
    if (minutesSocial.value === 'snapchat') {
      minutes.value = curtriggerMinutesPoint
        .sort(function (a, b) {
          return a - b
        })
        .join(',')
    }
    if (minutesSocial.value === 'facebook') {
      minutes.value = `${curminutesCS}-${curminutesCE}`
    }
    if (minutesSocial.value === 'github') {
      minutes.value = `${curminutesOS}/${curminutesI}`
    }
    //小时
    hourSocial.value = curtriggerHourPoint.length > 0 ? 'snapchat' : hourSocial.value
    if (hourSocial.value === 'snapchat') {
      hour.value = curtriggerHourPoint
        .sort(function (a, b) {
          return a - b
        })
        .join(',')
    }
    if (hourSocial.value === 'facebook') {
      hour.value = `${curhourCS}-${curhourCE}`
    }
    if (hourSocial.value === 'github') {
      hour.value = `${curhourOS}/${curhourI}`
    }
    //日
    daySocial.value = curtriggerDayPoint.length > 0 ? 'snapchat' : daySocial.value
    if (daySocial.value === 'snapchat') {
      day.value = curtriggerDayPoint
        .sort(function (a, b) {
          return a - b
        })
        .join(',')
    }
    if (daySocial.value === 'facebook') {
      day.value = `${curdayCS}-${curdayCE}`
    }
    if (daySocial.value === 'github') {
      day.value = `${curdayOS}/${curdayI}`
    }
    //月
    monthSocial.value = curtriggerMonthPoint.length > 0 ? 'snapchat' : monthSocial.value
    if (monthSocial.value === 'snapchat') {
      month.value = curtriggerMonthPoint
        .sort(function (a, b) {
          return a - b
        })
        .join(',')
    }
    if (monthSocial.value === 'facebook') {
      month.value = `${curmonthCS}-${curmonthCE}`
    }
    if (monthSocial.value === 'github') {
      month.value = `${curmonthOS}/${curmonthI}`
    }
    //周
    weekSocial.value = curtriggerWeekPoint.length > 0 ? 'snapchat' : weekSocial.value
    if (weekSocial.value === 'snapchat') {
      week.value = curtriggerWeekPoint
        .sort(function (a, b) {
          return a - b
        })
        .join(',')
    }
  },
  { immediate: true },
)

const takeCronExpression = computed(() => {
  const takeCron = [
    seconds.value,
    minutes.value,
    hour.value,
    day.value,
    month.value,
    week.value,
    year.value,
  ]
  return takeCron.join(' ')
})

const sConfStr = ref(null)

function handleClickCancel() {
  visible.value = false
}
function handleClickSubmit() {
  handleRunningTime().then(flag => {
    if (flag) {
      visible.value = false
      emit('select', takeCronExpression.value, sConfStr.value)
    } else {
      Message.error('请选择正确的Cron表达式')
    }
  })
}

async function handleRunningTime() {
  runLoading.value = true
  try {
    const { list, scheduleConfStr } = await runningTime(takeCronExpression.value)
    running.value = list
    sConfStr.value = scheduleConfStr
    runLoading.value = false
    return new Promise(resolve => resolve(true))
  } catch (error) {
    Message.error('请选择正确的Cron表达式')
    runLoading.value = false
    return new Promise(resolve => resolve(false))
  }
}

async function open(scheduleConf) {
  cronArray.value = scheduleConf.split(' ')
  await assignment(cronArray.value)
  visible.value = true
}

async function close() {
  await resetValue()
  visible.value = false
}

defineExpose({
  open,
})
</script>
<style scoped lang="stylus">
:deep(.bin-radio){
    display: block;
    margin: 15px 0px;
    width: 80px
    padding:0 5px;
}
:deep(.bin-checkbox-group){
    display: flex;
    flex-wrap: wrap;
    width: 600px;
}
.checkbox{
  :deep(.bin-button){
      padding: 0 5px;
  }
}
.runntingTime{
  width: 100%;
  height: 100px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  overflow-y: scroll;
  padding: 15px 15px;
}
.footer{
  margin:20px 0px;
  text-align:center;
  :deep(.bin-button){
    padding:0 40px;
  }
}
</style>
