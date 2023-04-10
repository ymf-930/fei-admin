<template>
  <div class="center-wrap">
    <f-row :gutter="16">
      <f-col span="7">
        <f-card class="info-pane" :bordered="false" shadow="never">
          <div class="avatar">
            <img src="@/assets/images/avatar/avatar05.jpeg" class="avatar-img" alt="avatar" />
          </div>
          <h2>Yang</h2>
          <p>让花成花，让树成树。</p>
          <div class="desc">
            <f-icon name="flag"></f-icon>
            前端工程师
          </div>
          <div class="desc">
            <f-icon name="apartment"></f-icon>
            xxx软件有限公司-前端事业部-前端架构组
          </div>
          <div class="desc">
            <f-icon name="location"></f-icon>
            徐州市泉山区
          </div>
          <f-divider dashed></f-divider>
          <f-tag>搬砖者 👐</f-tag>
          <f-tag>小有想法 😈</f-tag>
          <f-tag>前端开发 ⛲</f-tag>
          <f-tag>vue3 🍀</f-tag>
          <f-tag>专注前端 🌟</f-tag>
          <f-tag>菜鸟 🙋</f-tag>
          <f-tag>懂点设计 💎</f-tag>
          <f-tag>交互内容 🔖</f-tag>
        </f-card>
      </f-col>
      <f-col span="17">
        <f-card :bordered="false" shadow="never" :body-style="{ padding: '8px 0 0' }">
          <f-tabs v-model="activeTab" :data="tabs"></f-tabs>
          <div v-if="activeTab === 'tab1'" class="pt-16 pl-16">
            <img-item v-for="(item, index) in projectList" :key="index" :item="item"></img-item>
          </div>
          <div v-if="activeTab === 'tab2'" class="p16">
            <app-item v-for="(item, index) in projectList" :key="index" :item="item"></app-item>
          </div>
          <div v-if="activeTab === 'tab3'" class="p16">
            <f-skeleton :loading="loading" animation>
              <template #template>
                <f-skeleton />
                <f-divider />
                <f-skeleton />
                <f-divider />
                <f-skeleton />
              </template>
              <template #default>
                <article-item v-for="(item, index) in articleList" :key="index" :item="item"></article-item>
              </template>
            </f-skeleton>
          </div>
        </f-card>
      </f-col>
    </f-row>
  </div>
</template>

<script>
import { getArticleList, getProjectList } from '@/api/modules/list.api'

export default {
  name: 'UserCenter',
  data() {
    return {
      tabs: [
        { key: 'tab1', title: '项目' },
        { key: 'tab2', title: '应用' },
        { key: 'tab3', title: '文章' },
      ],
      activeTab: 'tab1',
      articleList: [],
      projectList: [],
      loading: false,
    }
  },
  async created() {
    this.loading = true
    const articles = await getArticleList()
    const projects = await getProjectList()
    this.tabs[0].title = `项目(${projects.rows.length})`
    this.tabs[1].title = `应用(${projects.rows.length})`
    this.tabs[2].title = `文章(${articles.rows.length})`
    this.articleList = articles.rows
    this.projectList = projects.rows
    this.loading = false
  },
}
</script>

<style scoped lang="stylus">
@import "../../../assets/stylus/base/var.styl"
@import "../../../assets/stylus/base/mixins.styl"
.center-wrap {
  margin: 16px;
  .info-pane {
    .avatar {
      padding: 8px 0;
      display: flex;
      justify-content: center;
      .avatar-img {
        width: 90px;
        height: 90px;
        border-radius: 50%;
      }
    }
    h2 {
      text-align: center;
      font-size: 20px;
      margin: 8px;
      font-weight: 500;
    }
    p {
      text-align: center;
    }
    .desc {
      display: flex;
      align-items: center;
      margin-top: 16px;
      i {
        font-size: 16px;
        margin-right: 8px;
      }
    }
    :deep(.fei-tag) {
      margin: 0 6px 6px 0;
    }
  }
}
</style>
