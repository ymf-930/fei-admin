import{aw as A,f as h,V as a,o as d,c as P,A as n,p as l,D as c,j as t,b5 as R,k as w,b3 as I,b6 as V,m as v,q as y,t as E}from"./vendor-DiEn5u74.js";import{g as G}from"./util-DHyzBaps.js";import"./chunk-brace-DBBFQEfU.js";const F=`
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
`,B={__name:"keyframe",setup(_){let e=[G("css_sprites.png")],f=["-10 -10","-430 -10","-10 -430","-430 -430","-850 -10","-850 -430","-10 -850","-430 -850","-850 -850","-1270 -10","-1270 -430","-1270 -850","-10 -1270","-430 -1270","-850 -1270","-1270 -1270"],p,r=!1;function s(){p&&(r?(r=!1,p.pause()):(r=!0,p.restart()))}return h(()=>{const o=document.getElementById("sprites");p=R().loadImage(e).changePosition(o,f,e[0]).repeatForever(),p.start(80),r=!0}),(o,i)=>{const u=a("f-divider"),m=a("f-alert"),g=a("f-col"),b=a("f-ace-editor"),k=a("f-collapse-wrap"),x=a("f-row");return d(),P("div",null,[n(m,{"show-icon":""},{desc:l(()=>[i[3]||(i[3]=t("p",null," 1、 关键帧动效，需要使用sprites雪碧图或者序列帧图进行播放和调用，实际情况最好是制作成雪碧图来减少图片多次请求。 ",-1)),i[4]||(i[4]=t("p",null,"2、 雪碧图实现依赖于各种坐标，这种做法不够灵活",-1)),t("p",null,[i[0]||(i[0]=c(" 3、 ",-1)),i[1]||(i[1]=t("a",{href:"https://www.toptal.com/developers/css/sprite-generator/",target:"_blank"}," 雪碧图制作 ",-1)),n(u,{type:"vertical"}),i[2]||(i[2]=t("a",{href:"https://tinypng.com/",target:"_blank"},"png压缩工具",-1))])]),default:l(()=>[i[5]||(i[5]=c(" 说明 ",-1))]),_:1}),n(x,{gutter:16},{default:l(()=>[n(g,{span:"12"},{default:l(()=>[t("div",{id:"sprites",class:"rabbit",onClick:s})]),_:1}),n(g,{span:"12"},{default:l(()=>[n(k,{title:"代码示例"},{default:l(()=>[n(b,{"model-value":F,lang:"typescript",readonly:"",theme:"sqlserver",height:"400px",snippets:!1})]),_:1})]),_:1})]),_:1})])}}},S=A(B,[["__scopeId","data-v-e4b857a9"]]),N="/fei-admin/static/png/apng_test-BePWO4iS.png",j={};function T(_,e){const f=a("f-divider"),p=a("f-alert"),r=a("f-col"),s=a("f-row");return d(),P("div",null,[n(p,{"show-icon":""},{desc:l(()=>[e[3]||(e[3]=t("p",null," 1、关键帧导出后，可以制作apng用来直接显示动画，但这种方式不受代码控制，动画速率等只能在AE中进行调整后，导出序列帧再用转换工具进行转换 ",-1)),e[4]||(e[4]=t("p",null," 2、好处就是使用十分方便，无需编码直接当成普通图片进行引用即可，比较推荐用于背景或者icon动效这种可以不受控制的内容 ",-1)),t("p",null,[e[0]||(e[0]=c(" 3、 ",-1)),e[1]||(e[1]=t("a",{href:"https://www.zhangxinxu.com/sp/apng/",target:"_blank"},"APNG合成工具",-1)),n(f,{type:"vertical"}),e[2]||(e[2]=t("a",{href:"https://tinypng.com/",target:"_blank"},"png压缩工具",-1))])]),default:l(()=>[e[5]||(e[5]=c(" 说明 ",-1))]),_:1}),n(s,{gutter:16},{default:l(()=>[n(r,{span:"24"},{default:l(()=>[...e[6]||(e[6]=[t("div",{class:"rabbit"},[t("img",{src:N})],-1)])]),_:1}),n(r,{span:"12"})]),_:1})])}const C=A(j,[["render",T],["__scopeId","data-v-071da9ac"]]),$={flex:""},M="https://lottie.host/25a9ea9f-2a78-446c-a9e0-9b11dcb20aee/mdJJIHHT6p.json",U=`
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
`,H={__name:"lottie",setup(_){const e=w(null),f=w(null),p=G("读书.json");async function r(){I.loadAnimation({container:e.value,renderer:"svg",loop:!0,autoplay:!0,path:p}),I.loadAnimation({container:f.value,renderer:"svg",loop:!0,autoplay:!0,path:M})}return h(()=>{r()}),(s,o)=>{const i=a("f-divider"),u=a("f-alert"),m=a("f-col"),g=a("f-ace-editor"),b=a("f-collapse-wrap"),k=a("f-row");return d(),P("div",null,[n(u,{"show-icon":""},{desc:l(()=>[o[4]||(o[4]=t("p",null," 1、Lottie 是 Airbnb 开源的一套跨平台的完整的动画效果解决方案,设计师可以使用 AE 设计动画之后,使用 Lottic 提供的 Bodymovin 插件将设计好的动画导出成 JSON 格式 ",-1)),o[5]||(o[5]=t("p",null,"2、好处就是大小很小，且可以自由进行控制和使用，矢量",-1)),t("p",null,[o[0]||(o[0]=c(" 3、 ",-1)),o[1]||(o[1]=t("a",{href:"http://airbnb.io/lottie/#/web",target:"_blank"},"lottie docs",-1)),n(i,{type:"vertical"}),o[2]||(o[2]=t("a",{href:"https://github.com/airbnb/lottie-web",target:"_blank"},"lottie-web",-1)),n(i,{type:"vertical"}),o[3]||(o[3]=t("a",{href:"https://lottiefiles.com/",target:"_blank"},"lottiefiles",-1))])]),default:l(()=>[o[6]||(o[6]=c(" 说明 ",-1))]),_:1}),n(k,{gutter:16},{default:l(()=>[n(m,{span:"12"},{default:l(()=>[t("div",$,[t("div",{class:"rabbit",ref_key:"imgRef1",ref:e},null,512),t("div",{class:"rabbit",ref_key:"imgRef2",ref:f},null,512)])]),_:1}),n(m,{span:"12"},{default:l(()=>[n(b,{title:"代码示例"},{default:l(()=>[n(g,{"model-value":U,lang:"typescript",readonly:"",theme:"sqlserver",height:"400px",snippets:!1})]),_:1})]),_:1})]),_:1})])}}},J=A(H,[["__scopeId","data-v-95d5d672"]]),q=`
// libpag SDK 的运行需要依赖于 libpag.js 和 libpag.wasm 文件
// 可以简单的理解为 libpag.js 是代理层，libpag.wasm 是核心层。
// libpag.wasm 的加载需要通过引入 libpag.js 后调用 PAGInit() 接口进行实例化
// 通过Npm调用之后，需要借助打包工具把 node_modules 下的 libpag/lib/libpag.wasm 文件打包到最终产物中
// 使用 locateFile 钩子返回 libpag.wasm 文件的路径，这样才能确保在网络请求中能加载到 libpag.wasm 文件

import copy from 'rollup-plugin-copy'

export default ({ mode }) => {
  const dirRoot = process.cwd()

  const env = loadEnv(mode, dirRoot)
  const isProd = process.env.NODE_ENV === 'production'

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
`,D={__name:"pag",props:{url:{type:String,default:""}},setup(_){const e=_,f=w(null);async function p(){const r=await V(),s=await fetch(e.url).then(m=>m.arrayBuffer()),o=await r.PAGFile.load(s),i=f.value;i.width=o.width(),i.height=o.height();const u=await r.PAGView.init(o,i,{useScale:!1});u.setRepeatCount(0),await u.play()}return h(()=>{p()}),(r,s)=>{const o=a("f-divider"),i=a("f-alert"),u=a("f-col"),m=a("f-ace-editor"),g=a("f-collapse-wrap"),b=a("f-row");return d(),P("div",null,[n(i,{"show-icon":""},{desc:l(()=>[s[3]||(s[3]=t("p",null,"1、pag是腾讯推出的一套完整的动效工作流解决方案。",-1)),s[4]||(s[4]=t("p",null," 2、能够一键将设计师在 AE （Adobe After Effects）中制作的动效内容导出成素材文件，并快速上线应用于几乎所有的主流平台。 ",-1)),t("p",null,[s[0]||(s[0]=c(" 3、 ",-1)),s[1]||(s[1]=t("a",{href:"https://pag.art/",target:"_blank"},"官网",-1)),n(o,{type:"vertical"}),s[2]||(s[2]=t("a",{href:"https://pag.art/docs/sdk.html#wef-%E7%AB%AF%E6%8E%A5%E5%85%A5",target:"_blank"}," docs ",-1))])]),default:l(()=>[s[5]||(s[5]=c(" 说明 ",-1))]),_:1}),n(b,{gutter:16},{default:l(()=>[n(u,{span:"12"},{default:l(()=>[t("canvas",{class:"rabbit",ref_key:"imgRef",ref:f},null,512)]),_:1}),n(u,{span:"12"},{default:l(()=>[n(g,{title:"代码示例"},{default:l(()=>[n(m,{"model-value":q,lang:"typescript",readonly:"",theme:"sqlserver",height:"400px",snippets:!1})]),_:1})]),_:1})]),_:1})])}}},L={class:"panel"},O={class:"content-box"},K={__name:"index",setup(_){const e=w("tab1"),f=w([{key:"tab1",title:"关键帧"},{key:"tab2",title:"APNG"},{key:"tab3",title:"Lottie"},{key:"tab4",title:"Pag"}]);return(p,r)=>{const s=a("f-tabs"),o=a("page-wrapper");return d(),v(o,{desc:"多种动效使用方案，实际使用的时候根据实际需求进行不同方案的选择。以达到最好的动效方案。"},{default:l(()=>[t("div",L,[n(s,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=i=>e.value=i),data:f.value,type:"card"},null,8,["modelValue","data"]),t("div",O,[e.value==="tab1"?(d(),v(S,{key:0})):y("",!0),e.value==="tab2"?(d(),v(C,{key:1})):y("",!0),e.value==="tab3"?(d(),v(J,{key:2})):y("",!0),e.value==="tab4"?(d(),v(D,{key:3,url:E(G)("pag_test.pag")},null,8,["url"])):y("",!0)])])]),_:1})}}},X=A(K,[["__scopeId","data-v-3cdff6c2"]]);export{X as default};
