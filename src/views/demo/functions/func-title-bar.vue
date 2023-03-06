<template>
  <page-container desc="标题组件，全局的内置标题组件，附带不同的效果">
    <f-collapse-wrap title="基础标题，title参数 或 默认插槽显示标题" shadow="none">
      <div class="p10">
        <title-bar title="Title标题"></title-bar>
        <title-bar>默认插槽标题</title-bar>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="标题样式" shadow="none">
      <div class="p10">
        <title-bar :title-style="{ fontSize: '14px', fontWeight: 700 }">自定义大小</title-bar>
        <title-bar>
          <f-icon name="sketch"></f-icon>
          插槽自定义
        </title-bar>
        <title-bar tip-pos="left">tip-pos-left</title-bar>
        <title-bar no-border>no-border</title-bar>
        <title-bar>
          右侧插槽
          <template #right>
            <f-button size="small">操作</f-button>
          </template>
        </title-bar>
      </div>
    </f-collapse-wrap>
  </page-container>
</template>

<script>
export default {
  name: 'FuncTitleBar',
}
</script>
