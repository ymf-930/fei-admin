<template>
  <div class="func-body-editor">
    <div class="func func-top">
      <f-tag type="primary" :tag-style="{ fontSize: '14px' }">
        function(
        <span class="params">{{ paramsStr }}</span>
        ) {
      </f-tag>
    </div>
    <div>
      <f-ace-editor lang="javascript" :height="height" :model-value="modelValue" @change="changeValue"></f-ace-editor>
    </div>
    <div class="func func-bottom">
      <f-tag type="primary" :tag-style="{ fontSize: '14px' }">}</f-tag>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'FuncBodyEditor',
  props: {
    augments: {
      type: Array,
      default: () => [],
    },
    modelValue: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '120',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const paramsStr = computed(() => props.augments.join(' , '))

    function changeValue(val) {
      emit('update:modelValue', val)
    }

    function getFunction() {
      return new Function(...props.augments, props.modelValue)
    }

    return {
      paramsStr,
      changeValue,
      getFunction,
    }
  },
}
</script>

<style scoped lang="stylus">
.func-body-editor {
  .func {
    padding: 2px 0;
    .params {
      color: var(--fei-color-warning);
    }
  }
  .func-tip {
    color: var(--fei-color-danger);
  }
}
</style>
