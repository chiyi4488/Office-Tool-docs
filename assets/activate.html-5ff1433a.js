import{_ as t,o as e,c as l,a}from"./app-2051cae9.js";const s={},n=a(`<h1 id="激活命令" tabindex="-1"><a class="header-anchor" href="#激活命令" aria-hidden="true">#</a> 激活命令</h1><p>这些命令可以在命令行和命令框中使用，命令不区分大小写，按照顺序执行。</p><p>ospp <em>[options]</em></p><p>使用 OSPP 命令时，你需要指定为 OSPP，然后再写参数，例如以下是一条简单的激活命令：</p><div class="language-batch line-numbers-mode" data-ext="batch"><pre class="language-batch"><code><span class="token command"><span class="token keyword">ospp</span> <span class="token parameter attr-name">/insLicID</span> ProPlus2021Volume <span class="token parameter attr-name">/inpkey<span class="token punctuation">:</span></span>XXXXX-XXXXX-XXXXX-XXXXX-XXXXX <span class="token parameter attr-name">/act</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">说明</th><th style="text-align:left;">使用方法</th></tr></thead><tbody><tr><td style="text-align:left;">/insLicID <em>value</em></td><td style="text-align:left;">安装指定产品的 Office 许可证</td><td style="text-align:left;">/insLicID ProPlus2021Volume</td></tr><tr><td style="text-align:left;">/inpkey:<em>value</em></td><td style="text-align:left;">安装指定的 Office 密钥</td><td style="text-align:left;">/inpkey:XXXXX-XXXXX-XXXXX-XXXXX-XXXXX</td></tr><tr><td style="text-align:left;">/unpkey:<em>value</em></td><td style="text-align:left;">卸载指定的 Office 密钥</td><td style="text-align:left;">/unpkey:XXXXX</td></tr><tr><td style="text-align:left;">/sethst:<em>value</em></td><td style="text-align:left;">设置 KMS 主机地址</td><td style="text-align:left;">/sethst:kms.example.com</td></tr><tr><td style="text-align:left;">/setprt:<em>value</em></td><td style="text-align:left;">设置 KMS 主机端口，默认值: 1688</td><td style="text-align:left;">/setprt:1688</td></tr><tr><td style="text-align:left;">/act</td><td style="text-align:left;">激活 Office 客户端产品</td><td style="text-align:left;">/act</td></tr><tr><td style="text-align:left;">/clAll</td><td style="text-align:left;">清除所有已安装的 Office 许可证和产品密钥</td><td style="text-align:left;">/clAll</td></tr><tr><td style="text-align:left;">/clLicenses</td><td style="text-align:left;">清除所有已安装的 Office 许可证</td><td style="text-align:left;">/clLicenses</td></tr><tr><td style="text-align:left;">/clKeys</td><td style="text-align:left;">清除所有已安装的 Office 产品密钥</td><td style="text-align:left;">/clKeys</td></tr><tr><td style="text-align:left;">/dstatus</td><td style="text-align:left;">显示 Office 激活信息（仅在命令行中可用）</td><td style="text-align:left;">/dstatus</td></tr></tbody></table><div class="custom-container warning"><p class="custom-container-title">注意</p><p>若要使用 <code>/clAll</code>, <code>/clLicenses</code> 或 <code>/clKeys</code> 命令，请将这些命令写在首位，以便能够第一个执行；或分开执行，否则您安装的产品密钥或许可证会被清空。</p></div>`,7),d=[n];function i(c,r){return e(),l("div",null,d)}const X=t(s,[["render",i],["__file","activate.html.vue"]]);export{X as default};
