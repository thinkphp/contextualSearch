contextualSearch
================
contextualSeach is a solution that allows you to supports searching within a set of documentation.

![Screenshot](http://farm5.static.flickr.com/4043/4589287717_19587310ee_o.png)
![Screenshot](http://farm5.static.flickr.com/4072/4592085840_2efe301441_o.png)
![Screenshot](http://farm5.static.flickr.com/4025/4591586461_b8ae8ae617_o.png)

How to use
----------

First you must to include the JS files in the head of your HTML document.
       
       #HTML
       <script type="text/javascript" src="core.js"></script>
       <script type="text/javascript" src="jsonp.js"></script>
       <script type="text/javascript" src="contextualSearch.js"></script>

In your JavaScript source: 

       #JS 
       window.addEvent('domready',function(){
       new contextualSearch({site: 'davidwalsh.name',targetID: 'container'});
       });

In your HTML source: 

       #HTML
       <div id="container"></div>


Dependencies:

      MooTools Core 1.3
      MooTools More: Request.JSONP

In Action:  

      [http://thinkphp.ro/apps/js-hacks/contextualSearch/google/mootools/v1.3.1/](http://thinkphp.ro/apps/js-hacks/contextualSearch/google/mootools/v1.3.1/)
      [http://thinkphp.ro/apps/js-hacks/contextualSearch/google/mootools/v1.3/](http://thinkphp.ro/apps/js-hacks/contextualSearch/google/mootools/v1.3/) 