<template>
  <div class="base-tree" :style="{ width }" ref="treeEl">
    <div class="base-tree-header">
      <span class="base-title">{{ treeTitle }}</span>
      <div class="base-ctrl">
        <div class="search">
          <f-input v-if="showTopSearch" size="small" search v-model="query" placeholder="搜索" @search="handleFilter" />
          <slot></slot>
        </div>
        <div class="ctrl">
          <f-dropdown append-to-body placement="bottom-start" @command="handleAction">
            <i class="f-iconfont f-icon-ellipsis"></i>
            <template #dropdown>
              <f-dropdown-menu>
                <f-dropdown-item name="expandAll">展开全部</f-dropdown-item>
                <f-dropdown-item name="collapseAll">收起全部</f-dropdown-item>
                <template v-if="showCheckbox">
                  <f-dropdown-item name="checkAll" divided>选择全部</f-dropdown-item>
                  <f-dropdown-item name="uncheckAll">取消全选</f-dropdown-item>
                </template>
                <slot name="ctrl"></slot>
              </f-dropdown-menu>
            </template>
          </f-dropdown>
        </div>
      </div>
    </div>
    <div
      class="tree-wrap"
      :class="{ 'has-bottom': $slots.bottom }"
      :style="{ minHeight, maxHeight }"
      v-loading="loading"
    >
      <div class="tree-inner" v-if="$slots.inner">
        <slot name="inner"></slot>
      </div>
      <div class="inner-search" v-if="showInnerSearch">
        <f-input size="small" search v-model="query" placeholder="搜索" @search="handleFilter" />
      </div>
      <div class="mr-5">
        <f-tree
          :data="treeData"
          :title-key="titleKey"
          :show-checkbox="showCheckbox"
          :filter-node-method="filterNode"
          :render="render"
          :lock-select="lock"
          :default-expand="defaultExpand"
          ref="treeRef"
          @select-change="handleSelect"
          @check-change="handleChecked"
        ></f-tree>
      </div>
    </div>
    <div class="tree-bottom" v-if="$slots.bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
import useTree from '@/hooks/service/useTree'
import { computed, nextTick, ref, watch } from 'vue'
import { typeOf } from '@/utils/util'

export default {
  name: 'BaseTree',
  props: {
    width: {
      type: String,
      default: '100%',
    },
    minHeight: {
      type: String,
      default: '300px',
    },
    maxHeight: {
      type: String,
      default: '700px',
    },
    treeTitle: {
      type: String,
    },
    filterPosition: {
      type: String,
      default: 'top',
    },
    lock: Boolean,
    fetch: {
      type: [Function, Array],
    },
    params: {
      type: Object,
    },
    render: Function,
    showCheckbox: {
      type: Boolean,
    },
    checkStrictly: {
      type: Boolean,
    },
    showFilter: {
      type: Boolean,
    },
    titleKey: {
      type: String,
      default: 'text',
    },
    defaultExpand: {
      type: Boolean,
    },
    expandKeys: {
      type: Array,
      default: () => [],
    },
    selectedKeys: {
      type: Array,
      default: () => [],
    },
  },
  emits: ['select-change', 'check-change', 'command', 'init-success'],
  setup(props, ctx) {
    const treeEl = ref(null)
    const showTopSearch = computed(() => props.showFilter && props.filterPosition === 'top')
    const showInnerSearch = computed(() => props.showFilter && props.filterPosition === 'inner')
    const {
      treeRef,
      loading,
      query,
      treeData,
      getTreeData,
      reloadTree,
      reloadTreeWithCheck,
      handleSelect,
      handleChecked,
      handleFilter,
      filterNode,
    } = useTree(props.fetch, props.params, ctx, props.titleKey)

    // 右侧指令事件列表
    function handleAction(name) {
      switch (name) {
        case 'expandAll':
          treeRef.value && treeRef.value.expandAll()
          break
        case 'collapseAll':
          treeRef.value && treeRef.value.collapseAll()
          break
        case 'checkAll':
          treeRef.value && treeRef.value.checkAll()
          break
        case 'uncheckAll':
          treeRef.value && treeRef.value.uncheckAll()
          break
      }
      ctx.emit('command', name)
    }

    function setDefault() {
      treeRef.value && treeRef.value.setExpand(props.expandKeys)
      treeRef.value && treeRef.value.setSelected(props.selectedKeys)
    }

    watch(
      () => props.fetch,
      async val => {
        if (typeOf(val) === 'array') {
          treeData.value = val
          if (val.length > 0) {
            await nextTick()
            setDefault()
          }
          return true
        }
        await getTreeData()
        setDefault()
      },
      { immediate: true },
    )
    return {
      treeEl,
      showTopSearch,
      showInnerSearch,
      treeRef,
      query,
      loading,
      treeData,
      getTreeData,
      reloadTree,
      reloadTreeWithCheck,
      handleSelect,
      handleChecked,
      handleAction,
      handleFilter,
      filterNode,
    }
  },
}
</script>

<style scoped lang="stylus">
@import "../../../assets/stylus/base/var.styl"
.base-tree {
  flex-shrink: 0;
  flex-grow: 0;
  background: #fff;
  border-radius: 2px;
  overflow: hidden;
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4px;
    border-bottom: $border-base;
    height: 45px;
    line-height: 1;
    .base-title {
      color: $color-text-primary;
      width: 80px;
      padding-left: 6px;
    }
    .base-ctrl {
      display: flex;
      align-items: center;
      width: calc(100% - 80px);
      .search {
        flex: 1 1 0;
        text-align: right;
      }
      .ctrl {
        text-align: right;
        width: 24px;
        .f-icon-ellipsis {
          cursor: pointer;
          outline: none;
          font-size: 20px;
          font-weight: bold;
          transform: rotate(90deg);
        }
      }
    }
  }
  .inner-search {
    padding: 2px 12px 2px;
    height: 32px;
  }
  .tree-wrap {
    padding: 5px 0 5px 5px;
    min-height: 400px;
    max-height: 700px;
    :deep(.fei-tree-node) {
      width: 100%;
    }
    :deep(.fei-tree-render-title) {
      flex: 1;
      width: auto;
      height: 24px;
    }
    overflow: auto;
  }
  .tree-inner {
    text-align: left;
    padding: 0 6px 6px;
  }
  .tree-bottom {
    border-top: $border-base;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 8px;
    height: 32px;
  }
  :deep(.fei-tree-render-title) {
    .fei-button {
      height: 24px;
      line-height: 1;
      + .fei-button {
        margin-left: 0;
      }
    }
  }
}
</style>
