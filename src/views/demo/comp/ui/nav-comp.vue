<template>
  <page-container desc="导航类别的组件...">
    <f-collapse-wrap title="Menu 导航菜单" shadow="none" class="mb-20">
      <div class="p10">
        <f-button-group v-model="isCollapse" style="margin-bottom: 20px">
          <f-button :type="isCollapse ? 'default' : 'primary'" @click="isCollapse = false">展开</f-button>
          <f-button :type="isCollapse ? 'primary' : 'default'" @click="isCollapse = true">收起</f-button>
        </f-button-group>
        <div flex="main:justify">
          <div style="width: 220px">
            <f-menu default-active="1" class="b-menu-vertical-demo border" :collapse="isCollapse">
              <f-submenu index="1">
                <template #title>
                  <f-icon name="location-fill"></f-icon>
                  <span>导航一</span>
                </template>
                <f-menu-item-group>
                  <template #title>分组一</template>
                  <f-menu-item index="1-1">选项1</f-menu-item>
                  <f-menu-item index="1-2">选项2</f-menu-item>
                </f-menu-item-group>
                <f-menu-item-group title="分组2">
                  <f-menu-item index="1-3">选项3</f-menu-item>
                </f-menu-item-group>
                <f-submenu index="1-4">
                  <template #title>选项4</template>
                  <f-menu-item index="1-4-1">选项1</f-menu-item>
                </f-submenu>
              </f-submenu>
              <f-menu-item index="2">
                <f-icon name="appstore-fill"></f-icon>
                <template #title>导航二</template>
              </f-menu-item>
              <f-menu-item index="3" disabled>
                <f-icon name="file-text"></f-icon>
                <template #title>导航三</template>
              </f-menu-item>
              <f-menu-item index="4">
                <f-icon name="setting-fill"></f-icon>
                <template #title>导航四</template>
              </f-menu-item>
            </f-menu>
          </div>
          <div style="width: calc(100% - 240px)">
            <f-menu default-active="1" class="b-menu-vertical-demo border" mode="horizontal">
              <f-submenu index="1">
                <template #title>
                  <f-icon name="location-fill"></f-icon>
                  <span>导航一</span>
                </template>
                <f-menu-item-group>
                  <template #title>分组一</template>
                  <f-menu-item index="1-1">选项1</f-menu-item>
                  <f-menu-item index="1-2">选项2</f-menu-item>
                </f-menu-item-group>
                <f-menu-item-group title="分组2">
                  <f-menu-item index="1-3">选项3</f-menu-item>
                </f-menu-item-group>
                <f-submenu index="1-4">
                  <template #title>选项4</template>
                  <f-menu-item index="1-4-1">选项1</f-menu-item>
                </f-submenu>
              </f-submenu>
              <f-menu-item index="2">
                <f-icon name="appstore-fill"></f-icon>
                <template #title>导航二</template>
              </f-menu-item>
              <f-menu-item index="3" disabled>
                <f-icon name="file-text"></f-icon>
                <template #title>导航三</template>
              </f-menu-item>
              <f-menu-item index="4">
                <f-icon name="setting-fill"></f-icon>
                <template #title>导航四</template>
              </f-menu-item>
            </f-menu>
          </div>
        </div>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="Anchor 锚点" shadow="none" class="mb-20">
      <div class="p10">
        <div style="width: 220px">
          <f-anchor show-ink style="margin-left: 20px" :scroll-offset="100">
            <f-anchor-link href="#ji-chu-yong-fa" title="基础用法"></f-anchor-link>
            <f-anchor-link href="#zi-ding-yi-tu-biao" title="自定义图标"></f-anchor-link>
            <f-anchor-link href="#zi-ding-yi-yan-se" title="自定义颜色"></f-anchor-link>
            <f-anchor-link href="#zhi-ding-gun-dong-rong-qi" title="指定滚动容器"></f-anchor-link>
            <f-anchor-link href="#props" title="Props"></f-anchor-link>
            <f-anchor-link href="#events" title="Events"></f-anchor-link>
            <f-anchor-link href="#anchorlink-props" title="AnchorLink Props"></f-anchor-link>
          </f-anchor>
        </div>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="Tabs 标签页" shadow="none" class="mb-20">
      <div class="p10">
        <f-tabs v-model="activeTab" :data="tabs"></f-tabs>
        <p v-show="activeTab === 'tab0'">首页</p>
        <p v-show="activeTab === 'tab1'">用户管理</p>
        <p v-show="activeTab === 'tab2'">组织管理</p>
        <p v-show="activeTab === 'tab3'">系统管理</p>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="Dropdown 下拉菜单" shadow="none" class="mb-20">
      <div class="p10">
        <f-dropdown trigger="click" style="margin-left: 20px">
          <a href="javascript:void(0)">
            click 触发
            <f-icon name="down"></f-icon>
          </a>
          <template #dropdown>
            <f-dropdown-menu>
              <f-dropdown-item selected>选项一</f-dropdown-item>
              <f-dropdown-item disabled>选项二</f-dropdown-item>
              <f-dropdown-item>选项三</f-dropdown-item>
              <f-dropdown-item divided>选项四</f-dropdown-item>
              <f-dropdown-item>选项五</f-dropdown-item>
            </f-dropdown-menu>
          </template>
        </f-dropdown>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="Steps 步骤条" shadow="none" class="mb-20">
      <div class="p10">
        <f-steps :current="current">
          <f-step title="已完成" content="这里是该步骤的描述信息"></f-step>
          <f-step title="进行中" content="这里是该步骤的描述信息"></f-step>
          <f-step title="待进行" content="这里是该步骤的描述信息"></f-step>
          <f-step title="待进行" content="这里是该步骤的描述信息"></f-step>
        </f-steps>
        <f-button type="primary" @click="next">下一步</f-button>
      </div>
    </f-collapse-wrap>
  </page-container>
</template>

<script>

export default {
  name: 'NavComp',
  components: {},
  data() {
    return {
      isCollapse: false,
      tabs: [
        { key: 'tab0', title: '首页', noClose: true },
        { key: 'tab1', title: '用户管理' },
        { key: 'tab2', title: '组织管理' },
        { key: 'tab3', title: '系统管理' },
      ],
      activeTab: 'tab0',
      current: 0,
    }
  },
  methods: {
    next() {
      if (this.current === 3) {
        this.current = 0
      } else {
        this.current += 1
      }
    },
  },
}
</script>
