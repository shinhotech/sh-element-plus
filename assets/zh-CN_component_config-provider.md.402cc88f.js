import{h as d,l as k,r as p,o as C,c as i,e as n,b as a,w as l,d as t,S as _,i as A,T as v,u as F,f as g,g as f}from"./app.13916d28.js";const b={m:"b-2"},B=d({__name:"button",setup(r){const e=k({autoInsertSpace:!0});return(E,u)=>{const c=p("el-checkbox"),s=p("el-button"),o=p("el-config-provider");return C(),i("div",null,[n("div",b,[a(c,{modelValue:e.autoInsertSpace,"onUpdate:modelValue":u[0]||(u[0]=D=>e.autoInsertSpace=D)},{default:l(()=>[t("autoInsertSpace")]),_:1},8,["modelValue"])]),a(o,{button:e},{default:l(()=>[a(s,null,{default:l(()=>[t("\u4E2D\u6587")]),_:1})]),_:1},8,["button"])])}}});var y=Object.freeze(Object.defineProperty({__proto__:null,default:B},Symbol.toStringTag,{value:"Module"}));const x=d({__name:"message",setup(r){const e=k({max:3}),E=()=>{_("This is a message.")};return(u,c)=>{const s=p("el-button"),o=p("el-config-provider");return C(),i("div",null,[a(o,{message:e},{default:l(()=>[a(s,{onClick:E},{default:l(()=>[t("OPEN")]),_:1})]),_:1},8,["message"])])}}});var T=Object.freeze(Object.defineProperty({__proto__:null,default:x},Symbol.toStringTag,{value:"Module"}));/*! Element Plus v2.5.3 */var w={name:"zh-cn",el:{colorpicker:{confirm:"\u786E\u5B9A",clear:"\u6E05\u7A7A"},datepicker:{now:"\u6B64\u523B",today:"\u4ECA\u5929",cancel:"\u53D6\u6D88",clear:"\u6E05\u7A7A",confirm:"\u786E\u5B9A",selectDate:"\u9009\u62E9\u65E5\u671F",selectTime:"\u9009\u62E9\u65F6\u95F4",startDate:"\u5F00\u59CB\u65E5\u671F",startTime:"\u5F00\u59CB\u65F6\u95F4",endDate:"\u7ED3\u675F\u65E5\u671F",endTime:"\u7ED3\u675F\u65F6\u95F4",prevYear:"\u524D\u4E00\u5E74",nextYear:"\u540E\u4E00\u5E74",prevMonth:"\u4E0A\u4E2A\u6708",nextMonth:"\u4E0B\u4E2A\u6708",year:"\u5E74",month1:"1 \u6708",month2:"2 \u6708",month3:"3 \u6708",month4:"4 \u6708",month5:"5 \u6708",month6:"6 \u6708",month7:"7 \u6708",month8:"8 \u6708",month9:"9 \u6708",month10:"10 \u6708",month11:"11 \u6708",month12:"12 \u6708",weeks:{sun:"\u65E5",mon:"\u4E00",tue:"\u4E8C",wed:"\u4E09",thu:"\u56DB",fri:"\u4E94",sat:"\u516D"},months:{jan:"\u4E00\u6708",feb:"\u4E8C\u6708",mar:"\u4E09\u6708",apr:"\u56DB\u6708",may:"\u4E94\u6708",jun:"\u516D\u6708",jul:"\u4E03\u6708",aug:"\u516B\u6708",sep:"\u4E5D\u6708",oct:"\u5341\u6708",nov:"\u5341\u4E00\u6708",dec:"\u5341\u4E8C\u6708"}},select:{loading:"\u52A0\u8F7D\u4E2D",noMatch:"\u65E0\u5339\u914D\u6570\u636E",noData:"\u65E0\u6570\u636E",placeholder:"\u8BF7\u9009\u62E9"},cascader:{noMatch:"\u65E0\u5339\u914D\u6570\u636E",loading:"\u52A0\u8F7D\u4E2D",placeholder:"\u8BF7\u9009\u62E9",noData:"\u6682\u65E0\u6570\u636E"},pagination:{goto:"\u524D\u5F80",pagesize:"\u6761/\u9875",total:"\u5171 {total} \u6761",pageClassifier:"\u9875",page:"\u9875",prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875",currentPage:"\u7B2C {pager} \u9875",prevPages:"\u5411\u524D {pager} \u9875",nextPages:"\u5411\u540E {pager} \u9875",deprecationWarning:"\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"},messagebox:{title:"\u63D0\u793A",confirm:"\u786E\u5B9A",cancel:"\u53D6\u6D88",error:"\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"},upload:{deleteTip:"\u6309 delete \u952E\u53EF\u5220\u9664",delete:"\u5220\u9664",preview:"\u67E5\u770B\u56FE\u7247",continue:"\u7EE7\u7EED\u4E0A\u4F20"},table:{emptyText:"\u6682\u65E0\u6570\u636E",confirmFilter:"\u7B5B\u9009",resetFilter:"\u91CD\u7F6E",clearFilter:"\u5168\u90E8",sumText:"\u5408\u8BA1"},tour:{next:"\u4E0B\u4E00\u6B65",previous:"\u4E0A\u4E00\u6B65",finish:"\u7ED3\u675F\u5BFC\u89C8"},tree:{emptyText:"\u6682\u65E0\u6570\u636E"},transfer:{noMatch:"\u65E0\u5339\u914D\u6570\u636E",noData:"\u65E0\u6570\u636E",titles:["\u5217\u8868 1","\u5217\u8868 2"],filterPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",noCheckedFormat:"\u5171 {total} \u9879",hasCheckedFormat:"\u5DF2\u9009 {checked}/{total} \u9879"},image:{error:"\u52A0\u8F7D\u5931\u8D25"},pageHeader:{title:"\u8FD4\u56DE"},popconfirm:{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88"}}};/*! Element Plus v2.5.3 */var S={name:"en",el:{colorpicker:{confirm:"OK",clear:"Clear",defaultLabel:"color picker",description:"current color is {color}. press enter to select a new color."},datepicker:{now:"Now",today:"Today",cancel:"Cancel",clear:"Clear",confirm:"OK",dateTablePrompt:"Use the arrow keys and enter to select the day of the month",monthTablePrompt:"Use the arrow keys and enter to select the month",yearTablePrompt:"Use the arrow keys and enter to select the year",selectedDate:"Selected date",selectDate:"Select date",selectTime:"Select time",startDate:"Start Date",startTime:"Start Time",endDate:"End Date",endTime:"End Time",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",year:"",month1:"January",month2:"February",month3:"March",month4:"April",month5:"May",month6:"June",month7:"July",month8:"August",month9:"September",month10:"October",month11:"November",month12:"December",week:"week",weeks:{sun:"Sun",mon:"Mon",tue:"Tue",wed:"Wed",thu:"Thu",fri:"Fri",sat:"Sat"},weeksFull:{sun:"Sunday",mon:"Monday",tue:"Tuesday",wed:"Wednesday",thu:"Thursday",fri:"Friday",sat:"Saturday"},months:{jan:"Jan",feb:"Feb",mar:"Mar",apr:"Apr",may:"May",jun:"Jun",jul:"Jul",aug:"Aug",sep:"Sep",oct:"Oct",nov:"Nov",dec:"Dec"}},inputNumber:{decrease:"decrease number",increase:"increase number"},select:{loading:"Loading",noMatch:"No matching data",noData:"No data",placeholder:"Select"},dropdown:{toggleDropdown:"Toggle Dropdown"},cascader:{noMatch:"No matching data",loading:"Loading",placeholder:"Select",noData:"No data"},pagination:{goto:"Go to",pagesize:"/page",total:"Total {total}",pageClassifier:"",page:"Page",prev:"Go to previous page",next:"Go to next page",currentPage:"page {pager}",prevPages:"Previous {pager} pages",nextPages:"Next {pager} pages",deprecationWarning:"Deprecated usages detected, please refer to the el-pagination documentation for more details"},dialog:{close:"Close this dialog"},drawer:{close:"Close this dialog"},messagebox:{title:"Message",confirm:"OK",cancel:"Cancel",error:"Illegal input",close:"Close this dialog"},upload:{deleteTip:"press delete to remove",delete:"Delete",preview:"Preview",continue:"Continue"},slider:{defaultLabel:"slider between {min} and {max}",defaultRangeStartLabel:"pick start value",defaultRangeEndLabel:"pick end value"},table:{emptyText:"No Data",confirmFilter:"Confirm",resetFilter:"Reset",clearFilter:"All",sumText:"Sum"},tour:{next:"Next",previous:"Previous",finish:"Finish"},tree:{emptyText:"No Data"},transfer:{noMatch:"No matching data",noData:"No data",titles:["List 1","List 2"],filterPlaceholder:"Enter keyword",noCheckedFormat:"{total} items",hasCheckedFormat:"{checked}/{total} checked"},image:{error:"FAILED"},pageHeader:{title:"Back"},popconfirm:{confirmButtonText:"Yes",cancelButtonText:"No"}}};const P=n("br",null,null,-1),z=d({__name:"usage",setup(r){const e=A("zh-cn"),E=v(()=>e.value==="zh-cn"?w:S),u=()=>{e.value=e.value==="zh-cn"?"en":"zh-cn"};return(c,s)=>{const o=p("el-button"),D=p("el-table"),h=p("el-pagination"),m=p("el-config-provider");return C(),i("div",null,[a(o,{"mb-2":"",onClick:u},{default:l(()=>[t("Switch Language")]),_:1}),P,a(m,{locale:E.value},{default:l(()=>[a(D,{"mb-1":"",data:[]}),a(h,{total:100})]),_:1},8,["locale"])])}}});var M=Object.freeze(Object.defineProperty({__proto__:null,default:z},Symbol.toStringTag,{value:"Module"}));const N=n("h1",{id:"config-provider-\u5168\u5C40\u914D\u7F6E",tabindex:"-1"},[t("Config Provider \u5168\u5C40\u914D\u7F6E "),n("a",{class:"header-anchor vp-link",href:"#config-provider-\u5168\u5C40\u914D\u7F6E","aria-hidden":"true"},"#")],-1),j=n("p",null,"Config Provider \u88AB\u7528\u6765\u63D0\u4F9B\u5168\u5C40\u7684\u914D\u7F6E\u9009\u9879\uFF0C\u8BA9\u4F60\u7684\u914D\u7F6E\u80FD\u591F\u5728\u5168\u5C40\u90FD\u80FD\u591F\u88AB\u8BBF\u95EE\u5230\u3002",-1),I=n("h2",{id:"i18n-\u914D\u7F6E",tabindex:"-1"},[t("i18n \u914D\u7F6E "),n("a",{class:"header-anchor vp-link",href:"#i18n-\u914D\u7F6E","aria-hidden":"true"},"#")],-1),O=n("p",null,"\u901A\u8FC7 Config Provider \u6765\u914D\u7F6E\u591A\u8BED\u8A00\uFF0C\u8BA9\u4F60\u7684\u5E94\u7528\u53EF\u4EE5\u968F\u65F6\u5207\u6362\u8BED\u8A00\u3002",-1),L=n("p",null,"config-provider/usage",-1),q=n("h2",{id:"\u5BF9\u6309\u94AE\u8FDB\u884C\u914D\u7F6E",tabindex:"-1"},[t("\u5BF9\u6309\u94AE\u8FDB\u884C\u914D\u7F6E "),n("a",{class:"header-anchor vp-link",href:"#\u5BF9\u6309\u94AE\u8FDB\u884C\u914D\u7F6E","aria-hidden":"true"},"#")],-1),V=n("p",null,"config-provider/button",-1),Y=n("h2",{id:"\u5BF9\u6D88\u606F\u8FDB\u884C\u914D\u7F6E",tabindex:"-1"},[t("\u5BF9\u6D88\u606F\u8FDB\u884C\u914D\u7F6E "),n("a",{class:"header-anchor vp-link",href:"#\u5BF9\u6D88\u606F\u8FDB\u884C\u914D\u7F6E","aria-hidden":"true"},"#")],-1),J=n("p",null,"config-provider/message",-1),$=g('<h2 id="\u5B9E\u9A8C\u6027\u529F\u80FD" tabindex="-1">\u5B9E\u9A8C\u6027\u529F\u80FD <a class="header-anchor vp-link" href="#\u5B9E\u9A8C\u6027\u529F\u80FD" aria-hidden="true">#</a></h2><p>\u5728\u672C\u8282\u4E2D\uFF0C\u60A8\u53EF\u4EE5\u5B66\u4E60\u5982\u4F55\u4F7F\u7528 Config Provider \u6765\u63D0\u4F9B\u5B9E\u9A8C\u6027\u529F\u80FD\u3002 \u73B0\u5728\uFF0C\u6211\u4EEC\u8FD8\u6CA1\u6709\u6DFB\u52A0\u4EFB\u4F55\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u4F46\u5728\u672A\u6765\u7684\u89C4\u5212\u4E2D\uFF0C\u6211\u4EEC\u5C06\u6DFB\u52A0\u4E00\u4E9B\u5B9E\u9A8C\u6027\u529F\u80FD\u3002 \u60A8\u53EF\u4EE5\u4F7F\u7528\u6B64\u914D\u7F6E\u6765\u7BA1\u7406\u8FD9\u4E9B\u529F\u80FD\u3002</p><h2 id="api" tabindex="-1">API <a class="header-anchor vp-link" href="#api" aria-hidden="true">#</a></h2><h3 id="config-provider-attributes" tabindex="-1">Config Provider Attributes <a class="header-anchor vp-link" href="#config-provider-attributes" aria-hidden="true">#</a></h3>',4),R={class:"vp-table"},U=n("thead",null,[n("tr",null,[n("th",null,"\u5C5E\u6027\u540D"),n("th",null,"\u8BF4\u660E"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u9ED8\u8BA4\u503C")])],-1),W=n("td",null,"locale",-1),G=n("td",null,"\u7FFB\u8BD1\u6587\u672C\u5BF9\u8C61",-1),K={href:"https://github.com/element-plus/element-plus/blob/a98ff9b40c0c3d2b9959f99919bd8363e3e3c25a/packages/locale/index.ts#L5",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://github.com/element-plus/element-plus/blob/dev/packages/locale/lang/en.ts",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},X=n("td",null,"size",-1),Z=n("td",null,"\u5168\u5C40\u7EC4\u4EF6\u5927\u5C0F",-1),n2=n("td",null,"default",-1),a2=n("td",null,"zIndex",-1),t2=n("td",null,"\u5168\u5C40\u521D\u59CB\u5316 zIndex \u7684\u503C",-1),s2=n("td",null,"\u2014",-1),e2=n("td",null,"namespace",-1),o2={href:"https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},p2=n("td",null,"el",-1),l2=n("td",null,"button",-1),c2=n("td",null,[t("\u6309\u94AE\u76F8\u5173\u914D\u7F6E\uFF0C"),n("a",{href:"#button-attribute",class:"vp-link"},"\u8BE6\u89C1\u4E0B\u8868")],-1),u2=n("td",null,"\u8BE6\u89C1\u4E0B\u8868",-1),E2=n("td",null,"message",-1),C2=n("td",null,[t("\u6D88\u606F\u76F8\u5173\u914D\u7F6E\uFF0C "),n("a",{href:"#message-attribute",class:"vp-link"},"\u8BE6\u89C1\u4E0B\u8868")],-1),i2=n("td",null,"\u8BE6\u89C1\u4E0B\u8868",-1),r2=n("td",null,"experimental-features",-1),D2=n("td",null,"\u5C06\u8981\u6DFB\u52A0\u7684\u5B9E\u9A8C\u9636\u6BB5\u7684\u529F\u80FD\uFF0C\u6240\u6709\u529F\u80FD\u90FD\u662F\u9ED8\u8BA4\u8BBE\u7F6E\u4E3A false",-1),F2=n("td",null,"\u2014",-1),d2=n("h3",{id:"button-attribute",tabindex:"-1"},[t("Button Attribute "),n("a",{class:"header-anchor vp-link",href:"#button-attribute","aria-hidden":"true"},"#")],-1),k2={class:"vp-table"},g2=n("thead",null,[n("tr",null,[n("th",null,"\u53C2\u6570"),n("th",null,"\u63CF\u8FF0"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u9ED8\u8BA4\u503C")])],-1),h2=n("td",null,"autoInsertSpace",-1),m2=n("td",null,"\u81EA\u52A8\u5728\u4E24\u4E2A\u4E2D\u6587\u5B57\u7B26\u4E4B\u95F4\u63D2\u5165\u7A7A\u683C",-1),_2=n("td",null,"false",-1),A2=n("h3",{id:"message-attribute",tabindex:"-1"},[t("Message Attribute "),n("a",{class:"header-anchor vp-link",href:"#message-attribute","aria-hidden":"true"},"#")],-1),v2={class:"vp-table"},f2=n("thead",null,[n("tr",null,[n("th",null,"\u53C2\u6570"),n("th",null,"\u63CF\u8FF0"),n("th",null,"\u7C7B\u578B"),n("th",null,"\u9ED8\u8BA4\u503C")])],-1),b2=n("td",null,"max",-1),B2=n("td",null,"\u53EF\u540C\u65F6\u663E\u793A\u7684\u6D88\u606F\u6700\u5927\u6570\u91CF",-1),y2=n("td",null,"\u2014",-1),x2=g('<h3 id="config-provider-slots" tabindex="-1">Config Provider Slots <a class="header-anchor vp-link" href="#config-provider-slots" aria-hidden="true">#</a></h3><div class="vp-table"><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th><th>Scope</th></tr></thead><tbody><tr><td>default</td><td>\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9</td><td>config: \u63D0\u4F9B\u5168\u5C40\u914D\u7F6E\uFF08\u4ECE\u9876\u90E8\u7EE7\u627F\uFF09</td></tr></tbody></table></div><h2 id="\u6E90\u4EE3\u7801" tabindex="-1">\u6E90\u4EE3\u7801 <a class="header-anchor vp-link" href="#\u6E90\u4EE3\u7801" aria-hidden="true">#</a></h2>',3),T2={href:"https://github.com/element-plus/element-plus/blob/dev/docs/zh-CN/component/config-provider.md",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},P2='{"title":"\u5168\u5C40\u914D\u7F6E","description":"","frontmatter":{"title":"\u5168\u5C40\u914D\u7F6E","lang":"zh-CN"},"headers":[{"level":2,"title":"i18n \u914D\u7F6E","slug":"i18n-\u914D\u7F6E"},{"level":2,"title":"\u5BF9\u6309\u94AE\u8FDB\u884C\u914D\u7F6E","slug":"\u5BF9\u6309\u94AE\u8FDB\u884C\u914D\u7F6E"},{"level":2,"title":"\u5BF9\u6D88\u606F\u8FDB\u884C\u914D\u7F6E","slug":"\u5BF9\u6D88\u606F\u8FDB\u884C\u914D\u7F6E"},{"level":2,"title":"\u5B9E\u9A8C\u6027\u529F\u80FD","slug":"\u5B9E\u9A8C\u6027\u529F\u80FD"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Config Provider Attributes","slug":"config-provider-attributes"},{"level":3,"title":"Button Attribute","slug":"button-attribute"},{"level":3,"title":"Message Attribute","slug":"message-attribute"},{"level":3,"title":"Config Provider Slots","slug":"config-provider-slots"},{"level":2,"title":"\u6E90\u4EE3\u7801","slug":"\u6E90\u4EE3\u7801"}],"relativePath":"zh-CN/component/config-provider.md","lastUpdated":1706237017000}',w2={},z2=Object.assign(w2,{__name:"config-provider",setup(r){const e={"../../examples/config-provider/button.vue":y,"../../examples/config-provider/message.vue":T,"../../examples/config-provider/usage.vue":M};return(E,u)=>{const c=p("Demo"),s=p("api-typing"),o=f;return C(),i("div",null,[N,j,I,O,a(c,{demos:F(e),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Emb-2%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Etoggle%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3ESwitch%20Language%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ebr%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-config-provider%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Alocale%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Elocale%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-table%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Emb-1%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Adata%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%5B%5D%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-pagination%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Atotal%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E100%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-config-provider%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20computed%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ref%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20zhCn%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'element-plus%2Fdist%2Flocale%2Fzh-cn.mjs'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20en%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'element-plus%2Fdist%2Flocale%2Fen.mjs'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20language%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Eref%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'zh-cn'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20locale%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Ecomputed%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Elanguage%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3D%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'zh-cn'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3F%3C%2Fspan%3E%20zhCn%20%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20en%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3Etoggle%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20language%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20language%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3Evalue%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3D%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'zh-cn'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3F%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'en'%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'zh-cn'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"config-provider/usage","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-button%20mb-2%20%40click%3D%22toggle%22%3ESwitch%20Language%3C%2Fel-button%3E%0A%20%20%20%20%3Cbr%20%2F%3E%0A%0A%20%20%20%20%3Cel-config-provider%20%3Alocale%3D%22locale%22%3E%0A%20%20%20%20%20%20%3Cel-table%20mb-1%20%3Adata%3D%22%5B%5D%22%20%2F%3E%0A%20%20%20%20%20%20%3Cel-pagination%20%3Atotal%3D%22100%22%20%2F%3E%0A%20%20%20%20%3C%2Fel-config-provider%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20computed%2C%20ref%20%7D%20from%20'vue'%0Aimport%20zhCn%20from%20'element-plus%2Fdist%2Flocale%2Fzh-cn.mjs'%0Aimport%20en%20from%20'element-plus%2Fdist%2Flocale%2Fen.mjs'%0A%0Aconst%20language%20%3D%20ref('zh-cn')%0Aconst%20locale%20%3D%20computed(()%20%3D%3E%20(language.value%20%3D%3D%3D%20'zh-cn'%20%3F%20zhCn%20%3A%20en))%0A%0Aconst%20toggle%20%3D%20()%20%3D%3E%20%7B%0A%20%20language.value%20%3D%20language.value%20%3D%3D%3D%20'zh-cn'%20%3F%20'en'%20%3A%20'zh-cn'%0A%7D%0A%3C%2Fscript%3E%0A",description:"%3Cp%3E%E4%BD%BF%E7%94%A8%E4%B8%A4%E4%B8%AA%E5%B1%9E%E6%80%A7%E6%9D%A5%E6%8F%90%E4%BE%9B%20i18n%20%E7%9B%B8%E5%85%B3%E9%85%8D%E7%BD%AE%3C%2Fp%3E%0A"},{default:l(()=>[L]),_:1},8,["demos"]),q,a(c,{demos:F(e),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Em%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eb-2%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-checkbox%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Ev-model%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Econfig.autoInsertSpace%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EautoInsertSpace%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-checkbox%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-config-provider%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Abutton%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Econfig%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%E4%B8%AD%E6%96%87%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-config-provider%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20reactive%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20config%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Ereactive%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EautoInsertSpace%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"config-provider/button","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%20m%3D%22b-2%22%3E%0A%20%20%20%20%20%20%3Cel-checkbox%20v-model%3D%22config.autoInsertSpace%22%0A%20%20%20%20%20%20%20%20%3EautoInsertSpace%3C%2Fel-checkbox%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%0A%20%20%20%20%3Cel-config-provider%20%3Abutton%3D%22config%22%3E%0A%20%20%20%20%20%20%3Cel-button%3E%E4%B8%AD%E6%96%87%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Fel-config-provider%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%20%7D%20from%20'vue'%0A%0Aconst%20config%20%3D%20reactive(%7B%0A%20%20autoInsertSpace%3A%20true%2C%0A%7D)%0A%3C%2Fscript%3E%0A",description:""},{default:l(()=>[V]),_:1},8,["demos"]),Y,a(c,{demos:F(e),source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-config-provider%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Amessage%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Econfig%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Eel-button%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%40click%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eopen%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3EOPEN%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-button%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Eel-config-provider%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20reactive%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20ElMessage%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'element-plus'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20config%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3Ereactive%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emax%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function-variable%20function%22%3Eopen%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%3Cspan%20class%3D%22token%20function%22%3EElMessage%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20string%22%3E'This%20is%20a%20message.'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"config-provider/message","raw-source":"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cel-config-provider%20%3Amessage%3D%22config%22%3E%0A%20%20%20%20%20%20%3Cel-button%20%40click%3D%22open%22%3EOPEN%3C%2Fel-button%3E%0A%20%20%20%20%3C%2Fel-config-provider%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%0A%3Cscript%20lang%3D%22ts%22%20setup%3E%0Aimport%20%7B%20reactive%20%7D%20from%20'vue'%0Aimport%20%7B%20ElMessage%20%7D%20from%20'element-plus'%0Aconst%20config%20%3D%20reactive(%7B%0A%20%20max%3A%203%2C%0A%7D)%0Aconst%20open%20%3D%20()%20%3D%3E%20%7B%0A%20%20ElMessage('This%20is%20a%20message.')%0A%7D%0A%3C%2Fscript%3E%0A",description:""},{default:l(()=>[J]),_:1},8,["demos"]),$,n("div",R,[n("table",null,[U,n("tbody",null,[n("tr",null,[W,G,n("td",null,[a(s,{type:"object",details:"{name: string, el: TranslatePair}"}),n("a",K,[a(o,{class:"link-icon"})]),t(),n("a",H,[t("languages"),a(o,{class:"link-icon"})])]),n("td",null,[n("a",Q,[t("en"),a(o,{class:"link-icon"})])])]),n("tr",null,[X,Z,n("td",null,[a(s,{type:"enum",details:"'large' | 'default' | 'small'"})]),n2]),n("tr",null,[a2,t2,n("td",null,[a(s,{type:"number",details:""})]),s2]),n("tr",null,[e2,n("td",null,[t("\u5168\u5C40\u7EC4\u4EF6\u7C7B\u540D\u79F0\u524D\u7F00 (\u9700\u8981\u914D\u5408 "),n("a",o2,[t("$namespace"),a(o,{class:"link-icon"})]),t(" \u4F7F\u7528)")]),n("td",null,[a(s,{type:"string",details:""})]),p2]),n("tr",null,[l2,c2,n("td",null,[a(s,{type:"object",details:"{autoInsertSpace?: boolean}"})]),u2]),n("tr",null,[E2,C2,n("td",null,[a(s,{type:"object",details:"{max?: number}"})]),i2]),n("tr",null,[r2,D2,n("td",null,[a(s,{type:"object",details:""})]),F2])])])]),d2,n("div",k2,[n("table",null,[g2,n("tbody",null,[n("tr",null,[h2,m2,n("td",null,[a(s,{type:"boolean",details:""})]),_2])])])]),A2,n("div",v2,[n("table",null,[f2,n("tbody",null,[n("tr",null,[b2,B2,n("td",null,[a(s,{type:"number",details:""})]),y2])])])]),x2,n("p",null,[n("a",T2,[t("\u6587\u6863"),a(o,{class:"link-icon"})])])])}}});export{P2 as __pageData,z2 as default};
