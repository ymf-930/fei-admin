import{a9 as c,a as s,w as t,D as r,o as d,c as e,q as n}from"./vendor-3647c542.js";import"./chunk-brace-c1a5251e.js";const f={name:"ErrorDemo"};function p(l,m,g,k,b,i){const a=r("f-button"),o=r("router-link"),u=r("f-space"),_=r("page-container");return d(),s(_,{desc:"通用异常处理，可以根据错误列表进行触发，也可以自定义错误跳转",bg:""},{default:t(()=>[e(u,null,{default:t(()=>[e(o,{to:{path:"403"}},{default:t(()=>[e(a,{background:""},{default:t(()=>[n("触发403")]),_:1})]),_:1}),e(o,{to:{path:"404"}},{default:t(()=>[e(a,{background:""},{default:t(()=>[n("触发404")]),_:1})]),_:1}),e(o,{to:{path:"500"}},{default:t(()=>[e(a,{background:""},{default:t(()=>[n("触发500")]),_:1})]),_:1}),e(o,{to:{path:"500",query:{message:"接口调用出错了！"}}},{default:t(()=>[e(a,{background:""},{default:t(()=>[n("触发500 带消息")]),_:1})]),_:1}),e(o,{to:{path:"error",query:{message:"我是错误消息！"}}},{default:t(()=>[e(a,{background:""},{default:t(()=>[n("通用错误页面")]),_:1})]),_:1}),e(o,{to:{path:"error",query:{status:"401",message:"调用失败，请检查请求接口！"}}},{default:t(()=>[e(a,{background:""},{default:t(()=>[n("通用错误页面附加状态码")]),_:1})]),_:1}),e(o,{to:{path:"sss"}},{default:t(()=>[e(a,{background:""},{default:t(()=>[n("随机不存在菜单路由")]),_:1})]),_:1})]),_:1})]),_:1})}const q=c(f,[["render",p]]);export{q as default};
