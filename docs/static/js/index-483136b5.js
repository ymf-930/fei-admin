import{a9 as P,A as $,aR as F,D as a,o as f,g as k,c as t,w as o,d as e,q as m,ac as G,ad as R,k as v,aO as V,aS as B,a as b,h as A,a0 as T}from"./vendor-80b6893c.js";import{g as S}from"./util-04f9aba9.js";import"./chunk-brace-7735c7cc.js";const I=n=>(G("data-v-e4b857a9"),n=n(),R(),n),j=I(()=>e("p",null," 1、 关键帧动效，需要使用sprites雪碧图或者序列帧图进行播放和调用，实际情况最好是制作成雪碧图来减少图片多次请求。 ",-1)),C=I(()=>e("p",null,"2、 雪碧图实现依赖于各种坐标，这种做法不够灵活",-1)),N=I(()=>e("a",{href:"https://www.toptal.com/developers/css/sprite-generator/",target:"_blank"}," 雪碧图制作 ",-1)),M=I(()=>e("a",{href:"https://tinypng.com/",target:"_blank"},"png压缩工具",-1)),U=`
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
`,H={__name:"keyframe",setup(n){let i=[S("css_sprites.png")],r=["-10 -10","-430 -10","-10 -430","-430 -430","-850 -10","-850 -430","-10 -850","-430 -850","-850 -850","-1270 -10","-1270 -430","-1270 -850","-10 -1270","-430 -1270","-850 -1270","-1270 -1270"],l,s=!1;function _(){l&&(s?(s=!1,l.pause()):(s=!0,l.restart()))}return $(()=>{const c=document.getElementById("sprites");l=F().loadImage(i).changePosition(c,r,i[0]).repeatForever(),l.start(80),s=!0}),(c,p)=>{const d=a("f-divider"),u=a("f-alert"),g=a("f-col"),h=a("f-ace-editor"),x=a("f-collapse-wrap"),E=a("f-row");return f(),k("div",null,[t(u,{"show-icon":""},{desc:o(()=>[j,C,e("p",null,[m(" 3、 "),N,t(d,{type:"vertical"}),M])]),default:o(()=>[m(" 说明 ")]),_:1}),t(E,{gutter:16},{default:o(()=>[t(g,{span:"12"},{default:o(()=>[e("div",{id:"sprites",class:"rabbit",onClick:_})]),_:1}),t(g,{span:"12"},{default:o(()=>[t(x,{title:"代码示例"},{default:o(()=>[t(h,{"model-value":U,lang:"typescript",readonly:"",theme:"sqlserver",height:"400px",snippets:!1})]),_:1})]),_:1})]),_:1})])}}},J=P(H,[["__scopeId","data-v-e4b857a9"]]),q="/fei-admin/static/png/apng_test-b9078a02.png";const L={},w=n=>(G("data-v-071da9ac"),n=n(),R(),n),D=w(()=>e("p",null," 1、关键帧导出后，可以制作apng用来直接显示动画，但这种方式不受代码控制，动画速率等只能在AE中进行调整后，导出序列帧再用转换工具进行转换 ",-1)),K=w(()=>e("p",null," 2、好处就是使用十分方便，无需编码直接当成普通图片进行引用即可，比较推荐用于背景或者icon动效这种可以不受控制的内容 ",-1)),O=w(()=>e("a",{href:"https://www.zhangxinxu.com/sp/apng/",target:"_blank"},"APNG合成工具",-1)),z=w(()=>e("a",{href:"https://tinypng.com/",target:"_blank"},"png压缩工具",-1)),W=w(()=>e("div",{class:"rabbit"},[e("img",{src:q})],-1));function Q(n,i){const r=a("f-divider"),l=a("f-alert"),s=a("f-col"),_=a("f-row");return f(),k("div",null,[t(l,{"show-icon":""},{desc:o(()=>[D,K,e("p",null,[m(" 3、 "),O,t(r,{type:"vertical"}),z])]),default:o(()=>[m(" 说明 ")]),_:1}),t(_,{gutter:16},{default:o(()=>[t(s,{span:"24"},{default:o(()=>[W]),_:1}),t(s,{span:"12"})]),_:1})])}const X=P(L,[["render",Q],["__scopeId","data-v-071da9ac"]]);const y=n=>(G("data-v-95d5d672"),n=n(),R(),n),Y=y(()=>e("p",null," 1、Lottie 是 Airbnb 开源的一套跨平台的完整的动画效果解决方案,设计师可以使用 AE 设计动画之后,使用 Lottic 提供的 Bodymovin 插件将设计好的动画导出成 JSON 格式 ",-1)),Z=y(()=>e("p",null,"2、好处就是大小很小，且可以自由进行控制和使用，矢量",-1)),ee=y(()=>e("a",{href:"http://airbnb.io/lottie/#/web",target:"_blank"},"lottie docs",-1)),te=y(()=>e("a",{href:"https://github.com/airbnb/lottie-web",target:"_blank"},"lottie-web",-1)),ae=y(()=>e("a",{href:"https://lottiefiles.com/",target:"_blank"},"lottiefiles",-1)),oe={flex:""},ne="https://lottie.host/25a9ea9f-2a78-446c-a9e0-9b11dcb20aee/mdJJIHHT6p.json",se=`
// 首先需要准备好AE导出的lottie json文件，或者可以加载lottieFiles 中的网络地址
// 安装lottie-web插件进行实现，代码如下
// 更多api参考官网，可以对动画进行更精准的操作

import { ref, onMounted } from 'vue'
import { getImageUrl } from '../util'
import lottie from 'lottie-web'

const imgRef1 = ref(null)
const imgRef2 = ref(null)

const localPath = getImageUrl('读书.json')
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
`,ie={__name:"lottie",setup(n){const i=v(null),r=v(null),l=S("读书.json");async function s(){V.loadAnimation({container:i.value,renderer:"svg",loop:!0,autoplay:!0,path:l}),V.loadAnimation({container:r.value,renderer:"svg",loop:!0,autoplay:!0,path:ne})}return $(()=>{s()}),(_,c)=>{const p=a("f-divider"),d=a("f-alert"),u=a("f-col"),g=a("f-ace-editor"),h=a("f-collapse-wrap"),x=a("f-row");return f(),k("div",null,[t(d,{"show-icon":""},{desc:o(()=>[Y,Z,e("p",null,[m(" 3、 "),ee,t(p,{type:"vertical"}),te,t(p,{type:"vertical"}),ae])]),default:o(()=>[m(" 说明 ")]),_:1}),t(x,{gutter:16},{default:o(()=>[t(u,{span:"12"},{default:o(()=>[e("div",oe,[e("div",{class:"rabbit",ref_key:"imgRef1",ref:i},null,512),e("div",{class:"rabbit",ref_key:"imgRef2",ref:r},null,512)])]),_:1}),t(u,{span:"12"},{default:o(()=>[t(h,{title:"代码示例"},{default:o(()=>[t(g,{"model-value":se,lang:"typescript",readonly:"",theme:"sqlserver",height:"400px",snippets:!1})]),_:1})]),_:1})]),_:1})])}}},le=P(ie,[["__scopeId","data-v-95d5d672"]]),re=e("p",null,"1、pag是腾讯推出的一套完整的动效工作流解决方案。",-1),ce=e("p",null," 2、能够一键将设计师在 AE （Adobe After Effects）中制作的动效内容导出成素材文件，并快速上线应用于几乎所有的主流平台。 ",-1),pe=e("a",{href:"https://pag.art/",target:"_blank"},"官网",-1),_e=e("a",{href:"https://pag.art/docs/sdk.html#wef-%E7%AB%AF%E6%8E%A5%E5%85%A5",target:"_blank"}," docs ",-1),de=`
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
`,fe={__name:"pag",props:{url:{type:String,default:""}},setup(n){const i=n,r=v(null);async function l(){const s=await B(),_=await fetch(i.url).then(u=>u.arrayBuffer()),c=await s.PAGFile.load(_),p=r.value;p.width=c.width(),p.height=c.height();const d=await s.PAGView.init(c,p,{useScale:!1});d.setRepeatCount(0),await d.play()}return $(()=>{l()}),(s,_)=>{const c=a("f-divider"),p=a("f-alert"),d=a("f-col"),u=a("f-ace-editor"),g=a("f-collapse-wrap"),h=a("f-row");return f(),k("div",null,[t(p,{"show-icon":""},{desc:o(()=>[re,ce,e("p",null,[m(" 3、 "),pe,t(c,{type:"vertical"}),_e])]),default:o(()=>[m(" 说明 ")]),_:1}),t(h,{gutter:16},{default:o(()=>[t(d,{span:"12"},{default:o(()=>[e("canvas",{class:"rabbit",ref_key:"imgRef",ref:r},null,512)]),_:1}),t(d,{span:"12"},{default:o(()=>[t(g,{title:"代码示例"},{default:o(()=>[t(u,{"model-value":de,lang:"typescript",readonly:"",theme:"sqlserver",height:"400px",snippets:!1})]),_:1})]),_:1})]),_:1})])}}};const ue={class:"panel"},me={class:"content-box"},ge={__name:"index",setup(n){const i=v("tab1"),r=v([{key:"tab1",title:"关键帧"},{key:"tab2",title:"APNG"},{key:"tab3",title:"Lottie"},{key:"tab4",title:"Pag"}]);return(l,s)=>{const _=a("f-tabs"),c=a("page-wrapper");return f(),b(c,{desc:"多种动效使用方案，实际使用的时候根据实际需求进行不同方案的选择。以达到最好的动效方案。"},{default:o(()=>[e("div",ue,[t(_,{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=p=>i.value=p),data:r.value,type:"card"},null,8,["modelValue","data"]),e("div",me,[i.value==="tab1"?(f(),b(J,{key:0})):A("",!0),i.value==="tab2"?(f(),b(X,{key:1})):A("",!0),i.value==="tab3"?(f(),b(le,{key:2})):A("",!0),i.value==="tab4"?(f(),b(fe,{key:3,url:T(S)("pag_test.pag")},null,8,["url"])):A("",!0)])])]),_:1})}}},we=P(ge,[["__scopeId","data-v-3cdff6c2"]]);export{we as default};