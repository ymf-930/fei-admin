import { ref } from 'vue'

export const CRON_TAB = [
  { key: 'tab0', title: '秒' },
  { key: 'tab1', title: '分钟' },
  { key: 'tab2', title: '小时' },
  { key: 'tab3', title: '日' },
  { key: 'tab4', title: '月' },
  { key: 'tab5', title: '周' },
  { key: 'tab6', title: '年' },
]
export const secondsSocial = ref('twitter')
export const minutesSocial = ref('twitter')
export const hourSocial = ref('twitter')
export const daySocial = ref('twitter')
export const monthSocial = ref('twitter')
export const weekSocial = ref('notSpecified')
export const yearSocial = ref('twitter')

export const activeTab = ref('tab0')

export const seconds = ref('*')
export const secondsCycleStart = ref(0)
export const secondsCycleEnd = ref(1)
export const secondsOnceStart = ref(0)
export const secondsInterval = ref(1)
export const triggerSecondPoint = ref([])

export const minutes = ref('*')
export const minutesCycleStart = ref(0)
export const minutesCycleEnd = ref(1)
export const minutesOnceStart = ref(0)
export const minutesInterval = ref(1)
export const triggerMinutesPoint = ref([])

export const hour = ref('*')
export const hourCycleStart = ref(0)
export const hourCycleEnd = ref(1)
export const hourOnceStart = ref(0)
export const hourInterval = ref(1)
export const triggerHourPoint = ref([])

export const day = ref('*')
export const dayCycleStart = ref(1)
export const dayCycleEnd = ref(2)
export const dayOnceStart = ref(1)
export const dayInterval = ref(1)
export const triggerDayPoint = ref([])

export const month = ref('*')
export const monthCycleStart = ref(1)
export const monthCycleEnd = ref(2)
export const monthOnceStart = ref(1)
export const monthInterval = ref(1)
export const triggerMonthPoint = ref([])

export const week = ref('?')
export const triggerWeekPoint = ref([])

export const TRIGGERWEEK = [
  { key: '2', label: '周一' },
  { key: '3', label: '周二' },
  { key: '4', label: '周三' },
  { key: '5', label: '周四' },
  { key: '6', label: '周五' },
  { key: '7', label: '周六' },
  { key: '1', label: '周日' },
]

export const year = ref('*')

export function handleChangeSeconds(label) {
  switch (label) {
    case 'twitter':
      seconds.value = '*'
      triggerSecondPoint.value = []
      break
    case 'facebook':
      seconds.value = `${secondsCycleStart.value}-${secondsCycleEnd.value}`
      triggerSecondPoint.value = []
      break
    case 'github':
      seconds.value = `${secondsOnceStart.value}/${secondsInterval.value}`
      triggerSecondPoint.value = []
      break
    case 'snapchat':
      seconds.value = triggerSecondPoint.value
        .sort(function (a, b) {
          return a - b
        })
        .join(',')
      break
  }
}
export function handleChangeMinutes(label) {
  switch (label) {
    case 'twitter':
      minutes.value = '*'
      triggerMinutesPoint.value = []
      break
    case 'facebook':
      minutes.value = `${minutesCycleStart.value}-${minutesCycleEnd.value}`
      triggerMinutesPoint.value = []
      break
    case 'github':
      minutes.value = `${minutesOnceStart.value}/${minutesInterval.value}`
      triggerMinutesPoint.value = []
      break
    case 'snapchat':
      minutes.value = triggerMinutesPoint.value
        .sort(function (a, b) {
          return a - b
        })
        .join(',')
      break
  }
}
export function handleChangeHour(label) {
  switch (label) {
    case 'twitter':
      hour.value = '*'
      triggerHourPoint.value = []
      break
    case 'facebook':
      hour.value = `${hourCycleStart.value}-${hourCycleEnd.value}`
      triggerHourPoint.value = []
      break
    case 'github':
      hour.value = `${hourOnceStart.value}/${hourInterval.value}`
      triggerHourPoint.value = []
      break
    case 'snapchat':
      hour.value = triggerHourPoint.value
        .sort(function (a, b) {
          return a - b
        })
        .join(',')
      break
  }
}

export function handleChangeDay(label) {
  switch (label) {
    case 'twitter':
      day.value = '*'
      triggerDayPoint.value = []
      break
    case 'notSpecified':
      day.value = '?'
      triggerDayPoint.value = []
      break
    case 'facebook':
      day.value = `${dayCycleStart.value}-${dayCycleEnd.value}`
      triggerDayPoint.value = []
      break
    case 'github':
      day.value = `${dayOnceStart.value}/${dayInterval.value}`
      triggerDayPoint.value = []
      break
    case 'lastDayOfMonth':
      day.value = 'L'
      triggerDayPoint.value = []
      break
    case 'snapchat':
      day.value = triggerDayPoint.value
        .sort(function (a, b) {
          return a - b
        })
        .join(',')
      break
  }
}

export function handleChangeMonth(label) {
  switch (label) {
    case 'twitter':
      month.value = '*'
      triggerMonthPoint.value = []
      break
    case 'facebook':
      month.value = `${monthCycleStart.value}-${monthCycleEnd.value}`
      triggerMonthPoint.value = []
      break
    case 'github':
      month.value = `${monthOnceStart.value}/${monthInterval.value}`
      triggerMonthPoint.value = []
      break
    case 'snapchat':
      month.value = triggerMonthPoint.value
        .sort(function (a, b) {
          return a - b
        })
        .join(',')
      break
  }
}

export function handleChangeWeek(label) {
  switch (label) {
    case 'notSpecified':
      week.value = '?'
      triggerWeekPoint.value = []
      break
    case 'snapchat':
      week.value = triggerWeekPoint.value
        .sort(function (a, b) {
          return a - b
        })
        .join(',')
      break
  }
}

export function handleChangeYear(label) {
  switch (label) {
    case 'notSpecified':
      year.value = ''
      break
    case 'twitter':
      year.value = '*'
      break
  }
}

export function getValue(arr) {
  let a = ''
  if (!arr) return
  if (arr.indexOf('/') > -1) {
    a = 'github'
  } else if (arr.indexOf('-') > -1) {
    a = 'facebook'
  } else if (arr.indexOf('?') > -1) {
    a = 'notSpecified'
  } else if (arr.indexOf('*') > -1) {
    a = 'twitter'
  } else if (arr.indexOf('L') > -1) {
    a = 'lastDayOfMonth'
  } else if (arr.indexOf(',') > -1) {
    a = 'snapchat'
  } else {
    a = 'snapchat'
  }
  return a
}

export function handleChange(val, type) {
  switch (type) {
    case 'seconds':
      if (val + 1 > secondsCycleEnd.value) {
        secondsCycleEnd.value = val + 1
      }
      break
    case 'minutes':
      if (val + 1 > minutesCycleEnd.value) {
        minutesCycleEnd.value = val + 1
      }
      break
    case 'hour':
      if (val + 1 > hourCycleEnd.value) {
        hourCycleEnd.value = val + 1
      }
      break
    case 'day':
      if (val + 1 > dayCycleEnd.value) {
        dayCycleEnd.value = val + 1
      }
      break
    case 'month':
      if (val + 1 > monthCycleEnd.value) {
        monthCycleEnd.value = val + 1
      }
      break
  }
}

export function getrealValue(
  social,
  arr,
  seconds,
  triggerPoint,
  cycleStart,
  cycleEnd,
  onceStart,
  interval,
) {
  let arrReplace = []
  seconds = arr
  if (social === 'github') {
    arrReplace = arr.split('/')
    onceStart = arrReplace[0] ? Number(arrReplace[0]) : arrReplace[0]
    interval = arrReplace[1] ? Number(arrReplace[1]) : arrReplace[1]
  }
  if (social === 'facebook') {
    arrReplace = arr.split('-')
    cycleStart = arrReplace[0] ? Number(arrReplace[0]) : arrReplace[0]
    cycleEnd = arrReplace[1] ? Number(arrReplace[1]) : arrReplace[1]
  }
  if (social === 'snapchat') {
    arrReplace = arr.split(',')
    triggerPoint = [...arrReplace]
  }

  return [seconds, triggerPoint, cycleStart, cycleEnd, onceStart, interval]
}

export function assignment(cronArray) {
  secondsSocial.value = getValue(cronArray[0])
  minutesSocial.value = getValue(cronArray[1])
  hourSocial.value = getValue(cronArray[2])
  daySocial.value = getValue(cronArray[3])
  monthSocial.value = getValue(cronArray[4])
  weekSocial.value = getValue(cronArray[5])
  yearSocial.value = getValue(cronArray[6]) ? getValue(cronArray[6]) : 'notSpecified'

  let secondsArray = getrealValue(
    secondsSocial.value,
    cronArray[0],
    seconds.value,
    triggerSecondPoint.value,
    secondsCycleStart.value,
    secondsCycleEnd.value,
    secondsOnceStart.value,
    secondsInterval.value,
  )
  let minutesArray = getrealValue(
    minutesSocial.value,
    cronArray[1],
    minutes.value,
    triggerMinutesPoint.value,
    minutesCycleStart.value,
    minutesCycleEnd.value,
    minutesOnceStart.value,
    minutesInterval.value,
  )
  let hourArray = getrealValue(
    hourSocial.value,
    cronArray[2],
    hour.value,
    triggerHourPoint.value,
    hourCycleStart.value,
    hourCycleEnd.value,
    hourOnceStart.value,
    hourInterval.value,
  )
  let dayArray = getrealValue(
    daySocial.value,
    cronArray[3],
    day.value,
    triggerDayPoint.value,
    dayCycleStart.value,
    dayCycleEnd.value,
    dayOnceStart.value,
    dayInterval.value,
  )
  let monthArray = getrealValue(
    monthSocial.value,
    cronArray[4],
    month.value,
    triggerMonthPoint.value,
    monthCycleStart.value,
    monthCycleEnd.value,
    monthOnceStart.value,
    monthInterval.value,
  )
  let weekArray = getrealValue(
    weekSocial.value,
    cronArray[5],
    week.value,
    triggerWeekPoint.value,
    '',
    '',
    '',
    '',
  )
  let yearArray = getrealValue(yearSocial.value, cronArray[6], year.value)
  seconds.value = secondsArray[0]
  triggerSecondPoint.value = secondsArray[1]
  secondsCycleStart.value = secondsArray[2]
  secondsCycleEnd.value = secondsArray[3]
  secondsOnceStart.value = secondsArray[4]
  secondsInterval.value = secondsArray[5]

  minutes.value = minutesArray[0]
  triggerMinutesPoint.value = minutesArray[1]
  minutesCycleStart.value = minutesArray[2]
  minutesCycleEnd.value = minutesArray[3]
  minutesOnceStart.value = minutesArray[4]
  minutesInterval.value = minutesArray[5]

  hour.value = hourArray[0]
  triggerHourPoint.value = hourArray[1]
  hourCycleStart.value = hourArray[2]
  hourCycleEnd.value = hourArray[3]
  hourOnceStart.value = hourArray[4]
  hourInterval.value = hourArray[5]

  day.value = dayArray[0]
  triggerDayPoint.value = dayArray[1]
  dayCycleStart.value = dayArray[2]
  dayCycleEnd.value = dayArray[3]
  dayOnceStart.value = dayArray[4]
  dayInterval.value = dayArray[5]

  month.value = monthArray[0]
  triggerMonthPoint.value = monthArray[1]
  monthCycleStart.value = monthArray[2]
  monthCycleEnd.value = monthArray[3]
  monthOnceStart.value = monthArray[4]
  monthInterval.value = monthArray[5]

  week.value = weekArray[0]
  triggerWeekPoint.value = weekArray[1]

  year.value = yearArray[0]
}

export function resetValue() {
  secondsSocial.value = 'twitter'
  minutesSocial.value = 'twitter'
  hourSocial.value = 'twitter'
  daySocial.value = 'twitter'
  monthSocial.value = 'twitter'
  weekSocial.value = 'notSpecified'
  yearSocial.value = 'twitter'
  activeTab.value = 'tab0'

  seconds.value = '*' //秒
  secondsCycleStart.value = 0
  secondsCycleEnd.value = 1
  secondsOnceStart.value = 0
  secondsInterval.value = 1
  triggerSecondPoint.value = []

  minutes.value = '*' //分
  minutesCycleStart.value = 0
  minutesCycleEnd.value = 1
  minutesOnceStart.value = 0
  minutesInterval.value = 1
  triggerMinutesPoint.value = []

  hour.value = '*' //小时
  hourCycleStart.value = 0
  hourCycleEnd.value = 1
  hourOnceStart.value = 0
  hourInterval.value = 1
  triggerHourPoint.value = []

  day.value = '*' //天
  dayCycleStart.value = 1
  dayCycleEnd.value = 2
  dayOnceStart.value = 1
  dayInterval.value = 1
  triggerDayPoint.value = []

  month.value = '*' //月
  monthCycleStart.value = 1
  monthCycleEnd.value = 2
  monthOnceStart.value = 1
  monthInterval.value = 1
  triggerMonthPoint.value = []

  week.value = '?'
  triggerWeekPoint.value = []

  year.value = '*'
}
