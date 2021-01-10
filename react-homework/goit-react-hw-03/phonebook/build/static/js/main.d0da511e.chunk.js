(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{123:function(e){e.exports=JSON.parse('[{"id":1,"name":"Rosie Simpson","number":"459-12-56"},{"id":2,"name":"Hermione Kline","number":"443-89-12"},{"id":3,"name":"Eden Clements","number":"645-17-79"},{"id":4,"name":"Annie Copeland","number":"227-91-26"}]')},129:function(e,t,n){},13:function(e,t,n){e.exports={form:"AddContact_form__323FB",title:"AddContact_title__1Wit5",formInput:"AddContact_formInput__2ABvA"}},32:function(e,t,n){e.exports={component:"Contacts_component__1zmMg",list:"Contacts_list__1M_Fg"}},377:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(6),c=n(121),o=n.n(c),i=(n(129),n(57)),s=n(33),u=n(28),l=n(29),m=n(31),b=n(30),d=n(122),h=n.n(d),f={marginTop:15,marginBottom:5},j=function(e){var t=e.title,n=e.children;return Object(a.jsxs)("section",{children:[Object(a.jsx)("h2",{style:f,children:t}),n]})},p=n(32),v=n.n(p),O=function(e){var t=e.contacts,n=e.onRemoveContact;return Object(a.jsx)("ul",{className:v.a.list,children:t.map((function(e){var t=e.id,r=e.name,c=e.number;return Object(a.jsxs)("li",{className:v.a.component,children:[r,": ",c,Object(a.jsx)("input",{type:"button",value:"Delete",onClick:function(){return n(t)},className:v.a.btn})]},t)}))})},g=n(27),x=n(14),C=n(13),y=n.n(C),S={color:"blue",display:"block",fontSize:14,fontWeight:300,marginLeft:10},_=function(e){var t=e.errorType;return Object(a.jsx)("span",{style:S,children:t})},N={name:[x.validations.required(),x.validations.regex(["^[a-zA-Z\u0430-\u044f\u0410-\u042f]+"])],number:[x.validations.required(),x.validations.regex([/^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/])]},k={"name.required":"Please choose a unique name for your contact","number.required":"Enter phone number","name.regex":"Contact's name contains invalid characters","number.regex":"Phone number validation failed"},A=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:"",errors:null},e.handleSubmit=function(t){t.preventDefault();var n=e.state,a=n.name,r=n.number;Object(x.validateAll)({name:a,number:r},N,k).then((function(){e.props.addContact({name:a,number:r}),e.reset()})).catch((function(t){var n={};t.forEach((function(e){n[e.field]=e.message})),e.setState({errors:n})}))},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(g.a)({},a,r))},e.reset=function(){e.setState({name:"",number:"",errors:null})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,r=e.errors;return Object(a.jsxs)("form",{onSubmit:this.handleSubmit,className:y.a.form,children:[Object(a.jsxs)("label",{className:y.a.title,children:["Name",Object(a.jsx)("input",{className:y.a.formInput,value:t,type:"text",placeholder:"Enter name",onChange:this.handleChange,name:"name"}),r&&Object(a.jsx)(_,{errorType:r.name})]}),Object(a.jsxs)("label",{className:y.a.title,children:["Number",Object(a.jsx)("input",{className:y.a.formInput,value:n,type:"text",placeholder:"Enter number",onChange:this.handleChange,name:"number"}),r&&Object(a.jsx)(_,{errorType:r.number})]}),Object(a.jsx)("button",{type:"submit",className:y.a.submitBtn,children:"Add contact"})]})}}]),n}(r.Component),w={width:200},F=function(e){var t=e.value,n=e.onChangeFilter;return Object(a.jsx)("input",{type:"text",value:t,onChange:n,placeholder:"Find contacts by name",style:w})},I=n(123),E=function(e){Object(m.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:Object(s.a)(I),filter:""},e.changeFilter=function(t){e.setState({filter:t.target.value})},e.addContact=function(t){var n=t.name;if(e.state.contacts.find((function(e){return e.name===n})))alert("".concat(n," is already in contacts"));else{var a=Object(i.a)(Object(i.a)({},t),{},{id:h.a.generate(),newContact:!0});e.setState((function(e){return{contacts:[a].concat(Object(s.a)(e.contacts))}}))}},e.removeContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(e,t){localStorage.setItem("contact",JSON.stringify(this.state.contacts))}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("contact");if(e){var t=JSON.parse(e);this.setState((function(){return{contacts:Object(s.a)(t)}}))}}},{key:"render",value:function(){var e=this.state,t=e.contacts,n=e.filter,r=function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j,{title:"Phonebook",children:Object(a.jsx)(A,{addContact:this.addContact})}),Object(a.jsxs)(j,{title:"Contacts",children:[(t.length>1||n)&&Object(a.jsx)(F,{value:n,onChangeFilter:this.changeFilter}),Object(a.jsx)(O,{contacts:r,onRemoveContact:this.removeContact})]})]})}}]),n}(r.Component);o.a.render(Object(a.jsx)(E,{}),document.getElementById("root"))}},[[377,1,2]]]);
//# sourceMappingURL=main.d0da511e.chunk.js.map