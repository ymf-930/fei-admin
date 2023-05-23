<template>
  <page-container>
    <f-collapse-wrap title="基础用法" shadow="none" class="mb-16">
      <div class="p10">
        <f-row :gutter="20">
          <f-col :span="14">
            <f-ace-editor :model-value="code1" readonly lang="dot" height="200" />
          </f-col>
          <f-col :span="10">
            <Graphviz id="code1" :code="code1" />
          </f-col>
        </f-row>
      </div>
    </f-collapse-wrap>
    <f-collapse-wrap title="代码编辑用法" shadow="none" class="mb-16">
      <div class="p10">
        <f-row :gutter="20">
          <f-col :span="14">
            <f-row :gutter="20">
              <f-col :span="12">
                <f-tag>编辑代码</f-tag>
                <f-ace-editor
                  v-model="code2Text"
                  @blur="code2 = code2Text"
                  lang="dot"
                  height="200"
                />
              </f-col>
              <f-col :span="12">
                <f-tag>示例代码</f-tag>
                <f-ace-editor :model-value="demo" readonly lang="dot" height="200" />
              </f-col>
            </f-row>
            <br />
            <f-button @click="getDataFormat">获取转换数据</f-button>
          </f-col>
          <f-col :span="10">
            <Graphviz id="code2" :code="code2" />
          </f-col>
        </f-row>
      </div>
    </f-collapse-wrap>

    <f-collapse-wrap title="数据转换用法" shadow="none" class="mb-16">
      <div class="p10">
        <f-row :gutter="20">
          <f-col :span="14">
            <f-row :gutter="20">
              <f-col :span="12">
                <f-tag>json 对象</f-tag>
                <f-ace-editor v-model="code3Text" @blur="formatData" lang="json" height="200" />
              </f-col>
              <f-col :span="12">
                <f-tag>转换后字符串</f-tag>
                <f-ace-editor :model-value="code3" readonly lang="dot" height="200" />
              </f-col>

              <f-col :span="24">
                <div class="pt-8">
                  <f-checkbox v-model="nodeStyleEnable" @change="formatData"></f-checkbox>
                  启用单个节点连线样式 [arrowsize=.4, color=grey, style="rounded"]
                </div>
              </f-col>
              <f-col :span="24">
                <div class="pt-8">
                  <f-checkbox v-model="allStyleEnable" @change="formatData"></f-checkbox>
                  启用全局通用样式
                </div>
              </f-col>
            </f-row>
          </f-col>
          <f-col :span="10">
            <Graphviz id="code3" :code="code3" />
          </f-col>
        </f-row>
      </div>
    </f-collapse-wrap>
  </page-container>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import * as d3 from 'd3'
import 'd3-graphviz'
import { Message } from 'f-ui-one'

const code1 = ref('digraph G {Hello -> World}')
const code2 = ref('digraph G {a -> b}')
const code2Text = ref(code2.value)
const demo = `digraph G {

subgraph cluster_0 {
  style=filled;
  color=lightgrey;
  node [style=filled,color=white];
  a0 -> a1 -> a2 -> a3;
  label = "process #1";
}

subgraph cluster_1 {
  node [style=filled];
  b0 -> b1 -> b2 -> b3;
  label = "process #2";
  color=blue
}
start -> a0;
start -> b0;
a1 -> b3;
b2 -> a3;
a3 -> a0;
a3 -> end;
b3 -> end;

start [shape=Mdiamond];
end [shape=Msquare];
}`

const dot = ref({
  foo: ['bar', 'buzz'],
  bar: ['foo'],
  norf: ['worble', 'buzz'],
  worf: ['worble'],
  fizz: ['buzz'],
})
const code3 = ref('digraph G {a -> b}')
const code3Text = ref(JSON.stringify(dot.value, null, 2))
const nodeStyleEnable = ref(false)
const allStyleEnable = ref(true)

function getDataFormat() {
  const data = d3.select('svg').datum()
  console.log(data)
}

/**
 * 格式转换
 * @param {} jsonText json 文本
 */
function formatData() {
  try {
    const json = JSON.parse(code3Text.value)
    dot.value = json
    Message('Json 转换成功')
    console.log(Object.entries(json))
    code3.value = jsonToDot(json)
    console.log(code3.value)
  } catch (error) {
    console.log('json is not right')
  }
}

/**
 * json对象转换为dot语法
 * @param {} json
 */
function jsonToDot(json) {
  /**
   * 此处为单个节点关系，设置样式
   * arrowsize: 箭头尺寸
   * color：连接线的颜色
   * style：节点边框形状，rounded 圆角
   */
  const nodeStyle = nodeStyleEnable.value ? '[arrowsize=.4, color=grey, style="rounded"]\n' : '\n'

  /**
   * 此处设置graph图所有点线关系的统一样式
   * ranksep: node之间的间距
   * graph - rankdir: 布局方向，LR从左到右，TB从上到下(默认)
   * graph - bb: 以点为单位的绘图边界框
   * node - margin: 节点内边距
   * node - shape: 节点形状
   * node - height: 节点高度
   * node - style:  节点样式，圆角，填充色
   * node - color:  颜色
   * node - fillcolor:  背景填充色
   * edge - style: 连线样式 solid实线
   * edge - arrowhead: 连线箭头样式
   * edge - arrowtail: 连线箭尾样式
   * ......
   * 还有很多属性，可参考下方提供的参考文档
   */
  const allStyle = allStyleEnable.value
    ? `
  ranksep = 2.0;
  graph [rankdir=LR,bb="0,0,412.05,372.8"];
  node [margin=".3,.1",shape=box,height=.3, style="rounded,filled", color="lightgreen", fillcolor="lightgreen"];
  edge [style=solid,arrowhead=normal,arrowtail=dot];`
    : ''

  return (
    Object.entries(json).reduce((acc, [node, dependencies]) => {
      return dependencies.reduce(
        (acc, dependency) => acc + ` "${node}" -> "${dependency}" ${nodeStyle}`,
        acc,
      )
    }, `digraph G { ${allStyle} \n `) + '}'
  )
}

onMounted(() => {
  formatData(code3Text.value)
  // renderCode1()
  // renderCode2()
})
</script>
