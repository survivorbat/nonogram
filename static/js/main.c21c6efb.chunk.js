(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(29)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),i=n(12),a=n.n(i),l=(n(21),n(2)),s=(n(22),n(31)),o=n(32),u=n(33);var m=function(e){var t=e.tile,n=e.select,c=e.solved,i=e.style;return r.createElement("div",{style:i,onClick:t.isSelected()||c?void 0:function(){return n(t)},className:"tile tile-".concat(t.isSelected()?"":"un","selected ").concat(c?"tile-solved":"")})},f=n(1);var d=function(e){var t=e.hints,n=e.solved,c=e.vertical,i=e.tileStyle;return r.createElement("div",{style:Object(f.a)({},i,{flexDirection:c?"column":"row"}),className:"grid-hint ".concat(n?"hint-solved":"")},t.map(function(e,t){return r.createElement("span",{key:t,className:"row-hint-number"},e)}))};var h=function(e){var t=e.row,n=e.columns,c=e.select,i=e.tileStyle;return r.createElement("div",{className:"grid-row"},r.createElement("div",{className:"grid-column-hint",style:i},r.createElement(d,{tileStyle:i,solved:t.isCorrect(),hints:t.getHints()})),t.tiles.map(function(e,a){return r.createElement(m,{style:i,solved:n[a].isCorrect()||t.isCorrect(),tile:e,select:c,key:a})}),r.createElement("div",{style:i}))};n(23);var v=function(e){var t=e.grid,n=e.select,c=Object(r.useRef)(),i=Object(r.useState)(0),a=Object(l.a)(i,2),s=a[0],o=a[1],u=Object(r.useState)(0),m=Object(l.a)(u,2),f=m[0],v=m[1],w=Object(r.useState)(0),E=Object(l.a)(w,2),b=E[0],g=E[1],y=function(){o(window.innerWidth),v(window.innerHeight)};Object(r.useEffect)(function(){return window.addEventListener("resize",y),function(){return window.removeEventListener("resize",y)}},[]),Object(r.useLayoutEffect)(function(){g(c.current.offsetHeight)},[s,f]);var O=t.rows.length+2,j=b/O,p={width:"".concat(j,"px"),height:"".concat(j,"px")};return r.createElement("div",{className:"grid-grid",ref:c},r.createElement("div",{className:"grid-row"},r.createElement("div",{style:p}),t.columnHints.map(function(e,n){return r.createElement(d,{vertical:!0,tileStyle:p,key:n,solved:t.columns[n].isCorrect(),hints:e})}),r.createElement("div",{style:p})),t.rows.map(function(e,c){return r.createElement(h,{tileStyle:p,row:e,columns:t.columns,key:c,select:n})}),r.createElement("div",{className:"grid-row",style:{height:p.height}},r.createElement("span",null,"".concat(O," x ").concat(O))))},w=n(5),E=n(8),b=function(){function e(t){Object(w.a)(this,e),this.tiles=t}return Object(E.a)(e,[{key:"isCorrect",value:function(){return!this.tiles.some(function(e){return!e.isCorrect()})}},{key:"getHints",value:function(){return this.tiles.reduce(function(e,t){return t.getSolution()?(e[e.length-1]++,e):e.concat(0)},[0]).filter(function(e){return 0!==e})}}]),e}(),g=n(14),y=n(10),O=n(13),j=n(15),p=function(e){function t(e,n){return Object(w.a)(this,t),Object(g.a)(this,Object(y.a)(t).call(this,"invalid tiles length, got ".concat(n," instead of ").concat(e)))}return Object(O.a)(t,e),t}(Object(j.a)(Error)),S=function(){function e(t,n){if(Object(w.a)(this,e),this.tiles=t,this.size=n,this.columnHints=void 0,this.rowHints=void 0,this.rows=void 0,this.columns=void 0,t.length!==Math.pow(n,2))throw new p(Math.pow(n,2),t.length);this.rows=t.reduce(function(e,t,r){var c=Math.floor((r+.1)/n);return e[c]=e[c].concat(t),e},new Array(n).fill([])).map(function(e){return new b(e)}),this.rowHints=this.rows.map(function(e){return e.getHints()}),this.columns=t.reduce(function(e,t,r){var c=r%n;return e[c]=e[c].concat(t),e},new Array(n).fill([])).map(function(e){return new b(e)}),this.columnHints=this.columns.map(function(e){return e.getHints()})}return Object(E.a)(e,[{key:"isCorrect",value:function(){return!this.tiles.some(function(e){return!e.isCorrect()})}}]),e}(),k=function(){function e(t){Object(w.a)(this,e),this.solution=t,this.selected=!1}return Object(E.a)(e,[{key:"isCorrect",value:function(){return this.selected===this.solution}},{key:"getSolution",value:function(){return this.solution}},{key:"isSelected",value:function(){return this.selected}},{key:"select",value:function(){if(this.selected)throw new Error("tile already selected");if(!this.solution)throw new Error("tile must not be selected");this.selected=!0}}]),e}(),C=function(e){var t=new Array(Math.pow(e,2)).fill(0).map(function(){return new k(Math.random()<=.7)});return new S(t,e)};n(24);var N=function(e){var t=e.message;return r.createElement("p",{className:"error-field"},t)};n(25);var H=function(e){var t=e.newGame;return r.createElement("div",{className:"new-game-container"},r.createElement("button",{type:"button",onClick:t,className:"new-game-button"},"New Game"))};n(26);var z=function(e){var t=e.message;return r.createElement("p",{className:"success-field"},t)};var M=function(){var e=Object(r.useState)(2),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(r.useState)(C(n)),a=Object(l.a)(i,2),m=a[0],f=a[1],d=Object(r.useState)(""),h=Object(l.a)(d,2),w=h[0],E=h[1],b=Object(r.useState)(""),g=Object(l.a)(b,2),y=g[0],O=g[1];return r.createElement(s.a,{fluid:!0},r.createElement(o.a,null,r.createElement(u.a,null,r.createElement(v,{grid:m,select:function(e){try{e.select(),E("")}catch(t){E("Oops, that one was wrong!"),c(n-1<2?n-1:n)}f(new S(m.tiles,m.size)),m.isCorrect()&&(O("Congrats, you solved the puzzle!"),c(n+1))}}))),r.createElement(o.a,null,r.createElement(u.a,null,r.createElement(H,{newGame:function(){f(C(n)),O("")}}))),r.createElement(o.a,null,r.createElement(u.a,null,r.createElement(N,{message:w}))),r.createElement(o.a,null,r.createElement(u.a,null,r.createElement(z,{message:y}))))};n(28);a.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null)),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.c21c6efb.chunk.js.map