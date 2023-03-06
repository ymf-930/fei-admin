<template>
  <div class="workplace">
    <top-box />
    <div class="work-center">
      <f-row :gutter="16">
        <f-col span="14">
          <project-box />
          <dynamic-box />
        </f-col>
        <f-col span="10">
          <quick-link />
          <div class="banner">
            <img src="@/assets/images/bg/work.png" alt="work" />
          </div>
          <todo-list />
        </f-col>
      </f-row>
    </div>
  </div>
</template>

<script>
import TopBox from './top-box.vue'
import ProjectBox from './project-box.vue'
import DynamicBox from './dynamic-box.vue'
import QuickLink from './quick-link.vue'
import TodoList from './todo-list.vue'

export default {
  name: 'WorkBench',
  components: { TodoList, QuickLink, DynamicBox, TopBox, ProjectBox },
}
</script>

<style lang="stylus" scoped>
.work-center {
  margin: 16px;
  .banner {
    padding: 16px;
    margin: 16px 0;
    background: #fff;
    text-align: center;
    img {
      height: 260px;
    }
  }
}
</style>
