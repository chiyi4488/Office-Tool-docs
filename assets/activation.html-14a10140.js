import{_ as n,r as i,o as a,c as r,b as e,d as t,e as s,a as c}from"./app-2051cae9.js";const h={},l=c('<h1 id="activation-questions" tabindex="-1"><a class="header-anchor" href="#activation-questions" aria-hidden="true">#</a> Activation Questions</h1><h2 id="the-software-licensing-service-reported-that-license-consumption-failed" tabindex="-1"><a class="header-anchor" href="#the-software-licensing-service-reported-that-license-consumption-failed" aria-hidden="true">#</a> The Software Licensing Service reported that license consumption failed</h2><p>Error code: 0xC004E015</p><p>Solution</p><hr><p>Automatic operation: Rebuild activation token, you can find the option in the Toolbox page. Then retry to activate Office.</p><hr><p>Manual operation: Stop <code>Software Protection</code> service, delete dat files on <code>C:\\Windows\\System32\\spp\\store\\2.0</code> (on Windows Insider, the folder name is store_test). Then retry to activate Office.</p><p>After installed Office licenses, wait three minutes, then continue your operation.</p><p><strong>If the problem is not resolved, you may need to try again.</strong></p><h2 id="the-software-licensing-service-reported-that-a-token-in-the-token-store-contains-an-invalid-hash" tabindex="-1"><a class="header-anchor" href="#the-software-licensing-service-reported-that-a-token-in-the-token-store-contains-an-invalid-hash" aria-hidden="true">#</a> The Software Licensing Service reported that a token in the Token Store contains an invalid hash</h2><p>Error code: 0x8004E108</p><p>Solution is same as the previous item.</p><h2 id="the-data-is-invalid-0x8007000d" tabindex="-1"><a class="header-anchor" href="#the-data-is-invalid-0x8007000d" aria-hidden="true">#</a> The data is invalid (0x8007000D)</h2><p>Make sure:</p>',15),d=e("li",null,"Your system time is correct.",-1),p={href:"/others/toolbox.html#check-kms-status",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,"Then do the following things:",-1),f=e("ul",null,[e("li",null,"Reset Software Protection service, you can find the option on toolbox page."),e("li",null,"Set KMS host and port, the default port is 1688."),e("li",null,"Try to activate again.")],-1);function v(_,m){const o=i("ExternalLinkIcon");return a(),r("div",null,[l,e("ul",null,[d,e("li",null,[t("The KMS host you are using is working fine. "),e("a",p,[t("How to test?"),s(o)])])]),u,f])}const g=n(h,[["render",v],["__file","activation.html.vue"]]);export{g as default};
