(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[7],{101:function(e,t,n){e.exports={movieCardMenu:"MovieCardMenu_movieCardMenu__3MdUF"}},102:function(e,t,n){e.exports={movieCard:"MovieCard_movieCard__PK7tO",overview:"MovieCard_overview__1--hp"}},121:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var i=n(1),a=n(56),c=n(57),r=n(59),o=n(58),s=n(0),u=n(3),d=n(14),h=n.n(d),v=n(9),l=n(101),j=n.n(l),p={color:"rgb(240, 179, 87)"},b=function(e){var t=e.id;return Object(i.jsxs)("div",{className:j.a.movieCardMenu,children:[Object(i.jsx)("h2",{children:"Additional information:"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:Object(i.jsx)(v.c,{to:"/movies/".concat(t,"/cast"),activeStyle:p,children:"Cast"})}),Object(i.jsx)("li",{children:Object(i.jsx)(v.c,{to:"/movies/".concat(t,"/reviews"),activeStyle:p,children:"Reviews"})})]})]})},m=n(102),f=n.n(m),O=n.p+"static/media/blankPoster.b2185d56.jpg";function g(e){var t=e.movie,n=e.onGoBack,a=t.id,c=t.title,r=t.poster_path,o=t.overview,s=t.genres,u=t.vote_average,d=r?"https://image.tmdb.org/t/p/w500"+r:O;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:f.a.movieCard,children:[Object(i.jsx)("img",{src:d,alt:c}),Object(i.jsxs)("div",{className:f.a.overview,children:[Object(i.jsx)("h2",{children:c}),Object(i.jsxs)("p",{children:["User score:",Object(i.jsxs)("span",{children:[10*u,"%"]})]}),Object(i.jsx)("h3",{children:"Overview: "}),Object(i.jsx)("p",{children:o}),Object(i.jsx)("h3",{children:"Genres: "}),Object(i.jsx)("p",{children:s.map((function(e){var t=e.id,n=e.name;return Object(i.jsxs)("span",{children:[n," "]},t)}))}),Object(i.jsx)("button",{type:"button",onClick:n,children:"\u2190 Go back"})]})]}),Object(i.jsx)(b,{id:a})]})}var x=n(55),y=Object(s.lazy)((function(){return n.e(8).then(n.bind(null,124))})),k=Object(s.lazy)((function(){return n.e(9).then(n.bind(null,122))})),w=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var i=arguments.length,c=new Array(i),r=0;r<i;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={movie:null,isLoading:!1},e.handleGoBackBtn=function(){var t=e.props,n=t.history,i=t.location;if(i.state)return n.push(i.state.from);n.push("/movies")},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0});var t=this.props.match.params.movieId;t&&x.a(t).then((function(t){return e.setState({isLoading:!1,movie:t})}))}},{key:"render",value:function(){var e=this.state.movie;return this.state.isLoading?Object(i.jsx)(h.a,{type:"Hearts",color:"rgba(218,209,77,.836)",height:80,width:100,timeout:1e4,className:"Loader"}):Object(i.jsxs)("div",{children:[e&&Object(i.jsx)(g,{movie:e,onGoBack:this.handleGoBackBtn}),Object(i.jsxs)(s.Suspense,{fallback:Object(i.jsx)(h.a,{type:"Hearts",color:"rgba(218,209,77,.836)",height:80,width:100,timeout:1e4,className:"Loader"}),children:[Object(i.jsx)(u.a,{path:"".concat(this.props.match.path,"/reviews"),component:y}),Object(i.jsx)(u.a,{path:"".concat(this.props.match.path,"/cast"),component:k})]})]})}}]),n}(s.Component)},55:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d}));var i=n(64),a=n.n(i),c="98ece17c6d461e449fe9f712b8a7c646";function r(){return a.a.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c)).then((function(e){return e.data.results}))}function o(e){return a.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c)).then((function(e){return e.data}))}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return a.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(e,"&page=").concat(t,"&include_adult=false&language=en-US")).then((function(e){return e.data}))}function u(e){return a.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c)).then((function(e){return e.data}))}function d(e){return a.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c)).then((function(e){return e.data.results}))}}}]);
//# sourceMappingURL=7.026725bd.chunk.js.map