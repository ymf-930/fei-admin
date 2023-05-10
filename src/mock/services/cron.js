// 基础列表
import Mock from 'mockjs'
import { builder } from '@/mock/util'
import cron from '@/mock/list/cron'

const getCron = (options) => {
  console.log(options)
  if (options) {
    return builder(cron)
  }
  return builder(false, '错误', '401')
}
Mock.mock(/\/task\/cron/, 'post', getCron)
