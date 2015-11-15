# Smylies [![Build Status](https://travis-ci.org/crewstyle/smylies.svg?branch=master)](https://travis-ci.org/crewstyle/smylies)

_a text transform into smiley very light jQuery plugin_  
[![npm version](https://badge.fury.io/js/yohoho.smylies.svg)](https://badge.fury.io/js/yohoho.smylies)
[![GitHub version](https://badge.fury.io/gh/crewstyle%2Fsmylies.svg)](https://badge.fury.io/gh/crewstyle%2Fsmylies)  


## Package manager

````javascript
//bower
bower install --save yohoho.smylies
````

````javascript
//npm
npm install yohoho.smylies
````


## Install

````html
<!-- In your <body> HTML tag -->

<textarea id="to-transform"></textarea>
<div id="smiley">
    <a href="#" data-code="-_-" title="-_-">Ambivalent</a>
    <a href="#" data-code=":angel:" title=":angel:">Angel</a>
    <a href="#" data-code=":angry:" title=":angry:">Angry</a>
    <a href="#" data-code=":miaou:" title=":miaou:">Cat</a>
</div>
````

````javascript
//in your main JS file
$('#to-transform').smylies({
    smiley: '#smiley'
});
````


## Settings

Option | Type | Default | Description
------ | ---- | ------- | -----------
smiley | string | '#smiley' | Node element containing all smilies links with their `data-code` attributes


## Dependencies

jQuery 2.1.4


## Authors and Copyright

Made with ♥ by **[Achraf Chouk](http://github.com/crewstyle "Achraf Chouk")**

+ http://fr.linkedin.com/in/achrafchouk/
+ http://twitter.com/crewstyle
+ http://github.com/crewstyle

Please, read [LICENSE](https://github.com/crewstyle/smylies/blob/master/LICENSE "LICENSE") for more details.
