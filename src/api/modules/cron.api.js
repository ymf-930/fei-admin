import { fetchData } from '../request'

// 获取基础部门树
export function runningTime(cron) {
  return fetchData({
    url: '/task/cron',
    method: 'post',
    data: { cron }
  })
}
