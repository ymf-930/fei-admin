import{a9 as N,m as f,E as r,o as p,f as V,w as l,c as e,j as v,b as m,t as d,a as R,e as u}from"./vendor-23852376.js";import"./chunk-brace-bd816051.js";const E={name:"StepForm",setup(){const i=f(0),t=f(null),y=f(null),o=f({payment:"wangbin3162@qq.com",collectionType:"wechat",collection:"bin@.admin",name:"Wang",money:100}),C=f({password:"123456"}),g=f(!1);function _(){!t.value||t.value.validate(s=>{s&&(i.value=1)})}function w(){i.value=0}function c(){!y.value||y.value.validate(s=>{s&&(g.value=!0,setTimeout(()=>{i.value=2,g.value=!1},1500))})}return{step:i,form1Ref:t,form2Ref:y,form1:o,rules1:{payment:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237",trigger:"change"}],collection:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u8D26\u6237",trigger:"blur"}],name:[{required:!0,message:"\u8BF7\u8F93\u5165\u6536\u6B3E\u4EBA\u59D3\u540D",trigger:"blur"}],money:[{required:!0,type:"number",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u91D1\u989D",trigger:"blur"}]},form2:C,loading:g,next:_,prev:w,submitForm:c}}},S=u("\u4E0B\u4E00\u6B65"),D=u("\u786E\u8BA4\u652F\u4ED8\u540E\uFF0C\u8D44\u91D1\u4F1A\u76F4\u63A5\u6253\u5165\u5BF9\u65B9\u8D26\u6237\uFF0C\u65E0\u6CD5\u9000\u56DE\u3002"),W=u("\u63D0 \u4EA4"),z=u("\u4E0A\u4E00\u6B65"),A=u("\u9884\u8BA12\u5C0F\u65F6\u5185\u5230\u8D26"),G=u("\u518D\u8F6C\u4E00\u7B14"),H=u("\u67E5\u770B\u8D26\u5355"),I={key:3},J=u(" \u8BF4\u660E "),K=m("p",null,"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u7F6E\u4E00\u4E9B\u8868\u5355\u5B57\u6BB5\u7684\u89E3\u91CA\u6216\u8005\u8BF4\u660E\u4FE1\u606F\u3002",-1),L=m("p",null,"\u5982\u679C\u9700\u8981\uFF0C\u8FD9\u91CC\u53EF\u4EE5\u653E\u7F6E\u4E00\u4E9B\u8868\u5355\u5B57\u6BB5\u7684\u89E3\u91CA\u6216\u8005\u8BF4\u660E\u4FE1\u606F\u3002",-1);function M(i,t,y,o,C,g){const _=r("b-step"),w=r("b-steps"),c=r("b-col"),s=r("b-row"),x=r("b-option"),h=r("b-select"),a=r("b-form-item"),k=r("b-input"),T=r("b-input-number"),b=r("b-button"),q=r("b-form"),U=r("b-alert"),B=r("b-divider"),j=r("result"),F=r("page-container");return p(),V(F,{desc:"\u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u5206\u5E03\u63D0\u4EA4\uFF0C\u786E\u4FDD\u7528\u6237\u64CD\u4F5C\u9762\u677F\u7684\u7CBE\u7B80\u3002",bg:""},{default:l(()=>[e(s,{type:"flex",justify:"center",class:"mb-20"},{default:l(()=>[e(c,{span:"12"},{default:l(()=>[e(w,{current:o.step},{default:l(()=>[e(_,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F"}),e(_,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),e(_,{title:"\u5B8C\u6210"})]),_:1},8,["current"])]),_:1})]),_:1}),o.step===0?(p(),V(s,{key:0,type:"flex",justify:"center"},{default:l(()=>[e(c,{span:"12"},{default:l(()=>[e(q,{model:o.form1,rules:o.rules1,ref:"form1Ref","label-width":"100px","label-suffix":":"},{default:l(()=>[e(a,{prop:"payment",label:"\u4ED8\u6B3E\u8D26\u6237"},{default:l(()=>[e(h,{modelValue:o.form1.payment,"onUpdate:modelValue":t[0]||(t[0]=n=>o.form1.payment=n),placeholder:"\u8BF7\u9009\u62E9\u4ED8\u6B3E\u8D26\u6237",clearable:""},{default:l(()=>[e(x,{label:"wangbin3162@qq.com",value:"wangbin3162@qq.com"})]),_:1},8,["modelValue"])]),_:1}),e(a,{prop:"collection",label:"\u6536\u6B3E\u8D26\u6237"},{default:l(()=>[e(k,{modelValue:o.form1.collection,"onUpdate:modelValue":t[2]||(t[2]=n=>o.form1.collection=n)},{prepend:l(()=>[e(h,{modelValue:o.form1.collectionType,"onUpdate:modelValue":t[1]||(t[1]=n=>o.form1.collectionType=n),style:{width:"100px"}},{default:l(()=>[e(x,{label:"wechat",value:"\u5FAE\u4FE1"}),e(x,{label:"alipay",value:"\u652F\u4ED8\u5B9D"})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])]),_:1}),e(a,{prop:"name",label:"\u6536\u6B3E\u4EBA\u540D\u79F0"},{default:l(()=>[e(k,{modelValue:o.form1.name,"onUpdate:modelValue":t[3]||(t[3]=n=>o.form1.name=n)},null,8,["modelValue"])]),_:1}),e(a,{prop:"money",label:"\u91D1\u989D"},{default:l(()=>[e(T,{max:1e4,modelValue:o.form1.money,"onUpdate:modelValue":t[4]||(t[4]=n=>o.form1.money=n),formatter:n=>`\xA5 ${n}`.replace(/B(?=(d{3})+(?!d))/g,","),parser:n=>n.replace(/¥s?|(,*)/g,"")},null,8,["modelValue","formatter","parser"])]),_:1}),e(a,null,{default:l(()=>[e(b,{type:"primary",onClick:o.next},{default:l(()=>[S]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])]),_:1})]),_:1})):v("",!0),o.step===1?(p(),V(s,{key:1,type:"flex",justify:"center"},{default:l(()=>[e(c,{span:"12"},{default:l(()=>[e(U,{"show-icon":"",closable:""},{default:l(()=>[D]),_:1}),e(q,{model:o.form2,ref:"form2Ref","label-width":"100px","label-suffix":":"},{default:l(()=>[e(a,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:l(()=>[m("label",null,d(o.form1.payment),1)]),_:1}),e(a,{label:"\u6536\u6B3E\u8D26\u6237"},{default:l(()=>[m("label",null,d(o.form1.collection),1)]),_:1}),e(a,{label:"\u6536\u6B3E\u4EBA\u540D\u79F0"},{default:l(()=>[m("label",null,d(o.form1.name),1)]),_:1}),e(a,{label:"\u91D1\u989D"},{default:l(()=>[m("label",null,"\xA5 "+d(o.form1.money),1)]),_:1}),e(B),e(a,{label:"\u652F\u4ED8\u5BC6\u7801",prop:"password",rules:{required:!0,message:"\u57DF\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}},{default:l(()=>[e(k,{modelValue:o.form2.password,"onUpdate:modelValue":t[5]||(t[5]=n=>o.form2.password=n),type:"password"},null,8,["modelValue"])]),_:1}),e(a,null,{default:l(()=>[e(b,{type:"primary",loading:o.loading,onClick:o.submitForm},{default:l(()=>[W]),_:1},8,["loading","onClick"]),e(b,{onClick:o.prev},{default:l(()=>[z]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1})]),_:1})):v("",!0),o.step===2?(p(),V(j,{key:2,status:"success"},{desc:l(()=>[A]),extra:l(()=>[e(q,{"label-width":"100px","label-suffix":":"},{default:l(()=>[e(a,{label:"\u4ED8\u6B3E\u8D26\u6237"},{default:l(()=>[m("label",null,d(o.form1.payment),1)]),_:1}),e(a,{label:"\u6536\u6B3E\u8D26\u6237"},{default:l(()=>[m("label",null,d(o.form1.collection),1)]),_:1}),e(a,{label:"\u6536\u6B3E\u4EBA\u540D\u79F0"},{default:l(()=>[m("label",null,d(o.form1.name),1)]),_:1}),e(a,{label:"\u91D1\u989D"},{default:l(()=>[m("label",null,"\xA5 "+d(o.form1.money),1)]),_:1})]),_:1})]),actions:l(()=>[e(b,{type:"primary",onClick:t[6]||(t[6]=n=>o.step=0)},{default:l(()=>[G]),_:1}),e(b,null,{default:l(()=>[H]),_:1})]),_:1})):v("",!0),o.step===0?(p(),R("div",I,[e(B),e(U,null,{desc:l(()=>[K,L]),default:l(()=>[J]),_:1})])):v("",!0)]),_:1})}const Q=N(E,[["render",M]]);export{Q as default};
