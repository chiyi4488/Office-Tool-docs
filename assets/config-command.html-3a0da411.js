import{_ as o,r as a,o as s,c,b as i,d as e,e as d,w as t,a as l}from"./app-2051cae9.js";const r={},p=l(`<h1 id="使用-loadconfig-的-iso" tabindex="-1"><a class="header-anchor" href="#使用-loadconfig-的-iso" aria-hidden="true">#</a> 使用 loadConfig 的 ISO</h1><p>创建 Office ISO 前，您需要在 Office Tool Plus 的根目录（Office Tool 文件夹）内创建批处理文件，例如 Setup.bat。</p><p>使用 <code>/loadConfig</code> 命令可以加载 XML 配置文件，并修改其中的参数，以便进行安装。</p><p>例如如果您创建了同时包含 32 位和 64 位的 Office ISO，您可以使用以下命令安装对应的版本：</p><p>其中 <code>/edition 32</code> 指定安装 32 位的 Office ，<code>/edition 64</code> 指定安装 64 位的 Office。</p><div class="language-batch line-numbers-mode" data-ext="batch"><pre class="language-batch"><code><span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> off</span>
<span class="token command"><span class="token keyword">title</span> Office Tool Plus - Console</span>

<span class="token comment">:: For 32-bit</span>
&quot;Office Tool Plus.exe&quot; /loadConfig %~dp0ConfigForISO.xml /SourcePath %~dp0 /edition 32
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-batch line-numbers-mode" data-ext="batch"><pre class="language-batch"><code><span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> off</span>
<span class="token command"><span class="token keyword">title</span> Office Tool Plus - Console</span>

<span class="token comment">:: For 64-bit</span>
&quot;Office Tool Plus.exe&quot; /loadConfig %~dp0ConfigForISO.xml /SourcePath %~dp0 /edition 64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">小知识</p><p><code>%~dp0</code> 在批处理中代表批处理所在的文件夹路径。例如当您挂载 Office ISO 为 E 盘时，<code>%~dp0</code> 会被自动替换为 <code>E:\\</code>。</p></div><p>批处理文件编写完成后保存，需要<strong>使用英文命名，否则会无法识别</strong>。</p>`,9);function f(m,u){const n=a("RouterLink");return s(),c("div",null,[p,i("p",null,[e("然后按照创建"),d(n,{to:"/deploy/create-iso/default-config.html"},{default:t(()=>[e("包含默认配置的 ISO")]),_:1}),e(" 的步骤创建 Office ISO 即可。")])])}const b=o(r,[["render",f],["__file","config-command.html.vue"]]);export{b as default};
