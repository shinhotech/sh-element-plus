import{h as k,i as E,r as C,o as u,a as D,c as d,e as s,b as n,F as _,d as t,w as r,u as F,g as A}from"./app.3c56fd5d.js";const h=k({__name:"alpha",setup(i){const e=E("rgba(19, 206, 102, 0.8)");return(c,l)=>{const o=C("el-color-picker");return u(),D(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=p=>e.value=p),"show-alpha":""},null,8,["modelValue"])}}});var g=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));const m={class:"demo-color-block"},v=s("span",{class:"demonstration"},"With default value",-1),f={class:"demo-color-block"},B=s("span",{class:"demonstration"},"With no default value",-1),b=k({__name:"basic",setup(i){const e=E("#409EFF"),c=E();return(l,o)=>{const p=C("el-color-picker");return u(),d(_,null,[s("div",m,[v,n(p,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a)},null,8,["modelValue"])]),s("div",f,[B,n(p,{modelValue:c.value,"onUpdate:modelValue":o[1]||(o[1]=a=>c.value=a)},null,8,["modelValue"])])],64)}}});var y=Object.freeze(Object.defineProperty({__proto__:null,default:b},Symbol.toStringTag,{value:"Module"}));const x=k({__name:"predefined-color",setup(i){const e=E("rgba(255, 69, 0, 0.68)"),c=E(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","hsv(51, 100, 98)","hsva(120, 40, 94, 0.5)","hsl(181, 100%, 37%)","hsla(209, 100%, 56%, 0.73)","#c7158577"]);return(l,o)=>{const p=C("el-color-picker");return u(),D(p,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=a=>e.value=a),"show-alpha":"",predefine:c.value},null,8,["modelValue","predefine"])}}});var w=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));const V={class:"demo-color-sizes"},z=k({__name:"sizes",setup(i){const e=E("409EFF");return(c,l)=>{const o=C("el-color-picker");return u(),d("div",V,[n(o,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=p=>e.value=p),size:"large"},null,8,["modelValue"]),n(o,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=p=>e.value=p)},null,8,["modelValue"]),n(o,{modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=p=>e.value=p),size:"small"},null,8,["modelValue"])])}}});var q=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));const P=s("h1",{id:"colorpicker-\u989C\u8272\u9009\u62E9\u5668",tabindex:"-1"},[t("ColorPicker \u989C\u8272\u9009\u62E9\u5668 "),s("a",{class:"header-anchor vp-link",href:"#colorpicker-\u989C\u8272\u9009\u62E9\u5668","aria-hidden":"true"},"#")],-1),j=s("p",null,"\u7528\u4E8E\u989C\u8272\u9009\u62E9\uFF0C\u652F\u6301\u591A\u79CD\u683C\u5F0F\u3002",-1),S={class:"tip custom-block"},O=s("p",{class:"custom-block-title"},"TIP",-1),$=s("code",null,"<client-only></client-only>",-1),U={href:"https://nuxt.com/v3",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},N={href:"https://vitepress.vuejs.org/",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},T=s("h2",{id:"\u57FA\u7840\u7528\u6CD5",tabindex:"-1"},[t("\u57FA\u7840\u7528\u6CD5 "),s("a",{class:"header-anchor vp-link",href:"#\u57FA\u7840\u7528\u6CD5","aria-hidden":"true"},"#")],-1),W=s("p",null,"color-picker/basic",-1),M=s("h2",{id:"\u9009\u62E9\u900F\u660E\u5EA6",tabindex:"-1"},[t("\u9009\u62E9\u900F\u660E\u5EA6 "),s("a",{class:"header-anchor vp-link",href:"#\u9009\u62E9\u900F\u660E\u5EA6","aria-hidden":"true"},"#")],-1),I=s("p",null,"color-picker/alpha",-1),G=s("h2",{id:"\u9884\u5B9A\u4E49\u989C\u8272",tabindex:"-1"},[t("\u9884\u5B9A\u4E49\u989C\u8272 "),s("a",{class:"header-anchor vp-link",href:"#\u9884\u5B9A\u4E49\u989C\u8272","aria-hidden":"true"},"#")],-1),R=s("p",null,"color-picker/predefined-color",-1),H=s("h2",{id:"\u4E0D\u540C\u5C3A\u5BF8",tabindex:"-1"},[t("\u4E0D\u540C\u5C3A\u5BF8 "),s("a",{class:"header-anchor vp-link",href:"#\u4E0D\u540C\u5C3A\u5BF8","aria-hidden":"true"},"#")],-1),J=s("p",null,"color-picker/sizes",-1),K=s("h2",{id:"api",tabindex:"-1"},[t("API "),s("a",{class:"header-anchor vp-link",href:"#api","aria-hidden":"true"},"#")],-1),L=s("h3",{id:"attributes",tabindex:"-1"},[t("Attributes "),s("a",{class:"header-anchor vp-link",href:"#attributes","aria-hidden":"true"},"#")],-1),Q={class:"vp-table"},X=s("thead",null,[s("tr",null,[s("th",null,"\u5C5E\u6027\u540D"),s("th",null,"\u8BF4\u660E"),s("th",null,"\u7C7B\u578B"),s("th",null,"\u9ED8\u8BA4\u503C")])],-1),Y=s("td",null,"model-value / v-model",-1),Z=s("td",null,"\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C",-1),s2=s("td",null,"\u2014",-1),n2=s("td",null,"disabled",-1),a2=s("td",null,"\u662F\u5426\u7981\u7528",-1),t2=s("td",null,"false",-1),e2=s("td",null,"size",-1),o2=s("td",null,"\u5C3A\u5BF8",-1),p2=s("td",null,"\u2014",-1),l2=s("td",null,"show-alpha",-1),c2=s("td",null,"\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9",-1),E2=s("td",null,"false",-1),C2=s("td",null,"color-format",-1),u2=s("td",null,"\u5199\u5165 v-model \u7684\u989C\u8272\u7684\u683C\u5F0F",-1),i2=s("td",null,"\u2014",-1),r2=s("td",null,"popper-class",-1),F2=s("td",null,"ColorPicker \u4E0B\u62C9\u6846\u7684\u7C7B\u540D",-1),k2=s("td",null,"\u2014",-1),d2=s("td",null,"predefine",-1),D2=s("td",null,"\u9884\u5B9A\u4E49\u989C\u8272",-1),_2=s("td",null,"\u2014",-1),A2=s("td",null,"validate-event",-1),h2=s("td",null,"\u8F93\u5165\u65F6\u662F\u5426\u89E6\u53D1\u8868\u5355\u7684\u6821\u9A8C",-1),g2=s("td",null,"true",-1),m2=s("td",null,"tabindex",-1),v2=s("td",null,"ColorPicker \u7684 tabindex",-1),f2=s("td",null,"0",-1),B2=s("td",null,[t("label "),s("span",{class:"vp-tag a11y"},"a11y")],-1),b2=s("td",null,"ColorPicker \u7684 aria-label",-1),y2=s("td",null,"\u2014",-1),x2=s("td",null,"id",-1),w2=s("td",null,"ColorPicker \u7684 id",-1),V2=s("td",null,"\u2014",-1),z2=s("h3",{id:"events",tabindex:"-1"},[t("Events "),s("a",{class:"header-anchor vp-link",href:"#events","aria-hidden":"true"},"#")],-1),q2={class:"vp-table"},P2=s("thead",null,[s("tr",null,[s("th",null,"\u4E8B\u4EF6\u540D"),s("th",null,"\u8BF4\u660E"),s("th",null,"\u7C7B\u578B")])],-1),j2=s("td",null,"change",-1),S2=s("td",null,"\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1",-1),O2=s("td",null,"active-change",-1),$2=s("td",null,"\u9762\u677F\u4E2D\u5F53\u524D\u663E\u793A\u7684\u989C\u8272\u53D1\u751F\u6539\u53D8\u65F6\u89E6\u53D1",-1),U2=s("td",null,[t("focus "),s("span",{class:"vp-tag"},"2.4.0")],-1),N2=s("td",null,"\u5F53\u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1",-1),T2=s("td",null,[t("blur "),s("span",{class:"vp-tag"},"2.4.0")],-1),W2=s("td",null,"\u5F53\u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1",-1),M2=s("h3",{id:"exposes",tabindex:"-1"},[t("Exposes "),s("a",{class:"header-anchor vp-link",href:"#exposes","aria-hidden":"true"},"#")],-1),I2={class:"vp-table"},G2=s("thead",null,[s("tr",null,[s("th",null,"\u540D\u79F0"),s("th",null,"\u8BF4\u660E"),s("th",null,"\u7C7B\u578B")])],-1),R2=s("td",null,"color",-1),H2=s("td",null,"\u5F53\u524D\u8272\u5F69\u5BF9\u8C61",-1),J2=s("td",null,[t("show "),s("span",{class:"vp-tag"},"2.3.3")],-1),K2=s("td",null,"\u624B\u52A8\u663E\u793A\u989C\u8272\u9009\u62E9\u5668",-1),L2=s("td",null,[t("hide "),s("span",{class:"vp-tag"},"2.3.3")],-1),Q2=s("td",null,"\u624B\u52A8\u9690\u85CF\u989C\u8272\u9009\u62E9\u5668",-1),X2=s("td",null,[t("focus "),s("span",{class:"vp-tag"},"2.3.13")],-1),Y2=s("td",null,"\u4F7F picker \u83B7\u5F97\u7126\u70B9",-1),Z2=s("td",null,[t("blur "),s("span",{class:"vp-tag"},"2.3.13")],-1),s3=s("td",null,"\u4F7F picker \u5931\u53BB\u7126\u70B9",-1),n3=s("h2",{id:"\u6E90\u4EE3\u7801",tabindex:"-1"},[t("\u6E90\u4EE3\u7801 "),s("a",{class:"header-anchor vp-link",href:"#\u6E90\u4EE3\u7801","aria-hidden":"true"},"#")],-1),a3={href:"https://github.com/element-plus/element-plus/blob/dev/docs/zh-CN/component/color-picker.md",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},o3='{"title":"ColorPicker \u989C\u8272\u9009\u62E9\u5668","description":"","frontmatter":{"title":"ColorPicker \u989C\u8272\u9009\u62E9\u5668","lang":"zh-CN"},"headers":[{"level":2,"title":"\u57FA\u7840\u7528\u6CD5","slug":"\u57FA\u7840\u7528\u6CD5"},{"level":2,"title":"\u9009\u62E9\u900F\u660E\u5EA6","slug":"\u9009\u62E9\u900F\u660E\u5EA6"},{"level":2,"title":"\u9884\u5B9A\u4E49\u989C\u8272","slug":"\u9884\u5B9A\u4E49\u989C\u8272"},{"level":2,"title":"\u4E0D\u540C\u5C3A\u5BF8","slug":"\u4E0D\u540C\u5C3A\u5BF8"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Attributes","slug":"attributes"},{"level":3,"title":"Events","slug":"events"},{"level":3,"title":"Exposes","slug":"exposes"},{"level":2,"title":"\u6E90\u4EE3\u7801","slug":"\u6E90\u4EE3\u7801"}],"relativePath":"zh-CN/component/color-picker.md","lastUpdated":null}',t3={},p3=Object.assign(t3,{__name:"color-picker",setup(i){const e={"../../examples/color-picker/alpha.vue":g,"../../examples/color-picker/basic.vue":y,"../../examples/color-picker/predefined-color.vue":w,"../../examples/color-picker/sizes.vue":q};return(c,l)=>{const o=A,p=C("Demo"),a=C("api-typing");return u(),d("div",null,[P,j,s("div",S,[O,s("p",null,[t("\u5728 SSR \u573A\u666F\u4E0B\uFF0C\u60A8\u9700\u8981\u5C06\u7EC4\u4EF6\u5305\u88F9\u5728 "),$,t(" \u4E4B\u4E2D (\u5982: "),s("a",U,[t("Nuxt"),n(o,{class:"link-icon"})]),t(") \u548C SSG (e.g: "),s("a",N,[t("VitePress"),n(o,{class:"link-icon"})]),t(").")])]),T,n(p,{demos:F(e),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edemo-color-block%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edemonstration%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EWith%20default%20value%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-color-picker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecolor1%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edemo-color-block%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Espan%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edemonstration%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EWith%20no%20default%20value%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-color-picker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecolor2%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20color1%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'%23409EFF'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20color2%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.demo-color-block%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Edisplay%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20flex%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Ealign-items%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%20center%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Emargin-bottom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2016px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.demo-color-block%20.demonstration%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Emargin-right%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2016px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"color-picker/basic","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22demo-color-block%22%3E%0A%20%20%20%20%3Cspan%20class%3D%22demonstration%22%3EWith%20default%20value%3C%2Fspan%3E%0A%20%20%20%20%3Cel-color-picker%20v-model%3D%22color1%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%20%20%3Cdiv%20class%3D%22demo-color-block%22%3E%0A%20%20%20%20%3Cspan%20class%3D%22demonstration%22%3EWith%20no%20default%20value%3C%2Fspan%3E%0A%20%20%20%20%3Cel-color-picker%20v-model%3D%22color2%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20color1%20%3D%20ref('%23409EFF')%0Aconst%20color2%20%3D%20ref()%0A%3C%2Fscript%3E%0A%0A%3Cstyle%3E%0A.demo-color-block%20%7B%0A%20%20display%3A%20flex%3B%0A%20%20align-items%3A%20center%3B%0A%20%20margin-bottom%3A%2016px%3B%0A%7D%0A.demo-color-block%20.demonstration%20%7B%0A%20%20margin-right%3A%2016px%3B%0A%7D%0A%3C%2Fstyle%3E%0A",description:"%3Cp%3E%E4%BD%BF%E7%94%A8%20v-model%20%E4%B8%8E%20Vue%20%E5%AE%9E%E4%BE%8B%E4%B8%AD%E7%9A%84%E4%B8%80%E4%B8%AA%E5%8F%98%E9%87%8F%E8%BF%9B%E8%A1%8C%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%EF%BC%8C%E7%BB%91%E5%AE%9A%E7%9A%84%E5%8F%98%E9%87%8F%E9%9C%80%E8%A6%81%E6%98%AF%E5%AD%97%E7%AC%A6%E4%B8%B2%E7%B1%BB%E5%9E%8B%E3%80%82%3C%2Fp%3E%0A"},{default:r(()=>[W]),_:1},8,["demos"]),M,n(p,{demos:F(e),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-color-picker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecolor%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eshow-alpha%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20color%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'rgba(19%2C%20206%2C%20102%2C%200.8)'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"color-picker/alpha","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-color-picker%20v-model%3D%22color%22%20show-alpha%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20color%20%3D%20ref('rgba(19%2C%20206%2C%20102%2C%200.8)')%0A%3C%2Fscript%3E%0A",description:"%3Cp%3EColorPicker%20%E6%94%AF%E6%8C%81%E6%99%AE%E9%80%9A%E9%A2%9C%E8%89%B2%EF%BC%8C%E4%B9%9F%E6%94%AF%E6%8C%81%E5%B8%A6%20Alpha%20%E9%80%9A%E9%81%93%E7%9A%84%E9%A2%9C%E8%89%B2%EF%BC%8C%E9%80%9A%E8%BF%87%3Ccode%3Eshow-alpha%3C%2Fcode%3E%E5%B1%9E%E6%80%A7%E5%8D%B3%E5%8F%AF%E6%8E%A7%E5%88%B6%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81%E9%80%8F%E6%98%8E%E5%BA%A6%E7%9A%84%E9%80%89%E6%8B%A9%E3%80%82%20%E8%A6%81%E5%90%AF%E7%94%A8%20Alpha%20%E9%80%89%E6%8B%A9%EF%BC%8C%E5%8F%AA%E9%9C%80%E6%B7%BB%E5%8A%A0%20%3Ccode%3Eshow-alpha%3C%2Fcode%3E%20%E5%B1%9E%E6%80%A7%E3%80%82%3C%2Fp%3E%0A"},{default:r(()=>[I]),_:1},8,["demos"]),G,n(p,{demos:F(e),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-color-picker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecolor%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eshow-alpha%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Apredefine%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EpredefineColors%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20color%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'rgba(255%2C%2069%2C%200%2C%200.68)'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20predefineColors%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'%23ff4500'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'%23ff8c00'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'%23ffd700'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'%2390ee90'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'%2300ced1'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'%231e90ff'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'%23c71585'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'rgba(255%2C%2069%2C%200%2C%200.68)'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'rgb(255%2C%20120%2C%200)'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'hsv(51%2C%20100%2C%2098)'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'hsva(120%2C%2040%2C%2094%2C%200.5)'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'hsl(181%2C%20100%25%2C%2037%25)'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'hsla(209%2C%20100%25%2C%2056%25%2C%200.73)'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20string%22%3E'%23c7158577'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"color-picker/predefined-color","raw-source":"%3Ctemplate%3E%0A%20%20%3Cel-color-picker%20v-model%3D%22color%22%20show-alpha%20%3Apredefine%3D%22predefineColors%22%20%2F%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20color%20%3D%20ref('rgba(255%2C%2069%2C%200%2C%200.68)')%0Aconst%20predefineColors%20%3D%20ref(%5B%0A%20%20'%23ff4500'%2C%0A%20%20'%23ff8c00'%2C%0A%20%20'%23ffd700'%2C%0A%20%20'%2390ee90'%2C%0A%20%20'%2300ced1'%2C%0A%20%20'%231e90ff'%2C%0A%20%20'%23c71585'%2C%0A%20%20'rgba(255%2C%2069%2C%200%2C%200.68)'%2C%0A%20%20'rgb(255%2C%20120%2C%200)'%2C%0A%20%20'hsv(51%2C%20100%2C%2098)'%2C%0A%20%20'hsva(120%2C%2040%2C%2094%2C%200.5)'%2C%0A%20%20'hsl(181%2C%20100%25%2C%2037%25)'%2C%0A%20%20'hsla(209%2C%20100%25%2C%2056%25%2C%200.73)'%2C%0A%20%20'%23c7158577'%2C%0A%5D)%0A%3C%2Fscript%3E%0A",description:"%3Cp%3EColorPicker%20%E6%94%AF%E6%8C%81%E9%A2%84%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2%3C%2Fp%3E%0A"},{default:r(()=>[R]),_:1},8,["demos"]),H,n(p,{demos:F(e),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edemo-color-sizes%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-color-picker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecolor%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Elarge%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-color-picker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecolor%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-color-picker%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ecolor%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esize%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Esmall%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20color%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'409EFF'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20style%22%3E%3Cspan%20class%3D%22token%20language-css%22%3E%0A%3Cspan%20class%3D%22token%20selector%22%3E.demo-color-sizes%20.el-color-picker%3Anot(%3Alast-child)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20property%22%3Emargin-right%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2016px%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"color-picker/sizes","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%20class%3D%22demo-color-sizes%22%3E%0A%20%20%20%20%3Cel-color-picker%20v-model%3D%22color%22%20size%3D%22large%22%20%2F%3E%0A%20%20%20%20%3Cel-color-picker%20v-model%3D%22color%22%20%2F%3E%0A%20%20%20%20%3Cel-color-picker%20v-model%3D%22color%22%20size%3D%22small%22%20%2F%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20color%20%3D%20ref('409EFF')%0A%3C%2Fscript%3E%0A%0A%3Cstyle%3E%0A.demo-color-sizes%20.el-color-picker%3Anot(%3Alast-child)%20%7B%0A%20%20margin-right%3A%2016px%3B%0A%7D%0A%3C%2Fstyle%3E%0A",description:""},{default:r(()=>[J]),_:1},8,["demos"]),K,L,s("div",Q,[s("table",null,[X,s("tbody",null,[s("tr",null,[Y,Z,s("td",null,[n(a,{type:"string",details:""})]),s2]),s("tr",null,[n2,a2,s("td",null,[n(a,{type:"boolean",details:""})]),t2]),s("tr",null,[e2,o2,s("td",null,[n(a,{type:"enum",details:"'large' | 'default' | 'small'"})]),p2]),s("tr",null,[l2,c2,s("td",null,[n(a,{type:"boolean",details:""})]),E2]),s("tr",null,[C2,u2,s("td",null,[n(a,{type:"enum",details:"'hsl' | 'hsv' | 'hex' | 'rgb' | 'hex' (when show-alpha is false) | 'rgb' (when show-alpha is true)"})]),i2]),s("tr",null,[r2,F2,s("td",null,[n(a,{type:"string",details:""})]),k2]),s("tr",null,[d2,D2,s("td",null,[n(a,{type:"object",details:"string[]"})]),_2]),s("tr",null,[A2,h2,s("td",null,[n(a,{type:"boolean",details:""})]),g2]),s("tr",null,[m2,v2,s("td",null,[n(a,{type:"string",details:""}),t(" / "),n(a,{type:"number",details:""})]),f2]),s("tr",null,[B2,b2,s("td",null,[n(a,{type:"string",details:""})]),y2]),s("tr",null,[x2,w2,s("td",null,[n(a,{type:"string",details:""})]),V2])])])]),z2,s("div",q2,[s("table",null,[P2,s("tbody",null,[s("tr",null,[j2,S2,s("td",null,[n(a,{type:"Function",details:"(value: string) => void"})])]),s("tr",null,[O2,$2,s("td",null,[n(a,{type:"Function",details:"(value: string) => void"})])]),s("tr",null,[U2,N2,s("td",null,[n(a,{type:"Function",details:"(event: FocusEvent) => void"})])]),s("tr",null,[T2,W2,s("td",null,[n(a,{type:"Function",details:"(event: FocusEvent) => void"})])])])])]),M2,s("div",I2,[s("table",null,[G2,s("tbody",null,[s("tr",null,[R2,H2,s("td",null,[n(a,{type:"object",details:"Color"})])]),s("tr",null,[J2,K2,s("td",null,[n(a,{type:"Function",details:"() => void"})])]),s("tr",null,[L2,Q2,s("td",null,[n(a,{type:"Function",details:"() => void"})])]),s("tr",null,[X2,Y2,s("td",null,[n(a,{type:"Function",details:"() => void"})])]),s("tr",null,[Z2,s3,s("td",null,[n(a,{type:"Function",details:"() => void"})])])])])]),n3,s("p",null,[s("a",a3,[t("\u6587\u6863"),n(o,{class:"link-icon"})])])])}}});export{o3 as __pageData,p3 as default};
