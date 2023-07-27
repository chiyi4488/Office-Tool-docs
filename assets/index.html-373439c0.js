import{_ as l,r as t,o as a,c as s,b as e,d as n,e as i,a as c}from"./app-2051cae9.js";const r={},d=e("h1",{id:"welcome",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#welcome","aria-hidden":"true"},"#"),n(" Welcome")],-1),f=e("h2",{id:"introduction",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),n(" Introduction")],-1),u=e("p",null,"Office Tool Plus is a powerful and useful tool for Office Deployment.",-1),p={href:"https://docs.microsoft.com/en-us/deployoffice/overview-office-deployment-tool",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"Thunder",-1),m={href:"https://github.com/bezzad/Downloader",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"The following products are supported:",-1),O=e("ul",null,[e("li",null,"Microsoft 365."),e("li",null,"Office 2016, 2019, 2021."),e("li",null,"Visio 2016, 2019, 2021 and Online Plan 2."),e("li",null,"Project 2016, 2019, 2021 and Online Desktop Client.")],-1),g=e("p",null,"No matter what, Office Tool Plus is always your best helper.",-1),b=e("h2",{id:"download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download","aria-hidden":"true"},"#"),n(" Download")],-1),_=e("p",null,"Download Office Tool Plus from:",-1),w={href:"http://otp.landian.vip/",target:"_blank",rel:"noopener noreferrer"},y=c(`<p>Differences between the versions:</p><ul><li>Includes runtime: Includes .NET Runtime, you can run Office Tool Plus without .NET Runtime installation.</li><li>Normal: Only Office Tool Plus and base components.</li></ul><blockquote><p>We recommend you to download Office Tool Plus which includes runtime.</p></blockquote><p>Differences between the architecture:</p><ul><li>x86: Works on 32 bit, 64 bit and ARM64 of Windows. Supports <code>Thunder</code> engine. Also supports <code>Downloader</code> engine, but memory problem may occurred when using <code>Downloader</code> engine.</li><li>x64: Works on 64 bit and ARM64 of Windows. Only supports <code>Downloader</code> engine.</li><li>ARM64: Works on ARM64 of Windows. Better compatibility and performance for ARM64 platform, others are same as the x64.</li></ul><h3 id="unpack" tabindex="-1"><a class="header-anchor" href="#unpack" aria-hidden="true">#</a> Unpack</h3><p>Extract Office Tool Plus to a normal location, such as desktop. <strong>Do NOT run Office Tool Plus without unpacking</strong>.</p><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><ul><li>Create Office installation configuration. The config can be exported to local, or imported from local or web.</li><li>Download Office, supporting <code>ALL</code> Office channels and <code>ALL</code> Office languages.</li><li>Install Office or modify the existing Office, such as adding new products, languages and applications, or uninstalling products and applications.</li><li>Create Office ISO, supports default installation config and silent installation config.</li><li>Activate Office. Support online activation, phone activation and KMS activation.</li><li>Support Office activation management, including license management, key management and KMS management.</li><li>Change Office update channel, support upgrading/downgrading Office without reinstalling Office.</li><li>Remove Office, force remove Office when it can’t be uninstalled in normal way, supports all version of Office.</li><li>Integrated Office tools, including resetting settings, fixing Office problems.</li><li>Convert Office documents, based on Office COM. it&#39;s fast and stable.</li><li>Personalize theme, you can build your special Office Tool Plus.</li><li>Advanced settings allow you to use more advanced features, such as Office internal channels.</li></ul><div class="custom-container tip"><p class="custom-container-title">Attention</p><ol><li>Office Tool Plus only provides activation management. You need to have a genuine license to activate your products.</li></ol></div><h2 id="components-and-structure" tabindex="-1"><a class="header-anchor" href="#components-and-structure" aria-hidden="true">#</a> Components and Structure</h2><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>Office Tool
├── Office Tool Plus.exe (main program)
├── Office Tool Plus.Console.exe (Console Helper)
├── hostfxr.dll (.NET Host)
├── shared (.NET Runtimes)
└── files
    ├── setup.exe (Microsoft Office Deployment Tool)
    ├── clean
    │   ├── x64 (Office activation cleaner for x64 and ARM64 system)
    │   └── x86 (Office activation cleaner for x86 system)
    ├── preferences (Office applications preferences data, provided by Microsoft)
    └── Thunder (files related to Thunder download acceleration)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Usually, Office Tool Plus will download the needed components and keep it the latest version automatically.</p><p>If some of the components are lost or cannot be downloaded automatically, we suggest you to re-download Office Tool Plus to fix this problems.</p>`,14);function x(T,k){const o=t("ExternalLinkIcon");return a(),s("div",null,[d,f,u,e("p",null,[n("Office Tool Plus is made based on "),e("a",p,[n("Office Deployment Tool"),i(o)]),n(". It can deploy Office easily. It has integrated the "),h,n(" and "),e("a",m,[n("Downloader"),i(o)]),n(" engine so that you can download Office faster. Certainly, you can use the little functions provided by Office Tool Plus to manage and activate Office.")]),v,O,g,b,_,e("ul",null,[e("li",null,[e("a",w,[n("Office Tool Plus official website"),i(o)])])]),y])}const D=l(r,[["render",x],["__file","index.html.vue"]]);export{D as default};
