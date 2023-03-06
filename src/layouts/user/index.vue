<template>
  <f-dropdown @command="handleClick" append-to-body>
    <div class="global-header-avatar-trigger">
      <img src="@/assets/images/avatar/avatar05.jpeg" class="avatar" alt="avatar" />
      <span v-if="userInfo">{{ userInfo.realName }}</span>
    </div>
    <template #dropdown>
      <f-dropdown-menu style="width: 120px">
        <f-dropdown-item name="userCenter">
          <div flex="cross:center">
            <f-icon name="user" size="16"></f-icon>
            <span class="ml-5">用户中心</span>
          </div>
        </f-dropdown-item>
        <f-dropdown-item name="logout">
          <div flex="cross:center">
            <f-icon name="logout" size="16"></f-icon>
            <span class="ml-5">注销登录</span>
          </div>
        </f-dropdown-item>
      </f-dropdown-menu>
    </template>
  </f-dropdown>
</template>

<script>
import { MessageBox } from 'f-ui-one'
import { useStore } from '@/store'
import { useRouter, useRoute } from 'vue-router'

export default {
  name: 'UserAvatar',
  setup() {
    const { userStore, storeToRefs } = useStore()
    const { userInfo } = storeToRefs(userStore)
    const router = useRouter()
    const route = useRoute()

    function handleClick(name) {
      if (name === 'userCenter') {
        router.push('/userCenter')
      }
      if (name === 'logout') {
        MessageBox.confirm({
          type: 'warning',
          title: '提示',
          message: '确认退出登录吗？',
        })
          .then(() => {
            userStore.clearToken()
            router.push(`/login?redirect=${route.fullPath}`)
          })
          .catch(e => {
            console.log(e)
          })
      }
    }

    return { userInfo, handleClick }
  },
}
</script>
