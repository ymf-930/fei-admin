<template>
  <f-modal title="映射编辑" width="1250px" v-model="editVisible" destroy-on-close>
    <f-desc size="small" border>
      <f-desc-item label="模板列">{{ editForm.sourceName }}</f-desc-item>
      <f-desc-item label="目标信息项">{{ editForm.targetName }}</f-desc-item>
      <f-desc-item label="类型">
        <f-tag type="primary" size="mini">{{ editForm.dataType }}</f-tag>
      </f-desc-item>
    </f-desc>
    <f-form label-position="top">
      <f-tabs
        v-model="activeTab"
        :data="tabs"
        type="card"
        class="mt-8"
        @change="tabChange"
      ></f-tabs>
      <div v-if="activeTab === 'tab0'" flex="main:justify">
        <div :style="{ width: mapModalWidth }">
          <f-form-item>
            <expr-editor
              v-model="editForm.transValue"
              :source-name="editForm.sourceName"
              :target-name="editForm.targetName"
              :source-list="tableList1"
            ></expr-editor>
          </f-form-item>
        </div>
        <div :style="{ width: dictMapWidth }">
          <f-form-item label="字典项" v-if="['select'].includes(editForm.ctrlType)">
            <key-value-mapping v-model="editForm.dictMap"></key-value-mapping>
          </f-form-item>
        </div>
      </div>
      <div v-else class="mt-8">
        <f-form-item label="缺省值">
          <f-input
            v-model.trim="editForm.defaultValue"
            style="width: 40%"
            :disabled="Boolean(editForm.sourceName)"
          ></f-input>
        </f-form-item>
        <f-form-item label="字典项" v-if="['select'].includes(editForm.ctrlType)">
          <div style="width: 80%">
            <key-value-mapping v-model="editForm.dictMap"></key-value-mapping>
          </div>
        </f-form-item>
      </div>
    </f-form>
    <template #footer>
      <f-button type="primary" @click="save">确 定</f-button>
    </template>
  </f-modal>
</template>
<script setup>
import { computed, nextTick, ref } from 'vue'
import KeyValueMapping from '@/components/Common/KeyValueMapping/index.vue'
import ExprEditor from '@/components/Service/ExprEditor/index.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: () => {},
  },
  tableList1: {
    type: Array,
    default: () => [],
  },
})
const emit = defineEmits(['update:modelValue', 'saveEditForm'])

const editForm = computed({
  get: () => props.modelValue,
  set: val => emit('update:modelValue', val),
})
const tabs = ref([
  { key: 'tab0', title: '转换表达式' },
  { key: 'tab1', title: '缺省值' },
])
const activeTab = ref('tab0')
const editVisible = ref(false)

function open(activeTab) {
  activeTab.vvalue = activeTab
  editVisible.value = true
}
// 映射编辑tab切换
function tabChange(tab) {
  if (tab.key === 'tab0') {
    editForm.value.defaultValue = ''
  } else {
    editForm.value.transValue = ''
  }
}
// 根据是否含有字典项动态设置宽度
const mapModalWidth = computed(() =>
  ['select'].includes(editForm.value.ctrlType) ? 'calc(100% - 270px)' : '100%',
)
const dictMapWidth = computed(() => (['select'].includes(editForm.value.ctrlType) ? '260px' : '0'))

async function save() {
  await nextTick()
  emit('saveEditForm')
  editVisible.value = false
}

defineExpose({ open })
</script>
