var b=(r,d,p)=>new Promise((k,u)=>{var C=n=>{try{a(p.next(n))}catch(e){u(e)}},l=n=>{try{a(p.throw(n))}catch(e){u(e)}},a=n=>n.done?k(n.value):Promise.resolve(n.value).then(C,l);a((p=p.apply(r,d)).next())});import B from"./CategoryDialog-R4JneCfr.js";import{h as T,p as P}from"./index-_6ODb6pb.js";/* empty css                *//* empty css                    *//* empty css                   */import{aa as j,l as D,r as y,w as N,m as I,p as R,W as F,R as V,u as O,X as _,O as $,G as z,P as G,V as H}from"./vue-chunks-lfjuOEhN.js";import{d as K,p as L,k as M}from"./element-plus-jCRIyYSE.js";const S=(r={})=>T.get({url:"/category",data:{params:r}}),W=r=>T.delete({url:`/category/${r}`}),X=r=>T.post({url:"/category",data:r}),q=r=>T.put({url:`/category/${r._id}`,data:r});var E={};(function(r){var d=j&&j.__assign||function(){return(d=Object.assign||function(l){for(var a,n=1,e=arguments.length;n<e;n++)for(var h in a=arguments[n])Object.prototype.hasOwnProperty.call(a,h)&&(l[h]=a[h]);return l}).apply(this,arguments)},p=(Object.defineProperty(r,"__esModule",{value:!0}),{id:"id",parentId:"parentId",dataField:"data",childrenField:"children",throwIfOrphans:!1,rootParentIds:{"":!(r.countNodes=r.arrayToTree=void 0)},nestedIds:!0,assign:!1});function k(l,a){a===void 0&&(a={});for(var n,e=d(d({},p),a),h=[],s={},f=e.throwIfOrphans?new Set:null,w=0,v=l;w<v.length;w++){var i=v[w],o=e.nestedIds?C(i,e.id):i[e.id],g=e.nestedIds?C(i,e.parentId):i[e.parentId];if(e.rootParentIds[o])throw new Error("The item array contains a node whose parentId both exists in another node and is in "+'`rootParentIds` (`itemId`: "'.concat(o,'", `rootParentIds`: ').concat(Object.keys(e.rootParentIds).map(function(x){return'"'.concat(x,'"')}).join(", "),")."));Object.prototype.hasOwnProperty.call(s,o)||(s[o]=((n={})[e.childrenField]=[],n)),f&&f.delete(o),e.dataField?s[o][e.dataField]=i:e.assign?s[o]=Object.assign(i,((n={})[e.childrenField]=s[o][e.childrenField],n)):s[o]=d(d({},i),((i={})[e.childrenField]=s[o][e.childrenField],i)),i=s[o],g==null||e.rootParentIds[g]?h.push(i):(Object.prototype.hasOwnProperty.call(s,g)||(s[g]=((o={})[e.childrenField]=[],o),f&&f.add(g)),s[g][e.childrenField].push(i))}if(f!=null&&f.size)throw new Error("The items array contains orphans that point to the following parentIds: "+"[".concat(Array.from(f),"]. These parentIds do not exist in the items array. Hint: prevent orphans to result ")+"in an error by passing the following option: { throwIfOrphans: false }");if(e.throwIfOrphans&&u(h,e.childrenField)<Object.keys(s).length)throw new Error("The items array contains nodes with a circular parent/child relationship.");return h}function u(l,a){return l.reduce(function(n,e){return n+1+(e[a]&&u(e[a],a))},0)}function C(l,a){return a.split(".").reduce(function(n,e){return n&&n[e]},l)}r.arrayToTree=k,r.countNodes=u})(E);const re=D({__name:"Category",props:{showCheckbox:P.bool.def(!1),checkedCategories:{type:Array,default:()=>[]},onCheckChange:P.func.def(void 0)},setup(r){const d=r,p=y([]);N(()=>d.checkedCategories,t=>{p.value=t.map(c=>c.id)},{immediate:!0});function k(t,c,m){u.value&&d.onCheckChange&&d.onCheckChange(u.value.getCheckedNodes())}const u=y(),C=y("");N(C,t=>{u.value.filter(t)});const l=y(),a=y([]),n=y([]);function e(t){n.value=t,a.value=E.arrayToTree(t,{id:"_id",parentId:"pid",childrenField:"children",dataField:null})}function h(){return b(this,null,function*(){l.value=null;const t=yield S({page_size:20});t&&t.result&&e(t.result.data||[])})}h();const s=(t,c)=>t?c.name.includes(t):!0,f={children:"children",label:t=>{let c=t.article_count||0;for(const m of t.children||[])m.article_count&&(c+=m.article_count);return t.name+"("+c+")"}},w=d.showCheckbox?void 0:(t,{node:c,data:m})=>t("span",{class:"custom-tree-node"},t("span",null,c.label),t("span",null,t("a",{hidden:!1,onClick:()=>i(m)},"编辑 "),t("a",{style:"margin-left: 8px",onClick:()=>A(c,m)},"删除")));function v(){o.value=!0}const i=t=>{o.value=!0,l.value=t},o=y(!1),g=t=>b(this,null,function*(){l.value?(l.value=null,yield q(t)):yield X(t),h(),o.value=!1}),x=()=>{o.value=!1,l.value=null},A=(t,c)=>b(this,null,function*(){yield W(c.id),h()});return(t,c)=>(I(),R(G,null,[r.showCheckbox?_("",!0):(I(),F(O(K),{key:0,type:"success",onClick:v},{default:V(()=>[H(" 新建分类 ")]),_:1})),r.showCheckbox?_("",!0):(I(),F(O(L),{key:1})),$(O(M),z({ref_key:"treeRef",ref:u},t.$attrs,{style:{"max-width":"600px"},class:"categories",data:a.value,props:f,"default-expand-all":"",draggable:!r.showCheckbox,"expand-on-click-node":!1,showCheckbox:r.showCheckbox,"filter-node-method":s,onCheckChange:k,"render-content":O(w),"node-key":"id","default-checked-keys":p.value}),null,16,["data","draggable","showCheckbox","render-content","default-checked-keys"]),r.showCheckbox?_("",!0):(I(),F(B,{key:2,onConfirm:g,onClose:x,shouldOpen:o.value,categories:n.value,editingCategory:l.value},null,8,["shouldOpen","categories","editingCategory"]))],64))}});export{re as _};
