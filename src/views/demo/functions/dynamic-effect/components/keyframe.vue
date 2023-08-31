<template>
  <div>
    <f-alert show-icon>
      说明
      <template #desc>
        <p>
          1、
          关键帧动效，需要使用sprites雪碧图或者序列帧图进行播放和调用，实际情况最好是制作成雪碧图来减少图片多次请求。
        </p>
        <p>2、 雪碧图实现依赖于各种坐标，这种做法不够灵活</p>
        <p>
          3、
          <a href="https://www.toptal.com/developers/css/sprite-generator/" target="_blank">
            雪碧图制作
          </a>
          <f-divider type="vertical"></f-divider>
          <a href="https://tinypng.com/" target="_blank">png压缩工具</a>
        </p>
      </template>
    </f-alert>
    <f-row :gutter="16">
      <f-col span="12">
        <div id="sprites" class="rabbit" @click="click"></div>
      </f-col>
      <f-col span="12">
        <f-collapse-wrap title="代码示例">
          <f-ace-editor
            :model-value="STR"
            lang="typescript"
            readonly
            theme="sqlserver"
            height="400px"
            :snippets="false"
          ></f-ace-editor>
        </f-collapse-wrap>
      </f-col>
    </f-row>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import animation from 'bin-keyframe-animation'
import { getImageUrl } from '../util'

let images = [getImageUrl('css_sprites.png')]
let map = [
  '-10 -10',
  '-430 -10',
  '-10 -430',
  '-430 -430',
  '-850 -10',
  '-850 -430',
  '-10 -850',
  '-430 -850',
  '-850 -850',
  '-1270 -10',
  '-1270 -430',
  '-1270 -850',
  '-10 -1270',
  '-430 -1270',
  '-850 -1270',
  '-1270 -1270',
]
let repeatAnimation
let running = false
function click() {
  if (!repeatAnimation) return
  if (running) {
    running = false
    repeatAnimation.pause()
  } else {
    running = true
    repeatAnimation.restart()
  }
}

onMounted(() => {
  const el = document.getElementById('sprites')

  repeatAnimation = animation().loadImage(images).changePosition(el, map, images[0]).repeatForever()
  repeatAnimation.start(80)
  running = true
})

const STR = `
import { onMounted } from 'vue'
import animation from 'bin-keyframe-animation'
import { getImageUrl } from './util'

let images = [getImageUrl('css_sprites.png')]
let map = [
  '-10 -10',
  '-430 -10',
  '-10 -430',
  '-430 -430',
  '-850 -10',
  '-850 -430',
  '-10 -850',
  '-430 -850',
  '-850 -850',
  '-1270 -10',
  '-1270 -430',
  '-1270 -850',
  '-10 -1270',
  '-430 -1270',
  '-850 -1270',
  '-1270 -1270',
]
let repeatAnimation
let running = false
function click() {
  if (!repeatAnimation) return
  if (running) {
    running = false
    repeatAnimation.pause()
  } else {
    running = true
    repeatAnimation.restart()
  }
}

onMounted(() => {
  const el = document.getElementById('sprites')

  repeatAnimation = animation().loadImage(images).changePosition(el, map, images[0]).repeatForever()
  repeatAnimation.start(80)
  running = true
})
`
</script>

<style lang="stylus" scoped>
.rabbit {
  display: block;
  width: 400px;
  height: 400px;
  background-repeat: no-repeat;
}
</style>
