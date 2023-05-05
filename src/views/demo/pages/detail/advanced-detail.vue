<template>
  <page-container>
    <template #header>
      <div class="p16">
        <h2>项目开发进度（编号：10000）</h2>
        <br />
        <f-desc>
          <f-desc-item label="责任人">Yang</f-desc-item>
          <f-desc-item label="审批人">Jack</f-desc-item>
          <f-desc-item label="创建时间">2022-06-30</f-desc-item>
          <f-desc-item label="当前状态">
            <f-tag type="success" dot>开发</f-tag>
          </f-desc-item>
          <f-desc-item label="项目描述">当前项目的描述</f-desc-item>
        </f-desc>

        <f-tabs
          v-model="activeTab"
          type="tag"
          :data="[
            { key: 'tab0', title: '流程进度' },
            { key: 'tab1', title: '基本信息' },
            { key: 'tab2', title: '项目信息' },
            { key: 'tab3', title: '项目人员' },
          ]"
        ></f-tabs>
      </div>
    </template>
    <f-collapse-wrap title="流程进度" shadow="none">
      <div class="p20">
        <f-steps :current="1">
          <f-step title="创建项目" content="创建时间：2022-06-30"></f-step>
          <f-step title="需求评审" content="评审时间：2022-07-05"></f-step>
          <f-step title="开发测试" content="开发时间：2022-08-31"></f-step>
          <f-step title="部署上线" content="上线时间：2022-10-01"></f-step>
        </f-steps>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="基本信息" shadow="none">
      <div class="p20">
        <f-desc>
          <f-desc-item label="负责人">Yang</f-desc-item>
          <f-desc-item label="审批人">Jack</f-desc-item>
          <f-desc-item label="拟定完成时间">2022-06-30</f-desc-item>
          <f-desc-item label="当前状态">
            <f-tag type="success" dot>开发</f-tag>
          </f-desc-item>
          <f-desc-item label="紧急程度">
            <f-tag type="danger">紧急</f-tag>
          </f-desc-item>
        </f-desc>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="项目信息" shadow="none">
      <div class="p20">
        <f-desc>
          <f-desc-item label="项目名称">基础Admin后台管理系统</f-desc-item>
          <f-desc-item label="项目类型">前端独立项目</f-desc-item>
          <f-desc-item label="项目状态">
            <f-tag type="success">正常</f-tag>
          </f-desc-item>
          <f-desc-item label="项目目标">实现admin后台管理模板，方便中台系统的构建。</f-desc-item>
          <f-desc-item label="项目描述">
            这里是描述，这里是描述，这里是描述，这里是描述，这里是描述，这里是描述，这里是描述，这里是描述
          </f-desc-item>
        </f-desc>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="项目人员" shadow="none">
      <div class="p20">
        <f-table :columns="columns" :data="data" size="small"></f-table>
      </div>
    </f-collapse-wrap>
  </page-container>
</template>

<script>
export default {
  name: 'AdvancedDetail',
  data() {
    return {
      columns: [
        { title: '姓名', key: 'name' },
        { title: '工号', key: 'no' },
        { title: '所属分组', key: 'dept' },
      ],
      data: [
        { name: 'Yang', no: '001', dept: '前端组' },
        { name: '杨小帆', no: '002', dept: '前端组' },
        { name: '孟小雨', no: '003', dept: '前端组' },
        { name: '李小红', no: '004', dept: '后端组' },
        { name: '张小发', no: '005', dept: '测试组' },
      ],
      activeTab: 'tab0',
    }
  },
}
</script>
