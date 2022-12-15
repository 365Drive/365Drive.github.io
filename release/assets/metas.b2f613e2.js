var P=Object.defineProperty,x=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var B=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var w=(l,t,s)=>t in l?P(l,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):l[t]=s,h=(l,t)=>{for(var s in t||(t={}))B.call(t,s)&&w(l,s,t[s]);if(b)for(var s of b(t))j.call(t,s)&&w(l,s,t[s]);return l},f=(l,t)=>x(l,O(t));import{u as A,h as F,R as e,j as H,r as D,l as v,o as R,G as r,aC as I,aD as L,aE as M,aF as m,aG as _,aH as d,aI as G,aJ as V,aK as X,aL as $,aM as q,aN as z,aO as J,E as K,W as N,X as W,Y,Z,_ as Q,$ as U,V as ee,a0 as te}from"./vendor.36e124e7.js";import{b as C}from"./index.esm.875bdfba.js";import{F as ae}from"./form-item.e48716c8.js";import"./index.2c144d5b.js";const S={id:0,path:"",password:"",hide:"",upload:!1,only_shows:"",readme:""},ce=()=>{const l=A(),{t}=F(),[s,k]=e.useState([]),[c,u]=e.useState(S),[p,y]=e.useState(!1),[T,g]=e.useState(!1),o=H(),i=()=>{g(!0),C.get("metas").then(a=>{g(!1);const n=a.data;n.code!==200?l({title:t(n.message),status:"error",duration:3e3,isClosable:!0}):k(n.data)})};return D.exports.useEffect(()=>{i()},[]),e.createElement(v,{w:"full"},e.createElement(R,null,e.createElement(r,{onClick:()=>{u(S),y(!1),o.onOpen()}},t("Add")),e.createElement(r,{colorScheme:"orange",isLoading:T,onClick:()=>{i()}},t("Refresh"))),e.createElement(v,{overflowX:"auto"},e.createElement(I,{w:"full"},e.createElement(L,null,e.createElement(M,null,e.createElement(m,null,t("path")),e.createElement(m,null,t("password")),e.createElement(m,null,t("hide")),e.createElement(m,null,t("upload")),e.createElement(m,null,t("operation")))),e.createElement(_,null,s.map(a=>e.createElement(M,{key:a.path},e.createElement(d,null,a.path),e.createElement(d,null,a.password),e.createElement(d,null,a.hide),e.createElement(d,null,a.upload?"true":"false"),e.createElement(d,{whiteSpace:"nowrap"},e.createElement(r,{onClick:()=>{u(a),y(!0),o.onOpen()}},t("Edit")),e.createElement(G,null,e.createElement(V,null,e.createElement(r,{ml:"1",colorScheme:"red"},t("Delete"))),e.createElement(X,{whiteSpace:"normal"},e.createElement($,null),e.createElement(q,null),e.createElement(z,null,t("Confirmation!")),e.createElement(J,null,e.createElement(K,{mb:"1"},t('Are you sure you want to delete "{{name}}" ?',{name:a.path})),e.createElement(r,{colorScheme:"red",ml:"1",onClick:()=>{C.delete("meta",{params:{id:a.id}}).then(n=>{const E=n.data;E.code!==200?l({title:t(E.message),status:"error",duration:3e3,isClosable:!0}):(l({title:t(E.message),status:"success",duration:3e3,isClosable:!0}),i())})}},t("Confirm"))))))))))),e.createElement(N,{isOpen:o.isOpen,onClose:o.onClose,size:"6xl"},e.createElement(W,null),e.createElement(Y,null,e.createElement(Z,null,t(p?"Save":"Add")),e.createElement(Q,null),e.createElement(U,{pb:6},e.createElement(ee,{spacing:"2"},[{name:"path",description:"Path",type:"string"},{name:"password",description:"Password",type:"string"},{name:"hide",description:"Hide Files(split by ,)",type:"string"},{name:"only_shows",description:"Only show files(split by ,)",type:"string"},{name:"upload",description:"Allow visitors to upload",type:"bool"},{name:"readme",description:"Readme url",type:"string"}].map(a=>e.createElement(ae,{key:a.name,label:a.name,type:a.type,description:a.description,value:c[a.name],required:a.name==="path",onChange:n=>{a.type!=="bool"?u(f(h({},c),{[a.name]:n})):u(f(h({},c),{[a.name]:!c[a.name]}))}})))),e.createElement(te,null,e.createElement(r,{mr:3,colorScheme:"gray",onClick:o.onClose},t("Cancel")),e.createElement(r,{onClick:()=>{C.post(`meta/${p?"save":"create"}`,c).then(a=>{const n=a.data;n.code!==200?(l({title:t(n.message),status:"error",duration:3e3,isClosable:!0}),p||(i(),o.onClose())):(l({title:t(n.message),status:"success",duration:3e3,isClosable:!0}),i(),o.onClose())})}},t("Save"))))))};export{ce as default};
