(this["webpackJsonpapiki-challenge"]=this["webpackJsonpapiki-challenge"]||[]).push([[0],{26:function(e,t,s){},27:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var a=s(19),o=s.n(a),c=(s(26),s(21)),n=s(17),l=s(7),i=s(0),r=(s(27),s(12)),j=s(1);var d=function(){var e=Object(i.useState)([{image:"",title:"",link:""}]),t=Object(l.a)(e,2),s=t[0],a=t[1],o=Object(i.useState)(0),d=Object(l.a)(o,2),g=d[0],b=d[1],p=Object(i.useState)(0),u=Object(l.a)(p,2),m=u[0],h=u[1],O=Object(i.useState)(1),f=Object(l.a)(O,2),_=f[0],x=f[1],P=Object(i.useState)("invisible"),v=Object(l.a)(P,2),N=v[0],k=v[1];return Object(i.useEffect)((function(){fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=".concat(_)).then((function(e){return console.log(e.headers.get("X-WP-TotalPages")),parseInt(e.headers.get("X-WP-TotalPages")||"0")>1&&parseInt(e.headers.get("X-WP-TotalPages")||"0")>_?k("visible"):k("invisible"),b(parseInt(e.headers.get("X-WP-Total")||"0")),h(parseInt(e.headers.get("X-WP-TotalPages")||"0")),console.log("TotalPosts: "+g),console.log("TotalPages: "+m),console.log("currentPage: "+_),e.json()})).then((function(e){console.log("TotalPosts: "+g),console.log("TotalPages: "+m),console.log("currentPage: "+_),console.log(e);var t=[];e.forEach((function(e){t.push({image:e._embedded["wp:featuredmedia"]?e._embedded["wp:featuredmedia"][0].source_url:"",title:e.title.rendered,link:"/post/"+e.slug})})),console.log("posts: "),console.log(s),console.log([Object(n.a)(Object(n.a)({},s),t)]),a([].concat(Object(c.a)(s),t))}))}),[_]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{className:"title",children:"Postagens do blog com a categoria Desenvolvimento"}),Object(j.jsx)("section",{className:"posts",children:s.map((function(e){return""==e.title||Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("img",{className:"post__image",src:e.image,alt:""}),Object(j.jsx)("p",{className:"post__title",children:e.title}),Object(j.jsx)(r.b,{className:"post__link",to:e.link,children:"Acessar post"})]})}))}),Object(j.jsx)("section",{className:"load-more",children:Object(j.jsx)("button",{onClick:function(e){console.log("handleLoadMorePosts"),_>=m?console.log("Todas as paginas carregadas."):x(_+1)},className:"load-more__button ".concat(N),children:"Carregar mais ..."})})]})};s(34);var g=function(e){var t=e.match.params.post_url,s=Object(i.useState)({image:"",title:"",content:""}),a=Object(l.a)(s,2),o=a[0],c=a[1];return Object(i.useEffect)((function(){fetch("https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=".concat(t)).then((function(e){return e.json()})).then((function(e){c({image:e[0]._embedded["wp:featuredmedia"][0].source_url,title:e[0].title.rendered,content:e[0].content.rendered})}))}),[]),Object(j.jsxs)("div",{className:"post2",children:[Object(j.jsx)("img",{className:"post__image2",src:o.image,alt:""}),Object(j.jsx)("h1",{className:"post__title2",children:o.title}),Object(j.jsx)("p",{className:"post__content",dangerouslySetInnerHTML:{__html:o.content}})]})},b=s(2);o.a.render(Object(j.jsx)(r.a,{children:Object(j.jsxs)(b.c,{children:[Object(j.jsx)(b.a,{path:"/",exact:!0,component:d}),Object(j.jsx)(b.a,{path:"/post/:post_url",component:g})]})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d9c3b5c2.chunk.js.map