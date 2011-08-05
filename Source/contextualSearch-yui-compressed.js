/*
---
description: ContextualSearch is a small but a powerful MooTools plugin that allows you to make searching within a set of documentation.

authors:
- Adrian Statescu (http://thinkphp.ro)

license:
- MIT-style license

requires:
- core/1.3.2: '*'
- more/1.3.0.1: Request.JSONP

provides: [contextualSearch]

...
*/

var contextualSearch=new Class({Implements:[Options,Events],options:{site:"davidwalsh.name",targetID:"searchBox",css:"style.css"},boxInit:'<div id="moo-search-module" class="fadeBox"><div class="hd"><p class="title">Search on {site}</p></div><div class="bd"><div id="moo-search-module-inputs"><input type="text" id="search-input" accesskey="d" placeholder="Enter a term" required><button id="search-button">Search!</button></div><div id="moo-search-module-results"></div></div></div>',initialize:function(options){this.setOptions(options);$(this.options.targetID).set("html",this.boxInit.replace("{site}",this.options.site));if(this.options.css){this.addSkin()}$("search-button").addEvent("click",function(){this.fetchData()}.bind(this));$("search-input").addEvent("keydown",function(event){if(event.key=="enter"){this.fetchData()}}.bind(this))},fetchData:function(){var input=$("search-input").get("value"),url="http://ajax.googleapis.com/ajax/services/search/web?gl=en&userip=&hl=en&v=1.0&start=0&rsz=8&&q=site:"+this.options.site+" "+input;new Request.JSONP({url:url,onRequest:function(){this.fireEvent("request");var resultsOutput=$("moo-search-module-results");resultsOutput.set("html","<p><b>Loading...</b></p>")}.bind(this),onComplete:function(o){var resultsOutput=$("moo-search-module-results"),liTemplate='<li><a href="{url}">{title}</a></li>',markup="",i;if(o.responseStatus==403){markup="<ul>";markup+="<li>"+o.responseDetails+"</li>";markup+="</ul>"}else{if(o.responseStatus==200&&(o.responseData.results.length==1)){markup="<ul>";markup+=liTemplate.substitute(o.responseData.results);markup+="</ul>"}else{if(o.responseStatus==200&&(o.responseData.results.length>0)){var all=o.responseData.results.length;markup+="<ul>";for(var i=0;i<all;i++){markup+=liTemplate.substitute(o.responseData.results[i])}markup+="</ul>"}else{markup="<p>No results returned.</p>"}}}resultsOutput.set("html",markup);this.fireEvent("complete",[o])}.bind(this)}).send();return this},addSkin:function(){var style=document.createElement("link"),head=document.getElementsByTagName("head")[0];style.setAttribute("rel","stylesheet");style.setAttribute("type","text/css");style.setAttribute("href",this.options.css);head.insertBefore(style,head.firstChild);return this}});Element.implement({search:function(o){new contextualSearch({url:o.where,targetID:this});return this}});