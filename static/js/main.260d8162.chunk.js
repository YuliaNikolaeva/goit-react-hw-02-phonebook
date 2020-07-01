(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,t,a){e.exports={input:"Form_input__Wc4VH",head__field:"Form_head__field__1lNLG",btn:"Form_btn__1J5GU"}},function(e,t,a){e.exports={contactBox:"ContactsList_contactBox__JfITf",name:"ContactsList_name__3ZLzV",number:"ContactsList_number__39crZ",btn:"ContactsList_btn__8Jk2y"}},,,,,function(e,t,a){e.exports={input:"Filter_input__hS6aG",head__field:"Filter_head__field__32IRI"}},function(e,t,a){e.exports={title:"Container_title__13oDy"}},,,function(e,t,a){e.exports={page__wrapper:"App_page__wrapper__2Kuc_"}},,function(e,t,a){e.exports={message:"Message_message__2H1az"}},,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(10),i=a.n(r),s=a(14),l=a(3),o=a(4),m=a(6),u=a(5),d=a(22),b=a(11),p=a.n(b),_=a(12),f=a(1),h=a.n(f),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:""},e.createIdName=Object(d.a)(),e.createIdNumber=Object(d.a)(),e.saveContact=function(t){var a=t.currentTarget,n=a.name,c=a.value;e.setState(Object(_.a)({},n,c))},e.submitContact=function(t){t.preventDefault(),e.props.propsOnSubmit(e.state),e.reset()},e.reset=function(){e.setState({name:"",number:""})},e}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.submitContact},c.a.createElement("label",{className:h.a.label,htmlFor:this.createIdName},c.a.createElement("div",{className:h.a.head__field},"Name"),c.a.createElement("input",{type:"text",name:"name",className:h.a.input,value:this.state.name,onChange:this.saveContact,id:this.createIdName})),c.a.createElement("label",{className:h.a.label,htmlFor:this.createIdNumber},c.a.createElement("div",{className:h.a.head__field},"Number"),c.a.createElement("input",{type:"tel",name:"number",className:h.a.input,value:this.state.number,onChange:this.saveContact,id:this.createIdNumber})),c.a.createElement("button",{className:h.a.btn,type:"submit"},"Add contact"))}}]),a}(n.Component),E=a(8),C=a.n(E),g=function(e){var t=e.title,a=e.children;return c.a.createElement("div",{className:C.a.container},c.a.createElement("h2",{className:C.a.title},t),a)},N=a(2),y=a.n(N),O=function(e){var t=e.contacts,a=e.onclickBtn;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("li",{className:y.a.contactBox,key:e.id},c.a.createElement("div",{className:y.a.name},e.name),c.a.createElement("div",{className:y.a.number},e.number),c.a.createElement("div",{className:y.a.btnBox},c.a.createElement("button",{className:y.a.btn,type:"button",onClick:function(){return a(e.id)}},"Delete")))})))},x=a(7),j=a.n(x),k=function(e){var t=e.value,a=e.onChange;return c.a.createElement("label",{className:j.a.label},c.a.createElement("div",{className:j.a.head__field},"\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438"),c.a.createElement("input",{className:j.a.input,type:"text",value:t,onChange:a}))},w=a(13),S=a.n(w),F=function(e){var t=e.text;return c.a.createElement("div",{className:S.a.message},t)},I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},e.addContact=function(t){var a=e.state.contacts,n={id:Object(d.a)(),name:t.name,number:t.number},c=0!==n.name.length&&0!==n.number.length,r=a.some((function(e){return e.name===t.name.trim()}));c?r?alert("".concat(t.name.trim()," is alredy in contacts")):e.setState({contacts:[n].concat(Object(s.a)(a))}):alert("One or more fields is full")},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleContacts=function(){var t=e.state,a=t.contacts,n=t.filter.toLocaleLowerCase();return a.filter((function(e){return e.name.toLocaleLowerCase().includes(n)}))},e.deleteContact=function(t){e.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.getVisibleContacts();return c.a.createElement("div",{className:p.a.page__wrapper},c.a.createElement(g,{title:"Phonebook"},this.state.contacts.length>1&&c.a.createElement(k,{value:this.state.filter,onChange:this.changeFilter}),c.a.createElement(v,{propsOnSubmit:this.addContact})),c.a.createElement(g,{title:"Contacts"},this.state.contacts.length>0?c.a.createElement("ul",null,c.a.createElement(O,{contacts:e,onclickBtn:this.deleteContact})):c.a.createElement(F,{text:"Phonebook is empty"})))}}]),a}(n.Component);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.260d8162.chunk.js.map