<template>
  <page-container desc="数字动画组件，现已收录至f-ui-one，此为示例">
    <f-collapse-wrap title="数字动画" shadow="none">
      <div class="count-wrap p10">
        <h1 style="font-size: 60px">
          <f-count-to
            :start-val="startVal"
            :end-val="endVal"
            :duration="duration"
            :prefix="prefix"
            :suffix="suffix"
            :autoplay="false"
            ref="countTo"
          ></f-count-to>
        </h1>
        <div flex>
          <div class="input-item">
            startVal:
            <f-input-number v-model="startVal" :min="0"></f-input-number>
          </div>
          <div class="input-item">
            endVal:
            <f-input-number v-model="endVal" :min="0"></f-input-number>
          </div>
          <div class="input-item">
            duration:
            <f-input-number v-model="duration" :min="0"></f-input-number>
          </div>
          <f-button type="primary" @click="restart">开始</f-button>
          <f-button type="info" @click="togglePlay">暂停/启动</f-button>
        </div>
        <div flex>
          <div class="input-item">
            prefix:
            <f-input v-model="prefix"></f-input>
          </div>
          <div class="input-item">
            suffix:
            <f-input v-model="suffix"></f-input>
          </div>
        </div>
      </div>
    </f-collapse-wrap>
  </page-container>
</template>

<script>
export default {
  name: 'CompCountTo',
  data() {
    return {
      startVal: 0,
      endVal: 2023,
      duration: 4000,
      prefix: '¥',
      suffix: 'rmb',
    }
  },
  methods: {
    restart() {
      this.$refs.countTo.restart()
    },
    togglePlay() {
      this.$refs.countTo.pauseResume()
    },
  },
}
</script>

<style lang="stylus" scoped>
@import "../../../assets/stylus/base/mixins.styl"
.count-wrap {
  h1 {
    color: getColor();
  }
}
.input-item {
  display: inline-flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;
  :deep(.fei-input), :deep(.fei-input-number) {
    width: 140px;
    margin-left: 6px;
  }
}
</style>
