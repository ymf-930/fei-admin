<template>
  <f-menu-item :index="menu.name">
    <i v-if="menu.icon" :class="`f-iconfont f-icon-${menu.icon}`"></i>
    <template #title><span>{{ menu.title }}</span></template>
  </f-menu-item>
</template>

<script>
export default {
  name: 'MenuItem',
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
