import{l as w,t as g,h as k,_ as x}from"./index-7fbf4c2e.js";import{a9 as V,aA as L,g as _,d as e,F as K,N as q,t as F,c as s,w as r,D as i,o as h,K as f,q as y,ac as S,ad as C}from"./vendor-3647c542.js";import"./chunk-f-ui-one-208e726e.js";import"./chunk-brace-c1a5251e.js";const I="/fei-admin/static/png/login-code-8c841f1c.png";const z={name:"Login",data(){return{formLogin:{username:"admin",password:"admin",captcha:"v9am"},loading:!1,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]},doodle:`:doodle {
          @grid: 1x8 / 100vmin;
        }
        @place-cell: center;
        width: @rand(40vmin, 80vmin);
        height: @rand(40vmin, 80vmin);
        transform: translate(@rand(-200%, 200%), @rand(-60%, 60%)) scale(@rand(.8, 1.8)) skew(@rand(45deg));
        clip-path: polygon(
          @r(0, 30%) @r(0, 50%),
          @r(30%, 60%) @r(0%, 30%),
          @r(60%, 100%) @r(0%, 50%),
          @r(60%, 100%) @r(50%, 100%),
          @r(30%, 60%) @r(60%, 100%),
          @r(0, 30%) @r(60%, 100%)
        );
        background: @pick(#f44336, #e91e63, #9c27b0, #673ab7, #3f51b5, #60569e, #e6437d, #ebbf4d, #00bcd4, #03a9f4, #2196f3, #009688, #5ee463, #f8e645, #ffc107, #ff5722, #43f8bf);
        opacity: @rand(.3, .8);
        position: relative;
        top: @rand(-80%, 80%);
        left: @rand(-80%, 80%);
        animation: colorChange @rand(6.1s, 16.1s) infinite @rand(-.5s, -2.5s) linear alternate;
        @keyframes colorChange {
          100% {
            left: 0;
            top: 0;
            filter: hue-rotate(360deg);
          }
        }`}},methods:{...L(k,["setToken"]),submit(){this.$refs.loginForm.validate(async t=>{if(t){try{this.loading=!0;const{data:o}=await w(this.formLogin);await this.loginSuccess(o)}catch(o){g("login/requestFailed",o)}this.loading=!1}})},async loginSuccess(t){if(t.code==="00"){const o=t.data.accessToken;await this.setToken(o);const u=this.$route.query.redirect||"/";await this.$router.push({path:u})}else g("login/requestFailed",t)}}},d=t=>(S("data-v-c1f3abd9"),t=t(),C(),t),N={class:"page-login"},T={class:"layer area"},A={class:"circles"},B={class:"g-bg"},D={class:"layer"},E={class:"content",flex:"dir:top main:justify cross:center box:justify"},U=d(()=>e("div",{class:"header"},[e("p",{class:"header-motto"},"开箱即用的中后台管理系统")],-1)),j={class:"main",flex:"dir:top main:center cross:center"},M=d(()=>e("div",{class:"page-login--logo"},[e("img",{src:x,alt:"logo"}),e("span",null,"FEI-ADMIN")],-1)),G={class:"form"},H=d(()=>e("span",{class:"login-code"},[e("img",{src:I,alt:"code"})],-1)),J=d(()=>e("div",{class:"footer"},[e("p",{class:"footer-copyright"},[y(" fei admin 简版后台管理系统vue3 "),e("a",{href:"https://github.com/ymf-930/fei-admin",target:"_blank"},"github")])],-1));function O(t,o,u,P,n,l){const c=i("f-icon"),m=i("f-input"),p=i("f-form-item"),b=i("f-button"),v=i("f-form");return h(),_("div",N,[e("div",T,[e("ul",A,[(h(),_(K,null,q(10,a=>e("li",{key:a})),64))])]),e("div",B,[e("css-doodle",null,F(n.doodle),1)]),e("div",D,[e("div",E,[U,e("div",j,[M,e("div",G,[s(v,{ref:"loginForm","label-position":"top",rules:n.rules,model:n.formLogin,size:"large"},{default:r(()=>[s(p,{prop:"username"},{default:r(()=>[s(m,{type:"text",modelValue:n.formLogin.username,"onUpdate:modelValue":o[0]||(o[0]=a=>n.formLogin.username=a),placeholder:"用户名[admin,yang]",onKeydown:f(l.submit,["enter"])},{prefix:r(()=>[s(c,{name:"user",size:"16"})]),_:1},8,["modelValue","onKeydown"])]),_:1}),s(p,{prop:"password"},{default:r(()=>[s(m,{type:"password",modelValue:n.formLogin.password,"onUpdate:modelValue":o[1]||(o[1]=a=>n.formLogin.password=a),placeholder:"密码[admin,123456]",onKeydown:f(l.submit,["enter"])},{prefix:r(()=>[s(c,{name:"lock",size:"16"})]),_:1},8,["modelValue","onKeydown"])]),_:1}),s(p,{prop:"captcha"},{default:r(()=>[s(m,{type:"text",modelValue:n.formLogin.captcha,"onUpdate:modelValue":o[2]||(o[2]=a=>n.formLogin.captcha=a),placeholder:"- - - -",style:{width:"68%"},onKeydown:f(l.submit,["enter"])},{prefix:r(()=>[s(c,{name:"bulb",size:"16"})]),_:1},8,["modelValue","onKeydown"]),H]),_:1}),s(b,{onClick:l.submit,loading:n.loading,type:"primary",class:"button-login",size:"large"},{default:r(()=>[y(" 登录 ")]),_:1},8,["onClick","loading"])]),_:1},8,["rules","model"])])]),J])])])}const Y=V(z,[["render",O],["__scopeId","data-v-c1f3abd9"]]);export{Y as default};
