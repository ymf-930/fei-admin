<template>
  <div class="item-map-wrap">
    <div class="mapping-wrap">
      <div class="reader-wrap">
        <field-list
          title="源数据表"
          fieldTitle="字段列"
          source-type="source"
          :source-name="mapObj.nodeTableName"
          :list="tableSourceItems"
          :itemMaps="itemMaps"
          @setting="loadSourceFields"
          @clear="clearSourceTable"
        >
        </field-list>
      </div>
      <!-- source-name  表的英文名 table-name  表的中文名 loadWriterFields打开侧边的事件 -->
      <div class="writer-wrap">
        <field-list
          title="目标数据模型"
          fieldTitle="字段列"
          source-type="target"
          :source-name="mapObj.metadataName"
          :list="tableTargetItems"
          :itemMaps="itemMaps"
          @setting="loadWriterFields"
          @node-drop="handleLink"
          @clear="clearTargetTable"
          @singleFieldMapp="node => handleLink({ source: null, dest: node })"
        />
      </div>
    </div>
    <!--右侧操作面板-->
    <right-table-wrap
      :tableList1="tableList1"
      :tableList2="tableList2"
      :itemMaps="itemMaps"
      @autoMap="autoMap"
      @cancelAllMap="cancelAllMap"
      @handleMapEdit="handleMapEdit"
      @cancelOneMap="cancelOneMap"
    ></right-table-wrap>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import FieldList from '@/views/demo/pages/form/components/field-list.vue'
import RightTableWrap from '@/views/demo/pages/form/components/right-table-wrap.vue'
import useItemMap from '@/views/demo/pages/form/components/useItemMapping'

export default {
  name: 'gather-item-map',
  components: { RightTableWrap, FieldList },
  props: {
    modelValue: {
      type: Array,
      default: () => [],
    },
    formObj: {
      type: Object,
      default: () => {},
    },
    sourceLinkMeta: {
      type: String,
      default: '',
    },
    targetLinkMeta: {
      type: String,
      default: '',
    }
  },

  emits: ['update:modelValue', 'update:resourceName'],

  setup(props, { emit }) {
    // 配置hooks
    const tableCfg = useItemMap(props, emit)

    // ***** 侧边栏收起展开 ***** //
    const leftExpand = ref(true)
    const leftWidth = computed(() => (leftExpand.value ? '240px' : '12px'))
    const rightWidth = computed(() => (leftExpand.value ? 'calc(100% - 240px)' : '100%'))
    const toggleLeft = () => {
      leftExpand.value = !leftExpand.value
    }

    return {
      // ***** 侧边栏收起展开 ***** //
      leftExpand,
      leftWidth,
      rightWidth,
      toggleLeft,
      ...tableCfg,
    }
  },
}
</script>

<style scoped lang="stylus">
@import "../../../../../assets/stylus/base/mixins.styl"
.item-map-wrap {
  position: relative;
  display: flex;
  min-height: 600px;
  .mapping-wrap{
    position:relative;
    display:flex;
    user-select:none;
    .reader-wrap,.writer-wrap{
      width:288px;
      margin-right:16px;
    }
  }
  .toggle {
    position: absolute;
    z-index: 100;
    top: 10px;
    margin-left: -9px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 30px;
    cursor: pointer;
    background-color: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .1);
    transition: .15s ease;
    opacity: 0;
    &:hover {
      border: 1px solid #1089ff;
      i {
        color: #1089ff;
      }
    }
  }
}
:deep(.fei-page-simple .fei-page-simple-pager input){
  padding :0
}
</style>
