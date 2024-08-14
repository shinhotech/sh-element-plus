import{o as e,c as t,e as s,d as n,b as p,f as o,g as c}from"./app.3745abeb.js";const l=s("h2",{id:"\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4",tabindex:"-1"},[n("\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4 "),s("span",{class:"vp-tag"},"2.2.0"),n(),s("a",{class:"header-anchor vp-link",href:"#\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4","aria-hidden":"true"},"#")],-1),i={class:"tip custom-block"},r=s("p",{class:"custom-block-title"},"TIP",-1),u={href:"https://github.com/element-plus/element-plus-vite-starter",class:"vp-link",target:"_blank",rel:"noopener noreferrer"},d=o(`<p>Element Plus \u63D0\u4F9B\u7684\u9ED8\u8BA4\u547D\u540D\u7A7A\u95F4\u4E3A <code>el</code>\u3002 \u5728\u7279\u6B8A\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u9700\u8981\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4\u3002</p><p>\u7531\u4E8E\u6211\u4EEC\u4F7F\u7528 sass \u4E66\u5199\u6837\u5F0F\uFF0C\u5982\u679C\u60A8\u9700\u8981\u81EA\u5B9A\u4E49\u6240\u6709\u547D\u540D\u7A7A\u95F4\uFF0C \u6211\u4EEC\u5047\u5B9A\u7528\u6237\u4F7F\u7528\u4E86 sass \u4E66\u5199\u6837\u5F0F\u3002</p><p>\u60A8\u5FC5\u987B\u540C\u65F6\u8BBE\u7F6E <code>ElConfigProvider</code> \u548C scss <code>$namespace</code>\u3002</p><h3 id="\u8BBE\u7F6E-elconfigprovider" tabindex="-1">\u8BBE\u7F6E <code>ElConfigProvider</code> <a class="header-anchor vp-link" href="#\u8BBE\u7F6E-elconfigprovider" aria-hidden="true">#</a></h3><p>\u4F7F\u7528 <code>ElConfigProvider</code> \u5305\u88C5\u60A8\u7684\u6839\u7EC4\u4EF6\u3002</p><div class="language-vue"><pre><code><span class="token comment">&lt;!-- App.vue --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-config-provider</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ep<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- ... --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="\u8BBE\u7F6E-scss-\u548C-css-\u53D8\u91CF" tabindex="-1">\u8BBE\u7F6E SCSS \u548C CSS \u53D8\u91CF <a class="header-anchor vp-link" href="#\u8BBE\u7F6E-scss-\u548C-css-\u53D8\u91CF" aria-hidden="true">#</a></h3><p>\u521B\u5EFA <code>styles/element/index.scss</code>\uFF1A</p><div class="language-scss"><pre><code><span class="token comment">// styles/element/index.scss</span>
<span class="token comment">// we can add this to custom namespace, default is &#39;el&#39;</span>
<span class="token keyword">@forward</span> <span class="token string">&#39;element-plus/theme-chalk/src/mixins/config.scss&#39;</span> <span class="token module-modifier keyword">with</span> <span class="token punctuation">(</span>
  <span class="token property"><span class="token variable">$namespace</span></span><span class="token punctuation">:</span> <span class="token string">&#39;ep&#39;</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>
</code></pre></div><p>\u5728 <code>vite.config.ts</code> \u4E2D\u5BFC\u5165 <code>styles/element/index.scss</code>\uFF1A</p><blockquote><p>Webpack\u4E5F\u662F\u5982\u6B64\uFF0C\u5B83\u9700\u8981\u5728 <code>preprocessorOptions</code> \u4E2D\u8BBE\u7F6E\u3002</p></blockquote><div class="language-ts"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  css<span class="token operator">:</span> <span class="token punctuation">{</span>
    preprocessorOptions<span class="token operator">:</span> <span class="token punctuation">{</span>
      scss<span class="token operator">:</span> <span class="token punctuation">{</span>
        additionalData<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">@use &quot;~/styles/element/index.scss&quot; as *;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p>\u5C31\u8FD9\u4E48\u7B80\u5355\u3002</p>`,13),h='{"title":"\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4","description":"","frontmatter":{"title":"\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4","lang":"zh-CN"},"headers":[{"level":2,"title":"\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4 ^(2.2.0)","slug":"\u81EA\u5B9A\u4E49\u547D\u540D\u7A7A\u95F4"},{"level":3,"title":"\u8BBE\u7F6E ElConfigProvider","slug":"\u8BBE\u7F6E-elconfigprovider"},{"level":3,"title":"\u8BBE\u7F6E SCSS \u548C CSS \u53D8\u91CF","slug":"\u8BBE\u7F6E-scss-\u548C-css-\u53D8\u91CF"}],"relativePath":"zh-CN/guide/namespace.md","lastUpdated":1706237017000}',k={},f=Object.assign(k,{__name:"namespace",setup(m){return(g,_)=>{const a=c;return e(),t("div",null,[l,s("div",i,[r,s("p",null,[n("\u6211\u4EEC\u63D0\u4F9B\u4E86 "),s("a",u,[n("element-plus-vite-starter \u6A21\u7248"),p(a,{class:"link-icon"})]),n("\u3002 \u67E5\u770B\u4EE3\u7801\u4E86\u89E3\u4F7F\u7528\u65B9\u6CD5\u3002")])]),d])}}});export{h as __pageData,f as default};
