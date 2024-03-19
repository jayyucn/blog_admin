var Q=Object.defineProperty;var A=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var T=(o,r,a)=>r in o?Q(o,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[r]=a,W=(o,r)=>{for(var a in r||(r={}))Y.call(r,a)&&T(o,a,r[a]);if(A)for(var a of A(r))Z.call(r,a)&&T(o,a,r[a]);return o};var g=(o,r,a)=>new Promise((u,h)=>{var p=d=>{try{w(a.next(d))}catch(f){h(f)}},m=d=>{try{w(a.throw(d))}catch(f){h(f)}},w=d=>d.done?u(d.value):Promise.resolve(d.value).then(p,m);w((a=a.apply(o,r)).next())});import{i as ee,F as oe}from"./Form-bS8bkTLO.js";import{p as i,c as te,f as _,v as se,w as ae}from"./index-_6ODb6pb.js";import{u as ne}from"./useForm-cxQHj52e.js";import{u as E}from"./useIcon-lCc-p-lp.js";import{l as q,ah as ie,m as b,p as O,W as V,R as L,u as n,U as C,V as x,X as S,P as X,r as v,e as F,O as y,w as le,b as re,T as ce}from"./vue-chunks-lfjuOEhN.js";import{c as de,X as ue}from"./element-plus-jCRIyYSE.js";const D=q({__name:"ActionButton",props:{showSearch:i.bool.def(!0),showReset:i.bool.def(!0),showExpand:i.bool.def(!1),visible:i.bool.def(!0),searchLoading:i.bool.def(!1),resetLoading:i.bool.def(!1)},emits:["search","reset","expand"],setup(o,{emit:r}){const a=r,{t:u}=te(),h=()=>{a("search")},p=()=>{a("reset")},m=()=>{a("expand")};return(w,d)=>{const f=ie("BaseButton");return b(),O(X,null,[o.showSearch?(b(),V(f,{key:0,type:"primary",loading:o.searchLoading,icon:n(E)({icon:"ep:search"}),onClick:h},{default:L(()=>[x(C(n(u)("common.query")),1)]),_:1},8,["loading","icon"])):S("",!0),o.showReset?(b(),V(f,{key:1,loading:o.resetLoading,plain:"",icon:n(E)({icon:"ep:refresh-right"}),onClick:p},{default:L(()=>[x(C(n(u)("common.reset")),1)]),_:1},8,["loading","icon"])):S("",!0),o.showExpand?(b(),V(f,{key:2,icon:n(E)({icon:o.visible?"ep:arrow-up":"ep:arrow-down"}),text:"",onClick:m},{default:L(()=>[x(C(n(u)(o.visible?"common.shrink":"common.expand")),1)]),_:1},8,["icon"])):S("",!0)],64)}}}),ke=q({__name:"Search",props:{schema:{type:Array,default:()=>[]},isCol:i.bool.def(!1),labelWidth:i.oneOfType([String,Number]).def("auto"),layout:i.string.validate(o=>["inline","bottom"].includes(o)).def("inline"),buttonPosition:i.string.validate(o=>["left","center","right"].includes(o)).def("center"),showSearch:i.bool.def(!0),showReset:i.bool.def(!0),showExpand:i.bool.def(!1),expandField:i.string.def(""),inline:i.bool.def(!0),removeNoValueItem:i.bool.def(!0),model:{type:Object,default:()=>({})},searchLoading:i.bool.def(!1),resetLoading:i.bool.def(!1)},emits:["search","reset","register","validate"],setup(o,{expose:r,emit:a}){const u=o,h=a,p=v(!0),m=v(u.model),w=F(()=>{const e=n(c);let t=de(e.schema);if(e.showExpand&&e.expandField&&!n(p)){const s=_(t,l=>l.field===e.expandField);t.map((l,K)=>(K>=s?l.hidden=!0:l.hidden=!1,l))}return e.layout==="inline"&&(t=t.concat([{field:"action",formItemProps:{labelWidth:"0px",slots:{default:()=>y("div",null,[y(D,{showSearch:e.showSearch,showReset:e.showReset,showExpand:e.showExpand,searchLoading:e.searchLoading,resetLoading:e.resetLoading,visible:p.value,onExpand:N,onReset:I,onSearch:P},null)]),label:()=>y("span",null,[x(" ")])}}}])),t}),{formRegister:d,formMethods:f}=ne(),{getElFormExpose:k,getFormData:z,getFormExpose:U}=f,$=v({}),R=v({}),c=F(()=>{const e=W({},u);return Object.assign(e,n(R)),e}),G=(e={})=>{R.value=Object.assign(n(R),e),$.value=e},B=v([]);le(()=>n(w),(...t)=>g(this,[...t],function*(e=[]){m.value=ee(e,n(m)),B.value=e}),{immediate:!0,deep:!0});const j=()=>g(this,null,function*(){const e=yield z();return n(c).removeNoValueItem?Object.keys(e).reduce((t,s)=>{const l=e[s];return se(l)||(ae(l)?Object.keys(l).length>0&&(t[s]=l):t[s]=l),t},{}):e}),P=()=>g(this,null,function*(){const e=yield k();yield e==null?void 0:e.validate(t=>g(this,null,function*(){if(t){const s=yield j();h("search",s)}}))}),I=()=>g(this,null,function*(){const e=yield k();e==null||e.resetFields();const t=yield j();h("reset",t)}),H=F(()=>({textAlign:n(c).buttonPosition})),N=()=>g(this,null,function*(){p.value=!n(p)}),M={getElFormExpose:k,setProps:G,setSchema:e=>{const{schema:t}=n(c);for(const s of t)for(const l of e)s.field===l.field&&ue(s,l.path,l.value)},setValues:(...t)=>g(this,[...t],function*(e={}){m.value=Object.assign(u.model,n(m),e);const s=yield U();s==null||s.setValues(e)}),delSchema:e=>{const{schema:t}=n(c),s=_(t,l=>l.field===e);s>-1&&t.splice(s,1)},addSchema:(e,t)=>{const{schema:s}=n(c);if(t!==void 0){s.splice(t,0,e);return}s.push(e)}};re(()=>{h("register",M)}),r(M);const J=(e,t,s)=>{h("validate",e,t,s)};return(e,t)=>(b(),O(X,null,[y(n(oe),{model:m.value,"is-custom":!1,"label-width":c.value.labelWidth,"hide-required-asterisk":"",inline:c.value.inline,"is-col":c.value.isCol,schema:B.value,onRegister:n(d),onValidate:J},null,8,["model","label-width","inline","is-col","schema","onRegister"]),o.layout==="bottom"?(b(),O("div",{key:0,style:ce(H.value)},[y(D,{"show-reset":c.value.showReset,"show-search":c.value.showSearch,"show-expand":c.value.showExpand,"search-loading":c.value.searchLoading,"reset-loading":c.value.resetLoading,onExpand:N,onReset:I,onSearch:P},null,8,["show-reset","show-search","show-expand","search-loading","reset-loading"])],4)):S("",!0)],64))}});export{ke as _};
