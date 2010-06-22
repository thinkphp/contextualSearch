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

* request - this event is fired whenever is made a request.

Signature: onRequest()

* complete - this event is fired whenever the request has been completed.

Signature: onComplete(searchResults)  

  arguments: *searchResults* (Object) the object returned from service

**license:** *MIT-style*

*Note:* to create a contextual search box I used MooTools Core 1.2.4, MooTools More Request.JSONP, YQL and a search parameter.
  
