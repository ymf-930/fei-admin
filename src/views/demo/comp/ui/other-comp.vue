<template>
  <page-container desc="其它类别的组件...">
    <f-collapse-wrap title="Other 其他类型的显示组件" shadow="none" class="mf-20">
      <div class="p10">
        <f-divider align="left">卡片</f-divider>
        <f-card class="box-card" width="480px" head-tip>
          <template v-slot:header>
            <div flex="main:justify cross:center">
              <span>卡片名称</span>
              <f-icon name="dropbox" size="20" style="cursor: pointer"></f-icon>
            </div>
          </template>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '这是内容区域 ' + o }}
          </div>
        </f-card>
        <f-divider align="left">徽标</f-divider>
        <f-badge :value="1" class="item" type="primary">
          <f-button>primary徽标</f-button>
        </f-badge>
        <f-divider align="left">tag标签</f-divider>
        <f-space>
          <f-tag type="primary" dark>primary</f-tag>
          <f-tag type="success" dark>success</f-tag>
          <f-tag type="info" dark>info</f-tag>
          <f-tag type="warning" dark>warning</f-tag>
          <f-tag type="danger" dark>danger</f-tag>
          <f-tag type="primary">primary</f-tag>
          <f-tag type="success">success</f-tag>
          <f-tag type="info">info</f-tag>
          <f-tag type="warning">warning</f-tag>
          <f-tag type="danger">danger</f-tag>
        </f-space>
        <f-divider align="left">loading</f-divider>
        <div>
          <div class="demo-loading">
            <f-loading fix>加载中</f-loading>
          </div>
          <div class="demo-loading">
            <f-loading fix show-text="loading"></f-loading>
          </div>
          <div class="demo-loading">
            <f-loading fix show-text="loading" show-icon="loading2"></f-loading>
          </div>
        </div>
        <f-divider align="left">alert</f-divider>
        <f-alert>info alert</f-alert>
        <f-alert show-icon>info alert</f-alert>
        <f-alert show-icon>
          自定义icon
          <template #icon>
            <f-icon name="smile"></f-icon>
          </template>
          <template #desc>自定义icon描述</template>
        </f-alert>
        <f-divider align="left">日历</f-divider>
        <div style="width: 300px; display: inline-block">
          <f-calendar mini></f-calendar>
        </div>
        <div style="width: 300px; display: inline-block">
          <f-calendar
            mini
            :body-style="{ border: 'none' }"
            :day-style="{ border: 'none', borderRadius: '4px' }"
          ></f-calendar>
        </div>
      </div>
    </f-collapse-wrap>
  </page-container>
</template>

<script>

export default {
  name: 'OtherComp',
  components: {},
}
</script>

<style>
.demo-loading {
  position: relative;
  overflow: hidden;
  display: inline-block;
  margin-right: 5px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  border: 1px solid #cecece;
}
</style>
