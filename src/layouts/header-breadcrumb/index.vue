<template>
  <f-breadcrumb class="header-breadcrumb" separator="/">
    <f-breadcrumb-item v-for="item in levelList" :key="item.name">
      <f-dropdown @command="handleMenuSelect" v-if="showDropdown && item.children?.length">
        <span class="breadcrumb-item">
          {{ item.title }}
          <i class="b-iconfont b-icon-down"></i>
        </span>
        <template #dropdown>
          <f-dropdown-menu>
            <f-dropdown-item
              v-for="child in item.children"
              :key="child.name"
              :name="child.name"
              :disabled="child.children.length > 0"
            >
              {{ child.title }}
            </f-dropdown-item>
          </f-dropdown-menu>
        </template>
      </f-dropdown>
      <span v-else class="no-redirect">{{ item.title }}</span>
    </f-breadcrumb-item>
  </f-breadcrumb>
</template>

<script>
import { useRoute } from 'vue-router'
import { computed, ref, watch } from 'vue'
import useMenu from '@/hooks/store/useMenu'

export default {
  name: 'HeaderBreadcrumb',
  props: {
    simple: Boolean,
  },
  setup(props) {
    const levelList = ref([])
    const route = useRoute()
    const { getBreadcrumbData, handleMenuSelect } = useMenu()
    const showDropdown = computed(() => {
      return !props.simple
    })

    watch(
      () => route.name,
      name => {
        levelList.value = getBreadcrumbData(name)
      },
      { immediate: true },
    )

    return {
      showDropdown,
      levelList,
      handleMenuSelect,
    }
  },
}
</script>

<style lang="stylus" scoped>
@import "../../assets/stylus/base/mixins.styl"
.header-breadcrumb {
  display: inline-block;
  font-size: 14px;
  color: rgba(0, 0, 0, .45);
  .breadcrumb-item {
    font-weight: normal;
    color: rgba(0, 0, 0, .65);
    outline: none;
    .b-icon-down {
      margin-left: 4px;
      font-size: 12px;
    }
    &:hover {
      color: getColor();
    }
  }
  .no-redirect {
    font-weight: normal;
    color: rgba(0, 0, 0, .45);
    cursor: text;
  }
}
</style>
