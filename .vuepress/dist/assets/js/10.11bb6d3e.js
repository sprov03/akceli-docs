(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{208:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[e._v("php > 7.0")]),e._v(" "),a("li",[e._v("Laravel Framework 5.8+")]),e._v(" "),a("li",[e._v("Composer")])]),e._v(" "),a("h2",{attrs:{id:"installing-akceli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-akceli"}},[e._v("#")]),e._v(" Installing Akceli")]),e._v(" "),a("p",[e._v("Once you have purchased an Akceli licence, you will be given an access token to a private repository that is configured for you.\nYou will then use the access token to view the composer package.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("Akceli Licence")]),e._v(" "),a("p",[e._v("You will need to purchase an Akceli Licence if you have not already done so.\n"),a("a",{attrs:{href:"https://akceli.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://akceli.io"),a("OutboundLink")],1)])]),e._v(" "),a("p",[a("code",[e._v("composer.json")])]),e._v(" "),a("div",{staticClass:"language-json  composer.json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[e._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"repositories"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"private-packagist"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"composer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[e._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"https://akceli.repo.packagist.com/{your-repository-name-goes-here}/"')]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("composer require akceli/laravel-code-generator\n")])])]),a("h2",{attrs:{id:"authorizing-akceli-in-continuous-integration-ci-environments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorizing-akceli-in-continuous-integration-ci-environments"}},[e._v("#")]),e._v(" Authorizing Akceli in Continuous Integration (CI) Environments")]),e._v(" "),a("p",[e._v("Once you have purchased an Akceli licence, you will be given an access token to a private repository that is configured for you.\nYou will then use the access token to view the composer package. Make sure this is added before you")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Make Sure this is ran before you run composer install")])]),e._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[e._v("composer config --auth http-basic.akceli.repo.packagist.com token "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("Your Access Token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("h2",{attrs:{id:"authorizing-akceli-in-chipper-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorizing-akceli-in-chipper-ci"}},[e._v("#")]),e._v(" Authorizing Akceli in Chipper CI")]),e._v(" "),a("p",[e._v("I Chipper CI for all of my laravel projects.  To authorize Akceli with Chipper CI, simply add akceli to the packages for your project.\n"),a("a",{attrs:{href:"https://chipperci.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://chipperci.com/"),a("OutboundLink")],1)]),e._v(" "),a("ul",[a("li",[e._v("Repository Url: akceli.repo.packagist.com")]),e._v(" "),a("li",[e._v("UserName: token  <--- Your user name is 'token'")]),e._v(" "),a("li",[e._v("passowrd: {Your Access Token}")])])])}),[],!1,null,null,null);t.default=r.exports}}]);