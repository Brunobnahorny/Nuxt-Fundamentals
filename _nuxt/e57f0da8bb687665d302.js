(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{185:function(t,n,e){var content=e(193);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(39).default)("2373ab20",content,!0,{sourceMap:!1})},188:function(t,n,e){"use strict";var r=e(6),o=e(189)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),e(82)("find")},189:function(t,n,e){var r=e(26),o=e(81),c=e(27),f=e(18),d=e(190);t.exports=function(t,n){var e=1==t,l=2==t,v=3==t,h=4==t,m=6==t,_=5==t||m,y=n||d;return function(n,d,w){for(var x,k,A=c(n),P=o(A),$=r(d,w,3),j=f(P.length),J=0,z=e?y(n,j):l?y(n,0):void 0;j>J;J++)if((_||J in P)&&(k=$(x=P[J],J,A),t))if(e)z[J]=k;else if(k)switch(t){case 3:return!0;case 5:return x;case 6:return J;case 2:z.push(x)}else if(h)return!1;return m?-1:v||h?h:z}}},190:function(t,n,e){var r=e(191);t.exports=function(t,n){return new(r(t))(n)}},191:function(t,n,e){var r=e(10),o=e(119),c=e(2)("species");t.exports=function(t){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)||(n=void 0),r(n)&&null===(n=n[c])&&(n=void 0)),void 0===n?Array:n}},192:function(t,n,e){"use strict";var r=e(185);e.n(r).a},193:function(t,n,e){(n=e(38)(!1)).push([t.i,".container[data-v-28c82300]{display:flex;justify-content:space-between;line-height:1.5}article *[data-v-28c82300]{margin-bottom:1rem}aside[data-v-28c82300]{min-width:280px;max-width:280px;padding-left:2rem}.title[data-v-28c82300]{font-size:2rem}",""]),t.exports=n},199:function(t,n,e){"use strict";e.r(n);e(188);var r={data:function(){return{id:this.$route.params.id}},head:function(){return{title:"".concat(this.post.title," 🍖 ")}},computed:{post:function(){var t=this;return this.$store.state.posts.all.find((function(n){return n.id===t.id}))},relatedPosts:function(){var t=this;return this.$store.state.posts.all.filter((function(n){return n.id!==t.id}))}}},o=(e(192),e(17)),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("article",[e("h1",[t._v(t._s(t.post.title))]),t._v(" "),e("p",[t._v(t._s(t.post.content))])]),t._v(" "),e("aside",[e("h3",[t._v("Posts you might enjoy")]),t._v(" "),e("ul",t._l(t.relatedPosts,(function(n){return e("li",{key:n.id},[e("nuxt-link",{attrs:{to:{name:"posts-id",params:{id:n.id}}}},[t._v(t._s(n.title))])],1)})),0)])])}),[],!1,null,"28c82300",null);n.default=component.exports}}]);