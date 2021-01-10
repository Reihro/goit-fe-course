(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},53:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a(18),i=a.n(c),o=(a(26),a(9)),s=a(4),l=a(5),u=a(7),h=a(6),d=(a(27),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query,1),e.setState({query:""})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(n.jsx)("header",{className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",onSubmit:this.handleSubmit,children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"request",value:e,onChange:this.handleChange})]})})}}]),a}(r.Component)),f=(a(28),a(29),a(30),function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleKeyPress=function(t){"Escape"===t.code&&e.props.clickState()},e.handleOverlayClick=function(t){e.overlayRef&&e.overlayRef!==t.target||e.props.clickState()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(n.jsx)("div",{className:"Overlay",ref:this.overlayRef,onClick:this.handleOverlayClick,children:Object(n.jsx)("div",{className:"Modal",id:"Modal",onClick:this.handleKeyPress,children:Object(n.jsx)("img",{src:t,alt:a})})})}}]),a}(r.Component)),m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={click:!1},e.handelModalOn=function(){e.setState({click:!0})},e.handelOffModal=function(){e.setState({click:!1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.webformatURL,a=e.tags,r=e.largeImageURL,c=this.state.click;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{className:"ImageGalleryItem",children:Object(n.jsx)("img",{src:t,alt:a,className:"ImageGalleryItem-image",onClick:this.handelModalOn})}),c&&Object(n.jsx)(f,{src:r,alt:a,clickState:this.handelOffModal})]})}}]),a}(r.Component),b=function(e){var t=e.gallery;return Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return Object(n.jsx)(m,{webformatURL:e.webformatURL,tags:e.tags,largeImageURL:e.largeImageURL},e.id)}))})},j=(a(31),function(e){var t=e.setPagination;return Object(n.jsx)("button",{className:"ButtonLoadMore",onClick:t,children:"Load more"})}),g=a(19),p=a.n(g),y=(a(53),a(20)),O=a.n(y),v=function(e,t){return O.a.get("https://pixabay.com/api/?key=15294616-b60013c29755464c1efffd134"+"&q=".concat(e,"&image_type=photo&per_page=12&page=").concat(t))},k=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={gallery:[],request:"",pagination:1,isLoading:!1,error:null},e.fetchArticles=function(t,a){e.setState({isLoading:!0}),v(t,a).then((function(n){a>1?e.setState({gallery:[].concat(Object(o.a)(e.state.gallery),Object(o.a)(n.data.hits)),request:t}):e.setState({gallery:n.data.hits,request:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.setPagination=function(){var t=e.state.pagination+1;e.fetchArticles(e.state.request,t),e.setState({pagination:t})},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.isLoading;return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(d,{onSubmit:this.fetchArticles}),t.length>0&&Object(n.jsx)(b,{gallery:t}),a&&Object(n.jsx)(p.a,{type:"Hearts",color:"rgba(218,209,77,.836)",height:80,width:100,timeout:1e4,className:"Loader"}),t.length>0&&Object(n.jsx)(j,{setPagination:this.setPagination})]})}}]),a}(r.Component);i.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.65a1e3a6.chunk.js.map