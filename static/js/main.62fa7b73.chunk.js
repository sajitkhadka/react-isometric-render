(this["webpackJsonpreact-isometric-render"]=this["webpackJsonpreact-isometric-render"]||[]).push([[0],{15:function(e,t,i){},17:function(e,t,i){},18:function(e){e.exports=JSON.parse("{}")},19:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i.n(n),o=i(10),c=i.n(o),a=(i(15),i(9)),s=i(4),h=i.p+"static/media/2d.9b5d6335.png",d=i(3),l=i(7),x=i(0);function u(e){var t=e.image,i=e.data,n=e.children,r=e.onClick,o=e.hover,c=e.text,a=Object(l.a)(e,["image","data","children","onClick","hover","text"]),s=i.y,h=i.x,u=i.h,y=i.w;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{style:Object(d.a)({height:"".concat(u,"px"),width:"".concat(y,"px"),backgroundImage:"url("+t+")",backgroundRepeat:"no-repeat",backgroundPosition:"-".concat(h,"px -").concat(s,"px"),cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box"},a.style),onClick:r,className:"".concat(o&&"sprite-hover"),children:c&&Object(x.jsx)("p",{children:c})}),n]})}function y(e,t,i){for(var n=[],r=function(r){for(var o=function(o){n.push((function(n){return Object(x.jsx)(u,Object(d.a)({image:e,data:{y:r,x:o,h:t,w:i}},n))}))},c=0;c<10*i;c+=i)o(c)},o=0;o<10*t;o+=t)r(o);return n}function p(e){var t=e.children,i=e.top,r=e.left,o=e.together,c=e.onClick;return o?n.Children.toArray(t).map((function(e,t){return Object(x.jsx)("div",{style:{position:"absolute",top:i,left:r},children:e},t)})):Object(x.jsx)("div",{style:{position:"absolute",top:i,left:r},onClick:c,children:t})}p.displayName="RenderObjects";var b=p;function j(e){var t=e.number,i=e.spriteSheet,n=e.height,r=void 0===n?64:n,o=e.width,c=void 0===o?64:o,a=Object(l.a)(e,["number","spriteSheet","height","width"]),s=y(i,r,c)[t];return Object(x.jsx)(s,Object(d.a)({},a))}function g(e){for(var t=e.tileSet,i=e.size,n=e.setActiveTile,r=e.zoom,o=void 0===r?1:r,c=e.tHeight,a=e.tWidth,s=y(t,c,a),h=i.width,d=i.height,l=[],u=0,p=0;p<d;p+=c/2){for(var b=[],j=0;j<h;j+=a/2)b.push({x:j,y:p,id:u++});l.push(b)}return Object(x.jsx)("div",{id:"palette",style:{boxSizing:"border-box",position:"relative",border:"1px solid black",zIndex:100,backgroundColor:"white",margin:"30px auto",zoom:"".concat(100*o,"%"),MozTransform:"scale(".concat(o,")")},children:Object(x.jsx)("div",{style:{display:"flex",flexWrap:"wrap"},children:s.map((function(e,i){return Object(x.jsx)(e,{onClick:function(){n({tile:i,spriteSheet:t,height:c,width:a})},hover:!0},i)}))})})}var f=r.a.memo((function(e){var t=e.activeTile,i=(e.tileMap,e.image,e.zoom),r=void 0===i?1:i,o=e.background,c=e.children,a=e.addTile,h=e.onClick,l=e.origin,u=e.tileSize,y=e.worldSize,p=Object(d.a)({},u),g=Object(d.a)({},y),f=Object(d.a)({},l),v=Object(n.useState)({x:0,y:0}),m=Object(s.a)(v,2),O=m[0],w=m[1],S=Object(n.useState)({x:0,y:0}),z=Object(s.a)(S,2),k=z[0],C=z[1],T=function(e,t,i,n,r,o){return(e-i)*(o-n)-(t-n)*(r-i)},M={x:p.x*g.x,y:p.y*g.y};return Object(x.jsxs)("div",{style:{boxSizing:"border-box",position:"relative",border:"1px solid gray",backgroundImage:"url("+o+")",backgroundRepeat:"no-repeat",width:M.x,height:M.y+64,zoom:"".concat(100*r,"%"),MozTransform:"scale(".concat(r,")")},onClick:function(){console.log("clicked"),h({x:O.x,y:O.y})},onMouseMove:function(e){var t,i,n=e.currentTarget.getBoundingClientRect(),o=e.clientX/r-n.left,c=e.clientY/r-n.top,a=parseInt(o/p.x),s=parseInt(c/p.y),h=o%p.x,d=c%p.y,l={x:s-f.y+(a-f.x),y:s-f.y-(a-f.x)},x={x:l.x,y:l.y};h<p.x/2&&d<p.y/2?T(h,d,p.x/2,0,0,p.y/2)<0&&(x.x-=1):h<p.x/2&&d>p.y/2?T(h,d,0,p.y/2,p.x/2,p.y)<0&&(x.y+=1):h>p.x/2&&d<p.y/2?T(h,d,p.x/2,0,p.x,p.y/2)>0&&(x.y-=1):h>p.x/2&&d>p.y/2&&T(h,d,p.x/2,p.y,p.x,p.y/2)<0&&(x.x+=1),w(x),C((t=x.x,i=x.y,{x:f.x*p.x+(t-i)*(p.x/2),y:f.y*p.y+(t+i)*(p.y/2)}))},children:[c,Object(x.jsx)(b,{left:k.x,top:k.y-p.y,children:Object(x.jsx)("div",{className:"sprite-hover-sheet",children:t&&Object(x.jsx)(j,{number:t.tile,spriteSheet:t.spriteSheet,onClick:function(){a({x:O.x,y:O.y,image:t.spriteSheet,tile:t.tile,height:t.height,width:t.width})},height:t.height,width:t.width})})})]})})),v=(i(17),i(18),i(2)),m=i.p+"static/media/background.3732d207.jpg";var O=function(e){var t=e.map,i=e.spriteSheet,o=e.tileSize,c=e.origin,a=e.worldSize,s=e.children;return Object(n.useMemo)((function(){var e=[];s&&r.a.Children.forEach(s,(function(t){e.push(t.props)}));for(var n=[],h=function(r){for(var s=function(s){var h=e.find((function(e){return e.x===s&&e.y===r})),d=function(e,t,i,n){return{x:e.x*t.x+(i-n)*(t.x/2),y:e.y*t.y+(i+n)*(t.y/2)}}(c,o,s,r);h?n.push({x:d.x,y:d.y-o.y,sprite:h.tile,spriteSheet:h.spriteSheet}):n.push({x:d.x,y:d.y-o.y,sprite:t[r*a.x+s]-1,spriteSheet:i})},h=0;h<a.x;h++)s(h)},d=0;d<a.y;d++)h(d);return n}),[t,s]).map((function(e,t){return e.sprite>0&&Object(x.jsx)(b,{left:e.x,top:e.y,children:Object(x.jsx)("div",{className:"sprite-hover-sheet",children:Object(x.jsx)(j,{number:e.sprite,spriteSheet:e.spriteSheet})})},t)}))};var w=function(e){e.tileMap};var S=function(e){var t=Object(n.useState)(null),i=Object(s.a)(t,2),r=i[0],o=i[1],c=Object(n.useState)([]),d=Object(s.a)(c,2),l=(d[0],d[1],Object(n.useState)({width:1152,height:700})),u=Object(s.a)(l,2),y=u[0],p=(u[1],Object(n.useState)((window.screen.width/1600).toFixed(1))),b=Object(s.a)(p,2),j=b[0],S=b[1];Object(n.useEffect)((function(){window.onresize=function(){S((window.screen.width/1600).toFixed(1))}}),[]);var z=Object(n.useState)([]),k=Object(s.a)(z,2),C=k[0],T=k[1];return Object(x.jsxs)("div",{className:"content",style:{backgroundColor:"#EDF5E1"},children:[Object(x.jsx)("div",{style:{position:"relative",marginBottom:"50px",paddingTop:"50px",display:"flex",justifyContent:"space-around",width:"100%",height:y.height*j},children:Object(x.jsxs)(f,{activeTile:r,tileMap:v,tileSize:{x:64,y:32},origin:{y:1,x:v.width/2},worldSize:{x:v.width,y:v.height},image:h,zoom:j,background:m,addTile:function(e){T((function(t){var i=Object(a.a)(t),n=i.find((function(t){return t.x===e.x&&t.y===e.y}));return n?(n.image=e.image,n.tile=e.tile,i):[].concat(Object(a.a)(t),[{x:e.x,y:e.y,tile:e.tile,image:e.image,height:e.height,width:e.width}])}))},onClick:function(e){console.log(e)},children:[Object(x.jsx)(O,{map:v.layers[0].data,spriteSheet:h,tileSize:{x:64,y:32},origin:{x:10,y:1},worldSize:{x:v.width,y:v.height}}),Object(x.jsx)(O,{map:v.layers[1].data,spriteSheet:h,tileSize:{x:64,y:32},origin:{x:10,y:1},worldSize:{x:v.width,y:v.height},children:C.map((function(e,t){return Object(x.jsx)(w,{x:e.x,y:e.y,tile:e.tile,spriteSheet:e.image,height:e.height,width:e.width},t)}))})]})}),Object(x.jsx)("div",{style:{width:"80%",margin:"50px auto",height:400},children:Object(x.jsx)(g,{tileSet:h,setActiveTile:o,size:{height:64,width:64},zoom:j,tWidth:64,tHeight:64})})]})},z=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,20)).then((function(t){var i=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;i(e),n(e),r(e),o(e),c(e)}))};c.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),z()},2:function(e){e.exports=JSON.parse('{"compressionlevel":-1,"height":20,"infinite":false,"layers":[{"data":[85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,4,4,4,85,85,85,85,85,85,85,85,4,4,4,85,85,85,85,85,85,4,85,4,85,85,85,85,85,85,85,85,4,85,4,85,85,85,85,85,85,4,4,4,85,85,85,85,85,85,85,85,4,85,4,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,4,4,4,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,88,88,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,88,88,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,88,88,85,85,85,85,85,85,65,65,85,85,85,85,85,85,85,85,85,85,88,88,85,85,85,85,85,85,85,65,65,65,65,65,65,65,65,85,85,85,87,87,87,87,87,85,65,85,65,65,85,85,85,85,85,85,85,85,85,85,87,86,86,86,87,85,65,65,65,82,82,82,82,82,82,82,82,82,85,85,87,86,60,86,87,85,85,85,85,82,85,85,85,82,82,82,85,85,85,85,87,86,60,86,87,85,85,85,85,82,85,85,85,82,82,82,82,82,85,85,87,86,86,86,87,85,85,85,85,82,85,85,85,82,86,82,85,85,85,85,87,87,87,87,87,85,85,85,85,82,82,82,82,82,60,82,85,85,85,85,85,85,85,85,85,85,85,85,85,82,82,82,82,84,86,81,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85,85],"height":20,"id":1,"name":"layer0","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[2,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,2,89,84,84,84,84,0,0,0,0,55,0,0,0,0,0,0,0,0,0,89,89,84,30,0,0,0,0,0,0,51,0,0,0,0,0,0,0,0,0,89,89,56,0,25,0,0,0,0,0,51,0,0,0,0,86,0,0,0,0,89,89,84,0,0,0,0,0,0,0,51,0,0,0,0,86,0,0,0,0,89,89,0,0,0,0,0,0,0,0,51,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,51,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,51,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,30,0,51,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,13,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,12,0,76,0,0,0,0,0,0,0,0,39,89,0,0,0,0,0,0,0,0,75,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,0,53,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,53,52,53,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,0,53,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,89,89,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,89,2,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,89,2],"height":20,"id":2,"name":"layer1","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0}],"nextlayerid":3,"nextobjectid":1,"orientation":"isometric","renderorder":"right-down","tiledversion":"1.4.3","tileheight":32,"tilesets":[{"firstgid":1,"source":"2d.tsx"}],"tilewidth":64,"type":"map","version":1.4,"width":20}')}},[[19,1,2]]]);
//# sourceMappingURL=main.62fa7b73.chunk.js.map