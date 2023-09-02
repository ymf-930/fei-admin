<template>
  <div class="ef-node-form">
    <div class="ef-node-form-header">编辑</div>

    <div class="ef-node-form-body">
      <div class="empty" v-show="isEmpty">暂未选择元素</div>
      <f-form
        :model="state.node"
        ref="dataForm"
        label-width="80px"
        v-show="state.type === 'node' && state.node.type"
      >
        <f-form-item label="类型">
          <f-input v-model="state.node.type" :disabled="true"></f-input>
        </f-form-item>
        <f-form-item label="名称">
          <f-input v-model="state.node.name" clearable></f-input>
        </f-form-item>
        <f-form-item label="left坐标">
          <f-input v-model="state.node.left" disabled></f-input>
        </f-form-item>
        <f-form-item label="top坐标">
          <f-input v-model="state.node.top" disabled></f-input>
        </f-form-item>
        <f-form-item label="ico图标" v-if="showIco">
          <f-icon-select v-model="state.node.ico"></f-icon-select>
        </f-form-item>
        <f-form-item label="状态" v-if="showState">
          <f-select v-model="state.node.state" placeholder="请选择" clearable>
            <f-option
              v-for="item in stateList"
              :key="item.state"
              :label="item.label"
              :value="item.state"
            >
              <span class="mr-8">
                <i class="f-iconfont f-icon-check-circle" v-show="item.state === 'success'"></i>
                <i class="f-iconfont f-icon-error" v-show="item.state === 'error'"></i>
                <i class="f-iconfont f-icon-warning-circle" v-show="item.state === 'warning'"></i>
                <i class="f-iconfont f-icon-loading" v-show="item.state === 'running'"></i>
              </span>
              <span>{{ item.label }}</span>
            </f-option>
          </f-select>
        </f-form-item>
        <f-form-item>
          <f-button icon="close" size='small' @click="cancel">取消</f-button>
          <f-button type="primary" icon="check" size='small' @click="save">保存</f-button>
        </f-form-item>
      </f-form>

      <f-form :model="state.line" ref="dataForm" label-width="80px" v-show="state.type === 'line'">
        <f-form-item label="类型">
          <f-input v-model="state.type" :disabled="true"></f-input>
        </f-form-item>
        <f-form-item label="条件">
          <f-input v-model="state.line.label" clearable></f-input>
        </f-form-item>
        <f-form-item>
          <f-button icon="close" @click="cancel">取消</f-button>
          <f-button type="primary" icon="check" @click="saveLine">保存</f-button>
        </f-form-item>
      </f-form>
      <f-ace-editor :model-value="JSON.stringify(state, null, 2)" height="200px" />
    </div>
  </div>
</template>

<script setup>
import { deepCopy } from '@/utils/util'
import { computed, reactive } from 'vue'

const emit = defineEmits(['setLineLabel', 'saveNode', 'cancelSelect'])
defineProps({
  showIco: {
    type: Boolean,
    default: true,
  },
  showState: {
    type: Boolean,
    default: true,
  },
})

const stateList = [
  {
    state: 'success',
    label: '成功',
  },
  {
    state: 'warning',
    label: '警告',
  },
  {
    state: 'error',
    label: '错误',
  },
  {
    state: 'running',
    label: '运行中',
  },
]

const state = reactive({
  type: 'node', // node 或 line
  node: {},
  line: {},
  data: {},
})

const isEmpty = computed(() => {
  return Object.keys(state.node).length === 0 && Object.keys(state.line).length === 0
})

// 节点初始化
function nodeInit(nodeData, id) {
  state.type = 'node'
  state.data = nodeData
  nodeData.nodeList.forEach(node => {
    if (node.id === id) {
      state.node = deepCopy(node)
    }
  })
}

// 线内容初始化
function lineInit(nodeData, line) {
  state.type = 'line'
  state.data = nodeData
  state.line = line
}

// 保存连线
function saveLine() {
  emit('setLineLabel', state.line)
}

// 保存节点
function save() {
  state.data.nodeList.forEach(node => {
    if (node.id === state.node.id) {
      node.name = state.node.name
      node.left = state.node.left
      node.top = state.node.top
      node.ico = state.node.ico
      node.state = state.node.state
      emit('saveNode', node)
    }
  })
}

function cancel() {
  state.type = 'node'
  state.node = {}
  state.line = {}
  state.data = {}
  emit('cancelSelect')
}

defineExpose({
  nodeInit,
  lineInit,
})
</script>

<style scoped lang="stylus">
.ef-node-form {
  height: 100%;
}
.ef-node-form-header {
  height: 32px;
  border-bottom: 1px solid #dce3e8;
  background: #F1F3F4;
  color: #000;
  line-height: 32px;
  padding-left: 12px;
  font-size: 14px;
}

.ef-node-form-body {
  height: calc(100% - 32px);
  padding: 10px;
  overflow: auto;
  .empty{
    text-align:center;
    color: #999;
    padding: 20px;
  }
}
</style>
