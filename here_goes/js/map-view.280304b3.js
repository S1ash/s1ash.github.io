(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["map-view"],{1276:function(e,t,n){"use strict";var i=n("d784"),r=n("44e7"),a=n("825a"),o=n("1d80"),s=n("4840"),c=n("8aa5"),l=n("50c4"),h=n("14c3"),u=n("9263"),d=n("d039"),p=[].push,g=Math.min,f=4294967295,b=!d((function(){return!RegExp(f,"y")}));i("split",2,(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(o(this)),a=void 0===n?f:n>>>0;if(0===a)return[];if(void 0===e)return[i];if(!r(e))return t.call(i,e,a);var s,c,l,h=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,b=new RegExp(e.source,d+"g");while(s=u.call(b,i)){if(c=b.lastIndex,c>g&&(h.push(i.slice(g,s.index)),s.length>1&&s.index<i.length&&p.apply(h,s.slice(1)),l=s[0].length,g=c,h.length>=a))break;b.lastIndex===s.index&&b.lastIndex++}return g===i.length?!l&&b.test("")||h.push(""):h.push(i.slice(g)),h.length>a?h.slice(0,a):h}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=o(this),a=void 0==t?void 0:t[e];return void 0!==a?a.call(t,r,n):i.call(String(r),t,n)},function(e,r){var o=n(i,e,this,r,i!==t);if(o.done)return o.value;var u=a(e),d=String(this),p=s(u,RegExp),v=u.unicode,m=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(b?"y":"g"),w=new p(b?u:"^(?:"+u.source+")",m),y=void 0===r?f:r>>>0;if(0===y)return[];if(0===d.length)return null===h(w,d)?[d]:[];var O=0,k=0,j=[];while(k<d.length){w.lastIndex=b?k:0;var x,S=h(w,b?d:d.slice(k));if(null===S||(x=g(l(w.lastIndex+(b?0:k)),d.length))===O)k=c(d,k,v);else{if(j.push(d.slice(O,k)),j.length===y)return j;for(var I=1;I<=S.length-1;I++)if(j.push(S[I]),j.length===y)return j;k=O=x}}return j.push(d.slice(O)),j}]}),!b)},3755:function(e,t,n){},3973:function(e,t,n){"use strict";n("5283")},"44e7":function(e,t,n){var i=n("861d"),r=n("c6b6"),a=n("b622"),o=a("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==r(e))}},5283:function(e,t,n){},"89a9":function(e,t,n){"use strict";n.r(t);n("b64b");var i=n("7a23"),r=Object(i["eb"])("data-v-75554661");Object(i["G"])("data-v-75554661");var a={class:"hg-search-view"},o=Object(i["l"])(" Back to search ");Object(i["E"])();var s=r((function(e,t,n,s,c,l){var h=Object(i["M"])("el-button"),u=Object(i["M"])("hg-map"),d=Object(i["N"])("loading");return Object(i["bb"])((Object(i["D"])(),Object(i["i"])("div",a,[Object(i["m"])(h,{class:"hg-search-view__search-button",round:"",type:"primary",onClick:t[1]||(t[1]=function(t){return e.$router.push({name:"SearchView"})})},{default:r((function(){return[o]})),_:1}),Object.keys(e.options).length&&e.items&&e.items.length?(Object(i["D"])(),Object(i["i"])(u,{key:0,data:e.items,options:e.options},null,8,["data","options"])):Object(i["j"])("",!0)],512)),[[d,e.loading]])})),c=(n("7db0"),n("ac1f"),n("841c"),n("1276"),n("96cf"),n("1da1"));function l(e){if(Array.isArray(e))return e}n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function h(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)if(n.push(o.value),t&&n.length===t)break}catch(c){r=!0,a=c}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw a}}return n}}var u=n("06c5");function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function p(e,t){return l(e)||h(e,t)||Object(u["a"])(e,t)||d()}var g=n("3fd4"),f=Object(i["eb"])("data-v-e971fa46");Object(i["G"])("data-v-e971fa46");var b={class:"hg-map"},v={ref:"mapElement",class:"hg-map__element"};Object(i["E"])();var m=f((function(e,t,n,r,a,o){return Object(i["D"])(),Object(i["i"])("div",b,[Object(i["m"])("div",v," loading.... ",512)])})),w=(n("99af"),n("a623"),n("c975"),n("d81d"),function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var i,r,a;if(Array.isArray(t)){if(i=t.length,i!=n.length)return!1;for(r=i;0!==r--;)if(!e(t[r],n[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(a=Object.keys(t),i=a.length,i!==Object.keys(n).length)return!1;for(r=i;0!==r--;)if(!Object.prototype.hasOwnProperty.call(n,a[r]))return!1;for(r=i;0!==r--;){var o=a[r];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n});const y="__googleMapsScriptId";class O{constructor({apiKey:e,channel:t,client:n,id:i=y,libraries:r=[],language:a,region:o,version:s,mapIds:c,nonce:l,retries:h=3,url:u="https://maps.googleapis.com/maps/api/js"}){if(this.CALLBACK="__googleMapsCallback",this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.version=s,this.apiKey=e,this.channel=t,this.client=n,this.id=i||y,this.libraries=r,this.language=a,this.region=o,this.mapIds=c,this.nonce=l,this.retries=h,this.url=u,O.instance){if(!w(this.options,O.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(O.instance.options)}`);return O.instance}O.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url}}createUrl(){let e=this.url;return e+="?callback="+this.CALLBACK,this.apiKey&&(e+="&key="+this.apiKey),this.channel&&(e+="&channel="+this.channel),this.client&&(e+="&client="+this.client),this.libraries.length>0&&(e+="&libraries="+this.libraries.join(",")),this.language&&(e+="&language="+this.language),this.region&&(e+="&region="+this.region),this.version&&(e+="&v="+this.version),this.mapIds&&(e+="&map_ids="+this.mapIds.join(",")),e}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(n=>{n?t(n):e()})})}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){if(document.getElementById(this.id))return void this.callback();const e=this.createUrl(),t=document.createElement("script");t.id=this.id,t.type="text/javascript",t.src=e,t.onerror=this.loadErrorCallback.bind(this),t.defer=!0,t.async=!0,this.nonce&&(t.nonce=this.nonce),document.head.appendChild(t)}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}resetIfRetryingFailed(){const e=this.retries+1;this.done&&!this.loading&&this.errors.length>=e&&(this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[])}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const e=this.errors.length*Math.pow(2,this.errors.length);console.log(`Failed to load Google Maps script, retrying in ${e} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},e)}else this.onerrorEvent=e,this.callback()}setCallback(){window.__googleMapsCallback=this.callback.bind(this)}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){window.google&&window.google.maps&&window.google.maps.version&&(console.warn("Aborted attempt to load Google Maps JS with @googlemaps/js-api-loader.This may result in undesirable behavior as script parameters may not match."),this.callback()),this.resetIfRetryingFailed(),this.done?this.callback():this.loading||(this.loading=!0,this.setCallback(),this.setScript())}}var k=new O({apiKey:"AIzaSyB-8KS7xaBjC9sFC3RJgrKeofgblt5JxJ4",version:"weekly",libraries:["places"]}),j=Object(i["n"])({name:"HgMap",props:{data:{type:Array,default:function(){return[]}},options:{type:Object,required:!0,default:function(){return{}}}},data:function(){return{map:null,opened:[]}},mounted:function(){var e=this;k.load().then((function(){var t,n,i;if("function"===typeof(null===(t=window.google)||void 0===t||null===(n=t.maps)||void 0===n?void 0:n.Map)){e.map=new window.google.maps.Map(e.$refs.mapElement,e.options);var r=null===(i=e.data)||void 0===i?void 0:i.map((function(e){var t=e.place_name,n=e.location;return[t,n[1],n[0],1]}));new window.google.maps.Marker({position:e.options.center,animation:window.google.maps.Animation.DROP,map:e.map,title:"Current position"}),e.setMarkers(r)}})).catch((function(e){console.log("catch",e)})),console.log(this.data)},methods:{setMarkers:function(e){var t,n,i=this;if(null!==(t=window)&&void 0!==t&&null!==(n=t.google)&&void 0!==n&&n.maps&&this.map){console.log("a","".concat(window.location.protocol,"//").concat(window.location.host,"/map-icon_50.png"));for(var r={url:"".concat(window.location.protocol,"//").concat(window.location.host,"/map-icon_50.png"),size:new window.google.maps.Size(50,50),origin:new window.google.maps.Point(0,0),anchor:new window.google.maps.Point(-25,0)},a={coords:[0,0,50,50],type:"rect"},o=function(t){var n=e[t],o=new window.google.maps.InfoWindow({content:'\n          <div id="content">\n            <a href="//www.google.com/search?q='.concat(n[0],'" target="_blank">').concat(n[0],"</a>\n          </div>")}),s=new window.google.maps.Marker({position:{lat:n[1],lng:n[2]},map:i.map,icon:r,shape:a,animation:window.google.maps.Animation.DROP,title:n[0],zIndex:n[3]});s.addListener("click",(function(){i.$nextTick((function(){i.opened.indexOf(s)>=0?o.close():(i.opened.every((function(e){return e.close()})),i.opened=[],o.open(i.map,s),i.opened.push(o))}))}))},s=0;s<e.length;s++)o(s)}}}});n("8b5d");j.render=m,j.__scopeId="data-v-e971fa46";var x=j,S=n("8172"),I=Object(i["n"])({name:"MapView",components:{HgMap:x},query:["search"],props:{data:{type:String,default:function(){return""},required:!1}},data:function(){return{loading:!0,search:{},items:[]}},computed:{options:function(){var e;if(null===(e=this.search)||void 0===e||!e.location)return{};try{var t=this.search.location.split(","),n=p(t,2),i=n[0],r=n[1];return{center:{lat:parseFloat(i),lng:parseFloat(r)},zoom:13}}catch(a){return{}}}},mounted:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var n,i,r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,n=JSON.parse(decodeURIComponent(e.$route.query.search)),!n||!Object.keys(n).length){t.next=16;break}if(e.search=n,null===(i=e.$route.params)||void 0===i||!i.data){t.next=8;break}e.items=Object.assign([],JSON.parse(e.$route.params.data)),t.next=13;break;case 8:return t.next=10,S["a"].find(e.search);case 10:r=t.sent,a=r.data,null!==a&&void 0!==a&&a.length?e.items=a:e.backToSearch("No results were found for this query. Please change your search parameters.");case 13:e.loading=!1,t.next=17;break;case 16:e.backToSearch();case 17:t.next=22;break;case 19:t.prev=19,t.t0=t["catch"](0),e.backToSearch();case 22:case"end":return t.stop()}}),t,null,[[0,19]])})))()},methods:{backToSearch:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Bad request.";this.$router.push({name:"SearchView"}),Object(g["a"])({type:"warning",message:e})}}});n("3973");I.render=s,I.__scopeId="data-v-75554661";t["default"]=I},"8aa5":function(e,t,n){"use strict";var i=n("6547").charAt;e.exports=function(e,t,n){return t+(n?i(e,t).length:1)}},"8b5d":function(e,t,n){"use strict";n("3755")},"99af":function(e,t,n){"use strict";var i=n("23e7"),r=n("d039"),a=n("e8b5"),o=n("861d"),s=n("7b0b"),c=n("50c4"),l=n("8418"),h=n("65f0"),u=n("1dde"),d=n("b622"),p=n("2d00"),g=d("isConcatSpreadable"),f=9007199254740991,b="Maximum allowed index exceeded",v=p>=51||!r((function(){var e=[];return e[g]=!1,e.concat()[0]!==e})),m=u("concat"),w=function(e){if(!o(e))return!1;var t=e[g];return void 0!==t?!!t:a(e)},y=!v||!m;i({target:"Array",proto:!0,forced:y},{concat:function(e){var t,n,i,r,a,o=s(this),u=h(o,0),d=0;for(t=-1,i=arguments.length;t<i;t++)if(a=-1===t?o:arguments[t],w(a)){if(r=c(a.length),d+r>f)throw TypeError(b);for(n=0;n<r;n++,d++)n in a&&l(u,d,a[n])}else{if(d>=f)throw TypeError(b);l(u,d++,a)}return u.length=d,u}})},a623:function(e,t,n){"use strict";var i=n("23e7"),r=n("b727").every,a=n("a640"),o=n("ae40"),s=a("every"),c=o("every");i({target:"Array",proto:!0,forced:!s||!c},{every:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},c975:function(e,t,n){"use strict";var i=n("23e7"),r=n("4d64").indexOf,a=n("a640"),o=n("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,l=a("indexOf"),h=o("indexOf",{ACCESSORS:!0,1:0});i({target:"Array",proto:!0,forced:c||!l||!h},{indexOf:function(e){return c?s.apply(this,arguments)||0:r(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=map-view.280304b3.js.map