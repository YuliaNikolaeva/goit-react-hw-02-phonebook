(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{1:function(e,t,a){e.exports={input:"Form_input__2-lxe",head__field:"Form_head__field__1Vlc3",btn:"Form_btn__1ioRo"}},11:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=a(2),l=a(3),i=a(5),u=a(4),m=a(17),p=a(8),b=a.n(p),d=a(9),h=a(1),_=a.n(h),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={name:"",number:""},e.createId=Object(m.a)(),e.saveContact=function(t){var a=t.currentTarget,n=a.name,r=a.value;e.setState(Object(d.a)({},n,r))},e.submitContact=function(t){t.preventDefault(),e.props.propsOnSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.submitContact},r.a.createElement("label",{className:_.a.label,htmlFor:this.createId},r.a.createElement("div",{className:_.a.head__field},"Name"),r.a.createElement("input",{type:"text",name:"name",className:_.a.input,value:this.state.name,onChange:this.saveContact,id:this.createId})),r.a.createElement("label",{className:_.a.label,htmlFor:this.createId},r.a.createElement("div",{className:_.a.head__field},"Number"),r.a.createElement("input",{type:"tel",name:"number",className:_.a.input,value:this.state.number,onChange:this.saveContact,id:this.createId})),r.a.createElement("button",{className:_.a.btn,type:"submit"},"Add contact"))}}]),a}(n.Component),v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contacts:[]},e.addContact=function(t){Object(m.a)(),t.name,t.number;e.setState((function(e){}))},e}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:b.a.page__wrapper},r.a.createElement(f,{propsOnSubmit:this.addContact}),r.a.createElement("ul",null))}}]),a}(n.Component);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))},8:function(e,t,a){e.exports={page__wrapper:"App_page__wrapper__2Kuc_"}}},[[11,1,2]]]);
//# sourceMappingURL=main.ef3ab220.chunk.js.map