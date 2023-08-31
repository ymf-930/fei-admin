import{a9 as P,A as x,aP as E,D as a,o as f,g as k,c as t,w as n,d as e,q as m,ac as G,ad as R,k as v,aQ as S,aR as F,a as b,h as A,a0 as B}from"./vendor-19c9365f.js";import"./chunk-brace-bde7130a.js";const T="/fei-admin/static/json/animation-c630bffe.json",C="/fei-admin/static/png/apng_test-b9078a02.png",N="/fei-admin/static/png/css_sprites-3b25b99c.png",U="/fei-admin/static/png/css_sprites1-1387d590.png",M="/fei-admin/static/json/lottie-d53ae1cd.json",H="/fei-admin/static/pag/pag_test-8fcc370b.pag";function V(o){return new URL(Object.assign({"../../../../assets/images/effects/animation.json":T,"../../../../assets/images/effects/apng_test.png":C,"../../../../assets/images/effects/css_sprites.png":N,"../../../../assets/images/effects/css_sprites1.png":U,"../../../../assets/images/effects/lottie.json":M,"../../../../assets/images/effects/pag_test.pag":H})[`../../../../assets/images/effects/${o}`],self.location).href}const I=o=>(G("data-v-e4b857a9"),o=o(),R(),o),J=I(()=>e("p",null," 1、 关键帧动效，需要使用sprites雪碧图或者序列帧图进行播放和调用，实际情况最好是制作成雪碧图来减少图片多次请求。 ",-1)),L=I(()=>e("p",null,"2、 雪碧图实现依赖于各种坐标，这种做法不够灵活",-1)),q=I(()=>e("a",{href:"https://www.toptal.com/developers/css/sprite-generator/",target:"_blank"}," 雪碧图制作 ",-1)),D=I(()=>e("a",{href:"https://tinypng.com/",target:"_blank"},"png压缩工具",-1)),K=`
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
`,O={__name:"keyframe",setup(o){let i=[V("css_sprites.png")],c=["-10 -10","-430 -10","-10 -430","-430 -430","-850 -10","-850 -430","-10 -850","-430 -850","-850 -850","-1270 -10","-1270 -430","-1270 -850","-10 -1270","-430 -1270","-850 -1270","-1270 -1270"],l,s=!1;function p(){l&&(s?(s=!1,l.pause()):(s=!0,l.restart()))}return x(()=>{const r=document.getElementById("sprites");l=E().loadImage(i).changePosition(r,c,i[0]).repeatForever(),l.start(80),s=!0}),(r,_)=>{const d=a("f-divider"),u=a("f-alert"),g=a("f-col"),h=a("f-ace-editor"),$=a("f-collapse-wrap"),j=a("f-row");return f(),k("div",null,[t(u,{"show-icon":""},{desc:n(()=>[J,L,e("p",null,[m(" 3、 "),q,t(d,{type:"vertical"}),D])]),default:n(()=>[m(" 说明 ")]),_:1}),t(j,{gutter:16},{default:n(()=>[t(g,{span:"12"},{default:n(()=>[e("div",{id:"sprites",class:"rabbit",onClick:p})]),_:1}),t(g,{span:"12"},{default:n(()=>[t($,{title:"代码示例"},{default:n(()=>[t(h,{"model-value":K,lang:"typescript",readonly:"",theme:"sqlserver",height:"400px",snippets:!1})]),_:1})]),_:1})]),_:1})])}}},z=P(O,[["__scopeId","data-v-e4b857a9"]]),Q="/fei-admin/static/png/apng_test-b9078a02.png";const W={},w=o=>(G("data-v-071da9ac"),o=o(),R(),o),X=w(()=>e("p",null," 1、关键帧导出后，可以制作apng用来直接显示动画，但这种方式不受代码控制，动画速率等只能在AE中进行调整后，导出序列帧再用转换工具进行转换 ",-1)),Y=w(()=>e("p",null," 2、好处就是使用十分方便，无需编码直接当成普通图片进行引用即可，比较推荐用于背景或者icon动效这种可以不受控制的内容 ",-1)),Z=w(()=>e("a",{href:"https://www.zhangxinxu.com/sp/apng/",target:"_blank"},"APNG合成工具",-1)),ee=w(()=>e("a",{href:"https://tinypng.com/",target:"_blank"},"png压缩工具",-1)),te=w(()=>e("div",{class:"rabbit"},[e("img",{src:Q})],-1));function ae(o,i){const c=a("f-divider"),l=a("f-alert"),s=a("f-col"),p=a("f-row");return f(),k("div",null,[t(l,{"show-icon":""},{desc:n(()=>[X,Y,e("p",null,[m(" 3、 "),Z,t(c,{type:"vertical"}),ee])]),default:n(()=>[m(" 说明 ")]),_:1}),t(p,{gutter:16},{default:n(()=>[t(s,{span:"24"},{default:n(()=>[te]),_:1}),t(s,{span:"12"})]),_:1})])}const ne=P(W,[["render",ae],["__scopeId","data-v-071da9ac"]]);const y=o=>(G("data-v-8db6c75c"),o=o(),R(),o),oe=y(()=>e("p",null," 1、Lottie 是 Airbnb 开源的一套跨平台的完整的动画效果解决方案,设计师可以使用 AE 设计动画之后,使用 Lottic 提供的 Bodymovin 插件将设计好的动画导出成 JSON 格式 ",-1)),se=y(()=>e("p",null,"2、好处就是大小很小，且可以自由进行控制和使用，矢量",-1)),ie=y(()=>e("a",{href:"http://airbnb.io/lottie/#/web",target:"_blank"},"lottie docs",-1)),le=y(()=>e("a",{href:"https://github.com/airbnb/lottie-web",target:"_blank"},"lottie-web",-1)),ce=y(()=>e("a",{href:"https://lottiefiles.com/",target:"_blank"},"lottiefiles",-1)),re={flex:""},_e="https://lottie.host/25a9ea9f-2a78-446c-a9e0-9b11dcb20aee/mdJJIHHT6p.json",pe=`
// 首先需要准备好AE导出的lottie json文件，或者可以加载lottieFiles 中的网络地址
// 安装lottie-web插件进行实现，代码如下
// 更多api参考官网，可以对动画进行更精准的操作

import { ref, onMounted } from 'vue'
import { getImageUrl } from '../util'
import lottie from 'lottie-web'

const imgRef1 = ref(null)
const imgRef2 = ref(null)

const localPath = getImageUrl('animation.json')
const webPath = 'https://lottie.host/25a9ea9f-2a78-446c-a9e0-9b11dcb20aee/mdJJIHHT6p.json'

async function init() {
  lottie.loadAnimation({
    container: imgRef1.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: localPath,
  })
  lottie.loadAnimation({
    container: imgRef2.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: webPath,
  })
}

onMounted(() => {
  init()
})
`,de={__name:"lottie",setup(o){const i=v(null),c=v(null),l=V("animation.json");async function s(){S.loadAnimation({container:i.value,renderer:"svg",loop:!0,autoplay:!0,path:l}),S.loadAnimation({container:c.value,renderer:"svg",loop:!0,autoplay:!0,path:_e})}return x(()=>{s()}),(p,r)=>{const _=a("f-divider"),d=a("f-alert"),u=a("f-col"),g=a("f-ace-editor"),h=a("f-collapse-wrap"),$=a("f-row");return f(),k("div",null,[t(d,{"show-icon":""},{desc:n(()=>[oe,se,e("p",null,[m(" 3、 "),ie,t(_,{type:"vertical"}),le,t(_,{type:"vertical"}),ce])]),default:n(()=>[m(" 说明 ")]),_:1}),t($,{gutter:16},{default:n(()=>[t(u,{span:"12"},{default:n(()=>[e("div",re,[e("div",{class:"rabbit",ref_key:"imgRef1",ref:i},null,512),e("div",{class:"rabbit",ref_key:"imgRef2",ref:c},null,512)])]),_:1}),t(u,{span:"12"},{default:n(()=>[t(h,{title:"代码示例"},{default:n(()=>[t(g,{"model-value":pe,lang:"typescript",readonly:"",theme:"sqlserver",height:"400px",snippets:!1})]),_:1})]),_:1})]),_:1})])}}},fe=P(de,[["__scopeId","data-v-8db6c75c"]]),ue=e("p",null,"1、pag是腾讯推出的一套完整的动效工作流解决方案。",-1),me=e("p",null," 2、能够一键将设计师在 AE （Adobe After Effects）中制作的动效内容导出成素材文件，并快速上线应用于几乎所有的主流平台。 ",-1),ge=e("a",{href:"https://pag.art/",target:"_blank"},"官网",-1),he=e("a",{href:"https://pag.art/docs/sdk.html#wef-%E7%AB%AF%E6%8E%A5%E5%85%A5",target:"_blank"}," docs ",-1),be=`
// libpag SDK 的运行需要依赖于 libpag.js 和 libpag.wasm 文件
// 可以简单的理解为 libpag.js 是代理层，libpag.wasm 是核心层。
// libpag.wasm 的加载需要通过引入 libpag.js 后调用 PAGInit() 接口进行实例化
// 通过Npm调用之后，需要借助打包工具把 node_modules 下的 libpag/lib/libpag.wasm 文件打包到最终产物中
// 使用 locateFile 钩子返回 libpag.wasm 文件的路径，这样才能确保在网络请求中能加载到 libpag.wasm 文件

import copy from 'rollup-plugin-copy'

export default ({ mode }) => {
  const dirRoot = process.cwd()

  const env = loadEnv(mode, dirRoot)
  const isProd = "production" === 'production'

  return defineConfig({
    base: isProd ? env.VITE_PUBLIC_PATH : '/',
    plugins: [
      vue(),
      copy({
        targets: [
          {
            src: './node_modules/libpag/lib/libpag.wasm',
            dest: isProd ? 'dist/' : 'public/',
          },
        ],
        hook: isProd ? 'writeBundle' : 'buildStart',
      }),
    ],
  })
}

// 实际调用时用法示例
// 注意：因为 PAG Web 版是单线程的 SDK，所以我们不建议同屏播放多个 PAGView。具体使用方式见官方文档。
// https://pag.art/docs/wef-play-pagfile.html
import { ref, onMounted } from 'vue'
import { PAGInit } from 'libpag'
const props = defineProps({
  url: {
    type: String,
    default: '',
  },
})
const imgRef = ref(null)

async function init() {
  // 实例化 PAG
  const PAG = await PAGInit()
  // 获取 PAG 素材数据
  const buffer = await fetch(props.url).then(response => response.arrayBuffer())
  // 加载 PAG 素材为 PAGFile 对象
  const pagFile = await PAG.PAGFile.load(buffer)
  // 将画布尺寸设置为 PAGFile的尺寸
  const canvas = imgRef.value
  canvas.width = pagFile.width()
  canvas.height = pagFile.height()
  // 实例化 PAGView 对象
  const pagView = await PAG.PAGView.init(pagFile, canvas, { useScale: false })
  pagView.setRepeatCount(0)
  // 播放 PAGView
  await pagView.play()
}

onMounted(() => {
  init()
})
`,ve={__name:"pag",props:{url:{type:String,default:""}},setup(o){const i=o,c=v(null);async function l(){const s=await F(),p=await fetch(i.url).then(u=>u.arrayBuffer()),r=await s.PAGFile.load(p),_=c.value;_.width=r.width(),_.height=r.height();const d=await s.PAGView.init(r,_,{useScale:!1});d.setRepeatCount(0),await d.play()}return x(()=>{l()}),(s,p)=>{const r=a("f-divider"),_=a("f-alert"),d=a("f-col"),u=a("f-ace-editor"),g=a("f-collapse-wrap"),h=a("f-row");return f(),k("div",null,[t(_,{"show-icon":""},{desc:n(()=>[ue,me,e("p",null,[m(" 3、 "),ge,t(r,{type:"vertical"}),he])]),default:n(()=>[m(" 说明 ")]),_:1}),t(h,{gutter:16},{default:n(()=>[t(d,{span:"12"},{default:n(()=>[e("canvas",{class:"rabbit",ref_key:"imgRef",ref:c},null,512)]),_:1}),t(d,{span:"12"},{default:n(()=>[t(g,{title:"代码示例"},{default:n(()=>[t(u,{"model-value":be,lang:"typescript",readonly:"",theme:"sqlserver",height:"400px",snippets:!1})]),_:1})]),_:1})]),_:1})])}}};const we={class:"panel"},ye={class:"content-box"},Ae={__name:"index",setup(o){const i=v("tab1"),c=v([{key:"tab1",title:"关键帧"},{key:"tab2",title:"APNG"},{key:"tab3",title:"Lottie"},{key:"tab4",title:"Pag"}]);return(l,s)=>{const p=a("f-tabs"),r=a("page-wrapper");return f(),b(r,{desc:"多种动效使用方案，实际使用的时候根据实际需求进行不同方案的选择。以达到最好的动效方案。"},{default:n(()=>[e("div",we,[t(p,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=_=>i.value=_),data:c.value,type:"card"},null,8,["modelValue","data"]),e("div",ye,[i.value==="tab1"?(f(),b(z,{key:0})):A("",!0),i.value==="tab2"?(f(),b(ne,{key:1})):A("",!0),i.value==="tab3"?(f(),b(fe,{key:2})):A("",!0),i.value==="tab4"?(f(),b(ve,{key:3,url:B(V)("pag_test.pag")},null,8,["url"])):A("",!0)])])]),_:1})}}},Ie=P(Ae,[["__scopeId","data-v-3cdff6c2"]]);export{Ie as default};
