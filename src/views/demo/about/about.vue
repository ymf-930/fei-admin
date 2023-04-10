<template>
  <page-container>
    <template #desc>
      <p>
        <a href="https://github.com/ymf-930/fei-admin" target="_blank">fei-admin</a>
        &nbsp; 是一个基于Vue3.0、
        <a href="https://github.com/ymf-930/f-ui-one" target="_blank">f-ui-one</a>
        &nbsp; 的后台解决方案，目标是提供简单快速的开箱解决方案，提供部分示例和更多实用工具以便快速进行后台开发。
      </p>
    </template>
    <f-collapse-wrap title="项目信息" shadow="none">
      <div class="p10">
        <f-desc :column="2" border :label-width="20">
          <f-desc-item label="版本">
            <f-tag type="primary">{{ config.version }}</f-tag>
          </f-desc-item>
          <f-desc-item label="仓库地址">
            <a href="https://github.com/ymf-930/fei-admin" target="_blank">Github</a>
            <f-divider type="vertical"></f-divider>
            <a href="https://gitee.com/ymf930/fei-admin" target="_blank">Gitee</a>
            <f-divider type="vertical"></f-divider>
            <a href="https://ymf930.gitee.io/fei-admin" target="_blank">Preview</a>
          </f-desc-item>
          <f-desc-item label="f-ui-one 地址">
            <a href="https://github.com/ymf-930/f-ui-one" target="_blank">Github</a>
            <f-divider type="vertical"></f-divider>
            <a href="https://gitee.com/ymf930/f-ui-one" target="_blank">Gitee</a>
          </f-desc-item>
          <f-desc-item label="f-ui-one 文档">
            <a href="https://ymf930.gitee.io/f-ui-one" target="_blank">文档</a>
          </f-desc-item>
        </f-desc>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="生产环境依赖" shadow="none">
      <div class="p10">
        <f-desc border>
          <f-desc-item v-for="(val, key) in config.dependencies" :key="key" :label="key">
            {{ val }}
          </f-desc-item>
        </f-desc>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="开发环境依赖" shadow="none">
      <div class="p10">
        <f-desc border>
          <f-desc-item v-for="(val, key) in config.devDependencies" :key="key" :label="key">
            {{ val }}
          </f-desc-item>
        </f-desc>
      </div>
    </f-collapse-wrap>
  </page-container>
</template>

<script>
import config from '../../../../package.json'

export default {
  name: 'About',
  data() {
    return {
      config,
    }
  },
}
</script>
