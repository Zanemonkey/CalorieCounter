(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(17)},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(3),s=t.n(i),c=(t(16),t(4)),r=t(5),m=t(6),u=t(8),h=t(7),o=t(1),d=t(9),g=function(e){function a(e){var t;return Object(r.a)(this,a),(t=Object(u.a)(this,Object(h.a)(a).call(this,e))).state={weight:83,height:175,age:32,gender:"m",distance:0,time:0,calories:0},t.handleInputChange=t.handleInputChange.bind(Object(o.a)(t)),t.calculate=t.calculate.bind(Object(o.a)(t)),t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"handleInputChange",value:function(e){var a=e.target,t=a.value,n=a.name;this.setState(Object(c.a)({},n,t))}},{key:"bmr",value:function(e,a,t,n){return e+a+t===NaN?0:"m"===n?10*e+6.25*a-5*t+5:10*e+6.25*a-5*t-161}},{key:"pace",value:function(e,a){return isNaN(e)||isNaN(a)?0:e/a*60/1e3}},{key:"mets",value:function(e,a){return isNaN(e)||isNaN(a)?0:a/60*(e-.2)}},{key:"calories",value:function(e,a){return isNaN(e)||isNaN(a)?0:e*a/24}},{key:"calculate",value:function(e){e.preventDefault();var a=this.pace(this.state.distance,this.state.time),t=this.mets(a,this.state.time),n=this.bmr(this.state.weight,this.state.height,this.state.age,this.state.gender);console.log("pace: ",a,"mets: ",t,"bmr: ",n);var l=this.calories(n,t);this.setState({calories:l})}},{key:"render",value:function(){return l.a.createElement("form",{className:"ui form"},l.a.createElement("div",{className:"fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Weight (kg)"),l.a.createElement("input",{type:"number",name:"weight",value:this.state.weight,onChange:this.handleInputChange,min:"0",max:"300",className:"ui input"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Height (cm)"),l.a.createElement("input",{type:"number",name:"height",value:this.state.height,onChange:this.handleInputChange,min:"0",max:"300"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Age"),l.a.createElement("input",{type:"number",name:"age",value:this.state.age,onChange:this.handleInputChange,min:"1",max:"150"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Gender"),l.a.createElement("select",{name:"gender",onChange:this.handleInputChange},l.a.createElement("option",{value:"m",selected:!0},"Male"),l.a.createElement("option",{value:"f"},"Female")))),l.a.createElement("div",{className:"fields"},l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Distance (m)"),l.a.createElement("input",{type:"number",name:"distance",value:this.state.distance,onChange:this.handleInputChange,min:"0"})),l.a.createElement("div",{className:"field"},l.a.createElement("label",null,"Time (min)"),l.a.createElement("input",{type:"number",name:"time",value:this.state.time,onChange:this.handleInputChange,min:"0"}))),l.a.createElement("div",{className:"fields"},l.a.createElement("div",{className:"field"},l.a.createElement("button",{className:"ui primary button",onClick:this.calculate},"Calculate"))),l.a.createElement("div",{id:"result",className:"ui raised segment"},l.a.createElement("h2",null,Math.round(this.state.calories)," calories burned")))}}]),a}(l.a.Component);var v=function(){return l.a.createElement("div",{className:"ui container",style:{marginTop:"50px"}},l.a.createElement("div",{className:"ui huge header"},"Calories Burned Running Calculator"),l.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.40f83b0e.chunk.js.map