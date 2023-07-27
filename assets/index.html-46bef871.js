import{_ as c}from"./download-settings-6254f3fb.js";import{_ as f,r as s,o as a,c as n,b as o,d as e,e as i,w as t,a as d}from"./app-2051cae9.js";const r={},h=d('<h1 id="前期准备" tabindex="-1"><a class="header-anchor" href="#前期准备" aria-hidden="true">#</a> 前期准备</h1><p>使用 Office Tool Plus 创建 ISO 映像文件可以将 Office Tool Plus 和 Office 安装文件一起打包。ISO 映像文件可以与他人共享，或者用于多次安装。</p><p>Office 会固定在每个月的第二个星期二（太平洋时间）更新一次，我们建议您在此时间后及时更新 Office Tool Plus 和 Office ISO，以确保您始终可以获得最佳的部署体验。</p><p>若要创建 Office ISO，您需要完成以下步骤：</p><ul><li>下载合适的 Office Tool Plus。</li><li>创建 Office ISO 文件。</li><li>测试 Office ISO 是否和预期的一样工作。</li></ul><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><p>为了确保 Office 安装文件下载完整，我们建议您勾选<strong>设置 - 下载 - 校验文件</strong>。</p><p>Office Tool Plus 默认下载适合当前操作系统的 Office 版本。若要下载适用于其他 Windows 的 Office 版本，请更改<strong>设置 - 下载 - Windows 版本</strong>。</p><p><img src="'+c+'" alt="Download settings"></p><p>Office Tool Plus 在 ISO 模式中工作时会自动调整一些设置，您无需更改我们没有在教程中提到的设置。</p><h2 id="获取合适的-office-tool-plus-版本" tabindex="-1"><a class="header-anchor" href="#获取合适的-office-tool-plus-版本" aria-hidden="true">#</a> 获取合适的 Office Tool Plus 版本</h2>',11),u=o("p",null,"如果您决定创建 64 位的 Office ISO，您可以下载 64 位版本的 Office Tool Plus。否则您应该下载 32 位的 Office Tool Plus。",-1),O=o("p",null,[e("下载完成后，请将整个压缩包解压到一个合适的位置，例如桌面。"),o("strong",null,"请勿在压缩包内直接双击运行 Office Tool Plus"),e(".")],-1),_=o("h2",{id:"创建-office-iso",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#创建-office-iso","aria-hidden":"true"},"#"),e(" 创建 Office ISO")],-1),p=o("p",null,"您可以根据需要创建以下格式的 Office ISO 文件：",-1),m=o("p",null,"通常情况下，如果您需要创建 32 位和 64 位的 Office ISO，我们建议您分开创建两个文件。如果您决定创建同时包含 32 位和 64 位的 Office ISO，则我们不建议您使用第二或第三种方法创建 Office ISO，这两个方法无法自由选择 32 位或 64 位进行部署。",-1),S=o("h2",{id:"完成之后",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#完成之后","aria-hidden":"true"},"#"),e(" 完成之后")],-1),I=o("p",null,"当你完成了 Office ISO 的创建后，我们建议您在虚拟机内测试 Office ISO 是否和您预期的一样工作。",-1);function T(x,P){const l=s("RouterLink");return a(),n("div",null,[h,o("p",null,[e("我们建议您"),i(l,{to:"/zh-cn/start/#%E4%B8%8B%E8%BD%BD"},{default:t(()=>[e("下载")]),_:1}),e("包含框架的 Office Tool Plus。不需要在客户端上安装 .NET Desktop Runtime 即可运行 Office Tool Plus。")]),u,O,_,p,o("ol",null,[o("li",null,[i(l,{to:"/zh-cn/deploy/create-iso/basic.html"},{default:t(()=>[e("不含任何配置")]),_:1}),e("：像正常使用一样进行配置以及部署。")]),o("li",null,[i(l,{to:"/zh-cn/deploy/create-iso/default-config.html"},{default:t(()=>[e("包含默认配置")]),_:1}),e("：程序会自动加载配置，询问用户是否开始部署。")]),o("li",null,[i(l,{to:"/zh-cn/deploy/create-iso/iso-command.html"},{default:t(()=>[e("使用 ISO 命令")]),_:1}),e("：程序会自动寻找配置并直接开始部署。")]),o("li",null,[i(l,{to:"/zh-cn/deploy/create-iso/config-command.html"},{default:t(()=>[e("使用 loadConfig 命令")]),_:1}),e("：程序会根据您指定的命令创建配置并直接开始部署。")]),o("li",null,[i(l,{to:"/zh-cn/deploy/create-iso/deploy-command.html"},{default:t(()=>[e("完全自定义安装")]),_:1}),e("：程序会根据您指定的命令创建配置并直接开始部署。")])]),m,S,I])}const B=f(r,[["render",T],["__file","index.html.vue"]]);export{B as default};
