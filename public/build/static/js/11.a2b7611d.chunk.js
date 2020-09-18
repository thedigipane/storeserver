(this["webpackJsonpdatta-able-rv18.0.4"]=this["webpackJsonpdatta-able-rv18.0.4"]||[]).push([[11],{340:function(e,t,a){"use strict";var n=a(0),r=a.n(n).a.createContext(null);r.displayName="CardContext",t.a=r},343:function(e,t,a){"use strict";var n=a(353);function r(e,t){return function(e){var t=Object(n.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var l=/([A-Z])/g;var o=/^ms-/;function c(e){return function(e){return e.replace(l,"-$1").toLowerCase()}(e).replace(o,"-ms-")}var i=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var a="",n="";if("string"===typeof t)return e.style.getPropertyValue(c(t))||r(e).getPropertyValue(c(t));Object.keys(t).forEach((function(r){var l=t[r];l||0===l?!function(e){return!(!e||!i.test(e))}(r)?a+=c(r)+": "+l+";":n+=r+"("+l+") ":e.style.removeProperty(c(r))})),n&&(a+="transform: "+n+";"),e.style.cssText+=";"+a}},345:function(e,t,a){"use strict";var n=a(8),r=a(10),l=a(88),o=a.n(l),c=a(0),i=a.n(c),s=a(338),d=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.as,u=void 0===c?"div":c,m=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(s.a)(a,"col"),f=[],h=[];return d.forEach((function(e){var t,a,n,r=m[e];if(delete m[e],"object"===typeof r&&null!=r){var l=r.span;t=void 0===l||l,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";t&&f.push(!0===t?""+p+o:""+p+o+"-"+t),null!=n&&h.push("order"+o+"-"+n),null!=a&&h.push("offset"+o+"-"+a)})),f.length||f.push(p),i.a.createElement(u,Object(n.a)({},m,{ref:t,className:o.a.apply(void 0,[l].concat(f,h))}))}));u.displayName="Col",t.a=u},346:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(343),r=a(355);function l(e,t,a){void 0===a&&(a=5);var n=!1,l=setTimeout((function(){n||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+a),o=Object(r.a)(e,"transitionend",(function(){n=!0}),{once:!0});return function(){clearTimeout(l),o()}}function o(e,t,a,o){null==a&&(a=function(e){var t=Object(n.a)(e,"transitionDuration")||"",a=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*a}(e)||0);var c=l(e,a,o),i=Object(r.a)(e,"transitionend",t);return function(){c(),i()}}},347:function(e,t,a){"use strict";function n(e){e.offsetHeight}a.d(t,"a",(function(){return n}))},351:function(e,t,a){"use strict";var n=a(8),r=a(10),l=a(88),o=a.n(l),c=a(0),i=a.n(c),s=a(338),d=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.noGutters,u=e.as,m=void 0===u?"div":u,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(s.a)(a,"row"),h=f+"-cols",b=[];return d.forEach((function(e){var t,a=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&b.push(""+h+n+"-"+t)})),i.a.createElement(m,Object(n.a)({ref:t},p,{className:o.a.apply(void 0,[l,f,c&&"no-gutters"].concat(b))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},352:function(e,t,a){"use strict";var n=a(8),r=a(10),l=a(88),o=a.n(l),c=a(0),i=a.n(c),s=a(338),d=a(344),u=function(e){return i.a.forwardRef((function(t,a){return i.a.createElement("div",Object(n.a)({},t,{ref:a,className:o()(t.className,e)}))}))},m=a(340),p=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,c=e.variant,d=e.as,u=void 0===d?"img":d,m=Object(r.a)(e,["bsPrefix","className","variant","as"]),p=Object(s.a)(a,"card-img");return i.a.createElement(u,Object(n.a)({ref:t,className:o()(c?p+"-"+c:p,l)},m))}));p.displayName="CardImg",p.defaultProps={variant:null};var f=p,h=u("h5"),b=u("h6"),E=Object(d.a)("card-body"),v=Object(d.a)("card-title",{Component:h}),j=Object(d.a)("card-subtitle",{Component:b}),O=Object(d.a)("card-link",{Component:"a"}),g=Object(d.a)("card-text",{Component:"p"}),N=Object(d.a)("card-header"),y=Object(d.a)("card-footer"),w=Object(d.a)("card-img-overlay"),x=i.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.className,d=e.bg,u=e.text,p=e.border,f=e.body,h=e.children,b=e.as,v=void 0===b?"div":b,j=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),O=Object(s.a)(a,"card"),g=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:O+"-header"}}),[O]);return i.a.createElement(m.a.Provider,{value:g},i.a.createElement(v,Object(n.a)({ref:t},j,{className:o()(l,O,d&&"bg-"+d,u&&"text-"+u,p&&"border-"+p)}),f?i.a.createElement(E,null,h):h))}));x.displayName="Card",x.defaultProps={body:!1},x.Img=f,x.Title=v,x.Subtitle=j,x.Body=E,x.Link=O,x.Text=g,x.Header=N,x.Footer=y,x.ImgOverlay=w;t.a=x},354:function(e,t,a){"use strict";var n=a(59),r=a(43),l=a(44),o=a(46),c=a(45),i=a(0),s=a.n(i),d=a(384),u=a(352),m=a(364),p=a(349),f=a.n(p),h=a(89),b=a(341),E=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={isOption:e.props.isOption,fullCard:!1,collapseCard:!1,loadCard:!1,cardRemove:!1},e.cardReloadHandler=function(){e.setState({loadCard:!0}),setInterval((function(){e.setState({loadCard:!1})}),3e3)},e.cardRemoveHandler=function(){e.setState({cardRemove:!0})},e}return Object(l.a)(a,[{key:"render",value:function(){var e,t,a,r,l,o=this,c=[];return this.state.isOption&&(a=s.a.createElement("div",{className:"card-header-right"},s.a.createElement(d.a,{alignRight:!0,className:"btn-group card-option"},s.a.createElement(d.a.Toggle,{id:"dropdown-basic",className:"btn-icon"},s.a.createElement("i",{className:"feather icon-more-horizontal"})),s.a.createElement(d.a.Menu,{as:"ul",className:"list-unstyled card-option"},s.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){o.setState((function(e){return{fullCard:!e.fullCard}}))}},s.a.createElement("i",{className:this.state.fullCard?"feather icon-minimize":"feather icon-maximize"}),s.a.createElement("a",{href:b.a.BLANK_LINK}," ",this.state.fullCard?"Restore":"Maximize"," ")),s.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:function(){o.setState((function(e){return{collapseCard:!e.collapseCard}}))}},s.a.createElement("i",{className:this.state.collapseCard?"feather icon-plus":"feather icon-minus"}),s.a.createElement("a",{href:b.a.BLANK_LINK}," ",this.state.collapseCard?"Expand":"Collapse"," ")),s.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardReloadHandler},s.a.createElement("i",{className:"feather icon-refresh-cw"}),s.a.createElement("a",{href:b.a.BLANK_LINK}," Reload ")),s.a.createElement(d.a.Item,{as:"li",className:"dropdown-item",onClick:this.cardRemoveHandler},s.a.createElement("i",{className:"feather icon-trash"}),s.a.createElement("a",{href:b.a.BLANK_LINK}," Remove ")))))),r=s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,{as:"h5"},this.props.title),a),this.state.fullCard&&(c=[].concat(Object(n.a)(c),["full-card"]),e={position:"fixed",top:0,left:0,right:0,width:this.props.windowWidth,height:this.props.windowHeight}),this.state.loadCard&&(c=[].concat(Object(n.a)(c),["card-load"]),t=s.a.createElement("div",{className:"card-loader"},s.a.createElement("i",{className:"pct-loader1 anim-rotate"}))),this.state.cardRemove&&(c=[].concat(Object(n.a)(c),["d-none"])),this.props.cardClass&&(c=[].concat(Object(n.a)(c),[this.props.cardClass])),l=s.a.createElement(u.a,{className:c.join(" "),style:e},r,s.a.createElement(m.a,{in:!this.state.collapseCard},s.a.createElement("div",null,s.a.createElement(u.a.Body,null,this.props.children))),t),s.a.createElement(h.a,null,l)}}]),a}(i.Component);t.a=f()(E)},364:function(e,t,a){"use strict";var n,r=a(8),l=a(10),o=a(88),c=a.n(o),i=a(343),s=a(346),d=a(0),u=a.n(d),m=a(9),p=a(356),f=a(347),h={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function b(e,t){var a=t["offset"+e[0].toUpperCase()+e.slice(1)],n=h[e];return a+parseInt(Object(i.a)(t,n[0]),10)+parseInt(Object(i.a)(t,n[1]),10)}var E=((n={})[m.c]="collapse",n[m.d]="collapsing",n[m.b]="collapsing",n[m.a]="collapse show",n),v={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:b},j=u.a.forwardRef((function(e,t){var a=e.onEnter,n=e.onEntering,o=e.onEntered,i=e.onExit,h=e.onExiting,v=e.className,j=e.children,O=e.dimension,g=void 0===O?"height":O,N=e.getDimensionValue,y=void 0===N?b:N,w=Object(l.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),x="function"===typeof g?g():g,C=Object(d.useMemo)((function(){return Object(p.a)((function(e){e.style[x]="0"}),a)}),[x,a]),R=Object(d.useMemo)((function(){return Object(p.a)((function(e){var t="scroll"+x[0].toUpperCase()+x.slice(1);e.style[x]=e[t]+"px"}),n)}),[x,n]),k=Object(d.useMemo)((function(){return Object(p.a)((function(e){e.style[x]=null}),o)}),[x,o]),I=Object(d.useMemo)((function(){return Object(p.a)((function(e){e.style[x]=y(x,e)+"px",Object(f.a)(e)}),i)}),[i,y,x]),P=Object(d.useMemo)((function(){return Object(p.a)((function(e){e.style[x]=null}),h)}),[x,h]);return u.a.createElement(m.e,Object(r.a)({ref:t,addEndListener:s.a},w,{"aria-expanded":w.role?w.in:null,onEnter:C,onEntering:R,onEntered:k,onExit:I,onExiting:P}),(function(e,t){return u.a.cloneElement(j,Object(r.a)({},t,{className:c()(v,j.props.className,E[e],"width"===x&&"width")}))}))}));j.defaultProps=v,t.a=j},455:function(e,t,a){"use strict";a.r(t);var n=a(43),r=a(44),l=a(46),o=a(45),c=a(0),i=a.n(c),s=a(351),d=a(345),u=a(89),m=a(354),p=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return i.a.createElement(u.a,null,i.a.createElement(s.a,null,i.a.createElement(d.a,null,i.a.createElement(m.a,{title:"Quick Installation",isOption:!0},i.a.createElement("p",null," - First of all it's required to install latest Node and npm - ",i.a.createElement("a",{href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},"nodejs")),i.a.createElement("p",null," - Unzip ",i.a.createElement("code",null,"datta-able-react-lite.zip")," file, Inside that directory you will find the ",i.a.createElement("code",null,"datta-able-react-lite/")," folder"),i.a.createElement("p",null," - Open your terminal/cmd then navigate to project directory ",i.a.createElement("code",null,"datta-able-react-lite/")),i.a.createElement("p",null," - Install npm packages using command ",i.a.createElement("code",null,"'npm install'"),",  this will install required node.js third-party plugins into the ",i.a.createElement("code",null,"node_modules/")," folder."),i.a.createElement("p",null," - Compile/Run project using  command  ",i.a.createElement("code",null,"'npm start'"),", this will compile app in development mode."),i.a.createElement("p",null," - Open ",i.a.createElement("a",{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},"http://localhost:3000")," to view it on browser."),i.a.createElement("p",null," - Now, You can use Datta Able React Admin Template for your application development. "),i.a.createElement("div",{className:"theme-bg2 text-white p-3"},i.a.createElement("p",null,"The project was built assuming it is hosted at the server root folder of domain/platform i.e http://demo.com."),i.a.createElement("p",null,"You can control this with the homepage field in your package.json."),i.a.createElement("p",null,'To deploy build for sub-folder i.e http://demo.com/project-folder-name/ than "homepage" : "http://demo.com/project-folder-name/".'),i.a.createElement("p",null,"You  also need to set basename in ../src/config.js file."),i.a.createElement("p",null,"like, basename: '/project-folder-name'")),i.a.createElement("p",null," - Build project using command ",i.a.createElement("code",null,"'npm run build'"),", It will create ",i.a.createElement("code",null,"build/")," folder inside datta-able-react-lite/ folder. "),i.a.createElement("p",null," - Your app is ready to be deployed. ")))))}}]),a}(c.Component);t.default=p}}]);
//# sourceMappingURL=11.a2b7611d.chunk.js.map