(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{47:function(e,t,a){e.exports=a(80)},52:function(e,t,a){},59:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var l=a(9),n=a(10),r=a(13),c=a(12),o=a(0),s=a.n(o),u=a(18),i=a.n(u),m=(a(52),a(43)),E=a(15),d=a(82),b=a(83),h=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){var e=Date().split(" ");return s.a.createElement("div",null,s.a.createElement("center",null,e[0],",",e[2]," ",e[1]))}}]),a}(s.a.Component),p=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(d.a,{bg:"dark",variant:"dark",expand:"lg"},s.a.createElement(b.a,{className:"mr-auto"},s.a.createElement(b.a.Link,{href:"/"},"Home"),s.a.createElement(b.a.Link,{href:"/india"},"INDIA"),s.a.createElement(b.a.Link,{href:"/pricing"},"Pricing"))),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("center",null,s.a.createElement(h,null)),s.a.createElement("center",null,s.a.createElement("h1",{style:{color:"grey"}},"\u2584\ufe3b\u30c7=COVID-INDIA\u2550\u2501\u4e00")))}}]),a}(o.Component),v=a(24),f=a.n(v),g=a(40),y=(a(59),a(41)),O=a.n(y),j=a(42),k=a.n(j),C=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){if(!1===this.props.valuE)var e=s.a.createElement(k.a,{type:"spokes",color:"grey",height:100,width:100});return s.a.createElement("div",{className:"loading"},s.a.createElement("center",null,e))}}]),a}(s.a.Component),D=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:"contain"},s.a.createElement("div",{class:"item",style:{color:"red"}},s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("h5",null,"Confirmed")),s.a.createElement("br",null),s.a.createElement("h5",null,"[+",this.props.glob.deltaconfirmed,"]"),s.a.createElement("h3",null,s.a.createElement("b",null,this.props.glob.confirmed))),s.a.createElement("div",{class:"item",style:{color:"blue"}},s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("h5",null,"Active")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("h3",null,s.a.createElement("b",null,this.props.glob.active))),s.a.createElement("div",{class:"item",style:{color:"green"}},s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("h5",null,"Recovered")),s.a.createElement("br",null),s.a.createElement("h5",null,"[+",this.props.glob.deltarecovered,"]"),s.a.createElement("h3",null,s.a.createElement("b",null,this.props.glob.recovered))),s.a.createElement("div",{class:"item",style:{color:"grey"}},s.a.createElement("br",null),s.a.createElement("div",null,s.a.createElement("h5",null,"Deceased")),s.a.createElement("br",null),s.a.createElement("h5",null,"[+",this.props.glob.deltadeaths,"]"),s.a.createElement("h3",null,s.a.createElement("b",null,this.props.glob.deaths))))}}]),a}(s.a.Component),I=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={items:[],gob:[],flag:!1},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("http://localhost:5000").then((function(e){console.log(e.data),t.setState({items:e.data.statewise.slice(1,e.data.statewise.length),gob:e.data.statewise[0],flag:!0})})).catch((function(e){return console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){for(var e=0,t=0;t<this.state.items.length;t++)"0"==this.state.items[t].confirmed&&(e+=1);return console.log(Date().split(" ")),s.a.createElement("div",{class:"container"},s.a.createElement(D,{glob:this.state.gob}),s.a.createElement(C,{valuE:this.state.flag}),s.a.createElement("ul",{class:"responsive-table"},s.a.createElement("center",null,s.a.createElement("h2",null,"INDIA-STATEWISE"),s.a.createElement("h6",null,this.state.items.length-e,"  States/UTS Affected")),s.a.createElement("li",{class:"table-header"},s.a.createElement("div",{class:"col-3 col-1"},s.a.createElement("b",null,"STATES")),s.a.createElement("div",{class:"col-2 col-1"},s.a.createElement("b",null,"CONFIRMED")),s.a.createElement("div",{class:"col  col-1"},s.a.createElement("b",null,"ACTIVE")),s.a.createElement("div",{class:"col col-2"},s.a.createElement("b",null,"RECOVERED")),s.a.createElement("div",{class:"col col-2"},s.a.createElement("b",null,"DEATHS"))),this.state.items.map((function(e){return s.a.createElement("li",{class:"table-row"},s.a.createElement("div",{class:"col-3 col-1",key:e.id}," ",e.state,s.a.createElement("br",null),s.a.createElement("small",null,"lastupdate:",e.lastupdatedtime," ")),s.a.createElement("div",{class:"col-1 col-2 ",key:e.id,style:{color:"red"}}," ",s.a.createElement("large",null,s.a.createElement("b",null,e.confirmed)," "),s.a.createElement("small",null,s.a.createElement("b",null,"\u21e7",e.deltaconfirmed))),s.a.createElement("div",{class:"col col-1 ",key:e.id,style:{color:"blue"}},s.a.createElement("b",null,e.active)),s.a.createElement("div",{class:"col- col-2",style:{color:"green"}}," ",s.a.createElement("large",null,s.a.createElement("b",null,e.recovered)," "),s.a.createElement("small",null,s.a.createElement("b",null,"\u21e7",e.deltarecovered))),s.a.createElement("div",{class:"col col-2",style:{color:"grey"}}," ",s.a.createElement("large",null,s.a.createElement("b",null,e.deaths)," "),s.a.createElement("small",null,s.a.createElement("b",null,"\u21e7",e.deltadeaths))))}))))}}]),a}(s.a.Component),w=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(m.a,null,s.a.createElement(p,null),s.a.createElement(E.c,null,s.a.createElement(E.a,{exact:!0,path:"/india",component:I}))))}}]),a}(s.a.Component);i.a.render(s.a.createElement(w,null),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4130cd50.chunk.js.map