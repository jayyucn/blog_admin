var c=(l,m,o)=>new Promise((i,a)=>{var n=e=>{try{t(o.next(e))}catch(r){a(r)}},u=e=>{try{t(o.throw(e))}catch(r){a(r)}},t=e=>e.done?i(e.value):Promise.resolve(e.value).then(n,u);t((o=o.apply(l,m)).next())});import{_ as d}from"./Detail.vue_vue_type_script_setup_true_lang-0A5-lBnX.js";import{_ as x}from"./ContentDetailWrap.vue_vue_type_script_setup_true_lang-Y4vTH0h4.js";import{c as B}from"./index-_6ODb6pb.js";import{l as g,aB as D,aM as k,r as v,ah as w,m as b,W as C,R as p,u as s,U as R,V as T,O as f}from"./vue-chunks-lfjuOEhN.js";import{c as $}from"./index-cD8q9CAU.js";import"./Descriptions-qz0YGORT.js";import"./el-tooltip-w40geAFS.js";/* empty css                  *//* empty css               */import"./element-plus-jCRIyYSE.js";/* empty css               *//* empty css                */const j=g({__name:"ExampleDetail",setup(l){const{push:m,go:o}=D(),{query:i}=k(),{t:a}=B(),n=v(null);return c(this,null,function*(){const t=yield $(i.id);t&&(n.value=t.result)}),(t,e)=>{const r=w("BaseButton");return b(),C(s(x),{title:s(a)("exampleDemo.detail"),onBack:e[1]||(e[1]=_=>s(m)("/example/example-page"))},{header:p(()=>[f(r,{onClick:e[0]||(e[0]=_=>s(o)(-1))},{default:p(()=>[T(R(s(a)("common.back")),1)]),_:1})]),default:p(()=>[f(d,{"current-row":n.value},null,8,["current-row"])]),_:1},8,["title"])}}});export{j as default};
