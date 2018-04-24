webpackJsonp([3],{134:function(e,t,n){"use strict";var a=n(219),o=n(217),r=n(218);t.a={moduleName:"Apps",store:{namespaced:!0,state:a.a,actions:o.a,mutations:r.a}}},135:function(e,t,n){"use strict";var a=n(222),o=n(220),r=n(221);t.a={moduleName:"Platform",store:{namespaced:!0,state:a.a,actions:o.a,mutations:r.a}}},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t,a=n(137),o=n.n(a),r=n(78),i=n.n(r),s=n(136),l=n.n(s),c=n(79),u=n(176),f=n(458),p=(n.n(f),n(457)),d=n.n(p),g=n(455),m=n(190),h=n.n(m),v=n(446),y=n.n(v),b=n(442),x=(n.n(b),n(441)),w=(n.n(x),n(447)),k=(n.n(w),n(177)),D=n(208),z=n(451),$=n.n(z),_=n(216),N=n(135),P=n(134),E=n(188),I=n.n(E),L=n(189),M=n.n(L),S=n(209);c.default.component("NoData",I.a),c.default.component("USwitch",M.a);var T=e&&!1;c.default.config.debug=T,c.default.config.devtools=T,c.default.config.productionTip=T,c.default.use(u.a),c.default.use(g.a),c.default.use(y.a),c.default.use(S.a),c.default.prototype.$Cookies=w,c.default.prototype.$utils=k.a,c.default.prototype.$Config=D;for(var V in k.a.filters)c.default.filter(V,k.a.filters[V]);c.default.prototype.$Message.config({duration:3});var C=h.a.create({baseURL:D.Serv.production,withCredentials:!0});C.interceptors.request.use(function(e){c.default.prototype.$Loading.start();var t=D.Cookie.getItem("token"),n=w.get(t)||"";return e.headers.common[t]=n,e},function(e){return l.a.reject(e)}),C.interceptors.response.use(function(e){c.default.prototype.$Loading.finish();var t=e&&e.data?e.data:e;return t?200!==t.status?(c.default.prototype.$Message.error(e.msg||t.msg||"请求异常，请检查上送、返回。"),9999===t.status&&(sessionStorage.clear(),i()(w.get()).forEach(function(e){w.remove(e)}),setTimeout(function(){c.default.prototype.$nextTick(function(){F.push({name:"platform.signin"})})},3e3)),l.a.reject(new Error(e.msg||t.msg||"请求异常，请检查上送、返回。")).catch(function(e){console.log(e)})):t:(c.default.prototype.$Message.error("请求失败！"),l.a.reject(new Error("请求失败！")).catch(function(e){console.log(e)}))},function(e){return l.a.reject(e)}),c.default.prototype.$http=C;var F=new g.a({mode:"history",base:"/X-WebDesktop-Vue/",routes:_.a,scrollBehavior:function(e,t,n){if(n)return n;var a={};return e.hash&&(a.selector=e.hash),e.matched.some(function(e){return e.meta.scrollToTop})&&(a.x=0,a.y=0),a}});F.beforeEach(function(e,t,n){y.a.LoadingBar.start(),e.matched.length?n():n(e.path.includes("/admin/")?{name:"platform.admin.Error404ForAdmin"}:{name:"platform.Error404"})}),F.afterEach(function(e,t){y.a.LoadingBar.finish()});var O=new u.a.Store({modules:(t={},o()(t,N.a.moduleName,N.a.store),o()(t,P.a.moduleName,P.a.store),t),plugins:[d()({storage:window.sessionStorage})]});n.i(f.sync)(O,F,{moduleName:"x-router"}),new c.default({store:O,router:F,render:function(e){return e($.a)}}).$mount("#app")}.call(t,n(128))},177:function(e,t,n){"use strict";var a=n(210),o=n(211),r=n(213),i=n(214),s=n(212),l=n(215);t.a={bus:a.a,filters:o.a,store:r.a,timeConsuming:i.a,install:s.a,uninstall:l.a}},188:function(e,t,n){function a(e){n(443)}var o=n(77)(n(224),n(453),a,"data-v-501f3604",null);e.exports=o.exports},189:function(e,t,n){var a=n(77)(n(225),n(452),null,null,null);e.exports=a.exports},208:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"Serv",function(){return a}),n.d(t,"Cookie",function(){return o}),n.d(t,"System",function(){return r});var a={development:"//localhost:3000/api/v2.0.0",production:"//x-webdesktop-api-koa.herokuapp.com/api/v2.0.0"},o={prefix:"x-",keys:{account:"account",token:"key",userType:"user-type",userCode:"user-code"},getItem:function(e){return e?this.prefix+this.keys[e]:""},path:{development:"/",production:"/X-WebDesktop-Vue"}},r={version:"2.0.0",name:"X-WebDesktop-Vue",title:"X-WebDesktop-Vue",subtitle:"X-WebDesktop-Vue",logo:"./static/logo.png",copyright:"© 2017"}},209:function(e,t,n){"use strict";var a=n(115),o=n.n(a),r=n(117),i=n.n(r),s=n(227),l=n.n(s),c=n(78),u=n.n(c),f={};f.installed=!1,f.install=function(e){f.installed||e.directive("x-drag",{inserted:function(e,t){var n=function(e){return e.currentStyle?e.currentStyle:document.defaultView.getComputedStyle(e,null)},a=function(e,t){return n(e)[t]},r=t.value||{};if(u()(r).length){if(r.drag&&r.drag.enable){var s=e;"string"==typeof r.drag.handler&&(r.drag.handler=[r.drag.handler]);var c=!0,f=!1,p=void 0;try{for(var d,g=i()(r.drag.handler);!(c=(d=g.next()).done);c=!0){var m=d.value,h=m?s.querySelector(m):e;!function(e,t){var n={flag:!1,position:{left:0,top:0},start:{x:0,y:0},done:{}};t.onmousedown=function(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),n.flag=!0,e.classList.add(r.drag.class.start,r.drag.class.main),n.start={x:a.clientX,y:a.clientY},n.position={left:parseFloat(e.offsetLeft),top:parseFloat(e.offsetTop)},r.drag.callback&&"function"==typeof r.drag.callback.start&&r.drag.callback.start(n.position),document.onmousemove=function(t){if(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),n.flag){e.classList.contains(r.drag.class.start)&&e.classList.remove(r.drag.class.start),e.classList.contains(r.drag.class.move)||e.classList.add(r.drag.class.move);var a={x:t.clientX-n.start.x,y:t.clientY-n.start.y};n.done={left:n.position.left+a.x+"px",top:n.position.top+a.y+"px",margin:0},u()(n.done).map(function(t){e.style[t]=n.done[t]}),r.drag.callback&&"function"==typeof r.drag.callback.move&&r.drag.callback.move(n.done)}},document.onmouseup=function(a){a.stopPropagation&&a.stopPropagation(),a.preventDefault&&a.preventDefault(),n.flag=!1,l()(r.drag.class).map(function(t){e.classList.remove(t)}),r.drag.callback&&"function"==typeof r.drag.callback.done&&r.drag.callback.done(n.done),t.onmouseup=null,document.onmousemove=null}}}(s,h)}}catch(e){f=!0,p=e}finally{try{!c&&g.return&&g.return()}finally{if(f)throw p}}}else console.log("XDrag Info:: drag not enabled!");if(r.resize&&r.resize.enable){var v=e;if("string"==typeof r.resize.handler)return void console.log("XDrag Warning:: resize handler config error!");var y=!0,b=!1,x=void 0;try{for(var w,k=i()(u()(r.resize.handler));!(y=(w=k.next()).done);y=!0){var D=w.value,z=r.resize.handler[D],$=z?v.querySelector(z):e;!function(e,t,n){var i={flag:!1,position:{left:0,top:0},start:{x:0,y:0},direction:n,done:{}};t.onmousedown=function(n){n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault(),i.flag=!0,e.classList.add(r.resize.class.start,r.resize.class.main),i.start={x:n.clientX,y:n.clientY},i.position={left:parseFloat(e.offsetLeft),top:parseFloat(e.offsetTop),width:parseFloat(a(e,"width")),height:parseFloat(a(e,"height"))},r.resize.callback&&"function"==typeof r.resize.callback.start&&r.resize.callback.start(i.position),document.onmousemove=function(t){if(t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),i.flag){e.classList.contains(r.resize.class.start)&&e.classList.remove(r.resize.class.start),e.classList.contains(r.resize.class.move)||e.classList.add(r.resize.class.move);var n={x:t.clientX-i.start.x,y:t.clientY-i.start.y},a=void 0;switch(i.direction){case"top-left":a={width:i.position.width-n.x+"px",height:i.position.height-n.y+"px",left:i.position.left+n.x+"px",top:i.position.top+n.y+"px"};break;case"top-right":a={width:i.position.width+n.x+"px",height:i.position.height-n.y+"px",top:i.position.top+n.y+"px"};break;case"bottom-left":a={width:i.position.width-n.x+"px",height:i.position.height+n.y+"px",left:i.position.left+n.x+"px"};break;case"bottom-right":a={width:i.position.width+n.x+"px",height:i.position.height+n.y+"px"};break;case"top-border":a={height:i.position.height-n.y+"px",top:i.position.top+n.y+"px"};break;case"right-border":a={width:i.position.width+n.x+"px"};break;case"bottom-border":a={height:i.position.height+n.y+"px"};break;case"left-border":a={width:i.position.width-n.x+"px",left:i.position.left+n.x+"px"}}i.done=o()({},a),u()(i.done).map(function(t){e.style[t]=i.done[t]}),r.resize.callback&&"function"==typeof r.resize.callback.move&&r.resize.callback.move(i.done)}},document.onmouseup=function(n){n.stopPropagation&&n.stopPropagation(),n.preventDefault&&n.preventDefault(),i.flag=!1,l()(r.resize.class).map(function(t){e.classList.remove(t)}),r.resize.callback&&"function"==typeof r.resize.callback.done&&r.resize.callback.done(i.done),t.onmouseup=null,document.onmousemove=null}}}(v,$,D)}}catch(e){b=!0,x=e}finally{try{!y&&k.return&&k.return()}finally{if(b)throw x}}}else console.log("XDrag Info:: resize not enabled!")}}})},"undefined"!=typeof window&&window.Vue&&window.Vue.use(f),t.a=f},210:function(e,t,n){"use strict";var a=n(117),o=n.n(a),r=n(79),i=new r.default;i.$clear=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=this;if(e&&("string"==typeof e&&(e=[e]),e instanceof Array)){var n=!0,a=!1,r=void 0;try{for(var i,s=o()(e);!(n=(i=s.next()).done);n=!0){var l=i.value;t.$off(l)}}catch(e){a=!0,r=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw r}}}},i.$register=function(e,t,n,a){if(n){var o=a||"types";n[o]||(n[o]={}),n[o][e]=!0}i.$on(e,t)},t.a=i},211:function(e,t,n){"use strict";t.a={formatDate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm",n=e+"";if(n.length<13&&(e*=Math.pow(10,13-n.length)),e=parseInt(e),isNaN(e))return"";var a=new Date(e),o=function(e){return("00"+e).substr(e.length)};return function(e,t){/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(e.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":e.getMonth()+1,"d+":e.getDate(),"h+":e.getHours(),"m+":e.getMinutes(),"s+":e.getSeconds()};for(var a in n)if(new RegExp("("+a+")").test(t)){var r=n[a]+"";t=t.replace(RegExp.$1,1===RegExp.$1.length?r:o(r))}return t}(a,t)},formatThousands:function(e){e=(e||0).toString();for(var t="";e.length>3;)t=","+e.slice(-3)+t,e=e.slice(0,e.length-3);return e&&(t=e+t),t}}},212:function(e,t,n){"use strict";var a=n(116),o=n.n(a),r=n(83),i=n.n(r);t.a=function(e,t){var n=e,a=i()({},t.config,t.install,{id:t.id,action:"install"});n.$utils.bus.$emit("platform/application/install",{action:"openByInstall",data:{appInfo:JSON.parse(o()(a))}})}},213:function(e,t,n){"use strict";var a=n(135),o=n(134);t.a={getType:function(e,t){var n=0===e.indexOf("/");if(!t)return n?e.slice(1,e.length):e;var r="";switch(t){case"Platform":r=a.a.moduleName;break;case"Apps":r=o.a.moduleName}return r?n?r+e:r+"/"+e:n?e.slice(1,e.length):e},getModuleName:function(e){var t="";switch(e){case"Platform":t=a.a.moduleName;break;case"Apps":t=o.a.moduleName}return t}}},214:function(e,t,n){"use strict";var a=n(78),o=n.n(a);t.a={map:{},condition:{small:10,middle:50,large:100},style:{small:"color: #19be6b",middle:"color: #ffad33",large:"color: #f16543"},start:function(e){var t=this;t.map[e]?console.warn("TIME CONSUMING::","Repeated key:",e):t.map[e]={start:new Date,end:new Date,sum:0}},end:function(e){var t=this;if(!t.map[e])return void console.warn("TIME CONSUMING::","Not existed key:",e);t.map[e].end=new Date,t.map[e].sum=t.map[e].end-t.map[e].start;var n=o()(t.condition),a=n.find(function(n){return t.map[e].sum<t.condition[n]});a||(a=t.condition[n[n.length-1]]);var r=["%cTIME CONSUMING::",t.map[e].sum,"key:",e,"condition:",t.condition[a]].join(" "),i=t.style[a];console.log(r,i)}}},215:function(e,t,n){"use strict";var a=n(116),o=n.n(a),r=n(83),i=n.n(r);t.a=function(e,t){var n=e,a=i()({},t.config,t.install,{id:t.id,action:"uninstall"});n.$utils.bus.$emit("platform/application/uninstall",{action:"openByUninstall",data:{appInfo:JSON.parse(o()(a))}})}},216:function(e,t,n){"use strict";t.a=[{path:"/",name:"platform.index",component:function(e){return n.e(0).then(function(){var t=[n(464)];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"首页",requiresAuth:!1},children:[{path:"Error404",name:"platform.Error404",component:function(e){return n.e(1).then(function(){var t=[n(463)];e.apply(null,t)}.bind(this)).catch(n.oe)},meta:{title:"Error404",requiresAuth:!1,scrollToTop:!0}}]}]},217:function(e,t,n){"use strict";t.a={}},218:function(e,t,n){"use strict";t.a={}},219:function(e,t,n){"use strict";t.a={}},220:function(e,t,n){"use strict";t.a={}},221:function(e,t,n){"use strict";var a=n(115),o=n.n(a);t.a={"userInfo/update":function(e,t){e.userInfo=o()({},t)},"userInfo/reset":function(e,t){e.userInfo={isLogin:!1}}}},222:function(e,t,n){"use strict";t.a={userInfo:{isLogin:!1},appIcon:"./static/app.png"}},223:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"App"}},224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"NoData",props:{show:{type:Boolean,default:!1},text:{type:String,default:"暂无数据！"}}}},225:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(175),o=n.n(a),r=n(174),i=n.n(r),s=n(137),l=n.n(s);t.default={name:"Switch",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{validator:function(e){var t=["large","small"];return function(e,t){for(var n=0;n<t.length;n++)if(e===t[n])return!0;return!1}(e,t)}},beforeToggle:{type:Function},afterToggle:{type:Function},callbackParams:{type:null}},data:function(){return{currentValue:this.value}},computed:{wrapClasses:function(){var e;return["ivu-switch",(e={},l()(e,"ivu-switch-checked",this.currentValue),l()(e,"ivu-switch-disabled",this.disabled),l()(e,"ivu-switch-"+this.size,!!this.size),e)]},innerClasses:function(){return"ivu-switch-inner"}},methods:{toggle:function(){function e(){return t.apply(this,arguments)}var t=i()(o.a.mark(function e(){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this,!t.disabled){e.next=3;break}return e.abrupt("return",!1);case 3:if(n=!1,!t.beforeToggle){e.next=11;break}return e.next=7,t.beforeToggle(t.callbackParams,t.currentValue);case 7:if(e.t0=e.sent,e.t0){e.next=10;break}e.t0=!1;case 10:n=e.t0;case 11:if(!n){e.next=13;break}return e.abrupt("return",!1);case 13:t.currentValue=!t.currentValue,t.afterToggle&&t.afterToggle(t.callbackParams,t.currentValue);case 15:case"end":return e.stop()}},e,this)}));return e}()},watch:{value:function(e){this.currentValue=e}}}},441:function(e,t){},442:function(e,t){},443:function(e,t){},444:function(e,t){},451:function(e,t,n){function a(e){n(444)}var o=n(77)(n(223),n(454),a,null,null);e.exports=o.exports},452:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{class:e.wrapClasses,on:{click:e.toggle}},[n("span",{class:e.innerClasses},[e.currentValue?e._t("open"):e._e(),e._v(" "),e.currentValue?e._e():e._t("close")],2)])},staticRenderFns:[]}},453:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.show?n("div",{staticClass:"nodata"},[e._t("default",[e._v(e._s(e.text))])],2):e._e()},staticRenderFns:[]}},454:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{"enter-active-class":"animated fadeIn","leave-active-class":"animated fadeOut"}},[n("router-view")],1)},staticRenderFns:[]}},460:function(e,t,n){n(173),e.exports=n(172)}},[460]);