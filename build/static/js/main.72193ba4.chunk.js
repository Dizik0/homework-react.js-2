(this["webpackJsonphomework-react.js-2"]=this["webpackJsonphomework-react.js-2"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(8),a=n.n(s),o=(n(14),n(15),n(9)),i=n(2),u=n(3),j=n(5),d=n(4),l=n(6),b=n(0),h=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.Good,n=e.Neutral,c=e.Bad,r=e.total,s=e.countPositiveFeedbackPercentage;return Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:"Statistics"}),Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:["Good ",Object(b.jsx)("span",{children:t})]}),Object(b.jsxs)("li",{children:["Neutral",Object(b.jsx)("span",{children:n})]}),Object(b.jsxs)("li",{children:["Bad",Object(b.jsx)("span",{children:c})]}),Object(b.jsxs)("li",{children:["total",Object(b.jsx)("span",{children:r})]}),Object(b.jsxs)("li",{children:["Positive feedback",Object(b.jsxs)("span",{children:[s,"%"]})]})]})]})}}]),n}(c.Component);h.propTypos={Good:l.PropTypes.number.isRequired,Neutral:l.PropTypes.number.isRequired,Bad:l.PropTypes.number.isRequired,countPositiveFeedbackPercentage:l.PropTypes.func.isRequired,total:l.PropTypes.func.isRequired};var p=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("button",{onClick:this.props.options("Good"),children:"Good"}),Object(b.jsx)("button",{onClick:this.props.options("Neutral"),children:"Neutral"}),Object(b.jsx)("button",{onClick:this.props.options("Bad"),children:"Bad"})]})}}]),n}(c.Component),O=function(e){var t=e.message;return Object(b.jsx)("p",{children:t})},f=function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={Good:0,Neutral:0,Bad:0},e.countTotalFeedback=function(){return e.state.Good+e.state.Neutral+e.state.Bad},e.countPositiveFeedbackPercentage=function(){return Math.trunc(100*e.state.Good/e.countTotalFeedback())},e.eventCather=function(t){return function(){e.setState(Object(o.a)({},t,e.state[t]+1))}},e}return Object(u.a)(n,[{key:"render",value:function(){var e;return e=0!==this.countTotalFeedback()?Object(b.jsx)(h,{Good:this.state.Good,Neutral:this.state.Neutral,Bad:this.state.Bad,total:this.countTotalFeedback(),countPositiveFeedbackPercentage:this.countPositiveFeedbackPercentage()}):Object(b.jsx)(O,{message:"No feedback given"}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"Please leave feadback"}),Object(b.jsx)(p,{options:this.eventCather}),e]})}}]),n}(c.Component);var v=function(){return Object(b.jsx)("div",{children:Object(b.jsx)(f,{})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),x()}},[[19,1,2]]]);
//# sourceMappingURL=main.72193ba4.chunk.js.map