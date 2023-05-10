import { fetchData } from '../request'


export const SYNC_STRATEGY = {
  I: 'increment',
  A: 'all',
  MAPPING: {
    increment: '增量',
    all: '全量',
  },
}

// 获取基础部门树
export function getDepartTree() {
  return fetchData({
    url: '/depart/tree',
    method: 'get',
  })
}
