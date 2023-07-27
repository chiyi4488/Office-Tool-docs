import{_ as t,r as c,o as p,c as l,b as n,d as s,e,w as o,a as i}from"./app-2051cae9.js";const r={},d=n("h1",{id:"完全自定义安装的-iso",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#完全自定义安装的-iso","aria-hidden":"true"},"#"),s(" 完全自定义安装的 ISO")],-1),u=n("p",null,"创建 Office ISO 前，您需要在 Office Tool Plus 的根目录（Office Tool 文件夹）内创建批处理文件，例如 Setup.bat。",-1),m=i(`<p>例如以下示例安装简体中文 32 位的 Microsoft 365，排除 Access, Bing, Groove, Lync, OneDrive 应用程序：</p><div class="language-batch line-numbers-mode" data-ext="batch"><pre class="language-batch"><code><span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> off</span>
<span class="token command"><span class="token keyword">title</span> Office Tool Plus - Console</span>

&quot;Office Tool Plus&quot; deploy /addProduct O365ProPlusRetail_zh-cn_Access,Bing,Groove,Lync,OneDrive /sourcePath %~dp0 /clientEdition 32 /channel Current /version 16.0.xxxxx.xxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您需要等待安装完成，请调用 Office Tool Plus.Console：</p><div class="language-batch line-numbers-mode" data-ext="batch"><pre class="language-batch"><code><span class="token operator">@</span><span class="token command"><span class="token keyword">echo</span> off</span>
<span class="token command"><span class="token keyword">title</span> Office Tool Plus - Console</span>

<span class="token comment">:: Change the working directory to current directory.</span>
<span class="token comment">:: Make sure you have administrator permission.</span>
<span class="token command"><span class="token keyword">set</span> <span class="token string">&quot;Apply=%*&quot;</span></span>
<span class="token command"><span class="token keyword">cd</span> <span class="token parameter attr-name">/d</span> <span class="token string">&quot;%~dp0&quot;</span> </span><span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token punctuation">(</span> <span class="token command"><span class="token keyword">if</span> <span class="token keyword">exist</span> <span class="token string">&quot;%temp%\\getadmin.vbs&quot;</span></span> <span class="token command"><span class="token keyword">del</span> <span class="token string">&quot;%temp%\\getadmin.vbs&quot;</span> </span><span class="token punctuation">)</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token command"><span class="token keyword">fsutil</span> dirty query <span class="token variable">%systemdrive%</span> <span class="token number">1</span>&gt;nul <span class="token number">2</span>&gt;nul || (  cmd <span class="token parameter attr-name">/u</span> <span class="token parameter attr-name">/c</span> echo Set UAC = CreateObject<span class="token operator">^</span>(<span class="token string">&quot;Shell.Application&quot;</span><span class="token operator">^</span>) : UAC.ShellExecute <span class="token string">&quot;cmd.exe&quot;</span>, <span class="token string">&quot;/k cd &quot;&quot;%~sdp0&quot;&quot; &amp;&amp; &quot;&quot;%~s0&quot;&quot; %Apply%&quot;</span>, <span class="token string">&quot;&quot;</span>, <span class="token string">&quot;runas&quot;</span>, <span class="token number">1</span> &gt;&gt; <span class="token string">&quot;%temp%\\getadmin.vbs&quot;</span> </span><span class="token operator">&amp;</span><span class="token operator">&amp;</span> &quot;%temp%\\getadmin.vbs&quot; <span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token command"><span class="token keyword">exit</span> <span class="token parameter attr-name">/B</span> </span><span class="token punctuation">)</span>

<span class="token comment">:: Run commands.</span>
&quot;Office Tool Plus.Console&quot; deploy /addProduct O365ProPlusRetail_zh-cn_Access,Bing,Groove,Lync,OneDrive /sourcePath %~dp0 /clientEdition 32 /channel Current /version 16.0.xxxxx.xxxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请根据实际情况将 <code>/channel</code>, <code>/version</code> 和 <code>/clientEdition</code> 参数替换为实际值，否则安装会失败。</p></div><div class="custom-container tip"><p class="custom-container-title">小知识</p><p><code>%~dp0</code> 在批处理中代表批处理所在的文件夹路径。例如当您挂载 Office ISO 为 E 盘时，<code>%~dp0</code> 会被自动替换为 <code>E:\\</code>。</p></div><p>批处理文件编写完成后保存，需要<strong>使用英文命名，否则会无法识别</strong>。</p>`,7);function k(v,f){const a=c("RouterLink");return p(),l("div",null,[d,u,n("p",null,[s("您可以使用 "),e(a,{to:"/zh-cn/others/commands.html#%E9%83%A8%E7%BD%B2%E5%91%BD%E4%BB%A4"},{default:o(()=>[s("deploy")]),_:1}),s(" 命令完全自定义您的 Office 安装。")]),m,n("p",null,[s("然后按照创建"),e(a,{to:"/deploy/create-iso/basic.html"},{default:o(()=>[s("不含任何配置的 ISO")]),_:1}),s(" 的步骤创建 Office ISO 即可。")])])}const b=t(r,[["render",k],["__file","deploy-command.html.vue"]]);export{b as default};
