<template>
  <f-collapse-wrap :title="title" shadow="none">
    <template #right>
      <div flex="cross:center">
        <f-button
          v-if="sourceName"
          :type="sourceType === 'source' ? 'primary' : 'success'"
          style="
            margin-right: 4px;
            width: 130px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: inline-block;
          "
          :title="sourceName"
          size="small"
          plain
        >
          {{ sourceName }}
        </f-button>
        <f-icon name="setting" type="button" @click="() => emit('setting')"></f-icon>
      </div>
    </template>
    <div class="list-wrap">
      <div class="pt-16 pl-8 pr-8 pb-16" flex>
        <f-icon name="menu"></f-icon>
        <a style="color: #8a92a6" class="table-name ml-8">
          {{ fieldTitle }}
        </a>
      </div>
      <div class="list-inner">
        <f-scrollbar>
          <div class="pl-8 pr-8" allowdrop>
            <transition-group tag="div" name="fade" v-if="sourceType === 'source'">
              <FieldNode
                v-for="node in list"
                :key="node.name"
                :node="node"
                :required="node.required"
                :type="sourceType === 'source' ? 'primary' : 'success'"
                :icon="sourceType === 'source' ? 'send' : 'aim'"
                :draggable="sourceType === 'source'"
                @dragstart="dragStart($event, node)"
              />
            </transition-group>
            <!-- 只有目标区域才能够放置，并且需要监听实现效果 -->
            <transition-group tag="div" name="fade" v-if="sourceType === 'target'">
              <field-node
                v-for="node in list"
                :key="node.name"
                :node="node"
                :required="node.required"
                :type="sourceType === 'source' ? 'primary' : 'success'"
                :icon="sourceType === 'source' ? 'send' : 'aim'"
                :draggable="true"
                :sourceType="sourceType"
                @singleFieldMapping="() => emit('singleFieldMapp', node)"
                @dragstart="dragStartDest($event, node)"
                @dragover.prevent
                @drop="nodeDrop($event, node)"
                @dragenter="dragEnter($event, node)"
                @dragleave="dragLeave($event, node)"
              />
            </transition-group>
          </div>

          <div v-if="list.length === 0 && itemMaps.length === 0" class="list-empty">
            <f-empty>{{ noDataWarn }}</f-empty>
          </div>
        </f-scrollbar>
      </div>
      <p class="table-bottom">
        <action-button
          v-if="sourceType === 'source'"
          type="text"
          icon="delete"
          color="danger"
          confirm
          message="清空信息项会重置已配置的内容！"
          @click="() => emit('clear')"
        ></action-button>
        <action-button
          v-if="sourceType === 'target'"
          type="text"
          icon="delete"
          color="danger"
          confirm
          message="清空信息项会重置已配置的内容！"
          @click="() => emit('clear')"
        ></action-button>
      </p>
    </div>
  </f-collapse-wrap>
</template>

<script setup>
import ActionButton from '@/components/Common/ActionButton/index.vue'
import FieldNode from '@/views/demo/pages/form/components/field-node.vue'

const emit = defineEmits(['setting', 'node-drop', 'clear', 'singleFieldMapp'])
defineProps({
  title: {
    type: String,
    default: '标题',
  },
  sourceName: {
    type: String,
  },
  sourceType: {
    type: String,
    default: 'source',
  },
  list: {
    type: Array,
    default: () => [],
  },
  // 禁用的字段列
  disabledKeys: {
    type: Array,
    default: () => [],
  },
  fieldTitle: {
    type: String,
    default: '',
  },
  noDataWarn: {
    type: String,
    default: '请先配置选择数据源',
  },
  itemMaps: {
    type: Array,
    default: () => [],
  },
})

function dragStart(evt, item) {
  evt.dataTransfer.setData('node', JSON.stringify(item))
}

function dragStartDest(evt, item) {
  evt.dataTransfer.setData('destnode', JSON.stringify(item))
}

// 拖拽放置
function nodeDrop(ev, dest) {
  ev.preventDefault()
  let json = ev.dataTransfer.getData('node')
  let source = {}
  try {
    source = JSON.parse(json)
  } catch (error) {
    console.log('drag data is not right json!')
    return
  }
  if (ev.target.getAttribute('allowdrop') !== null) {
    ev.target.toggleAttribute('over', false)
  }
  emit('node-drop', { source, dest, ev })
}

let lastDrop = null
function dragEnter(ev) {
  if (lastDrop) {
    lastDrop.toggleAttribute('over', false)
  }
  const dropbox = ev.target.closest('[allowdrop]') // 获取最近的放置目标
  if (dropbox) {
    dropbox.toggleAttribute('over', true)
    lastDrop = dropbox
  }
}

function dragLeave(ev) {
  if (ev.target.getAttribute('allowdrop') !== null) {
    ev.target.toggleAttribute('over', false)
  }
}
</script>

<style lang="stylus" scoped>
.tag-box{
  line-height: 20px;
  padding: 0 5px;
  max-width: 135px;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  cursor: text;
}
.tag-sucess{
  color: #00c181;
  border: 1px solid #ccf7e9;
  background-color: #f2fdf9;
}
.tag-primary{
  color: #3366ff;
  border: 1px solid #d6e0ff;
  background-color: #f5f7ff;
}
.list-wrap {
  .table-name{
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    cursor: text;
  }
  .list-inner {
    width: 100%;
    height:480px;
    overflow-x:hidden;
    :deep(.fei-scrollbar__bar){
      &.is-horizontal{
        display: none;
      }
    }
  }
  /* 1. 声明过渡效果 */
  .fade-move,
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
  }

  /* 2. 声明进入和离开的状态 */
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: scaleY(0.01) translate(30px, 0);
  }

  /* 3. 确保离开的项目被移除出了布局流
        以便正确地计算移动时的动画效果。 */
  .fade-leave-active {
    position: absolute;
  }
  .table-bottom {
    padding: 10px;
    text-align: right;
    border-top: 1px solid #eeeeee;
  }
}
</style>
