<template>
  <f-submenu :index="menu.name">
    <template #title>
      <i v-if="menu.icon" :class="`f-iconfont f-icon-${menu.icon}`"></i>
      <span>{{ menu.title }}</span>
    </template>
    <template v-for="(child,childIndex) in menu.children" :key="childIndex">
      <menu-item v-if="!child.children" :menu="child"></menu-item>
      <submenu v-else :menu="child"></submenu>
    </template>
  </f-submenu>
</template>

<script>
import MenuItem from '@/layouts/menus/menu-item.vue'

export default {
  name: 'Submenu',
  components: { MenuItem },
  props: {
    menu: {
      type: Object,
      required: false,
      default: () => {
      },
    },
  },
}
</script>
