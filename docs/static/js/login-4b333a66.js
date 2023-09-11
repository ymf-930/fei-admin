import{l as v,t as _,h as k,_ as x}from"./index-9e7f01af.js";import{a9 as V,aP as L,D as i,g,d as e,F as K,N as q,c as t,w as n,o as h,K as f,q as y,ac as F,ad as C}from"./vendor-80b6893c.js";import"./chunk-f-ui-one-117d58dd.js";import"./chunk-brace-7735c7cc.js";import"./chunk-mockjs-ecce13f5.js";const I="/fei-admin/static/png/login-code-8c841f1c.png";const S={name:"Login",data(){return{formLogin:{username:"admin",password:"admin",captcha:"v9am"},loading:!1,rules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],captcha:[{required:!0,message:"请输入验证码",trigger:"blur"}]},doodle:`:doodle {
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
        }`}},methods:{...L(k,["setToken"]),submit(){this.$refs.loginForm.validate(async s=>{if(s){try{this.loading=!0;const{data:o}=await v(this.formLogin);await this.loginSuccess(o)}catch(o){_("login/requestFailed",o)}this.loading=!1}})},async loginSuccess(s){if(s.code==="00"){const o=s.data.accessToken;await this.setToken(o);const u=this.$route.query.redirect||"/";await this.$router.push({path:u})}else _("login/requestFailed",s)}}},d=s=>(F("data-v-ded33d54"),s=s(),C(),s),z={class:"page-login"},N={class:"layer area"},T={class:"circles"},B={class:"layer"},E={class:"content",flex:"dir:top main:justify cross:center box:justify"},U=d(()=>e("div",{class:"header"},[e("p",{class:"header-motto"},"开箱即用的中后台管理系统")],-1)),j={class:"main",flex:"dir:top main:center cross:center"},A=d(()=>e("div",{class:"page-login--logo"},[e("img",{src:x,alt:"logo"}),e("span",null,"FEI-ADMIN")],-1)),D={class:"form"},M=d(()=>e("span",{class:"login-code"},[e("img",{src:I,alt:"code"})],-1)),P=d(()=>e("div",{class:"footer"},[e("p",{class:"footer-copyright"},[y(" fei admin 简版后台管理系统vue3 "),e("a",{href:"https://github.com/ymf-930/fei-admin",target:"_blank"},"github")])],-1));function G(s,o,u,H,r,l){const c=i("f-icon"),m=i("f-input"),p=i("f-form-item"),b=i("f-button"),w=i("f-form");return h(),g("div",z,[e("div",N,[e("ul",T,[(h(),g(K,null,q(10,a=>e("li",{key:a})),64))])]),e("div",B,[e("div",E,[U,e("div",j,[A,e("div",D,[t(w,{ref:"loginForm","label-position":"top",rules:r.rules,model:r.formLogin,size:"large"},{default:n(()=>[t(p,{prop:"username"},{default:n(()=>[t(m,{type:"text",modelValue:r.formLogin.username,"onUpdate:modelValue":o[0]||(o[0]=a=>r.formLogin.username=a),placeholder:"用户名[admin,yang]",onKeydown:f(l.submit,["enter"])},{prefix:n(()=>[t(c,{name:"user",size:"16"})]),_:1},8,["modelValue","onKeydown"])]),_:1}),t(p,{prop:"password"},{default:n(()=>[t(m,{type:"password",modelValue:r.formLogin.password,"onUpdate:modelValue":o[1]||(o[1]=a=>r.formLogin.password=a),placeholder:"密码[admin,123456]",onKeydown:f(l.submit,["enter"])},{prefix:n(()=>[t(c,{name:"lock",size:"16"})]),_:1},8,["modelValue","onKeydown"])]),_:1}),t(p,{prop:"captcha"},{default:n(()=>[t(m,{type:"text",modelValue:r.formLogin.captcha,"onUpdate:modelValue":o[2]||(o[2]=a=>r.formLogin.captcha=a),placeholder:"- - - -",style:{width:"68%"},onKeydown:f(l.submit,["enter"])},{prefix:n(()=>[t(c,{name:"bulb",size:"16"})]),_:1},8,["modelValue","onKeydown"]),M]),_:1}),t(b,{onClick:l.submit,loading:r.loading,type:"primary",class:"button-login",size:"large"},{default:n(()=>[y(" 登录 ")]),_:1},8,["onClick","loading"])]),_:1},8,["rules","model"])])]),P])])])}const X=V(S,[["render",G],["__scopeId","data-v-ded33d54"]]);export{X as default};
