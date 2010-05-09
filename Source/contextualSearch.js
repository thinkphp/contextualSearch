/*
---
description: ContextualSearch is a small but a powerful MooTools plugin 
             that allows you to make searching within a set of documentation.

authors:
- Adrian Statescu (http://thinkphp.ro)

license:
- MIT-style license

requires:
core/1.2.1: '*'

provides:
- contextSearch

*/

var contextualSearch = new Class({

    Implements: [Options,Events],

    options: {

         site: 'davidwalsh.name',

         targetID: 'searchBox',

         css: 'style.css' 
    },

    boxInit: '<div id="moo-search-module" class="fadeBox"><div class="hd"><p class="title">Search on {site}</p></div>'+
                     '<div class="bd"><div id="moo-search-module-inputs"><input type="text" id="search-input" accesskey="d">'+
                     '<button id="search-button">Search!</button></div>'+
                     '<div id="moo-search-module-results"></div></div></div>',

    initialize: function(options) {

       this.setOptions(options);
          
           $(this.options.targetID).set('html',this.boxInit.replace('{site}',this.options.site));

           if(this.options.css) {

              this.addSkin();
           }

           $('search-button').addEvent('click',function(){
              this.fetchData();
           }.bind(this)); 

           $('search-input').addEvent('keydown',function(event){
              if(event.key == 'enter') {this.fetchData();}
           }.bind(this)); 

    },

    fetchData: function(){

            // this gets the user input for the search
            var input = $('search-input').get('value'),

            root = "http://query.yahooapis.com/v1/public/yql?q=",

            // make the YQL call. Use the path var from above and what the user has typed into the input box
            yqlQuery = 'select title,url,abstract from search.web where query="' + input + '" and  sites="'+this.options.site+'"';

            url = root + encodeURIComponent(yqlQuery) + '&format=json';

            new Request.JSONP({

                url: url,

                onRequest: function(){ 

                     this.fireEvent('request');

                     var resultsOutput = $('moo-search-module-results');

                     resultsOutput.set("html",'<p><b>Loading...</b></p>');   

                }.bind(this), 

                onComplete: function(searchResults) {

                     var resultsOutput = $('moo-search-module-results'),liTemplate = "<li><a href=\"{url}\">{title}</a></li>", markup = '',i;

                    //if we have one result then save
                   if(searchResults && (searchResults.query.count == 1)) {
                        markup = '<ul>';
                        markup += liTemplate.substitute(searchResults.query.results.result);
                        markup += '</ul>';
                   } else 

                   // show the results if we have them
                  if(searchResults && (searchResults.query.count > 1)) {
                  // start off the unordered list
                        markup = '<ul>';
                     for (i = 0; i < searchResults.query.count; i++) {
                        markup += liTemplate.substitute(searchResults.query.results.result[i]);
                  }
                     markup += '</ul>';
                  } else {
                    markup = "<p>No results returned.</p>";
                 }

                 // hook the markup on the DOM now that it's complete
                 resultsOutput.set("html", markup);

                 this.fireEvent('complete',[searchResults]);
                }.bind(this)

            }).send();  

        return this;
    },

    addSkin: function() {

       var style = document.createElement('link'),head = document.getElementsByTagName('head')[0];

           style.setAttribute('rel','stylesheet');

           style.setAttribute('type','text/css');

           style.setAttribute('href',this.options.css);

           head.insertBefore(style,head.firstChild);
    }
});//end class
