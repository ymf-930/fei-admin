<template>
  <page-wrapper desc="当前富文本基于tiptap，目前封装的功能较弱，仅供学习使用，后续需要继续完善。">
    <FeiTiptap v-model="content" />
    <div class="pt-16"></div>
    <f-collapse-wrap title="Content" shadow="none">
      <div class="content p10">
        <pre><code>{{ content }}</code></pre>
      </div>
    </f-collapse-wrap>
  </page-wrapper>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'FuncTiptap',
  setup() {
    const content = ref('<p>A Vue.js wrapper component for tiptap to use <code>v-model</code>.</p>')
    return {
      content,
    }
  },
}
</script>

<style scoped lang="stylus">
.content {
  pre {
    border-radius: 5px;
    color: #333;
  }

  code {
    display: block;
    white-space: pre-wrap;
    font-size: 0.8rem;
    padding: 0.75rem 1rem;
    background-color:#e9ecef;
    color: #495057;
  }
}
</style>
