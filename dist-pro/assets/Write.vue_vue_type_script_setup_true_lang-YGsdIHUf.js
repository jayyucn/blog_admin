var s=(w,v,n)=>new Promise((c,f)=>{var y=a=>{try{r(n.next(a))}catch(p){f(p)}},m=a=>{try{r(n.throw(a))}catch(p){f(p)}},r=a=>a.done?c(a.value):Promise.resolve(a.value).then(y,m);r((n=n.apply(w,v)).next())});import{F as x}from"./Form-bS8bkTLO.js";import{u as D}from"./useForm-cxQHj52e.js";import{u as L}from"./useValidator-gozR_cIE.js";import{c as R,e as T}from"./index-_6ODb6pb.js";import{g as F}from"./index-aXfnUjh-.js";/* empty css               */import{_ as N}from"./AddButtonPermission.vue_vue_type_script_setup_true_lang-O7lXwIkk.js";import{i as B,c as E}from"./element-plus-jCRIyYSE.js";import{l as M,r as g,J as P,u as b,O as d,V as O,P as S,w as A,m as $,p as j}from"./vue-chunks-lfjuOEhN.js";const Y=M({__name:"Write",props:{currentRow:{type:Object,default:()=>null}},setup(w,{expose:v}){const{t:n}=R(),{required:c}=L(),f=w,y=o=>s(this,null,function*(){var t;const e=yield u();l({permissionList:(t=e==null?void 0:e.permissionList)==null?void 0:t.filter(k=>k.value!==o.value)})}),m=g(!1),r=P([{field:"type",label:"菜单类型",component:"RadioButton",value:0,colProps:{span:24},componentProps:{options:[{label:"目录",value:0},{label:"菜单",value:1}],on:{change:o=>s(this,null,function*(){const e=yield u();o===1?(i([{field:"component",path:"componentProps.disabled",value:!1}]),l({component:b(h)})):(i([{field:"component",path:"componentProps.disabled",value:!0}]),e.parentId===void 0?l({component:"#"}):l({component:"##"}))})}}},{field:"parentId",label:"父级菜单",component:"TreeSelect",componentProps:{nodeKey:"id",props:{label:"title",value:"id",children:"children"},highlightCurrent:!0,expandOnClickNode:!1,checkStrictly:!0,checkOnClickNode:!0,clearable:!0,on:{change:o=>s(this,null,function*(){var t;const e=yield u();o&&e.type===0?l({component:"##"}):!o&&e.type===0?l({component:"#"}):e.type===1&&l({component:(t=b(h))!=null?t:""})})}},optionApi:()=>s(this,null,function*(){return(yield F()).result.list||[]})},{field:"meta.title",label:n("menu.menuName"),component:"Input"},{field:"component",label:"组件",component:"Input",value:"#",componentProps:{disabled:!0,placeholder:"#为顶级目录，##为子目录",on:{change:o=>{h.value=o}}}},{field:"name",label:n("menu.name"),component:"Input"},{field:"meta.icon",label:n("menu.icon"),component:"Input"},{field:"path",label:n("menu.path"),component:"Input"},{field:"meta.activeMenu",label:n("menu.activeMenu"),component:"Input"},{field:"status",label:n("menu.status"),component:"Select",componentProps:{options:[{label:n("userDemo.disable"),value:0},{label:n("userDemo.enable"),value:1}]}},{field:"permissionList",label:n("menu.permission"),component:"CheckboxGroup",colProps:{span:24},formItemProps:{slots:{default:o=>{var e;return d(S,null,[(e=o==null?void 0:o.permissionList)==null?void 0:e.map(t=>d(B,{class:"mr-1",key:t.value,closable:!0,onClose:()=>y(t)},{default:()=>[t.label]})),d(T,{type:"primary",size:"small",onClick:()=>m.value=!0},{default:()=>[O("添加权限")]})])}}}},{field:"meta.hidden",label:n("menu.hidden"),component:"Switch"},{field:"meta.alwaysShow",label:n("menu.alwaysShow"),component:"Switch"},{field:"meta.noCache",label:n("menu.noCache"),component:"Switch"},{field:"meta.breadcrumb",label:n("menu.breadcrumb"),component:"Switch"},{field:"meta.affix",label:n("menu.affix"),component:"Switch"},{field:"meta.noTagsView",label:n("menu.noTagsView"),component:"Switch"},{field:"meta.canTo",label:n("menu.canTo"),component:"Switch"}]),a=P({component:[c()],path:[c()],"meta.title":[c()]}),{formRegister:p,formMethods:C}=D(),{setValues:l,getFormData:u,getElFormExpose:I,setSchema:i}=C,V=()=>s(this,null,function*(){const o=yield I();if(yield o==null?void 0:o.validate().catch(t=>{}))return yield u()}),h=g("");A(()=>f.currentRow,o=>{if(!o)return;const e=E(o);h.value=e.type===1?e.component:"",e.parentId===0?i([{field:"component",path:"componentProps.disabled",value:!0}]):i([{field:"component",path:"componentProps.disabled",value:!1}]),e.type===1?i([{field:"component",path:"componentProps.disabled",value:!1}]):i([{field:"component",path:"componentProps.disabled",value:!0}]),l(e)},{deep:!0,immediate:!0}),v({submit:V});const _=o=>s(this,null,function*(){const e=yield u();l({permissionList:[...(e==null?void 0:e.permissionList)||[],o]})});return(o,e)=>($(),j(S,null,[d(b(x),{rules:a,onRegister:b(p),schema:r},null,8,["rules","onRegister","schema"]),d(N,{modelValue:m.value,"onUpdate:modelValue":e[0]||(e[0]=t=>m.value=t),onConfirm:_},null,8,["modelValue"])],64))}});export{Y as _};
