(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n(4),o=n.n(a),s=(n(15),n(5)),i=n(6),d=n(7),j=n(9),b=n(8),u=function(e){var t=e.message;return Object(c.jsx)("p",{children:t})},l=function(e){var t=e.good,n=e.neutral,r=e.bad,a=e.total,o=e.positivePercentage;return t||n||r?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{children:["Good: ",Object(c.jsx)("span",{children:t})]}),Object(c.jsxs)("p",{children:["Neutral: ",Object(c.jsx)("span",{children:n})]}),Object(c.jsxs)("p",{children:["Bad: ",Object(c.jsx)("span",{children:r})]}),Object(c.jsxs)("p",{children:["Total: ",Object(c.jsx)("span",{children:a})]}),Object(c.jsxs)("p",{children:["Positive feedback:",Object(c.jsxs)("span",{children:[" ",o]})]})]}):Object(c.jsx)(u,{message:"No feedback given"})},h=function(e){var t=e.title,n=void 0===t?"":t,r=e.children;return Object(c.jsxs)("section",{children:[Object(c.jsx)("h2",{children:n}),r]})},p=n(3),O=n.n(p),v=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e){return Object(c.jsx)("button",{type:"button",name:e,onClick:n,children:e},e)}))};v.protoTypes={options:O.a.string.isRequired,onLeaveFeedback:O.a.func.isRequired};var x=v,f=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={good:e.props.good,neutral:e.props.neutral,bad:e.props.bad},e.handelbarInc=function(t){var n=t.target.name.toLowerCase();e.setState((function(e){return Object(s.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(e,t,n){return e+t+n},e.countPositiveFeedbackPercentage=function(e,t,n){var c=e/(e+t+n)*100;return Math.round(c)+"%"},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,r=e.bad;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{title:"Please leave feedback",children:Object(c.jsx)(x,{options:["Good","Neutral","Bad"],onLeaveFeedback:this.handelbarInc})}),Object(c.jsx)(h,{title:"Statistics",children:Object(c.jsx)("div",{children:Object(c.jsx)(l,{good:t,neutral:n,bad:r,total:this.countTotalFeedback(t,n,r),positivePercentage:this.countPositiveFeedbackPercentage(t,n,r)})})})]})}}]),n}(r.Component);f.defaultProps={good:0,neutral:0,bad:0};var g=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(f,{})})};o.a.render(Object(c.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.62d9fd64.chunk.js.map