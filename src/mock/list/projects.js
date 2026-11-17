import avatar from '@/assets/images/avatar/avatar05.jpeg'
import banner1 from '@/assets/images/banner/banner1.jpeg'
import banner2 from '@/assets/images/banner/banner2.jpeg'
import banner3 from '@/assets/images/banner/banner3.jpeg'
import banner4 from '@/assets/images/banner/banner4.jpeg'

export default {
  rows: [
    {
      id: '001',
      title: 'FEI UI DESIGN',
      url: 'https://ymf-930.github.io/fei-ui-design/guide/',
      desc: '基于vue3的ui组件库，内涵60+组件',
      banner: banner1,
      author: 'yangmengfei',
      avatar,
      time: '2023-03-01',
    },
    {
      id: '002',
      title: 'Fei Admin',
      url: 'https://ymf-930.github.io/fei-admin/',
      desc: '基于vue3,fei-ui-design的企业级后台管理框架',
      banner: banner2,
      author: 'yangmengfei',
      avatar,
      time: '2023-03-01',
    },
    {
      id: '003',
      title: 'Fei Editor',
      url: 'https://ymf-930.github.io/fei-editor/guide.html',
      desc: '基于vue3的代码编辑器，支持多种格式',
      banner: banner3,
      author: 'yangmengfei',
      avatar,
      time: '2023-05-23',
    }
  ],
}
