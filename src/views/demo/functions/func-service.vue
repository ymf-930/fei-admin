<template>
  <page-container desc="业务相关的独立组件，包含通用校验配置，字段样式配置等，可参考进行扩展或实现新的业务组件。">
    <f-row :gutter="16">
      <f-col span="12">
        <f-collapse-wrap title="表单校验" shadow="none">
          <div class="p10" style="min-height: 200px">
            <async-validator></async-validator>
          </div>
        </f-collapse-wrap>
      </f-col>
      <f-col span="12">
        <f-collapse-wrap title="字段样式配置" shadow="none">
          <div class="p10">
            <styles-editor :simple="false"></styles-editor>
          </div>
        </f-collapse-wrap>
      </f-col>
    </f-row>
  </page-container>
</template>

<script>
import StylesEditor from '@/components/Service/StylesEditor/index.vue'
import AsyncValidator from '@/components/Service/AsyncValidator/index.vue'

export default {
  name: 'FuncService',
  components: { AsyncValidator, StylesEditor },
}
</script>
