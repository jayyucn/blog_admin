var V=Object.defineProperty;var g=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var v=(l,o,e)=>o in l?V(l,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[o]=e,h=(l,o)=>{for(var e in o||(o={}))N.call(o,e)&&v(l,e,o[e]);if(g)for(var e of g(o))$.call(o,e)&&v(l,e,o[e]);return l};var y=(l,o,e)=>new Promise((p,s)=>{var d=t=>{try{i(e.next(t))}catch(r){s(r)}},n=t=>{try{i(e.throw(t))}catch(r){s(r)}},i=t=>t.done?p(t.value):Promise.resolve(t.value).then(d,n);i((e=e.apply(l,o)).next())});import{p as f,x as k}from"./index-_6ODb6pb.js";import"./CategoryDialog-R4JneCfr.js";import{f as T,Z as B}from"./element-plus-jCRIyYSE.js";import{l as D,Q as j,e as H,Z as E,r as b,w as F,u as c,ah as O,m as w,W as S,a9 as A,R as m,F as x,q as _,V as I,U as Z,X as q,O as C,T as z,G,n as P}from"./vue-chunks-lfjuOEhN.js";const Q={class:"flex justify-between items-center h-54px pl-15px pr-15px relative"},R={class:"h-54px flex justify-between items-center absolute top-[50%] right-15px translate-y-[-50%]"},L=D({__name:"Dialog",props:{modelValue:f.bool.def(!1),title:f.string.def("Dialog"),fullscreen:f.bool.def(!0),maxHeight:f.oneOfType([String,Number]).def("400px")},setup(l){const o=j(),e=l,p=H(()=>{const t=["fullscreen","title","maxHeight"],r=E(),a=h(h({},r),e);for(const u in a)t.indexOf(u)!==-1&&delete a[u];return a}),s=b(!1),d=()=>{s.value=!c(s)},n=b(k(e.maxHeight)?`${e.maxHeight}px`:e.maxHeight);F(()=>s.value,t=>y(this,null,function*(){if(yield P(),t){const r=document.documentElement.offsetHeight;n.value=`${r-55-60-(o.footer?63:0)}px`}else n.value=k(e.maxHeight)?`${e.maxHeight}px`:e.maxHeight}),{immediate:!0});const i=H(()=>({height:c(n)}));return(t,r)=>{const a=O("Icon");return w(),S(c(B),G(p.value,{fullscreen:s.value,"destroy-on-close":"","lock-scroll":"",draggable:"",top:"0","close-on-click-modal":!1,"show-close":!1}),A({header:m(({close:u})=>[_("div",Q,[x(t.$slots,"title",{},()=>[I(Z(l.title),1)]),_("div",R,[l.fullscreen?(w(),S(a,{key:0,class:"cursor-pointer is-hover !h-54px mr-10px",icon:s.value?"radix-icons:exit-full-screen":"radix-icons:enter-full-screen",color:"var(--el-color-info)","hover-color":"var(--el-color-primary)",onClick:d},null,8,["icon"])):q("",!0),C(a,{class:"cursor-pointer is-hover !h-54px",icon:"ep:close","hover-color":"var(--el-color-primary)",color:"var(--el-color-info)",onClick:u},null,8,["onClick"])])])]),default:m(()=>[C(c(T),{style:z(i.value)},{default:m(()=>[x(t.$slots,"default")]),_:3},8,["style"])]),_:2},[c(o).footer?{name:"footer",fn:m(()=>[x(t.$slots,"footer")]),key:"0"}:void 0]),1040,["fullscreen"])}}});export{L as _};
