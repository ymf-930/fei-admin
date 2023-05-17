import { fetchData } from '../request'

// 获取函数信息
export function getMethods(methodType) {
  return fetchData({
    url: '/dxp-web/task/getMethods',
    method: 'post',
    data: { methodType },
  })
}

