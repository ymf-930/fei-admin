import { defineStore } from 'pinia'

const useLinks = defineStore('links', {
  state: () => ({
    links: [
      { link: 'https://ymf930.gitee.io/f-ui-one', text: 'f-ui-one', newTab: true },
      { link: 'https://ymf930.gitee.io/my-introduce-web', text: 'my-introduce-web', newTab: true },
      // { link: 'https://wangbin3162.gitee.io/bin-editor-next', text: 'bin-editor-next', newTab: true },
      // { link: 'https://wangbin3162.gitee.io/bin-charts-next', text: 'bin-charts-next', newTab: true },
      // { link: 'https://wangbin3162.gitee.io/bin-tree-org', text: 'bin-tree-org', newTab: true },
      // { link: 'https://wangbin3162.gitee.io/bin-animation', text: 'bin-animation', newTab: true },
    ],
  }),
  getters: {},
  actions: {
    async addLink(link) {
      // 新增成功
      if (this.links.findIndex(v => v.link === link.link) === -1) {
        this.links.push(link)
        return true
      }
      throw new Error('不能添加相同地址的链接')
    },
    async closeLink(link) {
      const index = this.links.findIndex(v => v.link === link)
      // 找到了这个link
      if (index > -1) {
        this.links.splice(index, 1)
        return true
      }
      return false
    },
  },
})

export default useLinks
