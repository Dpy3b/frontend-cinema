(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[911],{59182:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/users",function(){return n(13675)}])},36604:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(85893),i=n(94184),o=n.n(i),u=n(41664),c=n(11163),a=n(77840),s=n.n(a);var l=function(e){var t,n,i,a=e.navItem,l=(0,c.useRouter)().asPath;return(0,r.jsx)("li",{children:(0,r.jsx)(u.default,{href:a.link,children:(0,r.jsx)("a",{className:o()((t={},n=s().active,i=l===a.link,n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t)),children:a.title})})})},f=n(60590),d=[{title:"Statistics",link:(0,f.wk)()},{title:"Users",link:(0,f.A7)("users")},{title:"Movies",link:(0,f.A7)("movies")},{title:"Actors",link:(0,f.A7)("actors")},{title:"Genres",link:(0,f.A7)("genres")}],m=function(){return(0,r.jsx)("nav",{className:s().nav,children:(0,r.jsx)("ul",{children:d.map((function(e){return(0,r.jsx)(l,{navItem:e},e.link)}))})})}},31919:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893),i=n(43631),o=n(10073),u=function(e){var t=e.onClick;return(0,r.jsx)(o.Z,{onClick:t,children:"Create new"})},c=n(58431),a=n.n(c),s=function(e){var t=e.onClick,n=e.handleSearch,o=e.searchTerm;return(0,r.jsxs)("div",{className:a().header,children:[(0,r.jsx)(i.Z,{handleSearch:n,searchTerm:o}),t&&(0,r.jsx)(u,{onClick:t})]})}},28168:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(85893),i=n(6884),o=n(44131),u=n.n(o),c=n(94184),a=n.n(c),s=function(e){var t=e.headerItems;return(0,r.jsxs)("div",{className:a()(u().item,u().itemHeader),children:[t.map((function(e){return(0,r.jsx)("div",{children:e},e)})),(0,r.jsx)("div",{children:"Actions"})]})},l=n(11163),f=n(94715),d=n(68400),m=n.n(d),p=function(e){var t=e.editUrl,n=e.removeHandler,i=(0,l.useRouter)().push;return(0,r.jsxs)("div",{className:m().actions,children:[(0,r.jsx)("button",{onClick:function(){return i(t)},children:(0,r.jsx)(f.O,{name:"MdEdit"})}),(0,r.jsx)("button",{onClick:n,children:(0,r.jsx)(f.O,{name:"MdClose"})})]})},v=function(e){var t=e.tableItem,n=e.removeHandler;return(0,r.jsxs)("div",{className:u().item,children:[t.items.map((function(e){return(0,r.jsx)("div",{children:e},e)})),(0,r.jsx)(p,{editUrl:t.editUrl,removeHandler:function(){return n(t._id)}})]})},h=function(e){var t=e.tableItems,n=e.headerItems,o=e.isLoading,c=e.removeHandler;return(0,r.jsxs)("div",{children:[(0,r.jsx)(s,{headerItems:n}),o?(0,r.jsx)(i.Z,{count:1,height:48,className:"mt-4"}):t.length?t.map((function(e){return(0,r.jsx)(v,{tableItem:e,removeHandler:c},e._id)})):(0,r.jsx)("div",{className:u().notFound,children:"Elements not found"})]})}},10073:function(e,t,n){"use strict";var r=n(85893),i=n(94184),o=n.n(i),u=n(15262),c=n.n(u);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}t.Z=function(e){var t=e.children,n=e.className,i=s(e,["children","className"]);return(0,r.jsx)("button",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({className:o()(c().button,n)},i,{children:t}))}},62289:function(e,t,n){"use strict";var r=n(85893);t.Z=function(e){var t=e.title,n=e.className,i=void 0===n?"":n;return(0,r.jsx)("h1",{className:"text-white text-opacity-80 font-semibold ".concat(i.includes("xl")?"":"text-3xl"," ").concat(i),children:t})}},95163:function(e,t,n){"use strict";n.d(t,{K:function(){return s}});var r=n(34051),i=n.n(r),o=n(84714),u=n(33739);function c(e,t,n,r,i,o,u){try{var c=e[o](u),a=c.value}catch(s){return void n(s)}c.done?t(a):Promise.resolve(a).then(r,i)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var o=e.apply(t,n);function u(e){c(o,r,i,u,a,"next",e)}function a(e){c(o,r,i,u,a,"throw",e)}u(void 0)}))}}var s={getProfile:function(){return a(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.get((0,u.Il)("/profile")));case 1:case"end":return e.stop()}}),e)})))()},updateProfile:function(e){return a(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.Z.put((0,u.Il)("/profile"),e));case 1:case"end":return t.stop()}}),t)})))()},getUsers:function(e){return a(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.Z.get((0,u.Il)(""),{params:e?{searchTerm:e}:{}}));case 1:case"end":return t.stop()}}),t)})))()},getUser:function(e){return a(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.Z.get((0,u.Il)("/".concat(e))));case 1:case"end":return t.stop()}}),t)})))()},updateUser:function(e,t){return a(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",o.Z.put((0,u.Il)("/".concat(e)),t));case 1:case"end":return n.stop()}}),n)})))()},deleteUser:function(e){return a(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.Z.delete((0,u.Il)("/".concat(e))));case 1:case"end":return t.stop()}}),t)})))()},getFavorites:function(){return a(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.Z.get((0,u.Il)("/profile/favorites")));case 1:case"end":return e.stop()}}),e)})))()},toggleFavorite:function(e){return a(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.Z.post((0,u.Il)("/profile/favorites"),{movieId:e}));case 1:case"end":return t.stop()}}),t)})))()}}},71499:function(e,t,n){"use strict";n.d(t,{h:function(){return l},$:function(){return f}});var r=n(85893),i=n(9008),o=n(11163),u="Movie app",c=function(e){return"".concat(e," | ").concat(u)},a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e.replace(/<[^>]+>/g,"").replace(/&[^;]+./g," ").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"");return t&&(n=n.slice(0,t)+"..."),n},s=n(79247),l=function(e){var t=e.title,n=e.description,l=e.image,d=void 0===l?null:l,m=e.children,p=(0,o.useRouter)().asPath,v="".concat("http://localhost:3000").concat(p);return(0,r.jsxs)(r.Fragment,{children:[n?(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{itemProp:"headline",children:c(t)}),(0,r.jsx)("meta",{itemProp:"description",name:"description",content:a(n,152)}),(0,r.jsx)("link",{rel:"canonical",href:v}),(0,r.jsx)("meta",{property:"og:locale",content:"en"}),(0,r.jsx)("meta",{property:"og:title",content:c(t)}),(0,r.jsx)("meta",{property:"og:url",content:v}),(0,r.jsx)("meta",{property:"og:image",content:d||s.Z}),(0,r.jsx)("meta",{property:"og:site_name",content:u}),(0,r.jsx)("meta",{property:"og:description",content:a(n,197)})]}):(0,r.jsx)(f,{title:t}),m]})},f=function(e){var t=e.title,n=void 0===t?"Error":t;return(0,r.jsxs)(i.default,{children:[(0,r.jsx)("title",{children:c(n)}),(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})]})}},13675:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(85893),i=n(36604),o=n(31919),u=n(28168),c=n(62289),a=n(71499),s=n(67294),l=n(88767),f=n(16938),d=n(43489),m=n(95163),p=n(75777),v=n(60590);function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var _=function(){var e=(0,s.useState)(""),t=e[0],n=e[1],r=(0,d.N)(t,500),i=(0,l.useQuery)(["user list",r],(function(){return m.K.getUsers(r)}),{select:function(e){return e.data.map((function(e){return{_id:e._id,editUrl:(0,v.A7)("user/edit/".concat(e._id)),items:[e.email,(t=e.createdAt,new Date(t).toLocaleDateString("ru"))]};var t}))},onError:function(e){(0,p._)(e,"user list")}}),o=function(e){n(e.target.value)},u=(0,l.useMutation)("delete user",(function(e){return m.K.deleteUser(e)}),{onError:function(e){(0,p._)(e,"Delete user")},onSuccess:function(){f.Rt.success("Delete user","delete was successful"),i.refetch()}}).mutateAsync;return(0,s.useMemo)((function(){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({handleSearch:o},i,{searchTerm:t,deleteAsync:u})}),[i,t,u])},x=function(){var e=_(),t=e.handleSearch,n=e.isLoading,s=e.searchTerm,l=e.data,f=e.deleteAsync;return(0,r.jsxs)(a.h,{title:"Users",children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)(c.Z,{title:"Users"}),(0,r.jsx)(o.Z,{handleSearch:t,searchTerm:s}),(0,r.jsx)(u.Z,{tableItems:l||[],headerItems:["Email","Date register"],isLoading:n,removeHandler:f})]})},j=function(){return(0,r.jsx)(x,{})};j.isOnlyAdmin=!0;var b=j},77840:function(e){e.exports={nav:"AdminNavigation_nav__jmpMb",active:"AdminNavigation_active__DYQnj"}},58431:function(e){e.exports={header:"AdminHeader_header__nQp9V"}},68400:function(e){e.exports={actions:"AdminActions_actions__luRzF"}},44131:function(e){e.exports={item:"AdminTable_item__2GK1y",itemHeader:"AdminTable_itemHeader__pYYir",notFound:"AdminTable_notFound__UWbaX"}},15262:function(e){e.exports={button:"form_button__zzx8l",common:"form_common__5EpHn",field:"form_field__KLTjc",uploadField:"form_uploadField__mJYFJ",uploadFlex:"form_uploadFlex__qWZSd",uploadImageContainer:"form_uploadImageContainer__yrxr7",fade:"form_fade__r_rtw",error:"form_error__hunHi",editorWrapper:"form_editorWrapper__lvmGd",wrapper:"form_wrapper__in9Fw",toolbar:"form_toolbar__xTi0C",editor:"form_editor__dPpWP"}}},function(e){e.O(0,[774,888,179],(function(){return t=59182,e(e.s=t);var t}));var t=e.O();_N_E=t}]);