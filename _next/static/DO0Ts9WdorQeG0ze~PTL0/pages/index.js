(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{128:function(e,t,n){"use strict";t.__esModule=!0,t.default={noWobble:{stiffness:170,damping:26},gentle:{stiffness:120,damping:14},wobbly:{stiffness:180,damping:12},stiff:{stiffness:210,damping:20}},e.exports=t.default},138:function(e,t,n){"use strict";var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var l,u,s,c=r(t),f=r(n);if(c&&f){if((u=t.length)!=n.length)return!1;for(l=u;0!=l--;)if(!e(t[l],n[l]))return!1;return!0}if(c!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var m=t instanceof RegExp,y=n instanceof RegExp;if(m!=y)return!1;if(m&&y)return t.toString()==n.toString();var h=a(t);if((u=h.length)!==a(n).length)return!1;for(l=u;0!=l--;)if(!i.call(n,h[l]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(l=u;0!=l--;)if(!("_owner"===(s=h[l])&&t.$$typeof||e(t[s],n[s])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(e){if(e.message&&e.message.match(/stack|recursion/i)||-2146828260===e.number)return console.warn("Warning: react-fast-compare does not handle circular references.",e.name,e.message),!1;throw e}}},268:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(290),{page:e.exports.default}})},269:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var o=i(n(89)),l=i(n(60)),u=i(n(90)),s=i(n(91)),c=i(n(92)),f=i(n(93)),p=i(n(0)),d=i(n(2)),m=1e3/60,y=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.wasAnimating=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyle=null,this.clearUnreadPropStyle=function(e){var t=!1,n=a.state,i=n.currentStyle,o=n.currentVelocity,l=n.lastIdealStyle,u=n.lastIdealVelocity;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var c=e[s];"number"==typeof c&&(t||(t=!0,i=r({},i),o=r({},o),l=r({},l),u=r({},u)),i[s]=c,o[s]=0,l[s]=c,u[s]=0)}t&&a.setState({currentStyle:i,currentVelocity:o,lastIdealStyle:l,lastIdealVelocity:u})},this.startAnimationIfNecessary=function(){a.animationID=c.default(function(e){var t=a.props.style;if(f.default(a.state.currentStyle,t,a.state.currentVelocity))return a.wasAnimating&&a.props.onRest&&a.props.onRest(),a.animationID=null,a.wasAnimating=!1,void(a.accumulatedTime=0);a.wasAnimating=!0;var n=e||s.default(),r=n-a.prevTime;if(a.prevTime=n,a.accumulatedTime=a.accumulatedTime+r,a.accumulatedTime>10*m&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();var i=(a.accumulatedTime-Math.floor(a.accumulatedTime/m)*m)/m,o=Math.floor(a.accumulatedTime/m),l={},c={},p={},d={};for(var y in t)if(Object.prototype.hasOwnProperty.call(t,y)){var h=t[y];if("number"==typeof h)p[y]=h,d[y]=0,l[y]=h,c[y]=0;else{for(var v=a.state.lastIdealStyle[y],w=a.state.lastIdealVelocity[y],g=0;g<o;g++){var b=u.default(m/1e3,v,w,h.val,h.stiffness,h.damping,h.precision);v=b[0],w=b[1]}var S=u.default(m/1e3,v,w,h.val,h.stiffness,h.damping,h.precision),I=S[0],O=S[1];p[y]=v+(I-v)*i,d[y]=w+(O-w)*i,l[y]=v,c[y]=w}}a.animationID=null,a.accumulatedTime-=o*m,a.setState({currentStyle:p,currentVelocity:d,lastIdealStyle:l,lastIdealVelocity:c}),a.unreadPropStyle=null,a.startAnimationIfNecessary()})},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyle:d.default.objectOf(d.default.number),style:d.default.objectOf(d.default.oneOfType([d.default.number,d.default.object])).isRequired,children:d.default.func.isRequired,onRest:d.default.func},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyle,n=e.style,r=t||l.default(n),a=o.default(r);return{currentStyle:r,currentVelocity:a,lastIdealStyle:r,lastIdealVelocity:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyle&&this.clearUnreadPropStyle(this.unreadPropStyle),this.unreadPropStyle=e.style,null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyle);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=y,e.exports=t.default},270:function(e,t,n){(function(t){(function(){var n,r,a,i,o,l;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-o)/1e6},r=t.hrtime,i=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})(),l=1e9*t.uptime(),o=i-l):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n(88))},271:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var o=i(n(89)),l=i(n(60)),u=i(n(90)),s=i(n(91)),c=i(n(92)),f=i(n(93)),p=i(n(0)),d=i(n(2)),m=1e3/60;var y=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=a.state,n=t.currentStyles,i=t.currentVelocities,o=t.lastIdealStyles,l=t.lastIdealVelocities,u=!1,s=0;s<e.length;s++){var c=e[s],f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,u=!0,n[s]=r({},n[s]),i[s]=r({},i[s]),o[s]=r({},o[s]),l[s]=r({},l[s])),n[s][p]=d,i[s][p]=0,o[s][p]=d,l[s][p]=0)}}u&&a.setState({currentStyles:n,currentVelocities:i,lastIdealStyles:o,lastIdealVelocities:l})},this.startAnimationIfNecessary=function(){a.animationID=c.default(function(e){var t=a.props.styles(a.state.lastIdealStyles);if(function(e,t,n){for(var r=0;r<e.length;r++)if(!f.default(e[r],t[r],n[r]))return!1;return!0}(a.state.currentStyles,t,a.state.currentVelocities))return a.animationID=null,void(a.accumulatedTime=0);var n=e||s.default(),r=n-a.prevTime;if(a.prevTime=n,a.accumulatedTime=a.accumulatedTime+r,a.accumulatedTime>10*m&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var i=(a.accumulatedTime-Math.floor(a.accumulatedTime/m)*m)/m,o=Math.floor(a.accumulatedTime/m),l=[],c=[],p=[],d=[],y=0;y<t.length;y++){var h=t[y],v={},w={},g={},b={};for(var S in h)if(Object.prototype.hasOwnProperty.call(h,S)){var I=h[S];if("number"==typeof I)v[S]=I,w[S]=0,g[S]=I,b[S]=0;else{for(var O=a.state.lastIdealStyles[y][S],T=a.state.lastIdealVelocities[y][S],k=0;k<o;k++){var E=u.default(m/1e3,O,T,I.val,I.stiffness,I.damping,I.precision);O=E[0],T=E[1]}var P=u.default(m/1e3,O,T,I.val,I.stiffness,I.damping,I.precision),x=P[0],j=P[1];v[S]=O+(x-O)*i,w[S]=T+(j-T)*i,g[S]=O,b[S]=T}}p[y]=v,d[y]=w,l[y]=g,c[y]=b}a.animationID=null,a.accumulatedTime-=o*m,a.setState({currentStyles:p,currentVelocities:d,lastIdealStyles:l,lastIdealVelocities:c}),a.unreadPropStyles=null,a.startAnimationIfNecessary()})},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:d.default.arrayOf(d.default.objectOf(d.default.number)),styles:d.default.func.isRequired,children:d.default.func.isRequired},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=t||n().map(l.default),a=r.map(function(e){return o.default(e)});return{currentStyles:r,currentVelocities:a,lastIdealStyles:r,lastIdealVelocities:a}},t.prototype.componentDidMount=function(){this.prevTime=s.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){null!=this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles),this.unreadPropStyles=e.styles(this.state.lastIdealStyles),null==this.animationID&&(this.prevTime=s.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){null!=this.animationID&&(c.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=this.props.children(this.state.currentStyles);return e&&p.default.Children.only(e)},t}(p.default.Component);t.default=y,e.exports=t.default},272:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function i(e){return e&&e.__esModule?e:{default:e}}var o=i(n(89)),l=i(n(60)),u=i(n(90)),s=i(n(273)),c=i(n(91)),f=i(n(92)),p=i(n(93)),d=i(n(0)),m=i(n(2)),y=1e3/60;function h(e,t,n){var r=t;return null==r?e.map(function(e,t){return{key:e.key,data:e.data,style:n[t]}}):e.map(function(e,t){for(var a=0;a<r.length;a++)if(r[a].key===e.key)return{key:r[a].key,data:r[a].data,style:n[t]};return{key:e.key,data:e.data,style:n[t]}})}function v(e,t,n,r,a,i,l,u,c){for(var f=s.default(r,a,function(e,r){var a=t(r);return null==a?(n({key:r.key,data:r.data}),null):p.default(i[e],a,l[e])?(n({key:r.key,data:r.data}),null):{key:r.key,data:r.data,style:a}}),d=[],m=[],y=[],h=[],v=0;v<f.length;v++){for(var w=f[v],g=null,b=0;b<r.length;b++)if(r[b].key===w.key){g=b;break}if(null==g){var S=e(w);d[v]=S,y[v]=S;var I=o.default(w.style);m[v]=I,h[v]=I}else d[v]=i[g],y[v]=u[g],m[v]=l[g],h[v]=c[g]}return[f,d,m,y,h]}var w=function(e){function t(n){var a=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e.call(this,n),this.unmounting=!1,this.animationID=null,this.prevTime=0,this.accumulatedTime=0,this.unreadPropStyles=null,this.clearUnreadPropStyle=function(e){for(var t=v(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,e,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),n=t[0],i=t[1],o=t[2],l=t[3],u=t[4],s=0;s<e.length;s++){var c=e[s].style,f=!1;for(var p in c)if(Object.prototype.hasOwnProperty.call(c,p)){var d=c[p];"number"==typeof d&&(f||(f=!0,i[s]=r({},i[s]),o[s]=r({},o[s]),l[s]=r({},l[s]),u[s]=r({},u[s]),n[s]={key:n[s].key,data:n[s].data,style:r({},n[s].style)}),i[s][p]=d,o[s][p]=0,l[s][p]=d,u[s][p]=0,n[s].style[p]=d)}}a.setState({currentStyles:i,currentVelocities:o,mergedPropsStyles:n,lastIdealStyles:l,lastIdealVelocities:u})},this.startAnimationIfNecessary=function(){a.unmounting||(a.animationID=f.default(function(e){if(!a.unmounting){var t=a.props.styles,n="function"==typeof t?t(h(a.state.mergedPropsStyles,a.unreadPropStyles,a.state.lastIdealStyles)):t;if(function(e,t,n,r){if(r.length!==t.length)return!1;for(var a=0;a<r.length;a++)if(r[a].key!==t[a].key)return!1;for(a=0;a<r.length;a++)if(!p.default(e[a],t[a].style,n[a]))return!1;return!0}(a.state.currentStyles,n,a.state.currentVelocities,a.state.mergedPropsStyles))return a.animationID=null,void(a.accumulatedTime=0);var r=e||c.default(),i=r-a.prevTime;if(a.prevTime=r,a.accumulatedTime=a.accumulatedTime+i,a.accumulatedTime>10*y&&(a.accumulatedTime=0),0===a.accumulatedTime)return a.animationID=null,void a.startAnimationIfNecessary();for(var o=(a.accumulatedTime-Math.floor(a.accumulatedTime/y)*y)/y,l=Math.floor(a.accumulatedTime/y),s=v(a.props.willEnter,a.props.willLeave,a.props.didLeave,a.state.mergedPropsStyles,n,a.state.currentStyles,a.state.currentVelocities,a.state.lastIdealStyles,a.state.lastIdealVelocities),f=s[0],d=s[1],m=s[2],w=s[3],g=s[4],b=0;b<f.length;b++){var S=f[b].style,I={},O={},T={},k={};for(var E in S)if(Object.prototype.hasOwnProperty.call(S,E)){var P=S[E];if("number"==typeof P)I[E]=P,O[E]=0,T[E]=P,k[E]=0;else{for(var x=w[b][E],j=g[b][E],A=0;A<l;A++){var _=u.default(y/1e3,x,j,P.val,P.stiffness,P.damping,P.precision);x=_[0],j=_[1]}var D=u.default(y/1e3,x,j,P.val,P.stiffness,P.damping,P.precision),R=D[0],q=D[1];I[E]=x+(R-x)*o,O[E]=j+(q-j)*o,T[E]=x,k[E]=j}}w[b]=T,g[b]=k,d[b]=I,m[b]=O}a.animationID=null,a.accumulatedTime-=l*y,a.setState({currentStyles:d,currentVelocities:m,lastIdealStyles:w,lastIdealVelocities:g,mergedPropsStyles:f}),a.unreadPropStyles=null,a.startAnimationIfNecessary()}}))},this.state=this.defaultState()}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,null,[{key:"propTypes",value:{defaultStyles:m.default.arrayOf(m.default.shape({key:m.default.string.isRequired,data:m.default.any,style:m.default.objectOf(m.default.number).isRequired})),styles:m.default.oneOfType([m.default.func,m.default.arrayOf(m.default.shape({key:m.default.string.isRequired,data:m.default.any,style:m.default.objectOf(m.default.oneOfType([m.default.number,m.default.object])).isRequired}))]).isRequired,children:m.default.func.isRequired,willEnter:m.default.func,willLeave:m.default.func,didLeave:m.default.func},enumerable:!0},{key:"defaultProps",value:{willEnter:function(e){return l.default(e.style)},willLeave:function(){return null},didLeave:function(){}},enumerable:!0}]),t.prototype.defaultState=function(){var e=this.props,t=e.defaultStyles,n=e.styles,r=e.willEnter,a=e.willLeave,i=e.didLeave,u="function"==typeof n?n(t):n,s=void 0;s=null==t?u:t.map(function(e){for(var t=0;t<u.length;t++)if(u[t].key===e.key)return u[t];return e});var c=null==t?u.map(function(e){return l.default(e.style)}):t.map(function(e){return l.default(e.style)}),f=null==t?u.map(function(e){return o.default(e.style)}):t.map(function(e){return o.default(e.style)}),p=v(r,a,i,s,u,c,f,c,f),d=p[0];return{currentStyles:p[1],currentVelocities:p[2],lastIdealStyles:p[3],lastIdealVelocities:p[4],mergedPropsStyles:d}},t.prototype.componentDidMount=function(){this.prevTime=c.default(),this.startAnimationIfNecessary()},t.prototype.componentWillReceiveProps=function(e){this.unreadPropStyles&&this.clearUnreadPropStyle(this.unreadPropStyles);var t=e.styles;this.unreadPropStyles="function"==typeof t?t(h(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.lastIdealStyles)):t,null==this.animationID&&(this.prevTime=c.default(),this.startAnimationIfNecessary())},t.prototype.componentWillUnmount=function(){this.unmounting=!0,null!=this.animationID&&(f.default.cancel(this.animationID),this.animationID=null)},t.prototype.render=function(){var e=h(this.state.mergedPropsStyles,this.unreadPropStyles,this.state.currentStyles),t=this.props.children(e);return t&&d.default.Children.only(t)},t}(d.default.Component);t.default=w,e.exports=t.default},273:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var r={},a=0;a<e.length;a++)r[e[a].key]=a;for(var i={},a=0;a<t.length;a++)i[t[a].key]=a;for(var o=[],a=0;a<t.length;a++)o[a]=t[a];for(var a=0;a<e.length;a++)if(!Object.prototype.hasOwnProperty.call(i,e[a].key)){var l=n(a,e[a]);null!=l&&o.push(l)}return o.sort(function(e,n){var a=i[e.key],o=i[n.key],l=r[e.key],u=r[n.key];if(null!=a&&null!=o)return i[e.key]-i[n.key];if(null!=l&&null!=u)return r[e.key]-r[n.key];if(null!=a){for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(a<i[c]&&u>r[c])return-1;if(a>i[c]&&u<r[c])return 1}}return 1}for(var s=0;s<t.length;s++){var c=t[s].key;if(Object.prototype.hasOwnProperty.call(r,c)){if(o<i[c]&&l>r[c])return 1;if(o>i[c]&&l<r[c])return-1}}return-1})},e.exports=t.default},274:function(e,t,n){"use strict";t.__esModule=!0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t){return r({},l,t,{val:e})};var a,i=n(128),o=(a=i)&&a.__esModule?a:{default:a},l=r({},o.default.noWobble,{precision:.01});e.exports=t.default},275:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){0};e.exports=t.default},290:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(36),o=n(96),l=n.n(o),u=n(2),s=n.n(u),c=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),f=function(e,t){if(!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame&&window.mozCancelRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame))return window.setTimeout(e,t);var n=(new Date).getTime(),r={};return r.value=c(function a(){(new Date).getTime()-n>=t?e.call():r.value=c(a)}),r},p=function(e){return window.cancelAnimationFrame?window.cancelAnimationFrame(e.value):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(e.value):window.webkitCancelRequestAnimationFrame?window.webkitCancelRequestAnimationFrame(e.value):window.mozCancelRequestAnimationFrame?window.mozCancelRequestAnimationFrame(e.value):window.oCancelRequestAnimationFrame?window.oCancelRequestAnimationFrame(e.value):window.msCancelRequestAnimationFrame?window.msCancelRequestAnimationFrame(e.value):clearTimeout(e)},d=n(138),m=n.n(d);function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){var t,n;function r(t){var n;h(y(y(n=e.call(this,t)||this)),"willLeave",function(){var e=n.getDimensions().height;return{opacity:Object(i.spring)(n.getOpacity(),n.props.springConfig),translate:Object(i.spring)(-e,n.props.springConfig)}}),h(y(y(n)),"willEnter",function(){var e=n.getDimensions().height;return{opacity:n.getOpacity(),translate:e}}),h(y(y(n)),"tick",function(){n.setState(function(e,t){var n=(e.currentWordIndex+1)%e.elements.length,r={currentWordIndex:n,currentEl:e.elements[n],wordCount:(e.wordCount+1)%1e3,currentInterval:Array.isArray(t.interval)?t.interval[n%t.interval.length]:t.interval};return t.onChange&&t.onChange(r),r},function(){n.state.currentInterval>0&&(n.clearTimeouts(),n.tickLoop=f(n.tick,n.state.currentInterval))})}),h(y(y(n)),"wrapperStyles",l()(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){h(e,t,n[t])})}return e}({},n.props.mask&&{overflow:"hidden"},{display:"inline-block",position:"relative",verticalAlign:"top"}))),h(y(y(n)),"elementStyles",l()({display:"inline-block",left:0,top:0,whiteSpace:n.props.noWrap?"nowrap":"normal"}));var r=a.a.Children.toArray(t.children);return n.state={elements:r,currentEl:r[0],currentWordIndex:0,wordCount:0,currentInterval:Array.isArray(t.interval)?t.interval[0]:t.interval},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){var e=this,t=this.props.delay,n=this.state,r=n.currentInterval,a=n.elements;r>0&&a.length>1&&(this.tickDelay=f(function(){e.tickLoop=f(e.tick,r)},t))},o.componentDidUpdate=function(e,t){var n=this,r=this.props,i=r.interval,o=r.children,l=r.delay,u=this.state.currentWordIndex,s=Array.isArray(i)?i[u%i.length]:i;t.currentInterval!==s&&(this.clearTimeouts(),s>0&&a.a.Children.count(o)>1&&(this.tickDelay=f(function(){n.tickLoop=f(n.tick,s)},l))),m()(e.children,o)||this.setState({elements:a.a.Children.toArray(o)})},o.componentWillUnmount=function(){this.clearTimeouts()},o.clearTimeouts=function(){null!=this.tickLoop&&p(this.tickLoop),null!=this.tickDelay&&p(this.tickDelay)},o.getOpacity=function(){return this.props.fade?0:1},o.getDimensions=function(){return null==this.wordBox?{width:"auto",height:"auto"}:this.wordBox.getBoundingClientRect()},o.getTransitionMotionStyles=function(){var e=this.props.springConfig,t=this.state;return[{key:"step-"+t.wordCount,data:{currentEl:t.currentEl},style:{opacity:Object(i.spring)(1,e),translate:Object(i.spring)(0,e)}}]},o.render=function(){var e=this,t=this.props.className,n=void 0===t?"":t;return a.a.createElement("div",{className:this.wrapperStyles+" "+n},a.a.createElement(i.TransitionMotion,{willLeave:this.willLeave,willEnter:this.willEnter,styles:this.getTransitionMotionStyles()},function(t){var n=e.getDimensions(),r=n.height,i=n.width;return a.a.createElement("div",{style:{transition:"width "+e.props.adjustingSpeed+"ms linear",height:r,width:i}},t.map(function(t){return a.a.createElement("div",{className:e.elementStyles,ref:function(t){e.wordBox=t},key:t.key,style:{opacity:t.style.opacity,transform:"translateY("+t.style.translate+"px)",position:null==e.wordBox?"relative":"absolute"}},t.data.currentEl)}))}))},r}(a.a.PureComponent);v.propTypes={interval:s.a.oneOfType([s.a.number,s.a.array]).isRequired,delay:s.a.number.isRequired,adjustingSpeed:s.a.number.isRequired,springConfig:s.a.object.isRequired,children:s.a.node.isRequired,fade:s.a.bool.isRequired,mask:s.a.bool.isRequired,noWrap:s.a.bool.isRequired,className:s.a.string},v.defaultProps={interval:3e3,delay:0,adjustingSpeed:150,springConfig:{stiffness:340,damping:30},fade:!0,mask:!1,noWrap:!0};var w=v,g=n(23),b=n(139),S=n.n(b),I=function(e){var t={fontSize:e.fontSize,color:e.color};return a.a.createElement("span",{className:S.a.welcome,style:t},e.text)},O=n(140),T=n.n(O),k=function(){return a.a.createElement("a",{href:"/bio",className:T.a.contact_button},"ABOUT ME")},E=n(47),P=n.n(E),x=function(){return a.a.createElement(g.a,{position:"home"},a.a.createElement("div",{className:P.a.landing_wrapper},a.a.createElement("div",{className:P.a.word_wrapper},a.a.createElement(I,{text:"H"}),a.a.createElement(I,{text:"e"}),a.a.createElement(I,{text:"l"}),a.a.createElement(I,{text:"l"}),a.a.createElement(I,{text:"o"}),a.a.createElement(I,{text:"!"})),a.a.createElement("div",{className:P.a.word_wrapper},a.a.createElement(I,{text:"I"}),a.a.createElement(I,{text:"'"}),a.a.createElement(I,{text:"m"}),a.a.createElement(I,{text:" "}),a.a.createElement(I,{text:"E",color:"#EE86B7"}),a.a.createElement(I,{text:"k",color:"#EE86B7"}),a.a.createElement(I,{text:"o",color:"#EE86B7"}),a.a.createElement(I,{text:","})),a.a.createElement("div",{className:P.a.word_wrapper},a.a.createElement(w,null,a.a.createElement(I,{text:"a software engineer"}),a.a.createElement(I,{text:"a student"}),a.a.createElement(I,{text:"a creator"}),a.a.createElement(I,{text:"a breaker of things"}))),a.a.createElement(k,null)))};n.d(t,"default",function(){return x})},36:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e.default:e}t.__esModule=!0;var a=n(269);t.Motion=r(a);var i=n(271);t.StaggeredMotion=r(i);var o=n(272);t.TransitionMotion=r(o);var l=n(274);t.spring=r(l);var u=n(128);t.presets=r(u);var s=n(60);t.stripStyle=r(s);var c=n(275);t.reorderKeys=r(c)},60:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]="number"==typeof e[n]?e[n]:e[n].val);return t},e.exports=t.default},89:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=0);return t},e.exports=t.default},90:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n,a,i,o,l){var u=n+(-i*(t-a)+-o*n)*e,s=t+u*e;if(Math.abs(u)<l&&Math.abs(s-a)<l)return r[0]=a,r[1]=0,r;return r[0]=s,r[1]=u,r};var r=[0,0];e.exports=t.default},91:function(e,t,n){(function(t){(function(){var n,r,a;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:null!=t&&t.hrtime?(e.exports=function(){return(n()-a)/1e6},r=t.hrtime,a=(n=function(){var e;return 1e9*(e=r())[0]+e[1]})()):Date.now?(e.exports=function(){return Date.now()-a},a=Date.now()):(e.exports=function(){return(new Date).getTime()-a},a=(new Date).getTime())}).call(this)}).call(this,n(88))},92:function(e,t,n){(function(t){for(var r=n(270),a="undefined"==typeof window?t:window,i=["moz","webkit"],o="AnimationFrame",l=a["request"+o],u=a["cancel"+o]||a["cancelRequest"+o],s=0;!l&&s<i.length;s++)l=a[i[s]+"Request"+o],u=a[i[s]+"Cancel"+o]||a[i[s]+"CancelRequest"+o];if(!l||!u){var c=0,f=0,p=[];l=function(e){if(0===p.length){var t=r(),n=Math.max(0,1e3/60-(t-c));c=n+t,setTimeout(function(){var e=p.slice(0);p.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(c)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return p.push({handle:++f,callback:e,cancelled:!1}),f},u=function(e){for(var t=0;t<p.length;t++)p[t].handle===e&&(p[t].cancelled=!0)}}e.exports=function(e){return l.call(a,e)},e.exports.cancel=function(){u.apply(a,arguments)},e.exports.polyfill=function(e){e||(e=a),e.requestAnimationFrame=l,e.cancelAnimationFrame=u}}).call(this,n(44))},93:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(0!==n[r])return!1;var a="number"==typeof t[r]?t[r]:t[r].val;if(e[r]!==a)return!1}return!0},e.exports=t.default},96:function(e,t,n){"use strict";var r={},a="x",i=[],o=function(e){return i.push(e)};if(e.exports=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.map(function(e){return function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",l=arguments[2];return Object.keys(t).map(function(u){var s=t[u];if(null===s)return"";if("object"==typeof s){var c=/^@/.test(u)?u:null;return e(s,c?n:n+u,c||l)}var f=u+s+n+l;if(r[f])return r[f];var p=a+i.length.toString(36);return o(function(e,t){return t?t+"{"+e+"}":e}(function(e,t,n){return"."+e+"{"+t.replace(/[A-Z]|^ms/g,"-$&").toLowerCase()+":"+n+"}"}(p+n.replace(/&/g,""),u,s),l)),r[f]=p,p}).join(" ")}(e)}).join(" ").trim()},e.exports.css=function(){return i.sort().join("")},e.exports.reset=function(){for(r={};i.length;)i.pop()},e.exports.prefix=function(e){return a=e},"undefined"!=typeof document){var l=document.head.appendChild(document.createElement("style")).sheet;o=function(e){i.push(e),l.insertRule(e,l.cssRules.length)}}}},[[268,1,0,2]]]);