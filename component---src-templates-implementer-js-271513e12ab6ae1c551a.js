(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{189:function(e,t,n){"use strict";n.r(t),n.d(t,"query",function(){return g});n(134),n(130),n(131);var a=n(0),r=n.n(a),o=n(225),i=n.n(o),s=n(201),l=n(199),c=n(200),u=function(e){return r.a.createElement("table",{className:"compact"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Testcase Url"),r.a.createElement("th",{width:"100px"},"Expected"),r.a.createElement("th",{width:"100px"},"Actual"))),r.a.createElement("tbody",null,e.map(function(e,t){var n=e.url,a=e.expected,o=e.actual,i=t+"-"+n;return r.a.createElement("tr",{key:i},r.a.createElement("td",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n},n)),r.a.createElement("td",null,a),r.a.createElement("td",null,o))})))},m=function(e,t,n,a){return r.a.createElement("div",{key:e},r.a.createElement(l.a,{to:"/rules/"+e},r.a.createElement("h2",{id:"#"+e},t)),a&&r.a.createElement("div",{className:"invalid"},r.a.createElement("b",null,"INCOMPLETE IMPLEMENTATION.")," ",r.a.createElement("br",null),"Listed below are the incomplete assertions. Kindly submit an amended implementation report."),n)},p=function(e,t){return void 0===e&&(e=!1),t.implementation[0].complete===e},d=function(e,t,n,a){return r.a.createElement(s.a,null,r.a.createElement(c.a,{title:e,keywords:t}),r.a.createElement("section",{className:"page-container page-implementers"},r.a.createElement("h1",null,n),a))};t.default=function(e){var t=e.data,n=e.location,a=t.site,o=t.sitePage.context,s=o.title,l=o.data,c=s+" | "+a.siteMetadata.title,g=JSON.parse(l).data,h=g.every(function(e){return p(!1,e)}),f=!1;if(n.search){var b=i.a.parse(n.search).incomplete;f="true"===(void 0!==b&&b)}if(h&&!f){var y=r.a.createElement("div",{className:"invalid"},r.a.createElement("b",null,"INCOMPLETE IMPLEMENTATIONS.")," ",r.a.createElement("br",null),"All implementations provided are incomplete. Kindly submit amended implementation reports.");return d(c,a.siteMetadata.keywords,s,y)}var w=function(e,t){if(t){var n=e.filter(function(e){return p(!1,e)});return n&&n.length?r.a.createElement("div",null,n.map(function(e){var n=e.ruleId,a=e.ruleName,r=e.implementation[0],o=r.incorrect,i=r.assertions,s=u(i.filter(function(e){var t=e.url;return o.includes(t)}));return m(n,a,s,t)})):r.a.createElement("div",{className:"valid"},r.a.createElement("b",null,"WELL DONE.")," ",r.a.createElement("br",null),"All submitted implementation reports are complete.")}var a=e.filter(function(e){return p(!0,e)});return r.a.createElement("div",null,a.map(function(e){var t=e.ruleId,n=e.ruleName,a=e.implementation[0].assertions,r=u(a);return m(t,n,r)}))}(g,f);return d(c,a.siteMetadata.keywords,s,w)};var g="2295277416"},199:function(e,t,n){"use strict";n.d(t,"b",function(){return c});var a=n(0),r=n.n(a),o=n(66),i=n.n(o);n.d(t,"a",function(){return i.a});n(202),n(7).default.enqueue;var s=r.a.createContext({});function l(e){var t=e.staticQueryData,n=e.data,a=e.query,o=e.render,i=n?n.data:t[a]&&t[a].data;return r.a.createElement(r.a.Fragment,null,i&&o(i),!i&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var c=function(e){var t=e.data,n=e.query,a=e.render,o=e.children;return r.a.createElement(s.Consumer,null,function(e){return r.a.createElement(l,{data:t,query:n,render:a||o,staticQueryData:e})})}},200:function(e,t,n){"use strict";var a=n(206),r=n(0),o=n.n(r),i=n(219),s=n.n(i);function l(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title,c=a.data.site,u=t||c.siteMetadata.description,m=i.length>0?{name:"keywords",content:i.join(", ")}:[],p=[{name:"description",content:u},{property:"og:title",content:l},{property:"og:description",content:u},{property:"og:type",content:"website"}].concat(m).concat(r);return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:p},o.a.createElement("meta",{"http-equiv":"Cache-Control",content:"public, max-age=0, must-revalidate"}),o.a.createElement("meta",{"http-equiv":"Pragma",content:"no-cache"}),o.a.createElement("meta",{"http-equiv":"Expires",content:"0"}))}l.defaultProps={lang:"en",meta:[],keywords:[]},t.a=l},201:function(e,t,n){"use strict";var a=n(204),r=n(0),o=n.n(r),i=n(199),s=n(220),l=(n(215),function(e){var t=e.siteTitle;return o.a.createElement("header",{className:"app-header"},o.a.createElement(i.a,{to:"/pages/about"},o.a.createElement("h1",null,t)))});l.defaultProps={siteTitle:""};var c=l,u=n(203),m=(n(216),function(e){e.siteTitle;return o.a.createElement("footer",{className:"app-footer"},o.a.createElement("div",{className:"tags"},o.a.createElement("p",{className:"tag"},"A Community Group of the",o.a.createElement("a",{href:"https://www.w3.org/",target:"_blank",rel:"noopener noreferrer"},"World Wide Web Consortium.")),o.a.createElement("p",{className:"tag"},"Developed with the support of the EU-funded"," ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.w3.org/WAI/"},"WAI-Tools"," ")," ","Project.")),o.a.createElement("div",{className:"logos"},o.a.createElement("a",{lang:"en",className:"logo-w3c",href:"https://www.w3.org/",rel:"noopener noreferrer",target:"_blank"},o.a.createElement("svg",{role:"img","aria-label":"W3C",viewBox:"0 0 68 34",height:"25",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",null,o.a.createElement("path",{d:"m16.117 1.006 5.759 19.58 5.759-19.58h4.17 11.444v1.946l-5.879 10.128c2.065.663 3.627 1.868 4.686 3.615 1.059 1.748 1.589 3.799 1.589 6.155 0 2.914-.775 5.363-2.324 7.348s-3.555 2.978-6.017 2.978c-1.854 0-3.469-.589-4.845-1.767-1.377-1.178-2.396-2.773-3.058-4.786l3.256-1.35c.477 1.218 1.106 2.178 1.887 2.879.781.702 1.701 1.052 2.76 1.052 1.112 0 2.052-.622 2.82-1.866.768-1.245 1.152-2.74 1.152-4.489 0-1.933-.411-3.429-1.231-4.488-.954-1.244-2.45-1.867-4.489-1.867h-1.588v-1.906l5.56-9.612h-6.712l-.382.65-8.163 27.548h-.397l-5.958-19.937-5.957 19.937h-.397l-9.53-32.168h4.17l5.759 19.58 3.892-13.185-1.906-6.395z"}),o.a.createElement("path",{d:"m64.92 1.006c-.819 0-1.554.295-2.111.861-.591.6-.92 1.376-.92 2.178s.313 1.545.887 2.128c.583.591 1.334.912 2.145.912.793 0 1.562-.321 2.161-.903.574-.557.887-1.3.887-2.136 0-.811-.321-1.57-.878-2.136-.584-.592-1.344-.904-2.171-.904zm2.643 3.065c0 .701-.271 1.351-.768 1.832-.524.507-1.174.777-1.892.777-.675 0-1.342-.278-1.84-.785s-.777-1.157-.777-1.849.287-1.368.802-1.891c.481-.49 1.131-.751 1.84-.751.726 0 1.376.271 1.883.785.49.489.752 1.147.752 1.882zm-2.559-1.807h-1.3v3.445h.65v-1.469h.642l.701 1.469h.726l-.769-1.57c.498-.102.785-.439.785-.929 0-.625-.472-.946-1.435-.946zm-.118.422c.608 0 .886.169.886.591 0 .405-.278.549-.87.549h-.549v-1.14z"}),o.a.createElement("path",{d:"m59.807.825.676 4.107-2.391 4.575s-.918-1.941-2.443-3.015c-1.285-.905-2.122-1.102-3.431-.832-1.681.347-3.587 2.357-4.419 4.835-.995 2.965-1.005 4.4-1.04 5.718-.056 2.113.277 3.362.277 3.362s-1.452-2.686-1.438-6.62c.009-2.808.451-5.354 1.75-7.867 1.143-2.209 2.842-3.535 4.35-3.691 1.559-.161 2.791.59 3.743 1.403 1 .854 2.01 2.721 2.01 2.721z"}),o.a.createElement("path",{d:"m60.102 24.063s-1.057 1.889-1.715 2.617c-.659.728-1.837 2.01-3.292 2.651s-2.218.762-3.656.624c-1.437-.138-2.772-.97-3.24-1.317s-1.664-1.369-2.34-2.322-1.733-2.859-1.733-2.859.589 1.91.958 2.721c.212.467.864 1.894 1.789 3.136.863 1.159 2.539 3.154 5.086 3.604 2.547.451 4.297-.693 4.73-.97s1.346-1.042 1.924-1.66c.603-.645 1.174-1.468 1.49-1.962.231-.36.607-1.092.607-1.092z"})))),o.a.createElement("a",{lang:"en",className:"logo-wai",href:"https://www.w3.org/WAI/",target:"_blank",rel:"noopener noreferrer"},o.a.createElement("span",{className:"wai"},o.a.createElement("span",{className:"wa"},"Web Accessibility")," ",o.a.createElement("span",{className:"i"},o.a.createElement("span",{className:"initieative"},"Initiative")," ",o.a.createElement("span",null,"WAI")))),o.a.createElement("a",{href:u.repository.url,target:"_blank",rel:"noopener noreferrer",className:"logo-github","aria-label":"link to github repository"},o.a.createElement("svg",{enableBackground:"new 0 0 512 512",id:"Layer_1",version:"1.1",width:"25",height:"25",viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},o.a.createElement("g",null,o.a.createElement("path",{d:"M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z"}))))))});m.defaultProps={siteTitle:""};var p=m;n(217),n(218);var d=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).state={showMenu:!0},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var l=r.prototype;return l.componentDidMount=function(){var e=window.location.hash;if(e){var t=document.getElementById(e);t&&t.scrollIntoView()}},l.handleHideShowMenu=function(){this.setState(function(e){return{showMenu:!e.showMenu}})},l.getListItemFromEdges=function(e){return e.map(function(e){var t=e.node,n=t.path,a=t.context;if(!a||!a.title)return null;var r=""+a.title+n;return o.a.createElement("li",{key:r},o.a.createElement(i.a,{activeClassName:"active",to:n},a.title))})},l.render=function(){var e=this,t=this.props.children;return o.a.createElement(i.b,{query:"3094802352",render:function(n){var a=n.getSiteTitle,r=n.getTopLevelNavigation,l=n.getNonRulesNavigation;return o.a.createElement("section",{className:"layout-container"},o.a.createElement(s.a,{query:"(max-width: 600px)",onChange:function(t){return t&&e.state.showMenu&&e.handleHideShowMenu()}}),o.a.createElement(s.a,{query:"(min-width: 601px)",onChange:function(t){return t&&!e.state.showMenu&&e.handleHideShowMenu()}}),o.a.createElement("aside",{className:e.state.showMenu?"show":"hide"},o.a.createElement("button",{className:"nav-hide-show-menu",onClick:function(t){return e.handleHideShowMenu()}},"☰"),o.a.createElement("div",{className:"logo"},o.a.createElement(c,{siteTitle:a.siteMetadata.title})),o.a.createElement("nav",{className:"navigation"},o.a.createElement("ul",null,r.group.map(function(t){return e.getListItemFromEdges(t.edges)}),o.a.createElement("li",null,o.a.createElement("hr",null)),o.a.createElement("li",{key:"rules"},o.a.createElement(i.a,{to:"/rules/",activeClassName:"active"},"Rules")),o.a.createElement("li",{key:"glossary"},o.a.createElement(i.a,{to:"/glossary/",activeClassName:"active"},"Glossary")),o.a.createElement("li",null,o.a.createElement("hr",null)),l.group.map(function(t,n){var a=t.totalCount,r=t.edges,i=t.fieldValue;if(a<=0)return null;var s=i+"-"+n;return o.a.createElement("li",{key:s},o.a.createElement("p",{className:"parent-item"},i),o.a.createElement("ul",null,e.getListItemFromEdges(r)),o.a.createElement("hr",null))})))),o.a.createElement("main",null,o.a.createElement("section",null,t),o.a.createElement(p,null)))},data:a})},r}(o.a.Component);t.a=d},202:function(e,t,n){var a;e.exports=(a=n(205))&&a.default||a},203:function(e){e.exports=JSON.parse('{"name":"act-rules-community","description":"Accessibility conformance testing rules for HTML","version":"1.0.0","author":"ACT-Rules Community","contributors":[{"name":"Anne Thyme Nørregaard","url":"https://github.com/annethyme"},{"name":"Annika Nietzio","url":"https://github.com/annika-FTB"},{"name":"Audrey Maniez","url":"https://github.com/audreymaniez"},{"name":"Brian Bors","url":"https://www.linkedin.com/in/brianbors/"},{"name":"Bryn Anderson","url":"https://github.com/brynanders"},{"name":"Carlos Duarte","url":"https://github.com/carlosapaduarte"},{"name":"Corbb O\'Connor","url":"https://github.com/corbb"},{"name":"Dagfinn Rømen","url":"https://github.com/DagfinnRomen"},{"name":"Emma Pratt Richens","url":"https://github.com/EmmaJP"},{"name":"Frank Berker","url":"https://github.com/yetanothereye"},{"name":"Geir Sindre Fossøy","url":"https://github.com/geirsf"},{"name":"Jean-Yves Moyen","url":"https://github.com/Jym77"},{"name":"Jey Nandakumar","url":"https://github.com/jkodu"},{"name":"John Hicks","url":"https://github.com/john-urbilog"},{"name":"Malin Øvrebø","url":"https: //github.com/MaliinO"},{"name":"Rafal Charlampowicz","url":"https://github.com/Rafalchar"},{"name":"Rob Fentress","url":"https://github.com/robfentress"},{"name":"Shadi Abou-Zahra","url":"https://github.com/nitedog"},{"name":"Stein Erik Skotkjerra","url":"https://github.com/skotkjerra"},{"name":"Wilco Fiers","url":"https://github.com/wilcofiers"}],"dependencies":{"act-rules-implementation-access-board":"git+https://git@github.com/act-rules/act-rules-implementation-trusted-tester.git","act-rules-implementation-access-engine":"git+https://git@github.com/act-rules/act-rules-implementation-access-engine.git","act-rules-implementation-alfa":"git+https://git@github.com/act-rules/act-rules-implementation-alfa.git","act-rules-implementation-axe-core":"git+https://git@github.com/act-rules/act-rules-implementation-axe-core.git","act-rules-implementation-qualweb":"git+https://git@github.com/act-rules/act-rules-implementation-qualweb.git","act-rules-implementation-rgaa":"git+https://git@github.com/act-rules/act-rules-implementation-rgaa.git","act-rules-implementation-trusted-tester":"git+https://git@github.com/act-rules/act-rules-implementation-trusted-tester.git","axios":"^0.19.0","commander":"^3.0.0","fastmatter":"^2.1.1","flat":"^4.1.0","fs-extra":"^8.1.0","gatsby":"^2.13.83","gatsby-image":"^2.2.14","gatsby-plugin-manifest":"^2.2.6","gatsby-plugin-offline":"^2.2.7","gatsby-plugin-prefetch-google-fonts":"^1.4.3","gatsby-plugin-react-helmet":"^3.1.5","gatsby-plugin-sass":"^2.1.9","gatsby-plugin-sharp":"^2.2.13","gatsby-remark-autolink-headers":"^2.1.8","gatsby-remark-copy-linked-files":"^2.1.12","gatsby-remark-prismjs":"^3.3.6","gatsby-source-filesystem":"^2.1.9","gatsby-transformer-remark":"^2.6.14","gatsby-transformer-sharp":"^2.2.6","gfm-code-blocks":"^1.0.0","globby":"^10.0.1","htmlhint":"^0.11.0","is-url":"^1.2.4","jest-expect-message":"^1.0.2","jsonld":"^1.7.0","make-dir":"^3.0.0","markdown-link-extractor":"^1.2.1","node-sass":"^4.12.0","normalize.css":"^8.0.1","object-hash":"^1.3.1","prismjs":"^1.17.1","prop-types":"^15.7.2","query-string":"^6.8.2","react":"^16.9.0","react-dom":"^16.9.0","react-helmet":"^5.2.1","react-media":"^1.9.2","showdown":"^1.9.0"},"devDependencies":{"husky":"^3.0.4","jest":"^24.9.0","jest-extended":"^0.11.2","lint-staged":"^9.2.3","marked":"^0.7.0","prettier":"^1.18.2"},"keywords":["WCAG","ACT Rules","Accessibility","W3C"],"license":"MIT","scripts":{"clean":"gatsby clean","getImplementationAccessEngine":"node ./build/get-implementation --org \'Level Access\' --tool \'Access Engine\' --path \'./node_modules/act-rules-implementation-access-engine/report.json\'","getImplementationAlfa":"node ./build/get-implementation --org \'Siteimprove\' --tool \'Alfa\' --path \'./node_modules/act-rules-implementation-alfa/report.json\'","pregetImplementationAxeCore":"npm --prefix \'./node_modules/act-rules-implementation-axe-core/\' run build -- --testsJson ${PWD}/_data/rules-testcases/testcases.json --testsDir ${PWD}/_data/rules-testcases --siteUrl $npm_package_www_url","getImplementationAxeCore":"node ./build/get-implementation --org \'Deque Systems\' --tool \'Axe-core\' --path \'./node_modules/act-rules-implementation-axe-core/report.json\'","getImplementationRgaa":"node ./build/get-implementation --org \'Access42\' --tool \'RGAA 3.0\' --path \'./node_modules/act-rules-implementation-rgaa/reports/*.json\'","getImplementationTrustedTester":"node ./build/get-implementation --org \'Trusted Tester\' --tool \'Trusted Tester\' --path \'./node_modules/act-rules-implementation-trusted-tester/reports/*.json\'","getImplementationQualWeb":"node ./build/get-implementation --org \'LASIGE, Faculdade de Ciências da Universidade de Lisboa\' --tool \'QualWeb\' --path \'./node_modules/act-rules-implementation-qualweb/reports/*.json\'","getImplementations":"npm run getImplementationAccessEngine && npm run getImplementationAlfa && npm run getImplementationAxeCore && npm run getImplementationRgaa && npm run getImplementationTrustedTester && npm run getImplementationQualWeb","createImplementationsMetrics":"node ./build/create-implementation-metrics","implementations":"npm run getImplementations && npm run createImplementationsMetrics","createTestcases":"node ./build/create-testcases","createGlossary":"node ./build/create-glossary-usages","createRulesUsages":"node ./build/create-rules-usages.js","getWcagData":"node ./build/get-wcag-data","getData":"npm run getWcagData && npm run createTestcases && npm run createGlossary && npm run createRulesUsages && npm run implementations","develop":"gatsby develop","prebuild":"npm run clean && npm run getData && npm run formatRulesDir","build":"gatsby build","formatRulesDir":"prettier --write \'./_rules/**/*.md\'","format":"prettier --write *.{json,md,js,jsx} \'./{_data,_rules,build,gatsby,pages,src,test-assets}/**/*.{json,md,js,jsx}\'","start":"npm run clean && npm run develop","serve":"gatsby serve","pretest":"npm run getData","test":"jest --coverage"},"homepage":"https://github.com/act-rules/act-rules.github.io","repository":{"type":"git","url":"https://github.com/act-rules/act-rules.github.io"},"bugs":{"url":"https://github.com/act-rules/act-rules.github.io/issues"},"pulls":{"url":"https://github.com/act-rules/act-rules.github.io/pulls"},"www":{"url":"https://act-rules.github.io"},"config":{"references":{"wcag21":"https://raw.githubusercontent.com/w3c/wai-wcag-quickref/gh-pages/_data/wcag21.json"},"rule-format-metadata":{"input-aspects":{"default":"https://www.w3.org/TR/act-rules-aspects/#intro","HTTP Messages":"https://www.w3.org/TR/act-rules-aspects/#input-aspects-http","DOM Tree":"https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom","CSS Styling":"https://www.w3.org/TR/act-rules-aspects/#input-aspects-css","Accessibility Tree":"https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility","Language":"https://www.w3.org/TR/act-rules-aspects/#input-aspects-text"}}},"jest":{"verbose":false,"setupFilesAfterEnv":["jest-extended","jest-expect-message"],"testPathIgnorePatterns":["<rootDir>/test-utils/","<rootDir>/.cache/","<rootDir>/.public/"]},"lint-staged":{"*.{md,json,js,html}":["prettier --write","git add"]},"husky":{"hooks":{"pre-commit":"lint-staged"}}}')},204:function(e){e.exports=JSON.parse('{"data":{"getSiteTitle":{"siteMetadata":{"title":"ACT-Rules Community"}},"getTopLevelNavigation":{"group":[{"fieldValue":"default","totalCount":3,"edges":[{"node":{"path":"/pages/about/","context":{"sourceInstanceName":"pages","title":"About Us","markdownType":"default"}}},{"node":{"path":"/pages/contribute/","context":{"sourceInstanceName":"pages","title":"How to Contribute","markdownType":"default"}}},{"node":{"path":"/pages/license/","context":{"sourceInstanceName":"pages","title":"License","markdownType":"default"}}}]}]},"getNonRulesNavigation":{"group":[{"fieldValue":"documentation","totalCount":8,"edges":[{"node":{"path":"/pages/design/composite-template-empty/","context":{"title":"","markdownType":"documentation"}}},{"node":{"path":"/pages/design/atomic-template-empty/","context":{"title":"","markdownType":"documentation"}}},{"node":{"path":"/pages/structure/accessibility-support/","context":{"title":"Accessibility Support","markdownType":"documentation"}}},{"node":{"path":"/pages/design/definition-of-done/","context":{"title":"Definition of Done","markdownType":"documentation"}}},{"node":{"path":"/pages/design/process/","context":{"title":"Process [DRAFT]","markdownType":"documentation"}}},{"node":{"path":"/pages/design/rule-design/","context":{"title":"Rule Design","markdownType":"documentation"}}},{"node":{"path":"/pages/design/rule-template/","context":{"title":"Rule Template","markdownType":"documentation"}}},{"node":{"path":"/pages/structure/terminology/","context":{"title":"Terminology","markdownType":"documentation"}}}]},{"fieldValue":"implementations","totalCount":7,"edges":[{"node":{"path":"/pages/implementations/overview/","context":{"title":"ACT Implementations","markdownType":"implementations"}}},{"node":{"path":"/pages/implementations/mapping/","context":{"title":"Mapping To Rule","markdownType":"implementations"}}},{"node":{"path":"/pages/implementations/earl-reports/","context":{"title":"Reporting Format","markdownType":"implementations"}}},{"node":{"path":"/pages/implementations/reporting/","context":{"title":"Submit an Implementation","markdownType":"implementations"}}},{"node":{"path":"/pages/implementations/testcases/","context":{"title":"Test Cases","markdownType":"implementations"}}},{"node":{"path":"/pages/implementations/tools/","context":{"title":"Testing Tools","markdownType":"implementations"}}},{"node":{"path":"/pages/implementations/wcag-em-tool/","context":{"title":"WCAG-EM Report Tool","markdownType":"implementations"}}}]}]}}}')},205:function(e,t,n){"use strict";n.r(t);n(22);var a=n(0),r=n.n(a),o=n(93);t.default=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},206:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"ACT-Rules Community","description":"Accessibility conformance testing rules for HTML","author":"ACT-Rules Community"}}}}')},225:function(e,t,n){"use strict";n(69),n(226);var a=n(227);n(53),n(40),n(133),n(136),n(91),n(22),n(231),n(29),n(30),n(14),n(49),n(51),n(140),n(67),n(38),n(31),n(13);var r=n(232),o=n(236),i=n(237),s=n(238);function l(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}function c(e,t){return t.decode?i(e):e}function u(e){var t=e.indexOf("#");return-1!==t&&(e=e.slice(0,t)),e}function m(e){var t=(e=u(e)).indexOf("?");return-1===t?"":e.slice(t+1)}function p(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===a[e]&&(a[e]={}),a[e][t[1]]=n):a[e]=n};case"bracket":return function(e,n,a){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==a[e]?a[e]=[].concat(a[e],n):a[e]=[n]:a[e]=n};case"comma":return function(e,t,n){var a="string"==typeof t&&t.split("").indexOf(",")>-1?t.split(","):t;n[e]=a};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},t)),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;var o=!0,i=!1,l=void 0;try{for(var u,m=e.split("&")[Symbol.iterator]();!(o=(u=m.next()).done);o=!0){var p=u.value,d=s(p.replace(/\+/g," "),"="),g=a(d,2),h=g[0],f=g[1];f=void 0===f?null:c(f,t),t.parseNumbers&&!Number.isNaN(Number(f))&&"string"==typeof f&&""!==f.trim()?f=Number(f):!t.parseBooleans||null===f||"true"!==f.toLowerCase()&&"false"!==f.toLowerCase()||(f="true"===f.toLowerCase()),n(c(h,t),f,r)}}catch(b){i=!0,l=b}finally{try{o||null==m.return||m.return()}finally{if(i)throw l}}return!1===t.sort?r:(!0===t.sort?Object.keys(r).sort():Object.keys(r).sort(t.sort)).reduce(function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort(function(e,t){return Number(e)-Number(t)}).map(function(e){return t[e]}):t}(n):e[t]=n,e},Object.create(null))}t.extract=m,t.parse=p,t.stringify=function(e,t){if(!e)return"";var n=function(e){switch(e.arrayFormat){case"index":return function(t){return function(n,a){var o=n.length;return void 0===a?n:[].concat(r(n),null===a?[[l(t,e),"[",o,"]"].join("")]:[[l(t,e),"[",l(o,e),"]=",l(a,e)].join("")])}};case"bracket":return function(t){return function(n,a){return void 0===a?n:[].concat(r(n),null===a?[[l(t,e),"[]"].join("")]:[[l(t,e),"[]=",l(a,e)].join("")])}};case"comma":return function(t){return function(n,a,r){return null==a||0===a.length?n:0===r?[[l(t,e),"=",l(a,e)].join("")]:[[n,l(a,e)].join(",")]}};default:return function(t){return function(n,a){return void 0===a?n:[].concat(r(n),null===a?[l(t,e)]:[[l(t,e),"=",l(a,e)].join("")])}}}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),a=Object.keys(e);return!1!==t.sort&&a.sort(t.sort),a.map(function(a){var r=e[a];return void 0===r?"":null===r?l(a,t):Array.isArray(r)?r.reduce(n(a),[]).join("&"):l(a,t)+"="+l(r,t)}).filter(function(e){return e.length>0}).join("&")},t.parseUrl=function(e,t){return{url:u(e).split("?")[0]||"",query:p(m(e),t)}}},226:function(e,t,n){var a=n(1);a(a.S,"Number",{isNaN:function(e){return e!=e}})},227:function(e,t,n){var a=n(228),r=n(229),o=n(230);e.exports=function(e,t){return a(e)||r(e,t)||o()}},228:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},229:function(e,t){e.exports=function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(l){r=!0,o=l}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}},230:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},231:function(e,t,n){"use strict";var a=n(4),r=n(18),o=n(36),i=n(135),s=n(71),l=n(9),c=n(94).f,u=n(96).f,m=n(10).f,p=n(141).trim,d=a.Number,g=d,h=d.prototype,f="Number"==o(n(56)(h)),b="trim"in String.prototype,y=function(e){var t=s(e,!1);if("string"==typeof t&&t.length>2){var n,a,r,o=(t=b?t.trim():p(t,3)).charCodeAt(0);if(43===o||45===o){if(88===(n=t.charCodeAt(2))||120===n)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+t}for(var i,l=t.slice(2),c=0,u=l.length;c<u;c++)if((i=l.charCodeAt(c))<48||i>r)return NaN;return parseInt(l,a)}}return+t};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof d&&(f?l(function(){h.valueOf.call(n)}):"Number"!=o(n))?i(new g(y(t)),n,d):y(t)};for(var w,v=n(8)?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;v.length>E;E++)r(g,w=v[E])&&!r(d,w)&&m(d,w,u(g,w));d.prototype=h,h.constructor=d,n(12)(a,"Number",d)}},232:function(e,t,n){var a=n(233),r=n(234),o=n(235);e.exports=function(e){return a(e)||r(e)||o()}},233:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},234:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},235:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},236:function(e,t,n){"use strict";n(68),n(92),n(14),n(13),e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%".concat(e.charCodeAt(0).toString(16).toUpperCase())})}},237:function(e,t,n){"use strict";n(13),n(29),n(30),n(14),n(49),n(132),n(221);var a=new RegExp("%[a-f0-9]{2}","gi"),r=new RegExp("(%[a-f0-9]{2})+","gi");function o(e,t){try{return decodeURIComponent(e.join(""))}catch(r){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),a=e.slice(t);return Array.prototype.concat.call([],o(n),o(a))}function i(e){try{return decodeURIComponent(e)}catch(r){for(var t=e.match(a),n=1;n<t.length;n++)t=(e=o(t,n).join("")).match(a);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"��","%FF%FE":"��"},a=r.exec(e);a;){try{n[a[0]]=decodeURIComponent(a[0])}catch(t){var o=i(a[0]);o!==a[0]&&(n[a[0]]=o)}a=r.exec(e)}n["%C2"]="�";for(var s=Object.keys(n),l=0;l<s.length;l++){var c=s[l];e=e.replace(new RegExp(c,"g"),n[c])}return e}(e)}}},238:function(e,t,n){"use strict";n(31),e.exports=function(e,t){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];var n=e.indexOf(t);return-1===n?[e]:[e.slice(0,n),e.slice(n+t.length)]}}}]);
//# sourceMappingURL=component---src-templates-implementer-js-271513e12ab6ae1c551a.js.map