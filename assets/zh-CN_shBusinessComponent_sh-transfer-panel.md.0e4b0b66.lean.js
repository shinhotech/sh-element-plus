import{h as i,k as l,r as E,o as c,a as d,c as k,b as o,e as a,w as u,u as D,d as F,f as A}from"./app.3745abeb.js";const h=i({__name:"multiple-transferpanel",setup(r){const t=l([{id:1,label:"Level one 1"},{id:2,label:"Level one 2"},{id:3,label:"Level one 3"}]),e=l([]),p=async n=>{try{console.log("list: ",n)}catch(s){console.log("err: ",s)}};return(n,s)=>{const C=E("sh-transfer-panel");return c(),d(C,{leftTitle:"\u9009\u62E9\u4EBA\u5458",rightTitle:"\u5DF2\u9009\u4EBA\u5458",treeData:t.value,defaultChecked:e.value,onConfirm:p},null,8,["treeData","defaultChecked"])}}});var v=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));const y={style:{"margin-bottom":"10px"}},B=a("div",{style:{"margin-bottom":"10px"}}," \u6811\u5F62-\u6811\u5F62\u7A7F\u68AD\u6846 ",-1),f=i({__name:"tree-transferpanel",setup(r){const t=l([{id:1,label:"Level one 1 Level three 1-1-1Level three 1-1-1",children:[{id:4,label:"Level two 1-1Level two 1-1Level two 1-1Level two 1-1Level two 1-1",children:[{id:9,label:"Level three 1-1-1"},{id:10,label:"Level three 1-1-2"},{id:91,label:"Level three 1-1-1"}]}]},{id:2,label:"Level one 2",children:[{id:5,label:"Level two 2-1"},{id:6,label:"Level two 2-2"}]},{id:3,label:"Level one 3",children:[{id:7,label:"Level two 3-1"},{id:8,label:"Level two 3-2"}]}]),e=l([5]),p=async n=>{try{console.log("list: ",n)}catch(s){console.log("err: ",s)}};return(n,s)=>{const C=E("sh-transfer-panel");return c(),k("div",y,[B,o(C,{leftTitle:"\u9009\u62E9\u4EBA\u5458",rightTitle:"\u5DF2\u9009\u4EBA\u5458",treeData:t.value,defaultChecked:e.value,onConfirm:p},null,8,["treeData","defaultChecked"])])}}});var b=Object.freeze(Object.defineProperty({__proto__:null,default:f},Symbol.toStringTag,{value:"Module"}));const g=a("h2",{id:"\u591A\u9009\u7A7F\u68AD\u6846\u9762\u677F",tabindex:"-1"},[F("\u591A\u9009\u7A7F\u68AD\u6846\u9762\u677F "),a("a",{class:"header-anchor vp-link",href:"#\u591A\u9009\u7A7F\u68AD\u6846\u9762\u677F","aria-hidden":"true"},"#")],-1),_=a("p",null,"sh-transfer-panel/multiple-transferpanel",-1),m=a("br",null,null,-1),L=a("h2",{id:"\u6811\u5F62\u7A7F\u68AD\u6846\u9762\u677F",tabindex:"-1"},[F("\u6811\u5F62\u7A7F\u68AD\u6846\u9762\u677F "),a("a",{class:"header-anchor vp-link",href:"#\u6811\u5F62\u7A7F\u68AD\u6846\u9762\u677F","aria-hidden":"true"},"#")],-1),w=a("p",null,"sh-transfer-panel/tree-transferpanel",-1),T=A("",7),x={class:"vp-table"},q=a("thead",null,[a("tr",null,[a("th",null,"\u65B9\u6CD5\u540D"),a("th",null,"\u8BF4\u660E"),a("th",null,"\u7C7B\u578B")])],-1),S=a("td",null,"confirm",-1),N=a("td",null,"\u70B9\u51FB\u786E\u5B9A\u65F6\u8FD4\u56DE\u9009\u4E2D\u7684\u6570\u636E\u503C",-1),j=A("",2),O='{"title":"\u6570\u636E\u7B5B\u9009-\u7A7F\u68AD\u6846\u9762\u677F","description":"","frontmatter":{"title":"\u6570\u636E\u7B5B\u9009-\u7A7F\u68AD\u6846\u9762\u677F","lang":"zh-CN"},"headers":[{"level":2,"title":"\u591A\u9009\u7A7F\u68AD\u6846\u9762\u677F","slug":"\u591A\u9009\u7A7F\u68AD\u6846\u9762\u677F"},{"level":2,"title":"\u6811\u5F62\u7A7F\u68AD\u6846\u9762\u677F","slug":"\u6811\u5F62\u7A7F\u68AD\u6846\u9762\u677F"},{"level":2,"title":"Attributes","slug":"attributes"},{"level":2,"title":"treeAttrs Attributes","slug":"treeattrs-attributes"},{"level":2,"title":"Events","slug":"events"},{"level":2,"title":"Slot","slug":"slot"}],"relativePath":"zh-CN/shBusinessComponent/sh-transfer-panel.md","lastUpdated":1716268365000}',V={},z=Object.assign(V,{__name:"sh-transfer-panel",setup(r){const t={"../../examples/sh-transfer-panel/multiple-transferpanel.vue":v,"../../examples/sh-transfer-panel/tree-transferpanel.vue":b};return(e,p)=>{const n=E("Demo"),s=E("api-typing");return c(),k("div",null,[g,o(n,{demos:D(t),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%E5%A4%9A%E9%80%89%E7%A9%BF%E6%A2%AD%E6%A1%86%E9%9D%A2%E6%9D%BF--%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Esh-transfer-panel%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3EleftTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E9%80%89%E6%8B%A9%E4%BA%BA%E5%91%98%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3ErightTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E5%B7%B2%E9%80%89%E4%BA%BA%E5%91%98%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AtreeData%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EtreeData%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AdefaultChecked%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EdefaultChecked%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40confirm%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EcheckedTransfer%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Esh-transfer-panel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20treeData%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20one%201'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20one%202'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20one%203'%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20defaultChecked%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EcheckedTransfer%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Easync%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elist%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20any%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Etry%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'list%3A%20'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20list%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Ecatch%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eerr%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'err%3A%20'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20err%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",path:"sh-transfer-panel/multiple-transferpanel","raw-source":"%3C!--%E5%A4%9A%E9%80%89%E7%A9%BF%E6%A2%AD%E6%A1%86%E9%9D%A2%E6%9D%BF--%3E%0A%3Ctemplate%3E%0A%20%20%3Csh-transfer-panel%0A%20%20%20%20leftTitle%3D%22%E9%80%89%E6%8B%A9%E4%BA%BA%E5%91%98%22%0A%20%20%20%20rightTitle%3D%22%E5%B7%B2%E9%80%89%E4%BA%BA%E5%91%98%22%0A%20%20%20%20%3AtreeData%3D%22treeData%22%0A%20%20%20%20%3AdefaultChecked%3D%22defaultChecked%22%0A%20%20%20%20%40confirm%3D%22checkedTransfer%22%0A%20%20%3E%3C%2Fsh-transfer-panel%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D'ts'%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20treeData%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20id%3A%201%2C%0A%20%20%20%20label%3A%20'Level%20one%201'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20id%3A%202%2C%0A%20%20%20%20label%3A%20'Level%20one%202'%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20id%3A%203%2C%0A%20%20%20%20label%3A%20'Level%20one%203'%0A%20%20%7D%0A%5D)%0A%0Aconst%20defaultChecked%20%3D%20ref(%5B%5D)%0A%0Aconst%20checkedTransfer%20%3D%20async%20(list%3A%20any)%20%3D%3E%20%7B%0A%20%20try%20%7B%0A%20%20%20%20console.log('list%3A%20'%2C%20list)%0A%20%20%7D%20catch%20(err)%20%7B%0A%20%20%20%20console.log('err%3A%20'%2C%20err)%0A%20%20%7D%0A%7D%0A%3C%2Fscript%3E",description:""},{default:u(()=>[_]),_:1},8,["demos"]),m,L,o(n,{demos:D(t),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20comment%22%3E%26lt%3B!--%E6%A0%91%E5%BD%A2%E7%A9%BF%E6%A2%AD%E6%A1%86%E9%9D%A2%E6%9D%BF--%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Emargin-bottom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2010px%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20special-attr%22%3E%3Cspan%20class%3D%22token%20attr-name%22%3Estyle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3Cspan%20class%3D%22token%20value%20css%20language-css%22%3E%3Cspan%20class%3D%22token%20property%22%3Emargin-bottom%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3A%3C%2Fspan%3E%2010px%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%E6%A0%91%E5%BD%A2-%E6%A0%91%E5%BD%A2%E7%A9%BF%E6%A2%AD%E6%A1%86%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Esh-transfer-panel%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3EleftTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E9%80%89%E6%8B%A9%E4%BA%BA%E5%91%98%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3ErightTitle%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%E5%B7%B2%E9%80%89%E4%BA%BA%E5%91%98%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AtreeData%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EtreeData%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3AdefaultChecked%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EdefaultChecked%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40confirm%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3EcheckedTransfer%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Esh-transfer-panel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E'%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20treeData%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20one%201%20Level%20three%201-1-1Level%20three%201-1-1'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Echildren%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E4%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20two%201-1Level%20two%201-1Level%20two%201-1Level%20two%201-1Level%20two%201-1'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Echildren%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E9%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20three%201-1-1'%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E10%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20three%201-1-2'%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E91%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20three%201-1-1'%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20one%202'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Echildren%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E5%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20two%202-1'%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E6%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20two%202-2'%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20one%203'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Echildren%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E7%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20two%203-1'%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eid%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E8%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'Level%20two%203-2'%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20defaultChecked%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20number%22%3E5%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3EcheckedTransfer%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Easync%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elist%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20any%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20keyword%22%3Etry%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'list%3A%20'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20list%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Ecatch%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eerr%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'err%3A%20'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20err%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3C%2Fcode%3E%3C%2Fpre%3E",path:"sh-transfer-panel/tree-transferpanel","raw-source":"%3C!--%E6%A0%91%E5%BD%A2%E7%A9%BF%E6%A2%AD%E6%A1%86%E9%9D%A2%E6%9D%BF--%3E%0A%3Ctemplate%3E%0A%20%20%3Cdiv%20style%3D%22margin-bottom%3A%2010px%22%3E%0A%20%20%20%20%3Cdiv%20style%3D%22margin-bottom%3A%2010px%22%3E%0A%20%20%20%20%20%20%E6%A0%91%E5%BD%A2-%E6%A0%91%E5%BD%A2%E7%A9%BF%E6%A2%AD%E6%A1%86%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%3Csh-transfer-panel%0A%20%20%20%20%20%20leftTitle%3D%22%E9%80%89%E6%8B%A9%E4%BA%BA%E5%91%98%22%0A%20%20%20%20%20%20rightTitle%3D%22%E5%B7%B2%E9%80%89%E4%BA%BA%E5%91%98%22%0A%20%20%20%20%20%20%3AtreeData%3D%22treeData%22%0A%20%20%20%20%20%20%3AdefaultChecked%3D%22defaultChecked%22%0A%20%20%20%20%20%20%40confirm%3D%22checkedTransfer%22%0A%20%20%20%20%3E%3C%2Fsh-transfer-panel%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%20lang%3D'ts'%20setup%3E%0Aimport%20%7B%20ref%20%7D%20from%20'vue'%0A%0Aconst%20treeData%20%3D%20ref(%5B%0A%20%20%7B%0A%20%20%20%20id%3A%201%2C%0A%20%20%20%20label%3A%20'Level%20one%201%20Level%20three%201-1-1Level%20three%201-1-1'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20id%3A%204%2C%0A%20%20%20%20%20%20%20%20label%3A%20'Level%20two%201-1Level%20two%201-1Level%20two%201-1Level%20two%201-1Level%20two%201-1'%2C%0A%20%20%20%20%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%209%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'Level%20three%201-1-1'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'Level%20three%201-1-2'%0A%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%3A%2091%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'Level%20three%201-1-1'%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%5D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20id%3A%202%2C%0A%20%20%20%20label%3A%20'Level%20one%202'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20id%3A%205%2C%0A%20%20%20%20%20%20%20%20label%3A%20'Level%20two%202-1'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20id%3A%206%2C%0A%20%20%20%20%20%20%20%20label%3A%20'Level%20two%202-2'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%7B%0A%20%20%20%20id%3A%203%2C%0A%20%20%20%20label%3A%20'Level%20one%203'%2C%0A%20%20%20%20children%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20id%3A%207%2C%0A%20%20%20%20%20%20%20%20label%3A%20'Level%20two%203-1'%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20id%3A%208%2C%0A%20%20%20%20%20%20%20%20label%3A%20'Level%20two%203-2'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%0A%5D)%0A%0Aconst%20defaultChecked%20%3D%20ref(%5B5%5D)%0A%0Aconst%20checkedTransfer%20%3D%20async%20(list%3A%20any)%20%3D%3E%20%7B%0A%20%20try%20%7B%0A%20%20%20%20console.log('list%3A%20'%2C%20list)%0A%20%20%7D%20catch%20(err)%20%7B%0A%20%20%20%20console.log('err%3A%20'%2C%20err)%0A%20%20%7D%0A%7D%0A%3C%2Fscript%3E",description:""},{default:u(()=>[w]),_:1},8,["demos"]),T,a("div",x,[a("table",null,[q,a("tbody",null,[a("tr",null,[S,N,a("td",null,[o(s,{type:"Function",details:"(value: any) => void"})])])])])]),j])}}});export{O as __pageData,z as default};
