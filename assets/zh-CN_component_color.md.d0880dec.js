import{h as U,T as $,r as g,o as s,a as F,w as i,b as c,e as o,c as t,q as x,u as a,F as b,y as u,d as l,t as n,V as B,z as L,W as E,X as N,Y as O,g as P}from"./app.1616d45b.js";const S={class:"demo-color-box-group"},W={class:"value",text:"xs"},j={class:"demo-color-box-group"},q={class:"value",text:"xs"},A={class:"demo-color-box-group"},M={class:"value",text:"xs"},X={class:"demo-color-box-group"},Y=o("div",{class:"demo-color-box demo-color-box-other demo-color-box-lite bg-transparent"},[l(" Transparent "),o("div",{class:"value",text:"xs"},"Transparent")],-1),G={class:"value",text:"xs"},z="#000000",D="#FFFFFF",H=U({__name:"neutral-color",setup(w){const p=["page","","overlay"].map(e=>({name:e?`${e[0].toUpperCase()+e.slice(1)} Background`:"Base Background",var:$(B("bg-color",e))})),_=["darker","dark","","light","lighter","extra-light"].map(e=>({name:e?`${e[0].toUpperCase()+e.slice(1)} Border`:"Base Border",var:$(B("border-color",e))})),m=["darker","dark","","light","lighter","extra-light","blank"].map(e=>({name:e?`${e[0].toUpperCase()+e.slice(1)} Fill`:"Base Fill",var:$(B("fill-color",e))})),d=["primary","regular","secondary","placeholder","disabled"].map(e=>({name:`${e[0].toUpperCase()+e.slice(1)} Text`,var:$(B("text-color",e))}));return(e,T)=>{const f=g("el-col"),V=g("el-row");return s(),F(V,{gutter:12},{default:i(()=>[c(f,{span:6,xs:{span:12}},{default:i(()=>[o("div",S,[(s(!0),t(b,null,x(a(d),(r,v)=>(s(),t("div",{key:v,class:"demo-color-box demo-color-box-other",style:u({color:"var(--el-bg-color)",background:r.var.value})},[l(n(r.name)+" ",1),o("div",W,n(r.var.value.toUpperCase()),1)],4))),128))])]),_:1}),c(f,{span:6,xs:{span:12}},{default:i(()=>[o("div",j,[(s(!0),t(b,null,x(a(_),(r,v)=>(s(),t("div",{key:v,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:u({background:r.var.value})},[l(n(r.name)+" ",1),o("div",q,n(r.var.value.toUpperCase()),1)],4))),128))])]),_:1}),c(f,{span:6,xs:{span:12}},{default:i(()=>[o("div",A,[(s(!0),t(b,null,x(a(m),(r,v)=>(s(),t("div",{key:v,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:u({background:r.var.value,border:`1px solid ${r.name==="Blank Fill"?"var(--el-border-color-light)":"transparent"}`})},[l(n(r.name)+" ",1),o("div",M,n(r.var.value.toUpperCase()),1)],4))),128))])]),_:1}),c(f,{span:6,xs:{span:12}},{default:i(()=>[o("div",X,[o("div",{class:"demo-color-box demo-color-box-other",style:u({background:z})},[l(" Basic Black "),o("div",{class:"value",text:"xs"},n(z))],4),o("div",{class:"demo-color-box demo-color-box-other",style:u({background:D,color:"#303133",border:"1px solid #eee"})},[l(" Basic White "),o("div",{class:"value",text:"xs"},n(D))],4),Y,(s(!0),t(b,null,x(a(p),(r,v)=>(s(),t("div",{key:v,class:"demo-color-box demo-color-box-other demo-color-box-lite",style:u({background:r.var.value,border:"1px solid "+(!a(L)||r.name==="Base Background"?"var(--el-border-color-light)":"transparent")})},[l(n(r.name)+" ",1),o("div",G,n(r.var.value.toUpperCase()),1)],4))),128))])]),_:1})]),_:1})}}}),I={class:"value",text:"xs"},J={class:"bg-color-sub"},K=["onClick"],Q=U({__name:"secondary-colors",setup(w){const h=["success","warning","danger","info"],p=[3,5,7,8,9].map(_=>`light-${_}`);p.unshift("dark-2");const{copyColor:k}=E();return(_,y)=>{const m=g("el-col"),C=g("el-row");return s(),F(C,{gutter:12},{default:i(()=>[(s(),t(b,null,x(h,(d,e)=>c(m,{key:e,span:6,xs:{span:12}},{default:i(()=>[o("div",{class:"demo-color-box",style:u({background:a(N)(d)})},[l(n(d.charAt(0).toUpperCase()+d.slice(1))+" ",1),o("div",I,n(a(N)(d).toUpperCase()),1),o("div",J,[(s(!0),t(b,null,x(a(p),(T,f)=>(s(),t("div",{key:f,class:"bg-secondary-sub-item transition cursor-pointer hover:shadow",style:u({width:`${100/6}%`,background:`var(--el-color-${d}-`+T+")"}),onClick:V=>a(k)(d+"-"+T)},null,12,K))),128))])],4)]),_:2},1024)),64))]),_:1})}}}),R={class:"value",text:"xs"},Z=["onClick"],oo=U({__name:"main-color",setup(w){const h=O("--el-color-primary"),p=[3,5,7,8,9].map(_=>`light-${_}`);p.unshift("dark-2");const{copyColor:k}=E();return(_,y)=>{const m=g("el-col"),C=g("el-row");return s(),F(C,{gutter:12},{default:i(()=>[c(m,{span:10,xs:{span:12}},{default:i(()=>[o("div",{class:"demo-color-box",style:u({background:a(h)})},[l(" Brand Color "),o("div",R,n(a(h).toUpperCase()),1),o("div",{class:"bg-color-sub",style:u({background:a(h)})},[(s(!0),t(b,null,x(a(p),d=>(s(),t("div",{key:d,class:"bg-blue-sub-item cursor-pointer hover:shadow",style:u({width:`${100/6}%`,background:"var(--el-color-primary-"+d+")"}),onClick:e=>a(k)("primary-"+d)},null,12,Z))),128))],4)],4)]),_:1})]),_:1})}}});const eo=o("h1",{id:"color-\u8272\u5F69",tabindex:"-1"},[l("Color \u8272\u5F69 "),o("a",{class:"header-anchor vp-link",href:"#color-\u8272\u5F69","aria-hidden":"true"},"#")],-1),ro=o("p",null,"Element Plus \u4E3A\u4E86\u907F\u514D\u89C6\u89C9\u4F20\u8FBE\u5DEE\u5F02\uFF0C\u4F7F\u7528\u4E00\u5957\u7279\u5B9A\u7684\u8C03\u8272\u677F\u6765\u89C4\u5B9A\u989C\u8272\uFF0C\u4E3A\u4F60\u6240\u642D\u5EFA\u7684\u4EA7\u54C1\u63D0\u4F9B\u4E00\u81F4\u7684\u5916\u89C2\u89C6\u89C9\u611F\u53D7\u3002",-1),so=o("h2",{id:"\u4E3B\u8272",tabindex:"-1"},[l("\u4E3B\u8272 "),o("a",{class:"header-anchor vp-link",href:"#\u4E3B\u8272","aria-hidden":"true"},"#")],-1),lo=o("p",null,"Element Plus \u9ED8\u8BA4\u7684\u4E3B\u9898\u8272\u662F\u660E\u4EAE\u3001\u53CB\u597D\u7684\u84DD\u8272\u3002",-1),to=o("h2",{id:"\u8F85\u52A9\u8272",tabindex:"-1"},[l("\u8F85\u52A9\u8272 "),o("a",{class:"header-anchor vp-link",href:"#\u8F85\u52A9\u8272","aria-hidden":"true"},"#")],-1),ao=o("p",null,"\u9664\u4E86\u4E3B\u989C\u8272\u5916\uFF0C\u60A8\u9700\u8981\u5728\u4E0D\u540C\u7684\u573A\u666F\u4E2D\u4F7F\u7528\u4E0D\u540C\u7684\u573A\u666F\u989C\u8272 (\u4F8B\u5982\uFF0C\u5371\u9669\u7684\u989C\u8272\u8868\u793A\u5371\u9669\u7684\u64CD\u4F5C)",-1),no=o("h2",{id:"\u4E2D\u6027\u8272",tabindex:"-1"},[l("\u4E2D\u6027\u8272 "),o("a",{class:"header-anchor vp-link",href:"#\u4E2D\u6027\u8272","aria-hidden":"true"},"#")],-1),co=o("p",null,"\u4E2D\u6027\u8272\u7528\u4E8E\u6587\u672C\u3001\u80CC\u666F\u548C\u8FB9\u6846\u989C\u8272\u3002 \u901A\u8FC7\u8FD0\u7528\u4E0D\u540C\u7684\u4E2D\u6027\u8272\uFF0C\u6765\u8868\u73B0\u5C42\u6B21\u7ED3\u6784\u3002",-1),io=o("h2",{id:"\u6E90\u4EE3\u7801",tabindex:"-1"},[l("\u6E90\u4EE3\u7801 "),o("a",{class:"header-anchor vp-link",href:"#\u6E90\u4EE3\u7801","aria-hidden":"true"},"#")],-1),_o={href:"https://github.com/element-plus/element-plus/blob/dev/docs/zh-CN/component/color.md",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},ho='{"title":"Color \u8272\u5F69","description":"","frontmatter":{"title":"Color \u8272\u5F69","lang":"zh-CN"},"headers":[{"level":2,"title":"\u4E3B\u8272","slug":"\u4E3B\u8272"},{"level":2,"title":"\u8F85\u52A9\u8272","slug":"\u8F85\u52A9\u8272"},{"level":2,"title":"\u4E2D\u6027\u8272","slug":"\u4E2D\u6027\u8272"},{"level":2,"title":"\u6E90\u4EE3\u7801","slug":"\u6E90\u4EE3\u7801"}],"relativePath":"zh-CN/component/color.md","lastUpdated":1706237017000}',uo={},mo=Object.assign(uo,{__name:"color",setup(w){return(h,p)=>{const k=oo,_=g("ClientOnly"),y=Q,m=H,C=P;return s(),t("div",null,[eo,ro,so,lo,c(_,null,{default:i(()=>[c(k)]),_:1}),to,ao,c(_,null,{default:i(()=>[c(y)]),_:1}),no,co,c(_,null,{default:i(()=>[c(m)]),_:1}),io,o("p",null,[o("a",_o,[l("\u6587\u6863"),c(C,{class:"link-icon"})])])])}}});export{ho as __pageData,mo as default};
