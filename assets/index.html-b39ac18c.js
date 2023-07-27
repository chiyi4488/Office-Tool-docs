import{_ as n,r as s,o,c as h,b as l,d as t,e as d,w as i,a as e}from"./app-2051cae9.js";const r={},c=e('<h1 id="程序设置" tabindex="-1"><a class="header-anchor" href="#程序设置" aria-hidden="true">#</a> 程序设置</h1><p>在设置页面，你可以调整程序的语言、主题、背景等设置，还可以调整一些下载或者部署设置。</p><p>如果系统语言无法匹配，则默认使用英语（美国）作为显示语言。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>若要保存更改，请打开<code>保存设置</code>按钮，否则所有设置将在重启程序后丢失。</p></div><h2 id="外观和行为" tabindex="-1"><a class="header-anchor" href="#外观和行为" aria-hidden="true">#</a> 外观和行为</h2><h3 id="主题" tabindex="-1"><a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题</h3><p>默认情况下，Office Tool Plus 会跟随 Windows 设置自动切换浅色主题（Light Blue）和深色主题（Dark White）。你也可以根据自己的喜好设置一个特定的主题。</p><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3><p>默认情况下，Office Tool Plus 使用来自必应的每日一图作为程序背景。你可以根据自己的喜好调整为其他背景，或使用本地图片作为程序背景，支持 PNG, JPG 和 BMP。</p>',9),f=e('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>云母效果仅在 Windows 11 中可用。使用亚克力、模糊或云母效果时，标题栏会自动变更为 Windows 11 样式。</p><p>在 Windows 10 中使用亚克力效果时，拖动窗口可能会有延迟。</p></div><h2 id="高级" tabindex="-1"><a class="header-anchor" href="#高级" aria-hidden="true">#</a> 高级</h2><h3 id="硬件加速" tabindex="-1"><a class="header-anchor" href="#硬件加速" aria-hidden="true">#</a> 硬件加速</h3><p>使用硬件加速能够为程序带来更好的性能和动画效果。关闭硬件加速可能会极大降低应用程序性能，因此我们非常不建议关闭硬件加速。</p><p>但如果您在使用 Office Tool Plus 的过程中遇到了窗口变全透明、加载图片时内存溢出等问题，你可以通过关闭硬件加速来缓解这些问题。</p>',5),p=e('<h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><h3 id="office-语言显示格式" tabindex="-1"><a class="header-anchor" href="#office-语言显示格式" aria-hidden="true">#</a> Office 语言显示格式</h3><p>默认情况下，Office Tool Plus 显示 Office 语言为本地格式，例如英语显示为 English (United States).</p><ul><li>默认：不进行任何更改，按照默认的设置显示。</li><li>本地名称：显示语言的本地名称，例如英语是 English，德语是：Deutsch</li><li>英文名称：显示语言的英文名称，例如中文是 Chinese，德语是：German</li><li>本地化名称：按照系统语言设置显示，例如你的系统语言是中文，那么所有的语言都显示为中文。</li></ul><p>本地名称、英文名称以及本地化名称由 Windows 提供数据，不同版本的 Windows 显示结果可能不同。</p><h3 id="显示内部产品和通道" tabindex="-1"><a class="header-anchor" href="#显示内部产品和通道" aria-hidden="true">#</a> 显示内部产品和通道</h3><p>默认情况下，Office Tool Plus 不会显示非公开的产品和更新通道，例如 ProPlusVolume 或 MondoVolume 等产品，又或者 Dofgood:DevMain 等更新通道。</p><p>内部产品和更新通道不受 Office 部署工具的支持，因此您无法直接使用。但如果您需要，您可以打开此开关，Office Tool Plus 将会在部署时显示这些内部产品和更新通道。</p><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><h3 id="校验文件" tabindex="-1"><a class="header-anchor" href="#校验文件" aria-hidden="true">#</a> 校验文件</h3><p>当您打开此开关后，Office Tool Plus 将会在下载 Office 安装文件后对文件进行校验，校验可以检查出版本不匹配，文件损坏等问题。</p><p>如果在文件损坏的情况下继续部署 Office，可能会遇到安装进度卡住不动的问题，因此我们强烈建议您在部署之前校验 Office 安装文件是否存在问题。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>Office 安装文件校验功能对在线部署时不起作用，仅可用于下载模式或在<code>下载后再部署</code>已启用的情况下。</p></div><h3 id="使用-https-连接" tabindex="-1"><a class="header-anchor" href="#使用-https-连接" aria-hidden="true">#</a> 使用 HTTPS 连接</h3><p>默认情况下，Office Tool Plus 使用 HTTP 请求下载 Office 安装文件。</p><p>如果您下载 Office 安装文件时进度缓慢或者出现了意料之外的错误，您可以尝试打开此开关，然后重试下载。</p><h3 id="引擎" tabindex="-1"><a class="header-anchor" href="#引擎" aria-hidden="true">#</a> 引擎</h3><p>下载引擎之间的区别：</p><table><thead><tr><th style="text-align:left;">引擎</th><th style="text-align:left;">x86</th><th style="text-align:left;">x64 &amp; ARM64</th><th style="text-align:left;">显示进度</th><th style="text-align:left;">代理</th><th style="text-align:left;">暂停 &amp; 继续</th><th style="text-align:left;">取消</th></tr></thead><tbody><tr><td style="text-align:left;">迅雷</td><td style="text-align:left;">✓</td><td style="text-align:left;">×</td><td style="text-align:left;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">✓</td></tr><tr><td style="text-align:left;">bezzad.Downloader</td><td style="text-align:left;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">×</td><td style="text-align:left;">✓</td><td style="text-align:left;">✓</td></tr><tr><td style="text-align:left;">Office Tool Plus</td><td style="text-align:left;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">×</td><td style="text-align:left;">×</td><td style="text-align:left;">✓</td></tr><tr><td style="text-align:left;">Office 部署工具</td><td style="text-align:left;">✓</td><td style="text-align:left;">✓</td><td style="text-align:left;">×</td><td style="text-align:left;">×</td><td style="text-align:left;">×</td><td style="text-align:left;">×</td></tr></tbody></table><blockquote><p>迅雷云加速开放平台为程序内置，不需要在系统上额外安装迅雷。</p></blockquote><p>在中国大陆地区（根据系统区域设置识别）使用 32 位的 Office Tool Plus 时，下载引擎默认为迅雷，其他地区默认为 bezzad.Downloader。</p><p>使用 64 位或 ARM64 的 Office Tool Plus 时，下载引擎默认为 bezzad.Downloader。</p><div class="custom-container warning"><p class="custom-container-title">警告</p><p>在 32 位系统中使用 bezzad.Downloader 作为下载引擎时，启用<code>分块同时下载</code>功能时可能会遇到内存不足的问题。此问题无法解决，请改用 64 位的 Office Tool Plus 以避免此问题。</p></div><h2 id="windows-版本" tabindex="-1"><a class="header-anchor" href="#windows-版本" aria-hidden="true">#</a> Windows 版本</h2><p>默认情况下，Office Tool Plus 自动识别当前系统版本并下载对应的 Office 安装文件。若要为其他系统下载 Office 安装文件，请在此处更改为对应的 Windows 版本。</p>',25);function x(u,g){const a=s("RouterLink");return o(),h("div",null,[c,l("p",null,[t("如果你需要设置网络图片为背景图，请使用 "),d(a,{to:"/zh-cn/commands/build-in.html#%E7%A8%8B%E5%BA%8F%E5%86%85%E5%91%BD%E4%BB%A4"},{default:i(()=>[t("/setImage")]),_:1}),t(" 命令。")]),f,l("p",null,[t("你也可以通过使用"),d(a,{to:"/zh-cn/commands/build-in.html#%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%91%BD%E4%BB%A4"},{default:i(()=>[t("命令行")]),_:1}),t("的方式临时关闭硬件加速。")]),p])}const m=n(r,[["render",x],["__file","index.html.vue"]]);export{m as default};
