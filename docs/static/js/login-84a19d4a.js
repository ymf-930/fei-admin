import{l as v,t as u,_ as w,h as k}from"./index-204a705f.js";import{au as x,aQ as V,V as i,o as g,b as _,j as o,F as L,E as F,A as t,p as s,D as h,a3 as p}from"./vendor-41694f7f.js";import"./chunk-fei-ui-design-93e22252.js";import"./chunk-brace-7735c7cc.js";import"./chunk-mockjs-ecce13f5.js";const K="/fei-admin/static/png/login-code-8c841f1c.png";const q={name:"Login",data(){return{formLogin:{username:"admin",password:"admin",captcha:"v9am"},loading:!1,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]},doodle:`:doodle {
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
        }`}},methods:{...V(k,["setToken"]),submit(){this.$refs.loginForm.validate(async a=>{if(a){try{this.loading=!0;const{data:e}=await v(this.formLogin);await this.loginSuccess(e)}catch(e){u("login/requestFailed",e)}this.loading=!1}})},async loginSuccess(a){if(a.code==="00"){const e=a.data.accessToken;await this.setToken(e);const f=this.$route.query.redirect||"/";await this.$router.push({path:f})}else u("login/requestFailed",a)}}},C={class:"page-login"},z={class:"layer area"},E={class:"circles"},N={class:"layer"},T={class:"content",flex:"dir:top main:justify cross:center box:justify"},j={class:"main",flex:"dir:top main:center cross:center"},A={class:"form"};function B(a,e,f,I,r,l){const d=i("f-icon"),m=i("f-input"),c=i("f-form-item"),y=i("f-button"),b=i("f-form");return g(),_("div",C,[o("div",z,[o("ul",E,[(g(),_(L,null,F(10,n=>o("li",{key:n})),64))])]),o("div",N,[o("div",T,[e[6]||(e[6]=o("div",{class:"header"},[o("p",{class:"header-motto"},"开箱即用的中后台管理系统")],-1)),o("div",j,[e[5]||(e[5]=o("div",{class:"page-login--logo"},[o("img",{src:w,alt:"logo"}),o("span",null,"FEI-ADMIN")],-1)),o("div",A,[t(b,{ref:"loginForm","label-position":"top",rules:r.rules,model:r.formLogin,size:"large"},{default:s(()=>[t(c,{prop:"username"},{default:s(()=>[t(m,{type:"text",modelValue:r.formLogin.username,"onUpdate:modelValue":e[0]||(e[0]=n=>r.formLogin.username=n),placeholder:"用户名[admin,yang]",onKeydown:p(l.submit,["enter"])},{prefix:s(()=>[t(d,{name:"user",size:"16"})]),_:1},8,["modelValue","onKeydown"])]),_:1}),t(c,{prop:"password"},{default:s(()=>[t(m,{type:"password",modelValue:r.formLogin.password,"onUpdate:modelValue":e[1]||(e[1]=n=>r.formLogin.password=n),placeholder:"密码[admin,123456]",onKeydown:p(l.submit,["enter"])},{prefix:s(()=>[t(d,{name:"lock",size:"16"})]),_:1},8,["modelValue","onKeydown"])]),_:1}),t(c,{prop:"captcha"},{default:s(()=>[t(m,{type:"text",modelValue:r.formLogin.captcha,"onUpdate:modelValue":e[2]||(e[2]=n=>r.formLogin.captcha=n),placeholder:"- - - -",style:{width:"68%"},onKeydown:p(l.submit,["enter"])},{prefix:s(()=>[t(d,{name:"bulb",size:"16"})]),_:1},8,["modelValue","onKeydown"]),e[3]||(e[3]=o("span",{class:"login-code"},[o("img",{src:K,alt:"code"})],-1))]),_:1}),t(y,{onClick:l.submit,loading:r.loading,type:"primary",class:"button-login",size:"large"},{default:s(()=>[...e[4]||(e[4]=[h(" 登录 ",-1)])]),_:1},8,["onClick","loading"])]),_:1},8,["rules","model"])])]),e[7]||(e[7]=o("div",{class:"footer"},[o("p",{class:"footer-copyright"},[h(" fei admin 简版后台管理系统vue3 "),o("a",{href:"https://github.com/ymf-930/fei-admin",target:"_blank"},"github")])],-1))])])])}const G=x(q,[["render",B],["__scopeId","data-v-ded33d54"]]);export{G as default};
