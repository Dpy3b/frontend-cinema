(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[239],{66914:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/manage/actor/edit/[id]",function(){return n(27332)}])},27332:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return q}});var t=n(85893),o=n(34051),u=n.n(o),a=n(11163),i=n(88767),c=n(16938),s=n(1854),f=n(75777),l=n(96228),d=n(60590);function h(e,r,n,t,o,u,a){try{var i=e[u](a),c=i.value}catch(s){return void n(s)}i.done?r(c):Promise.resolve(c).then(t,o)}var m=function(e){var r=(0,a.useRouter)(),n=r.query,t=r.push,o=String(n.id),m=(0,i.useQuery)(["actor",o],(function(){return s.V.getById(o)}),{onSuccess:function(r){var n=r.data;(0,l.R)(n).forEach((function(r){e(r,n[r])}))},onError:function(e){(0,f._)(e,"Get actor")},enabled:!!n.id}).isLoading,p=(0,i.useMutation)("update actor",(function(e){return s.V.update(o,e)}),{onError:function(e){(0,f._)(e,"Update actor")},onSuccess:function(){c.Rt.success("Update actor","update was successful"),t((0,d.A7)("actors"))}}).mutateAsync;return{onSubmit:function(){var e,r=(e=u().mark((function e(r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(r);case 2:case"end":return e.stop()}}),e)})),function(){var r=this,n=arguments;return new Promise((function(t,o){var u=e.apply(r,n);function a(e){h(u,t,o,a,i,"next",e)}function i(e){h(u,t,o,a,i,"throw",e)}a(void 0)}))});return function(e){return r.apply(this,arguments)}}(),isLoading:m}},p=n(87536),v=n(11854),g=n.n(v),b=n(344),j=n(96430),y=n(6884),w=n(36604),x=n(10073),_=n(73789),E=n(62289),O=n(71499),S=n(85219);function P(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function N(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){P(e,r,n[r])}))}return e}var Z=function(){var e=(0,p.cI)({mode:"onChange"}),r=e.handleSubmit,n=e.register,o=e.formState.errors,u=e.setValue,a=e.getValues,i=e.control,c=m(u),s=c.isLoading,f=c.onSubmit;return(0,t.jsxs)(O.h,{title:"Edit actor",children:[(0,t.jsx)(w.Z,{}),(0,t.jsx)(E.Z,{title:"Edit actor"}),s?(0,t.jsx)(y.Z,{count:3}):(0,t.jsxs)("form",{onSubmit:r(f),className:g().form,children:[(0,t.jsxs)("div",{className:g().fields,children:[(0,t.jsx)(_.Z,N({},n("name",{required:"Name is required!"}),{placeholder:"Name",error:o.name})),(0,t.jsx)(b.Z,{generate:function(){return u("slug",(0,S.Z)(a("name")))},register:n,error:o.slug}),(0,t.jsx)(p.Qr,{name:"photo",control:i,defaultValue:"",render:function(e){var r=e.field,n=r.value,o=r.onChange,u=e.fieldState.error;return(0,t.jsx)(j.Z,{placeholder:"Photo",error:u,folder:"actors",image:n,onChange:o})},rules:{required:"Photo is required!"}})]}),(0,t.jsx)(x.Z,{children:"Update"})]})]})},k=function(){return(0,t.jsx)(Z,{})};k.isOnlyAdmin=!0;var q=k}},function(e){e.O(0,[536,99,774,888,179],(function(){return r=66914,e(e.s=r);var r}));var r=e.O();_N_E=r}]);