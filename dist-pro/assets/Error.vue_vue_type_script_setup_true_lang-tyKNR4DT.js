import{p as m,c as p}from"./index-_6ODb6pb.js";import{l as u,ah as d,m as x,p as _,q as r,U as o,O as g,R as v,V as y}from"./vue-chunks-lfjuOEhN.js";const f="/assets/404-dycj3xGl.svg",h="/assets/500-ARrvH3Ug.svg",T="/assets/403-EanqjtfQ.svg",k={class:"flex justify-center"},B={class:"text-center"},C=["src"],E={class:"text-14px text-[var(--el-color-info)]"},b={class:"mt-20px"},N=u({__name:"Error",props:{type:m.string.validate(e=>["404","500","403"].includes(e)).def("404")},emits:["errorClick"],setup(e,{emit:n}){const{t}=p(),s={404:{url:f,message:t("error.pageError"),buttonText:t("error.returnToHome")},500:{url:h,message:t("error.networkError"),buttonText:t("error.returnToHome")},403:{url:T,message:t("error.noPermission"),buttonText:t("error.returnToHome")}},a=e,c=n,i=()=>{c("errorClick",a.type)};return(w,H)=>{const l=d("BaseButton");return x(),_("div",k,[r("div",B,[r("img",{width:"350",src:s[e.type].url,alt:""},null,8,C),r("div",E,o(s[e.type].message),1),r("div",b,[g(l,{type:"primary",onClick:i},{default:v(()=>[y(o(s[e.type].buttonText),1)]),_:1})])])])}}});export{N as _};
