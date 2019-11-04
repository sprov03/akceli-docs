(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{214:function(t,e,a){"use strict";a.r(e);var s=a(0),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("ul",[a("li",[t._v("php > 7.0")]),t._v(" "),a("li",[t._v("Laravel Framework 5.8+")]),t._v(" "),a("li",[t._v("Composer")])]),t._v(" "),a("h2",{attrs:{id:"installing-akceli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-akceli"}},[t._v("#")]),t._v(" Installing Akceli")]),t._v(" "),a("p",[t._v("Once you have purchased an Akceli licence, you will be given an access token to a private repository that is configured for you.\nYou will then use the access token to view the composer package.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Akceli Licence")]),t._v(" "),a("p",[t._v("You will need to purchase an Akceli Licence if you have not already done so.\n"),a("a",{attrs:{href:"https://akceli.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://akceli.io"),a("OutboundLink")],1)])]),t._v(" "),a("p",[a("code",[t._v("composer.json")])]),t._v(" "),a("div",{staticClass:"language-json  composer.json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"repositories"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"private-packagist"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"composer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{Your Repository}"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("composer require akceli/laravel-code-generator\n")])])]),a("h2",{attrs:{id:"authorizing-akceli-in-continuous-integration-ci-environments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorizing-akceli-in-continuous-integration-ci-environments"}},[t._v("#")]),t._v(" Authorizing Akceli in Continuous Integration (CI) Environments")]),t._v(" "),a("p",[t._v("Once you have purchased an Akceli licence, you will be given an access token to a private repository that is configured for you.\nYou will then use the access token to view the composer package. Make sure this is added before you")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("Make Sure this is ran before you run composer install")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("composer config --auth http-basic.akceli.repo.packagist.com token "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Your Access Token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"authorizing-akceli-in-chipper-ci"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#authorizing-akceli-in-chipper-ci"}},[t._v("#")]),t._v(" Authorizing Akceli in Chipper CI")]),t._v(" "),a("p",[t._v("I Chipper CI for all of my laravel projects.  To authorize Akceli with Chipper CI, simply add akceli to the packages for your project.\n"),a("a",{attrs:{href:"https://chipperci.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://chipperci.com/"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("Repository Url: {Your Repository}")]),t._v(" "),a("li",[t._v("UserName: token  <--- Your user name is 'token'")]),t._v(" "),a("li",[t._v("passowrd: {Your Access Token}")])])])}),[],!1,null,null,null);e.default=r.exports}}]);