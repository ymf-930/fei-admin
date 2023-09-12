import{a9 as j,k as z,J as P,D as c,o as _,g as V,d as l,c as o,w as s,q as v,h as y,ac as G,ad as H,j as K,F as N,N as I,a as S,t as A,e as Q}from"./vendor-80b6893c.js";import{D as X,m as Z}from"./index-9e7f01af.js";import"./chunk-brace-7735c7cc.js";import"./chunk-f-ui-one-117d58dd.js";import"./chunk-mockjs-ecce13f5.js";const T={name:"styles-editor",props:{modelValue:{type:String,default:""},showAction:{type:Boolean,default:!0},simple:{type:Boolean,default:!0},height:{type:String,default:"100px"}},emits:["update:modelValue","change"],setup(h,{emit:i}){const r=z(""),e=z("25%");function L(){i("update:modelValue",r.value),i("change",r.value)}function U(){r.value="width: 25%;",L()}function p(){const u=h.modelValue;u.includes("width: 25%;")?e.value="25%":u.includes("width: 50%;")?e.value="50%":u.includes("width: 75%;")?e.value="75%":u.includes("width: 100%;")?e.value="100%":e.value=""}return P(()=>h.modelValue,u=>{if(u===""){U();return}p(),r.value=u},{immediate:!0}),P(()=>e.value,u=>{r.value=`width: ${u};`,L()}),{width:e,styleValue:r,emitValue:L,resetStyle:U}}},B=h=>(G("data-v-5c59f34d"),h=h(),H(),h),$={key:0,class:"styles-editor-simple-wrap"},ee={class:"mb-5",flex:"cross:center"},oe=B(()=>l("span",{class:"ml-5"},"/ 4",-1)),le={key:1,class:"styles-editor-wrap"},ae={flex:"main:justify"},ne={class:"editor-box"},te={key:0,class:"action-box"},se={class:"mb-5",flex:"main:justify cross:center"},ie=B(()=>l("div",null,"样式显示",-1)),de=B(()=>l("div",{class:"mb-5"},[l("div",null,"宽度设置")],-1)),ce={class:"mb-5",flex:"cross:center"},re=B(()=>l("span",{class:"ml-5"},"/ 4",-1));function ue(h,i,r,e,L,U){const p=c("f-radio"),u=c("f-radio-group"),k=c("f-ace-editor"),w=c("f-icon"),D=c("f-tooltip"),E=c("f-space");return r.simple?(_(),V("div",$,[l("div",ee,[o(u,{modelValue:e.width,"onUpdate:modelValue":i[0]||(i[0]=R=>e.width=R),type:"button",size:"mini"},{default:s(()=>[o(p,{label:"25%"},{default:s(()=>[v("1")]),_:1}),o(p,{label:"50%"},{default:s(()=>[v("2")]),_:1}),o(p,{label:"75%"},{default:s(()=>[v("3")]),_:1}),o(p,{label:"100%"},{default:s(()=>[v("4")]),_:1})]),_:1},8,["modelValue"]),oe])])):(_(),V("div",le,[l("div",ae,[l("div",ne,[o(k,{modelValue:e.styleValue,"onUpdate:modelValue":i[1]||(i[1]=R=>e.styleValue=R),lang:"stylus",height:r.height,"font-size":14,onBlur:e.emitValue},null,8,["modelValue","height","onBlur"])]),r.showAction?(_(),V("div",te,[l("div",se,[ie,o(E,null,{default:s(()=>[o(D,{content:"输入样式表，默认控件宽度皆为25%"},{default:s(()=>[o(w,{name:"question-circle",size:18})]),_:1}),o(D,{content:"重置样式"},{default:s(()=>[o(w,{name:"sync",size:18,type:"button",onClick:e.resetStyle},null,8,["onClick"])]),_:1})]),_:1})]),de,l("div",ce,[o(u,{modelValue:e.width,"onUpdate:modelValue":i[2]||(i[2]=R=>e.width=R),type:"button",size:"mini"},{default:s(()=>[o(p,{label:"25%"},{default:s(()=>[v("1")]),_:1}),o(p,{label:"50%"},{default:s(()=>[v("2")]),_:1}),o(p,{label:"75%"},{default:s(()=>[v("3")]),_:1}),o(p,{label:"100%"},{default:s(()=>[v("4")]),_:1})]),_:1},8,["modelValue"]),re])])):y("",!0)])]))}const me=j(T,[["render",ue],["__scopeId","data-v-5c59f34d"]]),O=["blur","change"],J=["string","number"],W={length:"$length",email:"$email",phone:"$phone",idCode:"$idCode",unifiedCode:"$unifiedCode",orgInstCode:"$orgInstCode",regNo:"$regNo"},M={regexp:"$regexp",conditionRequired:"$conditionRequired",conditionNotRequired:"$conditionNotRequired",conditionNotBe:"$conditionNotBe",notSame:"$notSame",timeBound:"$timeBound"},m={required:"$required",...W,...M},_e={$required:"必填项",$length:"长度参数",$email:"邮箱参数",$phone:"手机号码",$regexp:"正则匹配",$idCode:"身份证",$unifiedCode:"统一社会信用代码",$orgInstCode:"组织机构代码",$regNo:"工商注册号",$conditionRequired:"条件必填",$conditionNotRequired:"条件必不填",$conditionNotBe:"条件不为某值",$notSame:"值不能相同",$timeBound:"日期区间"};const he={name:"async-validator",components:{DragHandle:X},props:{modelValue:{type:String,default:""},dataLength:Number,originalRules:{type:String},showLog:Boolean},emits:["update:modelValue","change"],setup(h,{emit:i}){const r=z(!1),e=z([]),{listRef:L}=Z(e,C),U=K(()=>!!p(m.required)),p=n=>e.value.find(d=>d.name===n);function u(n){return M[n]?!1:!!p(n)}function k(n){return n===m.required?"is-required":M[n.slice(1)]?"is-multiple":"is-normal"}function w(n){n.preventDefault()}function D(n,d){e.value[d].hasOwnProperty("preField")&&(e.value[d].preField=n.dataTransfer.getData("index")),e.value[d].hasOwnProperty("time")&&(e.value[d].time=n.dataTransfer.getData("index")),C(),n.preventDefault()}function E(n){n?R(m.required):(e.value=e.value.filter(d=>d.name!==m.required),C())}function R(n){if(n===m.required&&U.value)return;const d=x=>({name:x,type:J[0],trigger:O[0]});switch(n){case m.required:e.value.unshift({...d(n),message:"必填项"});break;case m.length:e.value.push({...d(n),min:1,max:h.dataLength||1/0,message:"长度必须在指定的范围内"});break;case m.email:e.value.push({...d(n),message:"邮箱格式不正确"});break;case m.phone:e.value.push({...d(n),message:"手机号格式不正确"});break;case m.idCode:e.value.push({...d(n),preField:"",message:"身份证格式不正确",ignoreCase:!0});break;case m.unifiedCode:e.value.push({...d(n),preField:"",message:"统一社会信用代码格式不正确",ignoreCase:!0});break;case m.orgInstCode:e.value.push({...d(n),preField:"",message:"组织机构代码格式不正确",ignoreCase:!0});break;case m.regNo:e.value.push({...d(n),preField:"",message:"工商注册号格式不正确",ignoreCase:!0});break;case m.regexp:e.value.push({...d(n),regexp:"",message:"正则表达式不匹配"});break;case m.conditionRequired:e.value.push({...d(n),preField:"",preFieldValue:"",message:"当前字段在前置字段条件达成下必填"});break;case m.conditionNotRequired:e.value.push({...d(n),preField:"",preFieldValue:"",message:"当前字段在前置字段条件达成下不可填写"});break;case m.conditionNotBe:e.value.push({...d(n),preField:"",preFieldValue:"",notValue:"",message:"当前字段在前置字段条件达成下不能为某值"});break;case m.notSame:e.value.push({...d(n),preField:"",message:"不能和前置字段值相同"});break;case m.timeBound:e.value.push({...d(n),time:"$now",compareMode:"gt",message:"日期不符合区间设置"});break}C()}function F(n){e.value.splice(n,1),C()}function b(){h.originalRules&&(i("update:modelValue",h.originalRules),i("change",h.originalRules))}function q(){e.value=[],r.value=!1,C()}function C(){const n=e.value.length?JSON.stringify(e.value):"";i("update:modelValue",n),i("change",n)}return P(()=>h.modelValue,n=>{if(n===""){q();return}try{e.value=JSON.parse(n),r.value=U.value}catch{console.warn("async-validator: model-value is not a right json，rules is reset"),q()}},{immediate:!0}),{rulesRef:L,SIMPLE_RULE:W,MULTIPLE_RULE:M,RULE:m,RULE_NAME_MAP:_e,TRIGGER:O,TYPE:J,hasRequiredRule:U,isRequired:r,checkRules:e,rulesClass:k,requiredChange:E,setRules:R,removeRules:F,hasSameRule:u,emitValue:C,allowDrop:w,onDrop:D,reload:b,refreshRules:q}}},g=h=>(G("data-v-12da84d7"),h=h(),H(),h),fe={class:"validator-wrap"},pe={class:"mb-10",style:{padding:"0 4px"}},ge={style:{width:"100%","line-height":"32px"},flex:"main:justify"},Ve={style:{cursor:"pointer",color:"#13c2c2"}},ve={style:{cursor:"pointer",color:"#52c41a"}},Re=g(()=>l("i",{class:"f-iconfont f-icon-reload"},null,-1)),ke=g(()=>l("i",{class:"f-iconfont f-icon-mr"},null,-1)),be={class:"check-rules-wrap",ref:"rulesRef"},Ce={class:"rules-params"},ye={class:"title-box",title:"触发条件"},Ue=g(()=>l("span",{title:"输入框为失焦事件，其余控件为改变事件"},"触发条件",-1)),we={class:"title-box",title:"取值类型"},De=g(()=>l("span",{title:"非数字类型选择字符"},"取值类型",-1)),Le={class:"rules-cfg"},Ee={key:0,class:"title-box is-message",title:"正则规则"},Ne=g(()=>l("span",null,"正则规则",-1)),qe={class:"title-box",title:"最小值"},Fe=g(()=>l("span",{style:{width:"60px"}},"最小值",-1)),Se={class:"title-box",title:"最大值"},Me=g(()=>l("span",{style:{width:"60px"}},"最大值",-1)),ze=["onDrop"],Be=g(()=>l("span",null,"前置字段",-1)),xe=["onDrop"],Ie=g(()=>l("span",null,"前置字段",-1)),Ae={class:"title-box",title:"前置字段值"},Pe=g(()=>l("span",null,"前置字段值",-1)),je=["onDrop"],Oe=g(()=>l("span",null,"前置字段",-1)),Je={class:"title-box",title:"前置字段值"},Ge=g(()=>l("span",null,"前置字段值",-1)),He={class:"title-box",title:"不是某值"},We=g(()=>l("span",null,"不是某值",-1)),Ye=["onDrop"],Ke=g(()=>l("span",null,"前置字段",-1)),Qe={class:"title-box",title:"比较模式"},Xe=g(()=>l("span",null,"比较模式",-1)),Ze=["onDrop"],Te=g(()=>l("span",{title:"比较值(yyyy-MM-dd)，可以是字段名，也可以填写$now取得当前时间"},"比较取值",-1)),$e={class:"rules-message"},eo={class:"title-box is-message",title:"错误提示"},oo=g(()=>l("span",null,"错误提示",-1)),lo={class:"delete"},ao={key:0};function no(h,i,r,e,L,U){const p=c("f-checkbox"),u=c("f-divider"),k=c("f-icon"),w=c("f-dropdown-item"),D=c("f-dropdown-menu"),E=c("f-dropdown"),R=c("f-button"),F=c("f-tooltip"),b=c("f-option"),q=c("f-select"),C=c("f-space"),n=c("f-input"),d=c("f-input-number"),x=c("drag-handle"),Y=c("f-ace-editor");return _(),V("div",fe,[l("div",pe,[l("div",ge,[l("div",null,[o(p,{modelValue:e.isRequired,"onUpdate:modelValue":i[0]||(i[0]=f=>e.isRequired=f),onChange:e.requiredChange,style:{"margin-right":"0"}},{default:s(()=>[v("必填项")]),_:1},8,["modelValue","onChange"]),o(u,{type:"vertical"}),o(E,{onCommand:e.setRules},{dropdown:s(()=>[o(D,null,{default:s(()=>[(_(!0),V(N,null,I(e.SIMPLE_RULE,(f,t)=>(_(),S(w,{key:t,name:f,disabled:e.hasSameRule(f)},{default:s(()=>[v(A(e.RULE_NAME_MAP[f]),1)]),_:2},1032,["name","disabled"]))),128))]),_:1})]),default:s(()=>[l("span",Ve,[v(" 静态规则 "),o(k,{name:"down"})])]),_:1},8,["onCommand"]),o(u,{type:"vertical"}),o(E,{onCommand:e.setRules},{dropdown:s(()=>[o(D,null,{default:s(()=>[(_(!0),V(N,null,I(e.MULTIPLE_RULE,(f,t)=>(_(),S(w,{key:t,name:f},{default:s(()=>[v(A(e.RULE_NAME_MAP[f]),1)]),_:2},1032,["name"]))),128))]),_:1})]),default:s(()=>[l("span",ve,[v(" 动态规则 "),o(k,{name:"down"})])]),_:1},8,["onCommand"])]),l("div",null,[o(F,{content:"初始化校验"},{default:s(()=>[o(R,{background:"",size:"mini",onClick:e.refreshRules},{default:s(()=>[Re]),_:1},8,["onClick"])]),_:1}),r.originalRules?(_(),S(F,{key:0,content:"恢复修改前校验"},{default:s(()=>[o(R,{background:"",size:"mini",onClick:e.reload},{default:s(()=>[ke]),_:1},8,["onClick"])]),_:1})):y("",!0)])])]),l("ul",be,[(_(!0),V(N,null,I(e.checkRules,(f,t)=>(_(),V("li",{key:t,class:"rules-list-item"},[l("div",Ce,[o(C,null,{default:s(()=>[l("div",{class:Q(["role-name",e.rulesClass(f.name)])},A(e.RULE_NAME_MAP[f.name]),3),l("div",ye,[Ue,o(q,{modelValue:e.checkRules[t].trigger,"onUpdate:modelValue":a=>e.checkRules[t].trigger=a,size:"small","append-to-body":"",onChange:e.emitValue},{default:s(()=>[o(b,{label:"失焦",value:"blur"}),o(b,{label:"改变",value:"change"})]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),l("div",we,[De,o(q,{modelValue:e.checkRules[t].type,"onUpdate:modelValue":a=>e.checkRules[t].type=a,size:"small","append-to-body":"",onChange:e.emitValue},{default:s(()=>[o(b,{label:"字符",value:"string"}),o(b,{label:"数字",value:"number"})]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])])]),_:2},1024)]),l("div",Le,[f.name===e.RULE.regexp?(_(),V("div",Ee,[Ne,o(n,{modelValue:e.checkRules[t].regexp,"onUpdate:modelValue":a=>e.checkRules[t].regexp=a,modelModifiers:{trim:!0},size:"small",placeholder:"需输入字符格式",onChange:e.emitValue},null,8,["modelValue","onUpdate:modelValue","onChange"])])):y("",!0),o(C,null,{default:s(()=>[f.name===e.RULE.length?(_(),V(N,{key:0},[l("div",qe,[Fe,o(d,{modelValue:e.checkRules[t].min,"onUpdate:modelValue":a=>e.checkRules[t].min=a,min:1,max:r.dataLength,precision:0,size:"small",onChange:e.emitValue},null,8,["modelValue","onUpdate:modelValue","max","onChange"])]),l("div",Se,[Me,o(d,{modelValue:e.checkRules[t].max,"onUpdate:modelValue":a=>e.checkRules[t].max=a,min:1,max:r.dataLength,precision:0,size:"small",onChange:e.emitValue},null,8,["modelValue","onUpdate:modelValue","max","onChange"])])],64)):y("",!0),[e.RULE.idCode,e.RULE.unifiedCode,e.RULE.orgInstCode,e.RULE.regNo].includes(f.name)?(_(),V(N,{key:1},[l("div",{class:"title-box",title:"前置字段",onDrop:a=>e.onDrop(a,t),onDragover:i[1]||(i[1]=a=>e.allowDrop(a))},[Be,o(n,{modelValue:e.checkRules[t].preField,"onUpdate:modelValue":a=>e.checkRules[t].preField=a,modelModifiers:{trim:!0},size:"small",placeholder:"前置字段",onChange:e.emitValue},null,8,["modelValue","onUpdate:modelValue","onChange"])],40,ze),o(p,{modelValue:e.checkRules[t].ignoreCase,"onUpdate:modelValue":a=>e.checkRules[t].ignoreCase=a,onChange:e.emitValue},{default:s(()=>[v("忽略大小写")]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])],64)):y("",!0),f.name===e.RULE.conditionRequired||f.name===e.RULE.conditionNotRequired?(_(),V(N,{key:2},[l("div",{class:"title-box",title:"前置字段",onDrop:a=>e.onDrop(a,t),onDragover:i[2]||(i[2]=a=>e.allowDrop(a))},[Ie,o(n,{modelValue:e.checkRules[t].preField,"onUpdate:modelValue":a=>e.checkRules[t].preField=a,modelModifiers:{trim:!0},size:"small",placeholder:"前置字段",onChange:e.emitValue},null,8,["modelValue","onUpdate:modelValue","onChange"])],40,xe),l("div",Ae,[Pe,o(n,{modelValue:e.checkRules[t].preFieldValue,"onUpdate:modelValue":a=>e.checkRules[t].preFieldValue=a,modelModifiers:{trim:!0},size:"small",placeholder:"前置字段值",onChange:e.emitValue},null,8,["modelValue","onUpdate:modelValue","onChange"])])],64)):y("",!0),f.name===e.RULE.conditionNotBe?(_(),V(N,{key:3},[l("div",{class:"title-box",title:"前置字段",onDrop:a=>e.onDrop(a,t),onDragover:i[3]||(i[3]=a=>e.allowDrop(a))},[Oe,o(n,{modelValue:e.checkRules[t].preField,"onUpdate:modelValue":a=>e.checkRules[t].preField=a,modelModifiers:{trim:!0},size:"small",placeholder:"前置字段",onChange:e.emitValue},null,8,["modelValue","onUpdate:modelValue","onChange"])],40,je),l("div",Je,[Ge,o(n,{modelValue:e.checkRules[t].preFieldValue,"onUpdate:modelValue":a=>e.checkRules[t].preFieldValue=a,modelModifiers:{trim:!0},size:"small",placeholder:"前置字段值",onChange:e.emitValue},null,8,["modelValue","onUpdate:modelValue","onChange"])]),l("div",He,[We,o(n,{modelValue:e.checkRules[t].notValue,"onUpdate:modelValue":a=>e.checkRules[t].notValue=a,modelModifiers:{trim:!0},size:"small",placeholder:"不是某值",onChange:e.emitValue},null,8,["modelValue","onUpdate:modelValue","onChange"])])],64)):y("",!0),f.name===e.RULE.notSame?(_(),V("div",{key:4,class:"title-box",title:"前置字段",onDrop:a=>e.onDrop(a,t),onDragover:i[4]||(i[4]=a=>e.allowDrop(a))},[Ke,o(n,{modelValue:e.checkRules[t].preField,"onUpdate:modelValue":a=>e.checkRules[t].preField=a,modelModifiers:{trim:!0},size:"small",placeholder:"前置字段",onChange:e.emitValue},null,8,["modelValue","onUpdate:modelValue","onChange"])],40,Ye)):y("",!0),f.name===e.RULE.timeBound?(_(),V(N,{key:5},[l("div",Qe,[Xe,o(q,{modelValue:e.checkRules[t].compareMode,"onUpdate:modelValue":a=>e.checkRules[t].compareMode=a,"append-to-body":"",size:"small",onChange:e.emitValue},{default:s(()=>[o(b,{value:"gt",label:">"}),o(b,{value:"ge",label:"≥"}),o(b,{value:"lt",label:"<"}),o(b,{value:"le",label:"≤"})]),_:2},1032,["modelValue","onUpdate:modelValue","onChange"])]),l("div",{class:"title-box",onDrop:a=>e.onDrop(a,t),onDragover:i[5]||(i[5]=a=>e.allowDrop(a))},[Te,o(n,{modelValue:e.checkRules[t].time,"onUpdate:modelValue":a=>e.checkRules[t].time=a,modelModifiers:{trim:!0},size:"small",onChange:e.emitValue},null,8,["modelValue","onUpdate:modelValue","onChange"])],40,Ze)],64)):y("",!0)]),_:2},1024)]),l("div",$e,[l("div",eo,[oo,o(n,{modelValue:e.checkRules[t].message,"onUpdate:modelValue":a=>e.checkRules[t].message=a,modelModifiers:{trim:!0},size:"small",placeholder:"错误提示",onChange:e.emitValue},null,8,["modelValue","onUpdate:modelValue","onChange"])])]),o(x,{icon:"drag-drop-line"}),l("div",lo,[o(k,{title:"移除",color:"#f5222d",name:"minus-circle",size:"20",type:"button",onClick:a=>e.removeRules(t)},null,8,["onClick"])])]))),128))],512),r.showLog?(_(),V("div",ao,[o(Y,{"model-value":JSON.stringify(e.checkRules,null,2),readonly:""},null,8,["model-value"])])):y("",!0)])}const to=j(he,[["render",no],["__scopeId","data-v-12da84d7"]]),so={name:"FuncService",components:{AsyncValidator:to,StylesEditor:me}},io={class:"p10",style:{"min-height":"200px"}},co={class:"p10"};function ro(h,i,r,e,L,U){const p=c("async-validator"),u=c("f-collapse-wrap"),k=c("f-col"),w=c("styles-editor"),D=c("f-row"),E=c("page-container");return _(),S(E,{desc:"业务相关的独立组件，包含通用校验配置，字段样式配置等，可参考进行扩展或实现新的业务组件。"},{default:s(()=>[o(D,{gutter:16},{default:s(()=>[o(k,{span:"12"},{default:s(()=>[o(u,{title:"表单校验",shadow:"none"},{default:s(()=>[l("div",io,[o(p)])]),_:1})]),_:1}),o(k,{span:"12"},{default:s(()=>[o(u,{title:"字段样式配置",shadow:"none"},{default:s(()=>[l("div",co,[o(w,{simple:!1})])]),_:1})]),_:1})]),_:1})]),_:1})}const po=j(so,[["render",ro]]);export{po as default};