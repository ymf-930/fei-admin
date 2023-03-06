<template>
  <f-button dashed type="primary" style="width: 100%;" @click="handleOpen">
    <i class="b-iconfont b-icon-reconciliation"></i>
    <slot>{{ title }}</slot>
  </f-button>
  <f-modal v-model="visible" :title="title||$slots.default" width="660px" append-to-body>
    <async-validator v-model="rules" :original-rules="oldRules"></async-validator>
    <template #footer>
      <f-button @click="visible = false">取 消</f-button>
      <f-button type="primary" @click="handleOK">确 定</f-button>
    </template>
  </f-modal>
</template>

<script>
import { ref } from 'vue'
import AsyncValidator from '@/components/Service/AsyncValidator/index.vue'

/**
 * 校验模块，弹窗配置
 */
export default {
  name: 'async-validator-modal',
  components: { AsyncValidator },
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '配置校验参数',
    },
    dataLength: Number, // 当前字段的数据长度
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const visible = ref(false)
    const rules = ref('')
    const oldRules = ref('')

    // 打开配置页面
    function handleOpen() {
      rules.value = props.modelValue
      oldRules.value = props.modelValue
      visible.value = true
    }

    function handleOK() {
      emit('update:modelValue', rules.value)
      emit('change', rules.value)
      visible.value = false
    }

    return {
      visible,
      rules,
      oldRules,
      handleOpen,
      handleOK,
    }
  },
}
</script>
