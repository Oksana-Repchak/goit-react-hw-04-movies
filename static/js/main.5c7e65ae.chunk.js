(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{13:function(e,t,a){e.exports={wrapper:"MovieList_wrapper__3L9Fp",list:"MovieList_list__2nSB2",item:"MovieList_item__31uqU",image:"MovieList_image__ztF-E",link:"MovieList_link__1Tv3d",title:"MovieList_title__TxDkf"}},14:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__2LDM8",SearchForm:"Searchbar_SearchForm__2qxl7",SearchFormButton:"Searchbar_SearchFormButton__2nvQT",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__2OdMS",SearchFormInput:"Searchbar_SearchFormInput__21iym"}},15:function(e,t,a){e.exports={wrapper:"MovieReviews_wrapper__2sDBM",list:"MovieReviews_list__7OwE4",title:"MovieReviews_title__1ao7p",text:"MovieReviews_text__IBJIB"}},16:function(e,t,a){e.exports={link:"Navigation_link__12jXq",activeLink:"Navigation_activeLink__2VQRd Navigation_link__12jXq"}},23:function(e,t,a){e.exports={container:"Container_container__2EgIS"}},25:function(e,t,a){e.exports={header:"Appbar_header__31JtT"}},33:function(e,t,a){},4:function(e,t,a){e.exports={wrapper:"MovieCard_wrapper__2TeCP",image:"MovieCard_image__boHO7",content:"MovieCard_content__1_r5a",category:"MovieCard_category__1OPL5",link:"MovieCard_link__3Oa7C",item:"MovieCard_item__3U5dx",activeLink:"MovieCard_activeLink__O2AZH",list:"MovieCard_list__1sDXx",nav:"MovieCard_nav__1oWUw"}},41:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),r=a.n(n),i=a(11),s=a.n(i),o=a(6),l=(a(33),a(2)),j=a(23),b=a.n(j);function h(e){var t=e.children;return Object(c.jsx)("div",{className:b.a.container,children:t})}var m=a(16),u=a.n(m),d=function(){return Object(c.jsxs)("nav",{children:[Object(c.jsx)(o.c,{exact:!0,to:"/",className:u.a.link,activeClassName:u.a.activeLink,children:"Home"}),Object(c.jsx)(o.c,{to:"/movies",className:u.a.link,activeClassName:u.a.activeLink,children:"Movies"})]})},v=a(25),O=a.n(v);function _(){return Object(c.jsx)("header",{className:O.a.header,children:Object(c.jsx)(d,{})})}var x=a(7),p=a(21),f=a.n(p),g=a(26),N="https://api.themoviedb.org/3",S="b590a88f82d6ad86947c7c69a15dac78";function w(){return k.apply(this,arguments)}function k(){return(k=Object(g.a)(f.a.mark((function e(){var t,a,c,n=arguments;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"",a=n.length>1&&void 0!==n[1]?n[1]:{},e.next=4,fetch(t,a);case 4:if(!(c=e.sent).ok){e.next=11;break}return e.next=8,c.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M=a(13),F=a.n(M),L=a.p+"static/media/imagePlaceholder.6787cdde.png";var C=function(e){var t=e.movies,a=e.title,n=Object(l.g)().url;return Object(c.jsxs)("div",{className:F.a.wrapper,children:[Object(c.jsx)("h2",{children:a}),Object(c.jsx)("ul",{className:F.a.list,children:t.map((function(e){return Object(c.jsx)("li",{className:F.a.item,children:Object(c.jsxs)(o.b,{to:"".concat(n,"movies/").concat(e.id),className:F.a.link,children:[Object(c.jsx)("img",{className:F.a.image,src:e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):L,alt:e.title}),Object(c.jsx)("p",{className:F.a.title,children:e.title})]})},e.id)}))})]})};function y(){var e=Object(n.useState)([]),t=Object(x.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)({}),s=Object(x.a)(i,2),o=(s[0],s[1]);return Object(n.useEffect)((function(){w("".concat(N,"/trending/movie/day?api_key=").concat(S)).then((function(e){r(e.results)})).catch((function(e){o(e)}))}),[]),Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(C,{movies:a,title:"Trending today"})})}var B=a(27),I=(a(40),a(14)),E=a.n(I);var T=function(e){var t=e.onSubmit,a=Object(n.useState)(""),r=Object(x.a)(a,2),i=r[0],s=r[1];return Object(c.jsx)("div",{className:E.a.Searchbar,children:Object(c.jsxs)("form",{className:E.a.SearchForm,onSubmit:function(e){e.preventDefault(),""!==i.trim()?(t(i),s("")):Object(B.a)("Please enter search query")},children:[Object(c.jsx)("button",{type:"submit",className:E.a.SearchFormButton,children:Object(c.jsx)("span",{className:E.a.SearchFormButtonLabel,children:"Search"})}),Object(c.jsx)("input",{value:i,onChange:function(e){s(e.currentTarget.value.toLowerCase())},className:E.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search film"})]})})};function D(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),a=(t[0],t[1]),r=Object(n.useState)([]),i=Object(x.a)(r,2),s=(i[0],i[1]),o=Object(n.useState)(null),l=Object(x.a)(o,2),j=l[0],b=l[1];return Object(c.jsxs)(c.Fragment,{children:[j&&Object(c.jsxs)("p",{children:["Whoops, something went wrong: ",j.message]}),Object(c.jsx)(T,{onSubmit:function(e){a(e),s([]),b(null)}})," "]})}function P(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("h1",{children:"404 \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430 :("})})}var R=a(4),U=a.n(R);var q=function(e){var t=e.movie,a=Object(l.g)().url;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:U.a.wrapper,children:[Object(c.jsx)("img",{className:U.a.image,src:t.poster_path?"https://image.tmdb.org/t/p/w500".concat(t.poster_path):L,alt:t.title}),Object(c.jsxs)("div",{className:U.a.content,children:[Object(c.jsx)("h2",{className:U.a.title,children:t.title}),Object(c.jsxs)("p",{className:U.a.text,children:["User Score: ",t.vote_average]}),Object(c.jsx)("p",{className:U.a.category,children:"Overview:"}),Object(c.jsx)("p",{className:U.a.text,children:t.overview}),Object(c.jsx)("p",{className:U.a.category,children:"Genres:"})]})]}),Object(c.jsxs)("div",{className:U.a.nav,children:[Object(c.jsx)("p",{className:U.a.category,children:"Additional information"}),Object(c.jsxs)("ul",{className:U.a.list,children:[Object(c.jsx)("li",{className:U.a.item,children:Object(c.jsx)(o.c,{to:"".concat(a,"/cast"),className:U.a.link,activeClassName:U.a.activeLink,children:"Cast"})}),Object(c.jsx)("li",{className:U.a.item,children:Object(c.jsx)(o.c,{to:"".concat(a,"/reviews"),className:U.a.link,activeClassName:U.a.activeLink,children:"Reviews"})})]})]})]})};function J(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("p",{children:"\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0430\u043a\u0442\u0435\u0440\u0441\u043a\u043e\u043c \u0441\u043e\u0441\u0442\u0430\u0432\u0435. \u0420\u0435\u043d\u0434\u0435\u0440\u0438\u0442\u0441\u044f \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0435 MovieDetailsPage"})})}var A=a(15),H=a.n(A);function X(e){var t=e.movieId,a=Object(n.useState)([]),r=Object(x.a)(a,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){var e;(e=t,w("".concat(N,"/movie/").concat(e,"/reviews?api_key=").concat(S,"&language=en-US"))).then((function(e){return s(e.results)}))}),[t]),Object(c.jsx)("div",{className:H.a.wrapper,children:i.length>0?Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("ul",{className:H.a.list,children:i.map((function(e,t){return Object(c.jsxs)("li",{className:H.a.item,children:[Object(c.jsxs)("p",{className:H.a.title,children:[" ",e.author]}),Object(c.jsxs)("p",{children:[" ",e.content]})]},t)}))})}):Object(c.jsx)("p",{className:H.a.text,children:"No reviews to show"})})}function Q(){var e=Object(l.g)(),t=e.url,a=(e.path,Object(l.f)().movieId),r=Object(n.useState)({}),i=Object(x.a)(r,2),s=i[0],o=i[1];return Object(n.useEffect)((function(){var e;(e=a,w("".concat(N,"/movie/").concat(e,"?api_key=").concat(S,"&language=en-US"))).then((function(e){console.log(e),o(e)}))}),[a]),Object(c.jsxs)(c.Fragment,{children:[s&&Object(c.jsx)(q,{movie:s}),Object(c.jsx)(l.a,{path:"".concat(t,"/cast"),children:s&&Object(c.jsx)(J,{id:a})}),Object(c.jsx)(l.a,{path:"".concat(t,"/reviews"),children:s&&Object(c.jsx)(X,{movieId:a})})]})}var W=function(){return Object(c.jsxs)(h,{children:[Object(c.jsx)(_,{}),Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{path:"/",exact:!0,children:Object(c.jsx)(y,{})}),Object(c.jsx)(l.a,{path:"/movies",exact:!0,children:Object(c.jsx)(D,{})}),Object(c.jsx)(l.a,{path:"/movies/:movieId",children:Object(c.jsx)(Q,{})}),Object(c.jsx)(l.a,{children:Object(c.jsx)(P,{})})]})]})};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(o.a,{children:Object(c.jsx)(W,{})})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.5c7e65ae.chunk.js.map