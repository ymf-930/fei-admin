<template>
  <page-container desc="通用异常处理，可以根据错误列表进行触发，也可以自定义错误跳转" bg>
    <f-space>
      <router-link :to="{ path: '403' }">
        <f-button background>触发403</f-button>
      </router-link>
      <router-link :to="{ path: '404' }">
        <f-button background>触发404</f-button>
      </router-link>
      <router-link :to="{ path: '500' }">
        <f-button background>触发500</f-button>
      </router-link>
      <router-link :to="{ path: '500', query: { message: '接口调用出错了！' } }">
        <f-button background>触发500 带消息</f-button>
      </router-link>
      <router-link :to="{ path: 'error', query: { message: '我是错误消息！' } }">
        <f-button background>通用错误页面</f-button>
      </router-link>
      <router-link :to="{ path: 'error', query: { status: '401', message: '调用失败，请检查请求接口！' } }">
        <f-button background>通用错误页面附加状态码</f-button>
      </router-link>
      <router-link :to="{ path: 'sss' }">
        <f-button background>随机不存在菜单路由</f-button>
      </router-link>
    </f-space>
  </page-container>
</template>

<script>
export default {
  name: 'ErrorDemo',
}
</script>
