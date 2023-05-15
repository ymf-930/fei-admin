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

export function getTables(query) {
  return fetchData({
    url: '/metadata/meta/link/getTables',
    method: 'post',
    data: query,
  })
}

export function getMetaStorageList(query) {
  return fetchData({
    url: '/metadata/meta/storage/search',
    method: 'post',
    data: query,
  })
}

// 获取函数信息
export function getMethods(methodType) {
  return fetchData({
    url: '/dxp-web/task/getMethods',
    method: 'post',
    data: { methodType },
  })
}

// 获取表信息字段
export function getTableItems(dsid, tableName) {
  return fetchData({
    url: '/metadata/meta/link/getColumns',
    method: 'post',
    data: { dsid, tableName },
  })
}

// 元数据详情
export function getMetaStorageDetail(metaKey) {
  return fetchData({
    url: '/metadata/meta/storage/detailByKey',
    method: 'post',
    data: { metaKey },
  })
}
