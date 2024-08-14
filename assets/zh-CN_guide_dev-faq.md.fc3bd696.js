import{o as l,c as t,e,d as n,b as a,f as o,g as p}from"./app.1616d45b.js";const c=o(`<h1 id="\u5F00\u53D1\u5E38\u89C1\u95EE\u9898" tabindex="-1">\u5F00\u53D1\u5E38\u89C1\u95EE\u9898 <a class="header-anchor vp-link" href="#\u5F00\u53D1\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a></h1><p>\u8FD9\u91CC\u662F\u5F00\u53D1\u65B9\u9762\u5BB9\u6613\u9047\u5230\u7684\u95EE\u9898</p><h2 id="\u5982\u679C\u4F60\u9047\u5230\u4F9D\u8D56\u76F8\u5173\u95EE\u9898" tabindex="-1">\u5982\u679C\u4F60\u9047\u5230\u4F9D\u8D56\u76F8\u5173\u95EE\u9898 <a class="header-anchor vp-link" href="#\u5982\u679C\u4F60\u9047\u5230\u4F9D\u8D56\u76F8\u5173\u95EE\u9898" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> node_modules
<span class="token function">pnpm</span> i
</code></pre></div><h2 id="\u94FE\u63A5\u672C\u5730\u4F9D\u8D56" tabindex="-1">\u94FE\u63A5\u672C\u5730\u4F9D\u8D56 <a class="header-anchor vp-link" href="#\u94FE\u63A5\u672C\u5730\u4F9D\u8D56" aria-hidden="true">#</a></h2><div class="language-shell"><pre><code><span class="token comment"># \u83B7\u53D6\u6784\u5EFA\u7ED3\u679C</span>
<span class="token function">pnpm</span> build
<span class="token builtin class-name">cd</span> dist/element-plus
<span class="token comment"># set cur element-plus to global \`node_modules\`</span>
<span class="token function">pnpm</span> <span class="token function">link</span> <span class="token parameter variable">--global</span>
<span class="token comment"># for esm we also need link element-plus for dist</span>
<span class="token function">pnpm</span> <span class="token function">link</span> <span class="token parameter variable">--global</span> element-plus

<span class="token comment"># \u8FDB\u5165\u4F60\u7684\u9879\u76EE, \u94FE\u63A5\u5230 \`element-plus\`</span>
<span class="token builtin class-name">cd</span> your-project
<span class="token function">pnpm</span> <span class="token function">link</span> <span class="token parameter variable">--global</span> element-plus
</code></pre></div>`,6),i={href:"https://pnpm.io/cli/link",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},r=e("h2",{id:"\u4E3B\u9898",tabindex:"-1"},[n("\u4E3B\u9898 "),e("a",{class:"header-anchor vp-link",href:"#\u4E3B\u9898","aria-hidden":"true"},"#")],-1),d=e("p",null,"\u6211\u4EEC\u4E0D\u5E94\u5728scss\u6587\u4EF6\u4E2D\u5199\u5165\u4E2D\u6587\u6CE8\u91CA",-1),u=e("p",null,[n("\u90A3\u5C06\u4F1A\u5728 vite \u6784\u5EFA\u4E0B\u7684 css \u6587\u4EF6\u5F00\u5934\u751F\u6210\u8B66\u544A\u4FE1\u606F "),e("code",null,'@charset "UTF-8";')],-1),_={href:"https://github.com/element-plus/element-plus/issues/3219",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},v='{"title":"\u5F00\u53D1\u5E38\u89C1\u95EE\u9898","description":"","frontmatter":{"title":"\u5F00\u53D1\u5E38\u89C1\u95EE\u9898","lang":"zh-CN"},"headers":[{"level":2,"title":"\u5982\u679C\u4F60\u9047\u5230\u4F9D\u8D56\u76F8\u5173\u95EE\u9898","slug":"\u5982\u679C\u4F60\u9047\u5230\u4F9D\u8D56\u76F8\u5173\u95EE\u9898"},{"level":2,"title":"\u94FE\u63A5\u672C\u5730\u4F9D\u8D56","slug":"\u94FE\u63A5\u672C\u5730\u4F9D\u8D56"},{"level":2,"title":"\u4E3B\u9898","slug":"\u4E3B\u9898"}],"relativePath":"zh-CN/guide/dev-faq.md","lastUpdated":1706237017000}',m={},g=Object.assign(m,{__name:"dev-faq",setup(h){return(k,f)=>{const s=p;return l(),t("div",null,[c,e("blockquote",null,[e("p",null,[n("\u66F4\u591A\u4FE1\u606F\u67E5\u770B "),e("a",i,[n("pnpm link"),a(s,{class:"link-icon"})])])]),r,d,u,e("blockquote",null,[e("p",null,[n("\u66F4\u591A\u4FE1\u606F\u89C1 "),e("a",_,[n("#3219"),a(s,{class:"link-icon"})])])])])}}});export{v as __pageData,g as default};
