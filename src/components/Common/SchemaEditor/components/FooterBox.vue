<template>
  <div class="footer-panel">
    <div class="screen-info" flex="cross:center">
      <!-- <f-tooltip content="快捷键提示" :open-delay="500">
        <f-icon name="read" size="16" type="button" ></f-icon>
      </f-tooltip> -->
    </div>
    <div flex="cross:center">
      <f-dropdown trigger="click" @command="submitScale">
        <div class="scale-input-wp">
          <input
            v-model="inputScale"
            type="number"
            class="scale-input"
            @keydown.enter="submitScale(0)"
          />
          <span class="percent">%</span>
          <i class="f-iconfont f-icon-down"></i>
        </div>
        <template #dropdown>
          <f-dropdown-menu>
            <f-dropdown-item v-for="s in scaleList" :key="s" :name="s">
              {{ `${s}%` }}
            </f-dropdown-item>
            <f-dropdown-item :name="-1">自适应</f-dropdown-item>
          </f-dropdown-menu>
        </template>
      </f-dropdown>
      <div class="scale-slider-wp">
        <f-slider
          v-model="scale"
          :min="10"
          :max="200"
          :step="1"
          :show-tooltip="false"
          @change="submitScale"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { canvas, autoCanvasScale, setCanvasScale } from '../store/useSchema'

const scaleList = ref([200, 175, 150, 125, 100])
const inputScale = ref(20)
const scale = ref(20)

const submitScale = async val => {
  if (val === -1) {
    autoCanvasScale()
  } else {
    setCanvasScale(val === 0 ? inputScale.value : val)
  }
}

// 缩放变化后，设置自适应的缩放大小
watch(
  () => canvas.value.scale,
  s => {
    const val = parseInt((s * 100).toFixed(2))
    scale.value = val
    inputScale.value = val
  },
)
</script>

<style lang="stylus" scoped>
.footer-panel {
  display: flex;
  width: 100%;
  height: 32px;
  background: #fff;
  border-top: 1px solid #d9d9d9;
  user-select: none;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
  z-index: 90;
  .screen-info {
    > span {
      font-size: 12px;
    }
  }
  .scale-input-wp {
    position: relative;
    display: block;
    width: 58px;
    height: 20px;
    line-height: 18px;
    margin-left: 20px;
    margin-right: 20px;
    overflow: hidden;
    cursor: pointer;
    background: #fff;
    border: 1px solid #d9d9d9;
    .scale-input {
      width: 27px;
      padding-left: 5px;
      font-size: 12px;
      color: #333;
      text-align: right;
      background: transparent;
      caret-color: #bcc9d4;
      outline: 0;
      border: 0;
    }
    .percent {
      margin-left: 1px;
      color: #333;
    }
    .f-iconfont {
      font-size: 12px;
      margin-left: 2px;
      color: #bcc9d4;
    }
  }
  .scale-slider-wp {
    width: 190px;
  }

    // slider滑动条
  :deep(.fei-slider) {
    .fei-slider__runway {
      height: 2px;
      margin: 14px 0;
      background-color: #bcc9d4;
      border-radius: 1px;
    }
    .fei-slider__bar {
      height: 2px;
      background: linear-gradient(to right, #74f0ff, #2681ff);
    }
    .fei-slider__button-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      top: -9px;
      width: 20px;
      height: 20px;
      .fei-slider__button {
        width: 9px;
        height: 9px;
        &:focus, &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
