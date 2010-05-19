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


Dependencies

      MooTools Core 1.2.4
      MooTools More: Request.JSONP

Class: contextualSearch
===================      

** Implements: **

Options,Events


**constructor:** contextualSearch

** Syntax: **

new contextualSearch(options);

** Arguments: **

options - initial options for the class.


** Options **

* site - (*String*, default to 'davidwalsh.name') - name of the site you want to do search.

* targetID - (*String*, default to 'searchBox') - the target ID of the container where you want to inject the control search box.

* css - (*String*, default to 'style.css') - the filename css with path.

** Returns **
 
(object) - a new object contextualSearch instance


** Events **

* request - function to execute when make a search.

Signature: onRequest()

* complete - the function to be called when the results is returned.

Signature: onComplete(searchResults)  

  arguments: *searchResults* (Object) the object returned from service

**license:** *MIT-style*

*Note:* to create a contextual search box I used MooTools Core 1.2.4, MooTools More Request.JSONP, YQL and a search parameter.
  
