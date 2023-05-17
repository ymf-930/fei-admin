<template>
  <div ref="nodeRef" :class="nodeContainerClass" allowdrop>
    <!-- 最左侧的那条竖线 -->
    <!-- <div class="ef-node-left" :class="type"></div> -->
    <div class="ef-node-left" :class="'info'"></div>
    <!-- 节点类型的图标 -->
    <div class="ef-node-left-ico flow-node-drag">
      <i :class="`f-iconfont f-icon-${icon}`"></i>
    </div>
    <!-- 节点名称 -->
    <div class="ef-node-text node-edit" :title="node.name">
      <f-tag
        :type="required ? 'danger' : 'default'"
        dot
        :title="required ? '必填项' : '非必填'"
      ></f-tag>
      <f-input :model-value="node.name" size="small" readonly v-if="sourceType === 'target'">
        <template #append>
          <f-button size="small" type="text" title="单字段映射" @click="emit('singleFieldMapping')">
            映射
          </f-button>
        </template>
      </f-input>
      <f-input :model-value="node.name" size="small" readonly v-else></f-input>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const emit = defineEmits(['singleFieldMapping'])
defineProps({
  node: {
    type: Object,
    default: () => ({}),
  },
  icon: {
    type: String,
    default: 'index',
  },
  type: {
    type: String,
    default: 'primary',
  },
  required: {
    type: Boolean,
  },
  sourceType: {
    type: String,
    default: 'source',
  },
})
const nodeRef = ref(null)

const nodeContainerClass = computed(() => ['ef-node-container', `el-node-info`, 'info'])
</script>

<style lang="stylus" scoped>
/*节点的最外层容器*/
.ef-node-container {
  position: relative;
  display: flex;
  width:100%;
  height: 32px;
  border: 1px solid #E0E3E7;
  border-radius: 5px;
  background-color: #fff;
  margin-bottom: 8px;
  &:hover {
    cursor: move;
    border: 1px dashed #1879FF;
    &.primary {
      border-color: var(--fei-color-primary);
    }
    &.success {
      border-color: var(--fei-color-success);
    }
    &.warning {
      border-color: var(--fei-color-warning);
    }
    &.danger {
      border-color: var(--fei-color-danger);
    }
    &.info {
      border-color: #8A92A6;
    }
  }
  &.ef-drop-hover {
    border: 1px dashed #1879FF;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    background: #fff !important;
    background-image: linear-gradient(#dcf3d1, #f6fcf4, #dcf3d1) !important;
    border: 1px dashed var(--fei-color-success);
    pointer-events: none;
    opacity: 0;
    transition: opacity .2s;
  }

  &[allowdrop][over]{
    border-color: transparent;
    &:after {
      opacity: 0.8;
    }
  }
  &[allowdrop][over]>*:not([allowdrop]){
    pointer-events: none;
  }
}

/*节点左侧的竖线*/
.ef-node-left {
  width: 4px;
  border-radius: 4px 0 0 4px;
  &.primary {
    background-color: var(--fei-color-primary);
  }
  &.success {
    background-color: var(--fei-color-success);
  }
  &.warning {
    background-color: var(--fei-color-warning);
  }
  &.danger {
    background-color: var(--fei-color-danger);
  }
  &.info {
    background-color: #8A92A6;
  }
}

/*节点左侧的图标*/
.ef-node-left-ico {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-right: 1px solid #E0E3E7;
  > i {
    pointer-events: none;
    font-size: 18px;
  }
}

/*节点显示的文字*/
.ef-node-text {
  color: #565758;
  font-size: 12px;
  line-height: 30px;
  flex: 1;
  padding: 0 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.node-edit{
  :deep(.fei-input-wrapper){
    position:absolute;
    width:200px;
    .fei-input{
      position:none;
      border:none;
    }
  }
  :deep(.fei-tag){
    padding-right: 0px;
    height: 30px;
    line-height: 24px;
    margin-right: -5px;
  }
  :deep(.fei-button--text){
    height:30px;
    margin-right:-10px
  }
}
</style>
