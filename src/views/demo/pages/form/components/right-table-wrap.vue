<template>
  <div class="right-table-wrap">
    <div class="inner-box">
      <!--映射关系-->
      <div class="map-res">
        <div class="table-title">
          <div class="map-title">映射关系</div>
          <div class="ctrl" v-if="tableList1.length && tableList2.length">
            <action-button
              type="text"
              tooltip="自动映射"
              confirm
              message="自动映射会取消已添加的映射！"
              @click="() => emit('autoMap')"
            >
              自动映射
            </action-button>

            <action-button
              type="text"
              tooltip="全部重置"
              confirm
              message="确定重置吗！"
              @click="() => emit('cancelAllMap')"
            >
              重置映射
            </action-button>
          </div>
        </div>
        <div class="p16">
          <f-table
            :columns="columns"
            :data="itemMaps"
            max-height="500"
            size="small"
            disabled-hover
            border
          >
            <template #targetName="{ row }">
              <span :title="row.desc">{{ row.targetName }}</span>
            </template>
            <template #icon="{ row }">
              <div style="height: 100%" flex="main:right cross:center">
                <f-popover
                  v-if="row.transValue"
                  trigger="hover"
                  title="表达式"
                  :content="row.transValue"
                  width="240px"
                >
                  <img src="@/assets/images/gather-task/set-function.svg" class="my-img" />
                </f-popover>
                <f-popover
                  v-if="row.defaultValue"
                  trigger="hover"
                  title="缺省值"
                  :content="row.defaultValue"
                >
                  <img src="@/assets/images/gather-task/set-default.svg" class="my-img" />
                </f-popover>
                <f-popover
                  v-if="row.dictMap.length > 0"
                  trigger="hover"
                  title="字典项"
                  width="240px"
                >
                  <img src="@/assets/images/gather-task/set-dictMap.svg" class="my-img" />
                  <template #content>
                    <f-table :columns="mapColumns" :data="row.dictMap" size="small"></f-table>
                  </template>
                </f-popover>
              </div>
            </template>
            <template #action="{ row, index }">
              <action-button
                type="text"
                icon="minus-circle"
                color="danger"
                tooltip="移除"
                @click="() => emit('cancelOneMap', row, index)"
              ></action-button>
            </template>
          </f-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import ActionButton from '@/components/Common/ActionButton/index.vue'

defineProps({
  tableList1: {
    type: Array,
    default: () => [],
  },
  tableList2: {
    type: Array,
    default: () => [],
  },
  itemMaps: {
    type: Array,
    default: () => [],
  },
})
const emit = defineEmits(['autoMap', 'cancelAllMap', 'cancelOneMap'])
const columns = ref([
  { title: '源信息项', key: 'sourceName', minWidth: 140 },
  { title: '目标信息项', slot: 'targetName', minWidth: 140 },
  { title: '操作', slot: 'action', width: 100 },
])

const mapColumns = ref([
  { title: 'key值', key: 'key' },
  { title: 'value值', key: 'value' },
])
</script>
<style scoped lang="stylus">
.right-table-wrap {
  transition: width .15s ease;
  flex:1;
  min-height: 600px;
  .inner-box {
    align-items: flex-start;
    border: 1px dashed transparent;
    height: calc(100% - 130px);
    &.drag-over {
      border-color: getColor()
    }
    .source-res, .target-res, .map-res {
      border: 1px solid #eee;
      border-radius: 6px;
      background:#fff;
      height:615px;
      .table-title {
        background: #fff;
        line-height: 40px;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-bottom: 1px solid #eee;
        .map-title{
          position: relative
         &:after {
          content:'';
          position:absolute;
          background-color:var(--fei-color-primary);
          left:-16px;
          top:12px;
          bottom:12px;
          width:2px;
        }
        }
        > i {
          margin-right: 8px;
        }
      }
      .my-img{
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }
    .source-res {
      width: 290px;
    }
    .table-bottom {
      padding: 0 8px;
      text-align: right;
      border-top: 1px solid #eeeeee;
    }
    .arrow {
      width: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .target-res {
      width: 290px;
    }
    .ctrl {
      flex:1;
      text-align:right;
       :deep(.b-iconfont){
          font-size: 24px !important
        }
    }
  }
}
</style>
