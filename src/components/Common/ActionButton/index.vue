<template>
  <f-popover v-model:visible="visible" :width="popperWidth" :disabled="!confirm">
    <f-button v-bind="btnProps" @click="handleClick" :title="tooltip">
      <i v-if="icon" :class="`f-iconfont f-icon-${icon}`" :style="iconStyle"></i>
      <slot></slot>
    </f-button>
    <template #content>
      <p style="line-height: 22px; margin-bottom: 8px">
        <f-icon name="question-circle" size="16" color="#fa8c16"></f-icon>
        {{ message }}
      </p>
      <div style="text-align: right; margin: 0">
        <f-button size="mini" type="text" @click="handleCancel">取消</f-button>
        <f-button type="primary" size="mini" @click="handleOk">确认</f-button>
      </div>
    </template>
  </f-popover>
</template>

<script>
export default {
  name: 'ActionButton',
  props: {
    buttonProps: {
      type: Object,
    },
    popperWidth: {
      type: Number,
      default: 260,
    },
    message: {
      type: String,
      default: '确定删除本条数据吗？',
    },
    disabled: Boolean,
    confirm: Boolean,
    tooltip: String,
    icon: String, // 按钮的icon
    type: String, // 按钮的样式
    color: String, // 图标按钮时的颜色
    isIcon: Boolean, // 仅为图标按钮
    loading: Boolean,
    iconStyle: {
      type: Object,
      default: () => ({
        fontSize: '18px',
      }),
    },
  },
  data() {
    return {
      visible: false,
    }
  },
  emits: ['cancel', 'click'],
  computed: {
    btnProps() {
      return {
        type: this.type,
        textColor: this.color,
        disabled: this.disabled,
        loading: this.loading,
        ...this.buttonProps,
      }
    },
  },
  methods: {
    handleCancel() {
      this.visible = false
      this.$emit('cancel')
    },
    handleOk() {
      this.visible = false
      this.$emit('click')
    },
    handleClick() {
      if (this.confirm) {
        return
      }
      this.$emit('click')
    },
  },
}
</script>
