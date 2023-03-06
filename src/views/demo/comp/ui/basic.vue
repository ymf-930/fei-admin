<template>
  <page-container
    inner-scroll
    desc="基础组件依赖于f-ui-one，主要用于验证不同组件的主色颜色主题。主题样式默认只覆盖default和primary主色"
  >
    <theme-color-panel />
    <f-collapse-wrap title="default" shadow="none" class="mf-20">
      <div class="p10">
        <f-button>默 认</f-button>
        <f-button disabled>禁 用</f-button>
        <f-button background>拟物按钮</f-button>
        <f-button background disabled>拟物禁用</f-button>
        <f-button loading>loading</f-button>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="primary" shadow="none" class="mb-20">
      <div class="p10">
        <f-button type="primary">主按钮</f-button>
        <f-button type="primary" loading>loading</f-button>
        <f-button type="primary" plain>plain</f-button>
        <f-button type="primary" round>round</f-button>
        <f-button type="primary" transparent>transparent</f-button>
        <f-button type="primary" dashed>dashed</f-button>
        <f-button type="text">text</f-button>
      </div>
      <div class="p10">
        <f-button type="primary" disabled>主按钮</f-button>
        <f-button type="primary" loading disabled>loading</f-button>
        <f-button type="primary" plain disabled>plain</f-button>
        <f-button type="primary" round disabled>round</f-button>
        <f-button type="primary" transparent disabled>transparent</f-button>
        <f-button type="primary" dashed disabled>dashed</f-button>
        <f-button type="text" disabled>text</f-button>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="其他状态" shadow="none" class="mb-20">
      <f-divider align="left">success</f-divider>
      <div class="pl-10">
        <f-button type="success">成 功</f-button>
        <f-button type="success" disabled>禁 用</f-button>
        <f-button type="success" loading>loading</f-button>
        <f-button type="success" plain>plain</f-button>
        <f-button type="success" round>round</f-button>
        <f-button type="success" transparent>transparent</f-button>
        <f-button type="success" dashed>dashed</f-button>
        <f-button type="text" text-color="success">text</f-button>
        <f-button type="text" disabled text-color="success">[disabled success text]</f-button>
        <f-button type="text" disabled>[disabled text]</f-button>
      </div>
      <f-divider align="left">warning</f-divider>
      <div class="pl-10">
        <f-button type="warning">警 告</f-button>
        <f-button type="warning" disabled>禁 用</f-button>
        <f-button type="warning" loading>loading</f-button>
        <f-button type="warning" plain>plain</f-button>
        <f-button type="warning" round>round</f-button>
        <f-button type="warning" transparent>transparent</f-button>
        <f-button type="warning" dashed>dashed</f-button>
        <f-button type="text" text-color="warning">text</f-button>
        <f-button type="text" disabled text-color="warning">[disabled warning text]</f-button>
        <f-button type="text" disabled>[disabled text]</f-button>
      </div>
      <f-divider align="left">danger</f-divider>
      <div class="pl-10">
        <f-button type="danger">错 误</f-button>
        <f-button type="danger" disabled>禁 用</f-button>
        <f-button type="danger" loading>loading</f-button>
        <f-button type="danger" plain>plain</f-button>
        <f-button type="danger" round>round</f-button>
        <f-button type="danger" transparent>transparent</f-button>
        <f-button type="danger" dashed>dashed</f-button>
        <f-button type="text" text-color="danger">text</f-button>
        <f-button type="text" disabled text-color="danger">[disabled danger text]</f-button>
        <f-button type="text" disabled>[disabled text]</f-button>
      </div>
      <f-divider align="left">info</f-divider>
      <div class="pl-10 pb-15">
        <f-button type="info">信 息</f-button>
        <f-button type="info" disabled>禁 用</f-button>
        <f-button type="info" loading>loading</f-button>
        <f-button type="info" plain>plain</f-button>
        <f-button type="info" round>round</f-button>
        <f-button type="info" transparent>transparent</f-button>
        <f-button type="info" dashed>dashed</f-button>
        <f-button type="text" text-color="info">text</f-button>
        <f-button type="text" disabled text-color="info">[disabled info text]</f-button>
        <f-button type="text" disabled>[disabled text]</f-button>
      </div>
    </f-collapse-wrap>
    <template #footer>aaa</template>
  </page-container>
</template>

<script>
import ThemeColorPanel from '@/views/demo/comp/components/theme-color-panel.vue'

export default {
  name: 'Basic',
  components: { ThemeColorPanel },
}
</script>
