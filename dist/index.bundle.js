!function(e){var t=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,t){if(!y[e]||!v[e])return;for(var r in v[e]=!1,t)Object.prototype.hasOwnProperty.call(t,r)&&(g[r]=t[r]);0==--f&&0===_&&T()}(e,r),t&&t(e,r)};var r,o=!0,i="22b7d3879e7c602808eb",s=1e4,n={},a=[],l=[];function u(e){var t=I[e];if(!t)return D;var o=function(o){return t.hot.active?(I[o]?-1===I[o].parents.indexOf(e)&&I[o].parents.push(e):(a=[e],r=o),-1===t.children.indexOf(o)&&t.children.push(o)):(console.warn("[HMR] unexpected require("+o+") from disposed module "+e),a=[]),D(o)},i=function(e){return{configurable:!0,enumerable:!0,get:function(){return D[e]},set:function(t){D[e]=t}}};for(var s in D)Object.prototype.hasOwnProperty.call(D,s)&&"e"!==s&&"t"!==s&&Object.defineProperty(o,s,i(s));return o.e=function(e){return"ready"===c&&d("prepare"),_++,D.e(e).then(t,function(e){throw t(),e});function t(){_--,"prepare"===c&&(b[e]||O(e),0===_&&0===f&&T())}},o.t=function(e,t){return 1&t&&(e=o(e)),D.t(e,-2&t)},o}var p=[],c="idle";function d(e){c=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var h,g,m,f=0,_=0,b={},v={},y={};function w(e){return+e+""===e?+e:e}function E(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return o=e,d("check"),function(e){return e=e||1e4,new Promise(function(t,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var o=new XMLHttpRequest,s=D.p+""+i+".hot-update.json";o.open("GET",s,!0),o.timeout=e,o.send(null)}catch(e){return r(e)}o.onreadystatechange=function(){if(4===o.readyState)if(0===o.status)r(new Error("Manifest request to "+s+" timed out."));else if(404===o.status)t();else if(200!==o.status&&304!==o.status)r(new Error("Manifest request to "+s+" failed."));else{try{var e=JSON.parse(o.responseText)}catch(e){return void r(e)}t(e)}}})}(s).then(function(e){if(!e)return d("idle"),null;v={},b={},y=e.c,m=e.h,d("prepare");var t=new Promise(function(e,t){h={resolve:e,reject:t}});g={};return O(0),"prepare"===c&&0===_&&0===f&&T(),t})}function O(e){y[e]?(v[e]=!0,f++,function(e){var t=document.getElementsByTagName("head")[0],r=document.createElement("script");r.charset="utf-8",r.src=D.p+""+e+"."+i+".hot-update.js",t.appendChild(r)}(e)):b[e]=!0}function T(){d("ready");var e=h;if(h=null,e)if(o)Promise.resolve().then(function(){return k(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var r in g)Object.prototype.hasOwnProperty.call(g,r)&&t.push(w(r));e.resolve(t)}}function k(t){if("ready"!==c)throw new Error("apply() is only allowed in ready status");var r,o,s,l,u;function p(e){for(var t=[e],r={},o=t.slice().map(function(e){return{chain:[e],id:e}});o.length>0;){var i=o.pop(),s=i.id,n=i.chain;if((l=I[s])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:n,moduleId:s};if(l.hot._main)return{type:"unaccepted",chain:n,moduleId:s};for(var a=0;a<l.parents.length;a++){var u=l.parents[a],p=I[u];if(p){if(p.hot._declinedDependencies[s])return{type:"declined",chain:n.concat([u]),moduleId:s,parentId:u};-1===t.indexOf(u)&&(p.hot._acceptedDependencies[s]?(r[u]||(r[u]=[]),h(r[u],[s])):(delete r[u],t.push(u),o.push({chain:n.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:r}}function h(e,t){for(var r=0;r<t.length;r++){var o=t[r];-1===e.indexOf(o)&&e.push(o)}}t=t||{};var f={},_=[],b={},v=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var E in g)if(Object.prototype.hasOwnProperty.call(g,E)){var O;u=w(E);var T=!1,k=!1,F=!1,j="";switch((O=g[E]?p(u):{type:"disposed",moduleId:E}).chain&&(j="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(T=new Error("Aborted because of self decline: "+O.moduleId+j));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(T=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+j));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(T=new Error("Aborted because "+u+" is not accepted"+j));break;case"accepted":t.onAccepted&&t.onAccepted(O),k=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),F=!0;break;default:throw new Error("Unexception type "+O.type)}if(T)return d("abort"),Promise.reject(T);if(k)for(u in b[u]=g[u],h(_,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,u)&&(f[u]||(f[u]=[]),h(f[u],O.outdatedDependencies[u]));F&&(h(_,[O.moduleId]),b[u]=v)}var A,S=[];for(o=0;o<_.length;o++)u=_[o],I[u]&&I[u].hot._selfAccepted&&S.push({module:u,errorHandler:I[u].hot._selfAccepted});d("dispose"),Object.keys(y).forEach(function(e){!1===y[e]&&function(e){delete installedChunks[e]}(e)});for(var R,P,M=_.slice();M.length>0;)if(u=M.pop(),l=I[u]){var U={},x=l.hot._disposeHandlers;for(s=0;s<x.length;s++)(r=x[s])(U);for(n[u]=U,l.hot.active=!1,delete I[u],delete f[u],s=0;s<l.children.length;s++){var L=I[l.children[s]];L&&((A=L.parents.indexOf(u))>=0&&L.parents.splice(A,1))}}for(u in f)if(Object.prototype.hasOwnProperty.call(f,u)&&(l=I[u]))for(P=f[u],s=0;s<P.length;s++)R=P[s],(A=l.children.indexOf(R))>=0&&l.children.splice(A,1);for(u in d("apply"),i=m,b)Object.prototype.hasOwnProperty.call(b,u)&&(e[u]=b[u]);var H=null;for(u in f)if(Object.prototype.hasOwnProperty.call(f,u)&&(l=I[u])){P=f[u];var G=[];for(o=0;o<P.length;o++)if(R=P[o],r=l.hot._acceptedDependencies[R]){if(-1!==G.indexOf(r))continue;G.push(r)}for(o=0;o<G.length;o++){r=G[o];try{r(P)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:u,dependencyId:P[o],error:e}),t.ignoreErrored||H||(H=e)}}}for(o=0;o<S.length;o++){var N=S[o];u=N.module,a=[u];try{D(u)}catch(e){if("function"==typeof N.errorHandler)try{N.errorHandler(e)}catch(r){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:r,originalError:e}),t.ignoreErrored||H||(H=r),H||(H=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:u,error:e}),t.ignoreErrored||H||(H=e)}}return H?(d("fail"),Promise.reject(H)):(d("idle"),new Promise(function(e){e(_)}))}var I={};function D(t){if(I[t])return I[t].exports;var o=I[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var o=0;o<e.length;o++)t._acceptedDependencies[e[o]]=r||function(){};else t._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._declinedDependencies[e[r]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=t._disposeHandlers.indexOf(e);r>=0&&t._disposeHandlers.splice(r,1)},check:E,apply:k,status:function(e){if(!e)return c;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:n[e]};return r=void 0,t}(t),parents:(l=a,a=[],l),children:[]};return e[t].call(o.exports,o,o.exports,u(t)),o.l=!0,o.exports}D.m=e,D.c=I,D.d=function(e,t,r){D.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},D.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},D.t=function(e,t){if(1&t&&(e=D(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(D.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)D.d(r,o,function(t){return e[t]}.bind(null,o));return r},D.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return D.d(t,"a",t),t},D.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},D.p="",D.h=function(){return i},u("./src/index.js")(D.s="./src/index.js")}({"./src/index.js":function(e,t,r){"use strict";r.r(t);class o{constructor(e){this.element=document.querySelector(e),this.filterBy=[]}render(e){this.element.innerHTML="";let t="";(e=e||[]).length?e.forEach(e=>{let r="";e.languages_url&&e.languages_url.forEach(e=>{r+=`<li>\n              <h3>${e}</h3>\n            </li>`}),t+=`<li>\n          <a href="${e.login_html_url}/${e.name}"\n          rel="noopener" target="_blank">\n            ${e.name}\n          </a>\n          <span>Forks: ${e.forks_count}</span>\n          <span>Stars: ${e.stargazers_count}</span>\n          <ul>\n            ${r}\n          </ul>\n        </li>`}):t="<h3>No Results</h3>",this.element.innerHTML+=t}init(){this.render()}}class i{constructor(e){this.element=document.querySelector(e),this.filterForm=this.element.querySelector(a.FILTER_FORM),this.currentData=[],this.results=new o("[results-component]")}listenEvents(){this.filterForm.addEventListener(s.SUBMIT,e=>{e.preventDefault(),this.controller(e.target.id)})}controller(e){const t=e=>{const t=this.filterForm.querySelectorAll(`#${e} ${a.INPUT_FILTER}`);let r=[],o=[];Array.from(t,e=>{e.checked&&r.push(e.value)}),o=this.currentData.filter(e=>{let t=!1;if(e.languages_url.forEach(e=>{r.forEach(r=>{e===r&&(t=!0)})}),t)return e}),this.results.render(o)},r=()=>{let e=this.currentData.sort((e,t)=>t.forks_count-e.forks_count);this.results.render(e)};switch(e){case c.LANGUAGES:t(c.LANGUAGES);break;case c.FORKS:r()}}setData(e){this.currentData=e}setControlFilter(e,t){let r=`<form id="${e}">\n          <label>Filter by ${e}</label>\n        <br>`;const o=()=>{t.forEach(e=>{r+=`<input class="${n.INPUT_FILTER}" \n        type="checkbox" \n        name="${e}" \n        value="${e}">${e}<br>`}),r+='<button type="submit">filter</button><form><br><hr>',this.filterForm.innerHTML+=r},i=()=>{r+='<button type="submit">filter</button><form><br><hr>',this.filterForm.innerHTML+=r};switch(e){case c.LANGUAGES:o();break;case c.FORKS:i()}}init(){this.listenEvents()}}const s={SUBMIT:"submit"},n={INPUT_FILTER:"js-filterInput"},a={FILTER_FORM:".js-filterForm",INPUT_FILTER:`.${n.INPUT_FILTER}`},l=(e,t)=>new Promise((r,o)=>{const i=new XMLHttpRequest;i.open(e,t),i.onload=(()=>{i.status>=200&&i.status<300?r(i.response):o({status:i.status,statusText:i.statusText})}),i.onerror=(()=>{o({status:i.status,statusText:i.statusText})}),i.send()});l("GET","https://github.com/login/oauth/authorize").then(e=>{console.log(e)}).catch(e=>{console.error("Augh, there was an error!",e.statusText)});const u=[{id:165924630,node_id:"MDEwOlJlcG9zaXRvcnkxNjU5MjQ2MzA=",name:"angular2",full_name:"diegofelipemoreno/angular2",private:!1,owner:{login:"diegofelipemoreno",id:6085015,node_id:"MDQ6VXNlcjYwODUwMTU=",avatar_url:"https://avatars1.githubusercontent.com/u/6085015?v=4",gravatar_id:"",url:"https://api.github.com/users/diegofelipemoreno",html_url:"https://github.com/diegofelipemoreno",followers_url:"https://api.github.com/users/diegofelipemoreno/followers",following_url:"https://api.github.com/users/diegofelipemoreno/following{/other_user}",gists_url:"https://api.github.com/users/diegofelipemoreno/gists{/gist_id}",starred_url:"https://api.github.com/users/diegofelipemoreno/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/diegofelipemoreno/subscriptions",organizations_url:"https://api.github.com/users/diegofelipemoreno/orgs",repos_url:"https://api.github.com/users/diegofelipemoreno/repos",events_url:"https://api.github.com/users/diegofelipemoreno/events{/privacy}",received_events_url:"https://api.github.com/users/diegofelipemoreno/received_events",type:"User",site_admin:!1},html_url:"https://github.com/diegofelipemoreno/angular2",description:"Angular 2 repo learning",fork:!1,url:"https://api.github.com/repos/diegofelipemoreno/angular2",forks_url:"https://api.github.com/repos/diegofelipemoreno/angular2/forks",keys_url:"https://api.github.com/repos/diegofelipemoreno/angular2/keys{/key_id}",collaborators_url:"https://api.github.com/repos/diegofelipemoreno/angular2/collaborators{/collaborator}",teams_url:"https://api.github.com/repos/diegofelipemoreno/angular2/teams",hooks_url:"https://api.github.com/repos/diegofelipemoreno/angular2/hooks",issue_events_url:"https://api.github.com/repos/diegofelipemoreno/angular2/issues/events{/number}",events_url:"https://api.github.com/repos/diegofelipemoreno/angular2/events",assignees_url:"https://api.github.com/repos/diegofelipemoreno/angular2/assignees{/user}",branches_url:"https://api.github.com/repos/diegofelipemoreno/angular2/branches{/branch}",tags_url:"https://api.github.com/repos/diegofelipemoreno/angular2/tags",blobs_url:"https://api.github.com/repos/diegofelipemoreno/angular2/git/blobs{/sha}",git_tags_url:"https://api.github.com/repos/diegofelipemoreno/angular2/git/tags{/sha}",git_refs_url:"https://api.github.com/repos/diegofelipemoreno/angular2/git/refs{/sha}",trees_url:"https://api.github.com/repos/diegofelipemoreno/angular2/git/trees{/sha}",statuses_url:"https://api.github.com/repos/diegofelipemoreno/angular2/statuses/{sha}",languages_url:"https://api.github.com/repos/diegofelipemoreno/angular2/languages",stargazers_url:"https://api.github.com/repos/diegofelipemoreno/angular2/stargazers",contributors_url:"https://api.github.com/repos/diegofelipemoreno/angular2/contributors",subscribers_url:"https://api.github.com/repos/diegofelipemoreno/angular2/subscribers",subscription_url:"https://api.github.com/repos/diegofelipemoreno/angular2/subscription",commits_url:"https://api.github.com/repos/diegofelipemoreno/angular2/commits{/sha}",git_commits_url:"https://api.github.com/repos/diegofelipemoreno/angular2/git/commits{/sha}",comments_url:"https://api.github.com/repos/diegofelipemoreno/angular2/comments{/number}",issue_comment_url:"https://api.github.com/repos/diegofelipemoreno/angular2/issues/comments{/number}",contents_url:"https://api.github.com/repos/diegofelipemoreno/angular2/contents/{+path}",compare_url:"https://api.github.com/repos/diegofelipemoreno/angular2/compare/{base}...{head}",merges_url:"https://api.github.com/repos/diegofelipemoreno/angular2/merges",archive_url:"https://api.github.com/repos/diegofelipemoreno/angular2/{archive_format}{/ref}",downloads_url:"https://api.github.com/repos/diegofelipemoreno/angular2/downloads",issues_url:"https://api.github.com/repos/diegofelipemoreno/angular2/issues{/number}",pulls_url:"https://api.github.com/repos/diegofelipemoreno/angular2/pulls{/number}",milestones_url:"https://api.github.com/repos/diegofelipemoreno/angular2/milestones{/number}",notifications_url:"https://api.github.com/repos/diegofelipemoreno/angular2/notifications{?since,all,participating}",labels_url:"https://api.github.com/repos/diegofelipemoreno/angular2/labels{/name}",releases_url:"https://api.github.com/repos/diegofelipemoreno/angular2/releases{/id}",deployments_url:"https://api.github.com/repos/diegofelipemoreno/angular2/deployments",created_at:"2019-01-15T21:14:41Z",updated_at:"2019-01-15T21:22:36Z",pushed_at:"2019-01-15T21:22:33Z",git_url:"git://github.com/diegofelipemoreno/angular2.git",ssh_url:"git@github.com:diegofelipemoreno/angular2.git",clone_url:"https://github.com/diegofelipemoreno/angular2.git",svn_url:"https://github.com/diegofelipemoreno/angular2",homepage:null,size:3430,stargazers_count:0,watchers_count:0,language:"TypeScript",has_issues:!0,has_projects:!0,has_downloads:!0,has_wiki:!0,has_pages:!1,forks_count:0,mirror_url:null,archived:!1,open_issues_count:0,license:null,forks:0,open_issues:0,watchers:0,default_branch:"master"},{id:159088300,node_id:"MDEwOlJlcG9zaXRvcnkxNTkwODgzMDA=",name:"tetris",full_name:"diegofelipemoreno/tetris",private:!1,owner:{login:"diegofelipemoreno",id:6085015,node_id:"MDQ6VXNlcjYwODUwMTU=",avatar_url:"https://avatars1.githubusercontent.com/u/6085015?v=4",gravatar_id:"",url:"https://api.github.com/users/diegofelipemoreno",html_url:"https://github.com/diegofelipemoreno",followers_url:"https://api.github.com/users/diegofelipemoreno/followers",following_url:"https://api.github.com/users/diegofelipemoreno/following{/other_user}",gists_url:"https://api.github.com/users/diegofelipemoreno/gists{/gist_id}",starred_url:"https://api.github.com/users/diegofelipemoreno/starred{/owner}{/repo}",subscriptions_url:"https://api.github.com/users/diegofelipemoreno/subscriptions",organizations_url:"https://api.github.com/users/diegofelipemoreno/orgs",repos_url:"https://api.github.com/users/diegofelipemoreno/repos",events_url:"https://api.github.com/users/diegofelipemoreno/events{/privacy}",received_events_url:"https://api.github.com/users/diegofelipemoreno/received_events",type:"User",site_admin:!1},html_url:"https://github.com/diegofelipemoreno/tetris",description:null,fork:!1,url:"https://api.github.com/repos/diegofelipemoreno/tetris",forks_url:"https://api.github.com/repos/diegofelipemoreno/tetris/forks",keys_url:"https://api.github.com/repos/diegofelipemoreno/tetris/keys{/key_id}",collaborators_url:"https://api.github.com/repos/diegofelipemoreno/tetris/collaborators{/collaborator}",teams_url:"https://api.github.com/repos/diegofelipemoreno/tetris/teams",hooks_url:"https://api.github.com/repos/diegofelipemoreno/tetris/hooks",issue_events_url:"https://api.github.com/repos/diegofelipemoreno/tetris/issues/events{/number}",events_url:"https://api.github.com/repos/diegofelipemoreno/tetris/events",assignees_url:"https://api.github.com/repos/diegofelipemoreno/tetris/assignees{/user}",branches_url:"https://api.github.com/repos/diegofelipemoreno/tetris/branches{/branch}",tags_url:"https://api.github.com/repos/diegofelipemoreno/tetris/tags",blobs_url:"https://api.github.com/repos/diegofelipemoreno/tetris/git/blobs{/sha}",git_tags_url:"https://api.github.com/repos/diegofelipemoreno/tetris/git/tags{/sha}",git_refs_url:"https://api.github.com/repos/diegofelipemoreno/tetris/git/refs{/sha}",trees_url:"https://api.github.com/repos/diegofelipemoreno/tetris/git/trees{/sha}",statuses_url:"https://api.github.com/repos/diegofelipemoreno/tetris/statuses/{sha}",languages_url:"https://api.github.com/repos/diegofelipemoreno/tetris/languages",stargazers_url:"https://api.github.com/repos/diegofelipemoreno/tetris/stargazers",contributors_url:"https://api.github.com/repos/diegofelipemoreno/tetris/contributors",subscribers_url:"https://api.github.com/repos/diegofelipemoreno/tetris/subscribers",subscription_url:"https://api.github.com/repos/diegofelipemoreno/tetris/subscription",commits_url:"https://api.github.com/repos/diegofelipemoreno/tetris/commits{/sha}",git_commits_url:"https://api.github.com/repos/diegofelipemoreno/tetris/git/commits{/sha}",comments_url:"https://api.github.com/repos/diegofelipemoreno/tetris/comments{/number}",issue_comment_url:"https://api.github.com/repos/diegofelipemoreno/tetris/issues/comments{/number}",contents_url:"https://api.github.com/repos/diegofelipemoreno/tetris/contents/{+path}",compare_url:"https://api.github.com/repos/diegofelipemoreno/tetris/compare/{base}...{head}",merges_url:"https://api.github.com/repos/diegofelipemoreno/tetris/merges",archive_url:"https://api.github.com/repos/diegofelipemoreno/tetris/{archive_format}{/ref}",downloads_url:"https://api.github.com/repos/diegofelipemoreno/tetris/downloads",issues_url:"https://api.github.com/repos/diegofelipemoreno/tetris/issues{/number}",pulls_url:"https://api.github.com/repos/diegofelipemoreno/tetris/pulls{/number}",milestones_url:"https://api.github.com/repos/diegofelipemoreno/tetris/milestones{/number}",notifications_url:"https://api.github.com/repos/diegofelipemoreno/tetris/notifications{?since,all,participating}",labels_url:"https://api.github.com/repos/diegofelipemoreno/tetris/labels{/name}",releases_url:"https://api.github.com/repos/diegofelipemoreno/tetris/releases{/id}",deployments_url:"https://api.github.com/repos/diegofelipemoreno/tetris/deployments",created_at:"2018-11-26T00:27:41Z",updated_at:"2018-11-26T00:29:48Z",pushed_at:"2018-11-26T00:29:46Z",git_url:"git://github.com/diegofelipemoreno/tetris.git",ssh_url:"git@github.com:diegofelipemoreno/tetris.git",clone_url:"https://github.com/diegofelipemoreno/tetris.git",svn_url:"https://github.com/diegofelipemoreno/tetris",homepage:null,size:3,stargazers_count:0,watchers_count:0,language:"JavaScript",has_issues:!0,has_projects:!0,has_downloads:!0,has_wiki:!0,has_pages:!1,forks_count:0,mirror_url:null,archived:!1,open_issues_count:0,license:null,forks:0,open_issues:0,watchers:0,default_branch:"master"}],p=(e,t)=>{let r=null;if(!window.requestAnimationFrame)return window.setTimeout(e,t);const o=i=>{r||(r=i),i-r<t?window.requestAnimationFrame(o):e()};window.requestAnimationFrame(o)};const c={LANGUAGES:"languages",FORKS:"forks"},d={PREFIX_API_GITHUB:"https://api.github.com/users/",SUFFIX_API_REPO:"/repos",SUFFIX_API_LANGUAGE:"/languages"},h={SUBMIT:"submit"},g={ORG_FORM:".js-orgForm",FIELD_SELECTOR:".js-formInput",PROJECT_LIST_CONTAINER:".js-listContainer"};new class{constructor(e){this.element=document.querySelector(e),this.orgForm=this.element.querySelector(g.ORG_FORM),this.formInput=this.element.querySelector(g.FIELD_SELECTOR),this.dataOrg=[],this.dataToRender=[],this.languagesOrg=new Set,this.filter=new i("[filter-component]"),this.results=new o("[results-component]")}requestOrg(e){const t=`${d.PREFIX_API_GITHUB}${e}${d.SUFFIX_API_REPO}`;return l("GET",t).then(e=>e).catch(e=>(console.error("Augh, there was an error!",e.statusText),[]))}requestLanguageProject_(e){return l("GET",e).then(e=>e).catch(e=>(console.error("Augh, there was an error!",e.statusText),{}))}listenEvents(){this.orgForm.addEventListener(h.SUBMIT,e=>{e.preventDefault(),this.dataOrg=u,new Promise(e=>{this.filterDataToRender_(),e()}).then(()=>{p(()=>{this.filter.setData(this.dataToRender),this.results.render(this.dataToRender),this.assignFiltersControl([[c.LANGUAGES,this.languagesOrg],[c.FORKS]])},400)})})}filterDataToRender_(){this.dataOrg&&(this.dataToRender=this.dataOrg.reduce((e,t)=>{let r={};return(r={forks_count:t.forks_count,full_name:t.full_name,login_html_url:t.owner.html_url,name:t.name,stargazers_count:t.stargazers_count}).languages_url=Object.keys({JavaScript:16994,HTML:10774}).map(e=>(this.languagesOrg.add(e),e)),e.concat(r)},[]).sort((e,t)=>t.stargazers_count-e.stargazers_count))}assignFiltersControl(e){e.forEach(e=>{this.filter.setControlFilter(e[0],e[1])})}init(){this.listenEvents(),this.filter.init(),this.results.init()}}("[search-component]").init()}});