<template>
  <f-tooltip :content="tooltip" :disabled="!tooltip">
    <div class="global-header-trigger" @click="$emit('click')">
      <i :class="`f-iconfont f-icon-${icon}`"
         :style="{transform: `rotate(${rotate}deg)`,fontSize:size,height:size}"
      ></i>
    </div>
  </f-tooltip>
</template>

<script>
export default {
  name: 'HeaderTrigger',
  props: {
    icon: {
      type: String
    },
    rotate: {
      type: Number
    },
    size: {
      type: String
    },
    tooltip: String
  },
  emits: ['click']
}
</script>
