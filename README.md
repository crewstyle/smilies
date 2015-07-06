# Smilies

_a text transform into smiley jQuery plugin_


## Summary

+ [1) What is this all about?](#1-what-is-this-all-about)
+ [2) Install](#2-install)
+ [3) How to use it](#3-how-to-use-it)
+ [4) That's all folkes!](#4-thats-all-folkes)
+ [5) Authors and Copyright](#5-authors-and-copyright)


## 1) What is this all about?

[Smilies](https://github.com/crewstyle/smilies) is a very light jQuery plugin to make clickable smilies with text transformation.  


## 2) Install

If you use [Bower.io](http://bower.io), you can download *Tabloïd* and use it with:

````
bower install --save smilies
````


## 3) How to use it

It's pretty simple to user the *Smilies* jQuery package. It's a two-steps install.  
In your HTML:

````html
<textarea id="to-transform"></textarea>
<div id="smiles">
    <a href="#" data-code="-_-" title="-_-">Ambivalent</a>
    <a href="#" data-code=":angel:" title=":angel:">Angel</a>
    <a href="#" data-code=":angry:" title=":angry:">Angry</a>
    <a href="#" data-code=":miaou:" title=":miaou:">Cat</a>
</div>
````

In your Javascript:
````javascript
$(document).ready({
    $('#to-transform').smilies({
        smiles: '#smiles'
    });
});
````


## 4) That's all folkes!

Now let's have fun :)


## 5) Authors and Copyright

**Achraf Chouk**

+ http://fr.linkedin.com/in/achrafchouk/
+ http://twitter.com/crewstyle
+ http://github.com/crewstyle

Please, read [LICENSE](https://github.com/crewstyle/smilies/blob/master/LICENSE "LICENSE") for more details.

Copyright 20xx [Achraf Chouk](http://github.com/crewstyle "Achraf Chouk").  
Brewed by Achraf Chouk, served by [Take a tea](http://www.takeatea.com "Take a tea") ;)
