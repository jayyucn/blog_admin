var ge=Object.defineProperty;var U=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var Z=(e,n,t)=>n in e?ge(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,E=(e,n)=>{for(var t in n||(n={}))N.call(n,t)&&Z(e,t,n[t]);if(U)for(var t of U(n))ee.call(n,t)&&Z(e,t,n[t]);return e};var L=(e,n)=>{var t={};for(var r in e)N.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(e!=null&&U)for(var r of U(e))n.indexOf(r)<0&&ee.call(e,r)&&(t[r]=e[r]);return t};var V=(e,n,t)=>new Promise((r,s)=>{var b=d=>{try{f(t.next(d))}catch(a){s(a)}},u=d=>{try{f(t.throw(d))}catch(a){s(a)}},f=d=>d.done?r(d.value):Promise.resolve(d.value).then(b,u);f((t=t.apply(e,n)).next())});import{l as ce,r as P,w as F,ah as he,m as xe,W as Te,u as p,O as S,G as y,e as te,b as Oe,_ as Ee,$ as Se,y as ve,P as Ce}from"./vue-chunks-lfjuOEhN.js";import{p as x,A as Ie,c as Re,q as _e,r as oe,t as me,b as ke,f as Ae,_ as Pe}from"./index-_6ODb6pb.js";import"./CategoryDialog-R4JneCfr.js";/* empty css               *//* empty css                  *//* empty css               *//* empty css                    */import{g as ye}from"./el-radio-button-mwcem1Gu.js";/* empty css                        *//* empty css                  */import"./el-tooltip-w40geAFS.js";/* empty css                   *//* empty css                *//* empty css                    */import{I as De}from"./InputPassword-QUgYYeJ3.js";import{_ as we}from"./style.css_vue_type_style_index_0_src_true_lang-G2mSx5xM.js";import{_ as Me}from"./JsonEditor.vue_vue_type_script_setup_true_lang-783kQrj-.js";import{I as Ue}from"./IconPicker-4IQExjbc.js";import{_ as Be}from"./Category.vue_vue_type_style_index_0_lang-LgxT6iqv.js";import{_ as Le}from"./Tags.vue_vue_type_style_index_0_lang-PhaqOTcr.js";import{J as ne,l as re,n as Ve,K as Ge,s as Fe,L as je,M as Ke,F as We,N as qe,O as $e,P as He,Q as Ye,R as Xe,S as ze,p as Je,T as Qe,U as Ze,V as Ne,A as et,W as j,X as K,w as tt,v as ot,x as nt,y as rt,m as st,z as at,Y as lt,q as ct,r as dt,t as it}from"./element-plus-jCRIyYSE.js";const ut={mermaid:{text:"图表",icon:"v-md-icon-mermaid",innerWidth:"100px",outerWidth:"100px",menus:{mode:"panel",itemWidth:"100px",rowNum:5,items:[{text:"mermaid教程",action(){window.open("https://mermaid.nodejs.cn/ecosystem/tutorials.html","_blank")}},{text:"流程图",action(e){e.insert(function(){const n="```mermaid\nflowchart TB\n",t=`c1-->a2
subgraph one
a1-->a2
end
subgraph two
b1-->b2
end
subgraph three
c1-->c2
end
one --> two
three --> two
two --> c2`;return{text:n+t+"\n```",selected:t}})}},{text:"思维导图",action(e){e.insert(function(){const n="```mermaid\nmindmap\n",t=`root((mindmap))
  Origins
    Long history
    ::icon(fa fa-book)
    Popularisation
      British popular psychology author Tony Buzan
  Research
    On effectiveness<br/>and features
    On Automatic creation
      Uses
          Creative techniques
          Strategic planning
          Argument mapping
  Tools
    Pen and paper
    Mermaid`;return{text:n+t+"\n```",selected:t}})}},{text:"状态图",action(e){e.insert(function(){const n=`\`\`\`mermaid
---
title: Simple sample
---
stateDiagram-v2
`,t=`    [*] --> Still
    Still --> [*]

    Still --> Moving
    Moving --> Still
    Moving --> Crash
    Crash --> [*]`;return{text:n+t+"\n```",selected:t}})}},{text:"甘特图",action(e){e.insert(function(){const n="```mermaid\ngantt\n",t=`
    title A Gantt Diagram
    dateFormat YYYY-MM-DD
    section Section
        A task          :a1, 2014-01-01, 30d
        Another task    :after a1, 20d
    section Another
        Task in Another :2014-01-12, 12d
        another task    :24d`;return{text:n+t+"\n```",selected:t}})}},{text:"象限图",action(e){e.insert(function(){const n="```mermaid\nquadrantChart\n",t=`title Reach and engagement of campaigns
x-axis Low Reach --> High Reach
y-axis Low Engagement --> High Engagement
quadrant-1 We should expand
quadrant-2 Need to promote
quadrant-3 Re-evaluate
quadrant-4 May be improved
Campaign A: [0.3, 0.6]
Campaign B: [0.45, 0.23]
Campaign C: [0.57, 0.69]
Campaign D: [0.78, 0.34]
Campaign E: [0.40, 0.34]
Campaign F: [0.35, 0.78]`;return{text:n+t+"\n```",selected:t}})}},{text:"时间线图",action(e){e.insert(function(){const n="```mermaid\ntimeline\n",t=`
    title History of Social Media Platform
    2002 : LinkedIn
    2004 : Facebook
         : Google
    2005 : Youtube
    2006 : Twitter`;return{text:n+t+"\n```",selected:t}})}},{text:"框图",action(e){e.insert(function(){const n="```mermaid\nblock-beta\n",t=`columns 1
  db(("DB"))
  blockArrowId6<["&nbsp;&nbsp;&nbsp;"]>(down)
  block:ID
    A
    B["A wide one in the middle"]
    C
  end
  space
  D
  ID --> D
  C --> D
  style B fill:#969,stroke:#333,stroke-width:4px`;return{text:n+t+"\n```",selected:t}})}},{text:"柱状图",action(e){e.insert(function(){const n="```mermaid\nxychart-beta\n",t=`
    title "Sales Revenue"
    x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
    y-axis "Revenue (in $)" 4000 --> 11000
    bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]
    line [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, 8500, 7000, 6000]`;return{text:n+t+"\n```",selected:t}})}},{text:"折线图",action(e){e.insert(function(){const n="```mermaid\nmindmap\n",t=`root((mindmap))
  Origins
    Long history
    ::icon(fa fa-book)
    Popularisation
      British popular psychology author Tony Buzan
  Research
    On effectiveness<br/>and features
    On Automatic creation
      Uses
          Creative techniques
          Strategic planning
          Argument mapping
  Tools
    Pen and paper
    Mermaid`;return{text:n+t+"\n```",selected:t}})}}]}},tips:{title:"插入提示",icon:"v-md-icon-tips",menus:[{text:"提示",action(e){e.insert(function(){const n=`::: tip 提示
`,t="tip here..";return{text:n+t+`
:::`,selected:t}})}},{text:"警告",action(e){e.insert(function(){const n=`::: danger 警告
`,t="tip here..";return{text:n+t+`
:::`,selected:t}})}},{text:"详细信息",action(e){e.insert(function(){const n=`::: details 详情
`,t="tip here..";return{text:n+t+`
:::`,selected:t}})}},{text:"注意",action(e){e.insert(function(){const n=`::: warning 注意
`,t="tip here..";return{text:n+t+`
:::`,selected:t}})}}]}},ft=ce({__name:"MarkdownEditor",props:{modelValue:x.string.def("")},emits:["change","update:modelValue"],setup(e,{emit:n}){const t=e,r=n,s=P("");F(()=>t.modelValue,f=>{f!==p(s)&&(s.value=f)},{immediate:!0}),F(()=>s.value,f=>{r("update:modelValue",f)});function b(f,d,a){return V(this,null,function*(){const h=a[0],i=yield Ie.Common.postStaticApi({file:h,name:h.name});d({url:i.url,desc:""})})}const u=P(ut);return(f,d)=>{const a=he("v-md-editor");return xe(),Te(a,{modelValue:s.value,"onUpdate:modelValue":d[0]||(d[0]=h=>s.value=h),"disabled-menus":[],"left-toolbar":"undo redo clear | h bold italic strikethrough quote | ul ol table | tips hr | todo-list | link image code | mermaid ",toolbar:u.value,onUploadImage:b,height:"500px"},null,8,["modelValue","toolbar"])}}}),se={RadioGroup:ne,RadioButton:ne,CheckboxGroup:re,CheckboxButton:re,Input:Ve,Autocomplete:Ge,InputNumber:Fe,Select:je,Cascader:Ke,Switch:We,Slider:qe,TimePicker:$e,DatePicker:He,Rate:Ye,ColorPicker:Xe,Transfer:ze,Divider:Je,TimeSelect:Qe,SelectV2:Ze,InputPassword:De,Editor:we,MarkdownEditor:ft,TreeSelect:Ne,Category:Be,Upload:et,JsonEditor:Me,IconPicker:Ue,Tags:Le};var g=(e=>(e.RADIO_GROUP="RadioGroup",e.RADIO_BUTTON="RadioButton",e.CHECKBOX_GROUP="CheckboxGroup",e.CHECKBOX_BUTTON="CheckboxButton",e.INPUT="Input",e.AUTOCOMPLETE="Autocomplete",e.INPUT_NUMBER="InputNumber",e.SELECT="Select",e.CASCADER="Cascader",e.SWITCH="Switch",e.SLIDER="Slider",e.TIME_PICKER="TimePicker",e.DATE_PICKER="DatePicker",e.RATE="Rate",e.COLOR_PICKER="ColorPicker",e.TRANSFER="Transfer",e.DIVIDER="Divider",e.TIME_SELECT="TimeSelect",e.SELECT_V2="SelectV2",e.INPUT_PASSWORD="InputPassword",e.EDITOR="Editor",e.MARKDOWN_EDITOR="MarkdownEditor",e.TREE_SELECT="TreeSelect",e.CATEGORY="Category",e.UPLOAD="Upload",e.JSON_EDITOR="JsonEditor",e.ICON_PICKER="IconPicker",e.Tags="Tags",e))(g||{});const{t:B}=Re(),ae=e=>{var r,s;const n=[g.INPUT,g.AUTOCOMPLETE,g.INPUT_NUMBER,g.INPUT_PASSWORD],t=[g.SELECT,g.TIME_PICKER,g.DATE_PICKER,g.TIME_SELECT,g.SELECT_V2];return n.includes(e==null?void 0:e.component)?{placeholder:B("common.inputText")}:t.includes(e==null?void 0:e.component)?["datetimerange","daterange","monthrange","datetimerange","daterange"].includes(((r=e==null?void 0:e.componentProps)==null?void 0:r.type)||((s=e==null?void 0:e.componentProps)==null?void 0:s.isRange))?{startPlaceholder:B("common.startTimeText"),endPlaceholder:B("common.endTimeText"),rangeSeparator:"-"}:{placeholder:B("common.selectText")}:{}},pt=(e={})=>E(E({},e.span?{}:{xs:24,sm:12,md:12,lg:12,xl:12}),e),le=e=>{var s;const n=((s=e==null?void 0:e.componentProps)==null?void 0:s.on)||{},t={};for(const b in n)n[b]&&(t[`on${me(b)}`]=(...u)=>{n[b](...u)});const r=E(E({clearable:!0},e.componentProps),t);return r.slots&&delete r.slots,r.on&&delete r.on,r},bt=(e={})=>{const n={};for(const t in e)e[t]&&(_e(e[t])?n[oe(t)]=(...r)=>{var s;return(s=e[t])==null?void 0:s.call(e,...r)}:n[oe(t)]=()=>e[t]);return n},gt=(e,n)=>{const t=E({},n);return e.map(r=>{if(r.remove)delete t[r.field];else if(r.component!=="Divider"){const s=j(t,r.field);K(t,r.field,s!==void 0?j(t,r.field):r.value!==void 0?r.value:void 0)}}),t},ht=()=>{const e=t=>{var f,d,a,h;const r=t==null?void 0:t.componentProps,s=(f=r==null?void 0:r.slots)==null?void 0:f.optionGroupDefault,b=(d=r==null?void 0:r.props)==null?void 0:d.label,u=(a=r==null?void 0:r.props)==null?void 0:a.key;return(h=r==null?void 0:r.options)==null?void 0:h.map(i=>{var C;return(C=i==null?void 0:i.options)!=null&&C.length?s?s(i):S(tt,{label:i[b||"label"],key:i[u||"key"]},{default:()=>{var _;return(_=i==null?void 0:i.options)==null?void 0:_.map(v=>n(t,v))}}):n(t,i)})},n=(t,r)=>{var a,h,i,C;const s=t.componentProps,b=(a=s==null?void 0:s.props)==null?void 0:a.label,u=(h=s==null?void 0:s.props)==null?void 0:h.value,f=(i=s==null?void 0:s.props)==null?void 0:i.key,d=(C=s.slots)==null?void 0:C.optionDefault;return S(ot,y(r,{key:r[f||"key"],label:r[b||"label"],value:r[u||"value"]}),{default:()=>d?d(r):void 0})};return{renderSelectOptions:e}},xt=()=>({renderRadioOptions:n=>{var f,d,a,h;const t=n==null?void 0:n.componentProps,r=((f=t==null?void 0:t.props)==null?void 0:f.value)||"value",s=((d=t==null?void 0:t.props)==null?void 0:d.label)||"label",b=((a=t==null?void 0:t.props)==null?void 0:a.disabled)||"disabled",u=n.component===g.RADIO_GROUP?nt:rt;return(h=t==null?void 0:t.options)==null?void 0:h.map(i=>{const v=i,{value:C}=v,_=L(v,["value"]);return S(u,y(_,{disabled:i[b||"disabled"],label:i[r||"value"]}),{default:()=>[i[s||"label"]]})})}}),Tt=()=>({renderCheckboxOptions:n=>{var f,d,a,h;const t=n==null?void 0:n.componentProps,r=((f=t==null?void 0:t.props)==null?void 0:f.value)||"value",s=((d=t==null?void 0:t.props)==null?void 0:d.label)||"label",b=((a=t==null?void 0:t.props)==null?void 0:a.disabled)||"disabled",u=n.component===g.CHECKBOX_GROUP?st:at;return(h=t==null?void 0:t.options)==null?void 0:h.map(i=>{const v=i,{value:C}=v,_=L(v,["value"]);return S(u,y(_,{disabled:i[b||"disabled"],label:i[r||"value"]}),{default:()=>[i[s||"label"]]})})}});function G(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ve(e)}const{renderSelectOptions:Ot}=ht(),{renderRadioOptions:Et}=xt(),{renderCheckboxOptions:St}=Tt(),{getPrefixCls:vt}=ke(),Ct=vt("form"),It=ce({name:"Form",props:{schema:{type:Array,default:()=>[]},isCol:x.bool.def(!0),model:{type:Object,default:()=>({})},autoSetPlaceholder:x.bool.def(!0),isCustom:x.bool.def(!1),labelWidth:x.oneOfType([String,Number]).def("auto"),rules:{type:Object,default:()=>({})},labelPosition:x.oneOf(["left","right","top"]).def("right"),labelSuffix:x.string.def(""),hideRequiredAsterisk:x.bool.def(!1),requireAsteriskPosition:x.oneOf(["left","right"]).def("left"),showMessage:x.bool.def(!0),inlineMessage:x.bool.def(!1),statusIcon:x.bool.def(!1),validateOnRuleChange:x.bool.def(!0),size:{type:String,default:void 0},disabled:x.bool.def(!1),scrollToError:x.bool.def(!1),scrollToErrorOffset:x.oneOfType([Boolean,Object]).def(void 0)},emits:["register"],setup(e,{slots:n,expose:t,emit:r}){const s=P(),b=P({}),u=te(()=>{const o=E({},e);return Object.assign(o,p(b)),o}),f=P({}),d=P({}),a=P(e.model);Oe(()=>{var o;r("register",(o=p(s))==null?void 0:o.$parent,p(s))});const h=(o={})=>{a.value=Object.assign(p(a),o)},i=(o={})=>{b.value=Object.assign(p(b),o)},C=o=>{const{schema:c}=p(u),l=Ae(c,O=>O.field===o);l>-1&&c.splice(l,1)},_=(o,c)=>{const{schema:l}=p(u);if(c!==void 0){l.splice(c,0,o);return}l.push(o)},v=o=>{const{schema:c}=p(u);for(const l of c)for(const O of o)l.field===O.field&&K(l,O.path,O.value)},de=(o,c)=>V(this,null,function*(){const l=yield o();v([{field:c.field,path:c.component===g.TREE_SELECT?"componentProps.data":"componentProps.options",value:l}])}),ie=o=>p(f)[o],ue=o=>p(d)[o],W=(o,c)=>{f.value[c]=o},fe=(o,c)=>{d.value[c]=o};t({setValues:h,formModel:a,setProps:i,delSchema:C,addSchema:_,setSchema:v,getComponentExpose:ie,getFormItemExpose:ue}),F(()=>p(u).schema,(o=[])=>{a.value=gt(o,p(a))},{immediate:!0,deep:!0});const pe=()=>{let o;const{isCol:c}=p(u);return c?S(ct,{gutter:20},G(o=q())?o:{default:()=>[o]}):q()},q=()=>{const{schema:o=[],isCol:c}=p(u);return o.filter(l=>!l.remove&&!l.hidden).map(l=>{let O;const w=l.component==="Divider",M=se.Divider;return w?S(M,E({contentPosition:"left"},l.componentProps),{default:()=>[l==null?void 0:l.label]}):c?S(dt,pt(l.colProps),G(O=$(l))?O:{default:()=>[O]}):$(l)})},$=o=>{var l,O,w,M;o.optionApi&&de(o.optionApi,o);const c={default:()=>{var m,k,A,H,Y;if((k=(m=o==null?void 0:o.formItemProps)==null?void 0:m.slots)!=null&&k.default)return(H=(A=o==null?void 0:o.formItemProps)==null?void 0:A.slots)==null?void 0:H.default(a.value);{const X=se[o.component],{autoSetPlaceholder:z}=p(u),I=((Y=o==null?void 0:o.componentProps)==null?void 0:Y.slots)||{},D=E({},bt(I));return o.component===g.SELECT&&(D.default=I.default?()=>{var T;return I.default(p((T=o==null?void 0:o.componentProps)==null?void 0:T.options))}:()=>Ot(o)),o.component===g.SELECT_V2&&I.default&&(D.default=({item:T})=>I.default(T)),(o.component===g.RADIO_GROUP||o.component===g.RADIO_BUTTON)&&(D.default=I.default?()=>{var T;return I.default(p((T=o==null?void 0:o.componentProps)==null?void 0:T.options))}:()=>Et(o)),(o.component===g.CHECKBOX_GROUP||o.component===g.CHECKBOX_BUTTON)&&(D.default=I.default?()=>{var T;return I.default(p((T=o==null?void 0:o.componentProps)==null?void 0:T.options))}:()=>St(o)),S(Ce,null,[(()=>{var J,Q;const T=te({get:()=>j(a.value,o.field),set:R=>{K(a.value,o.field,R)}});return o.component===g.UPLOAD?S(X,y({"file-list":T.value,"onUpdate:file-list":R=>T.value=R,ref:R=>W(R,o.field)},z&&ae(o),le(o),{style:((J=o.componentProps)==null?void 0:J.style)||{width:"100%"}}),E({},D)):S(X,y({modelValue:T.value,"onUpdate:modelValue":R=>T.value=R,ref:R=>W(R,o.field)},z&&ae(o),le(o),{style:((Q=o.componentProps)==null?void 0:Q.style)||{width:"100%"}}),E({},D))})()])}}};return(O=(l=o==null?void 0:o.formItemProps)==null?void 0:l.slots)!=null&&O.label&&(c.label=(...m)=>{var k,A;return(A=(k=o==null?void 0:o.formItemProps)==null?void 0:k.slots)==null?void 0:A.label(...m)}),(M=(w=o==null?void 0:o.formItemProps)==null?void 0:w.slots)!=null&&M.error&&(c.error=(...m)=>{var k,A;return(A=(k=o==null?void 0:o.formItemProps)==null?void 0:k.slots)==null?void 0:A.error(...m)}),Ee(S(it,y({ref:m=>fe(m,o.field)},o.formItemProps||{},{prop:o.field,label:o.label||""}),G(c)?c:{default:()=>[c]}),[[Se,!o.hidden]])},be=()=>{const o=["schema","isCol","autoSetPlaceholder","isCustom","model"],c=E({},p(u));for(const l in c)o.indexOf(l)!==-1&&delete c[l];return c};return()=>S(lt,y({ref:s},be(),{model:p(u).isCustom?p(u).model:a,class:Ct,onSubmit:o=>{o.preventDefault()}}),{default:()=>{const{isCustom:o}=p(u);return o?ye(n,"default"):pe()}})}}),Xt=Pe(It,[["__scopeId","data-v-4811dae9"]]);export{Xt as F,gt as i};
