var f=(a,d,n)=>new Promise((p,i)=>{var m=s=>{try{r(n.next(s))}catch(c){i(c)}},e=s=>{try{r(n.throw(s))}catch(c){i(c)}},r=s=>s.done?p(s.value):Promise.resolve(s.value).then(m,e);r((n=n.apply(a,d)).next())});import{F as b}from"./Form-bS8bkTLO.js";import{e as h,c as v}from"./index-_6ODb6pb.js";import{u as k}from"./useForm-cxQHj52e.js";import{u as y}from"./useValidator-gozR_cIE.js";import{n as x}from"./element-plus-jCRIyYSE.js";import{l as I,J as F,O as t,P as V,r as R,m as j,W as C,u as P,y as E}from"./vue-chunks-lfjuOEhN.js";function w(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!E(a)}const J=I({__name:"RegisterForm",emits:["to-login"],setup(a,{emit:d}){const n=d,{formRegister:p,formMethods:i}=k(),{getElFormExpose:m}=i,{t:e}=v(),{required:r}=y(),s=F([{field:"title",colProps:{span:24},formItemProps:{slots:{default:()=>t("h2",{class:"text-2xl font-bold text-center w-[100%]"},[e("login.register")])}}},{field:"username",label:e("login.username"),value:"",component:"Input",colProps:{span:24},componentProps:{placeholder:e("login.usernamePlaceholder")}},{field:"password",label:e("login.password"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:e("login.passwordPlaceholder")}},{field:"check_password",label:e("login.checkPassword"),value:"",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},strength:!0,placeholder:e("login.passwordPlaceholder")}},{field:"code",label:e("login.code"),colProps:{span:24},formItemProps:{slots:{default:o=>t("div",{class:"w-[100%] flex"},[t(x,{modelValue:o.code,"onUpdate:modelValue":l=>o.code=l,placeholder:e("login.codePlaceholder")},null)])}}},{field:"register",colProps:{span:24},formItemProps:{slots:{default:()=>{let o,l;return t(V,null,[t("div",{class:"w-[100%]"},[t(h,{type:"primary",class:"w-[100%]",loading:u.value,onClick:_},w(o=e("login.register"))?o:{default:()=>[o]})]),t("div",{class:"w-[100%] mt-15px"},[t(h,{class:"w-[100%]",onClick:g},w(l=e("login.hasUser"))?l:{default:()=>[l]})])])}}}}]),c={username:[r()],password:[r()],check_password:[r()],code:[r()]},g=()=>{n("to-login")},u=R(!1),_=()=>f(this,null,function*(){const o=yield m();o==null||o.validate(l=>f(this,null,function*(){if(l)try{u.value=!0,g()}finally{u.value=!1}}))});return(o,l)=>(j(),C(P(b),{schema:s,rules:c,"label-position":"top","hide-required-asterisk":"",size:"large",class:"dark:border-1 dark:border-[var(--el-border-color)] dark:border-solid",onRegister:P(p)},null,8,["schema","onRegister"]))}});export{J as _};
