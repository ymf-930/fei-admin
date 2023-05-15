import { fetchData } from '../request'


export const SYNC_STRATEGY = {
  I: 'increment',
  A: 'all',
  MAPPING: {
    increment: '增量',
    all: '全量',
  },
}

// 获取函数信息
export function getMethods(methodType) {
  return fetchData({
    url: '/dxp-web/task/getMethods',
    method: 'post',
    data: { methodType },
  })
}

