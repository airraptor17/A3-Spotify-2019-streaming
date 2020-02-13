parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
var t,e,a=["ca","dk","gr","is","mx","ph","sv","ar","ch","do","gt","it","my","pl","th","at","cl","ec","hk","jp","pt","tr","au","co","hn","nl","py","tw","be","cr","es","hu","no","ro","us","fi","id","nz","se","uy","bo","cz","fr","ie","pa","sg","vn","br","de","gb","il","pe","sk","global"],r=["Canada","Denmark","Greece","Iceland","Mexico","Philippines","El Salvador","Argentina","Switzerland","Dominican Republic","Guatemala","Italy","Malaysia","Poland","Thailand","Austria","Chile","Ecuador","Hong Kong","Japan","Portugal","Turkey","Australia","Columbia","Honduras","Netherlands","Paraguay","Taiwan","Belgium","Costa Rica","Spain","Hungary","Norway","Romania","United States","Finland","Indonesia","New Zealand","Sweden","Uruguay","Bolivia","Czech Republic","France","Ireland","Panama","Singapore","Vietnam","Brazil","Germany","United Kingdom","Israel","Peru","Slovakia","global"],n=r.slice(0).sort(),i=1,l={top:15,right:25,bottom:30,left:10},o=800-l.left-l.right,s=400-l.top-l.bottom,d=d3.scaleBand().range([s,0]).padding(.1),c=d3.scaleLinear().range([0,o]),u=[];function g(){d3.csv("streamsglobal10.csv").then(function(t){slider.initSlider(),u=t;var e=t.filter(function(t){return t.date===slider.getDate()});m(),h(e),d3.select("#vis-container-country").insert("select","svg").on("change",function(){var t=d3.select(this).property("value"),e=r.indexOf(t),n="streams"+a[e]+"10.csv";"global"==a[e]?document.getElementById("flag").style.visibility="hidden":(document.getElementById("flag").src="https://cdn.ip2location.com/assets/img/flags/"+a[e]+".png",document.getElementById("flag").style.visibility="visible"),d3.csv(n).then(function(t){u=t,h(t.filter(function(t){return t.date===slider.getDate()}))})}).selectAll("option").data(n).enter().append("option").attr("value",function(t){return t}).attr("selected",function(t){return"Global"===t}).text(function(t){return t[0].toUpperCase()+t.slice(1,t.length)})})}function m(){svg=d3.select("svg#graph").attr("width",o+l.left+l.right).attr("height",s+l.top+l.bottom).append("g").attr("transform","translate("+l.left+","+l.top+")"),svg.selectAll("rect").data([[],[],[],[],[],[],[],[],[],[]]).enter().append("rect").attr("class","bar").attr("width",function(t){return c(t[0])}).attr("y",function(t){return d(t[1])}).attr("fill",function(){return"rgb(30, 215, 96)"}).attr("height",d.bandwidth()),svg.append("g").attr("transform","translate(0,"+s+")").attr("color","white").call(d3.axisBottom(c)),svg.append("g").call(d3.axisLeft(d).tickSize(0).tickFormat(""))}function f(t,e,a,r){svg.selectAll("text").remove(),svg.selectAll("g").remove(),svg.append("g").attr("transform","translate(0,"+s+")").attr("color","white").call(d3.axisBottom(c)),svg.append("g").call(d3.axisLeft(d).tickSize(0).tickFormat("")),svg.selectAll("title").remove(),svg.selectAll("rect").append("title").text(function(e){var r=10-parseInt(e[1]);return'"'+t[r]+'" by '+a[r]+": "+e[0]+" streams on "+slider.getDate()}),svg.selectAll("text.value").data(e).enter().append("text").text(function(t){return r[parseInt(t[1])-1]}).attr("text-anchor","end").attr("y",function(t,a){return(9-a)*(s/e.length)+27}).attr("x",function(t){var a=t[1],r=e[a-1][0];return c(r)-8}).attr("font-family","sans-serif").attr("font-size","14px").attr("font-weight",550).attr("fill","black")}function p(t){var e=svg.selectAll("rect").data(t);e.enter().append("rect").attr("class","bar").attr("width",function(t){return c(t[0])}).attr("y",function(t){return d(t[1])}).attr("fill",function(t){return"rgb(0, 0, "+10*t[0]+")"}).attr("height",d.bandwidth()).merge(e).attr("x",function(t,e){return c(t[1])}).attr("y",function(t){return d(t[1])}).attr("width",function(t){return c(t[0])}).attr("height",d.bandwidth())}function h(a){t=[[]],e=[""];var r=[""];artistNames=[""];for(var n=0;n<a.length;n++){var i=[parseInt(a[n].Streams),10-n+""],l=a[n]["Track Name"];r[n]=l,a[n]["Track Name"].length>30&&(l=l.substring(0,31)+"..."),e[n]=l,artistNames[n]=a[n].Artist,t[n]=i}c.domain([0,d3.max(t,function(t){return t[0]})]),d.domain(d3.range(1,t.length+1)),p(t),f(r,t,artistNames,e)}slider=function(){var t,e;return{getDate:function(){return d3.timeFormat("%Y-%m-%d")(t.value())},initSlider:function(){var a=d3.range(0,53).map(function(t){return new Date(2019,0,1+7*t)});t=d3.sliderBottom().min(d3.min(a)).max(d3.max(a)).step(28).width(1240-l.left-l.right).tickFormat(d3.timeFormat("%m-%d")).tickValues(a).displayValue(!1).on("onchange",function(t){d3.select("div#date-display").text(d3.timeFormat("%Y-%m-%d")(t)),e=d3.timeFormat("%Y-%m-%d")(t),h(u.filter(function(t){for(var a=0;a<u.length;a++)return t.date===e}))});var r=d3.select("div#slider").append("svg").attr("width",1350-l.left-l.right).attr("height",132-l.top-l.bottom).append("g").attr("transform","translate(30,30)");r.call(t),r.selectAll("text").attr("dx","-10px").attr("dy","-16px"),d3.select("div#date-display").text(d3.timeFormat("%Y-%m-%d")(t.value()))}}}(),g();
},{}]},{},["Focm"], null)
//# sourceMappingURL=https://uw-cse442-wi20.github.io/A3-Spotify-2019-streaming/src.1ec4036f.js.map