/*! *//*!
 * smylies.js v1.0.0 - "Sogeking no shima deeeeeee - One Piece"
 * ~~~~~~~~~~~~~~~~~~
 *
 * Example of use HTML:
 * <textarea id="to-transform"></textarea>
 * <div id="smiley">
 *     <a href="#" data-code="-_-" title="-_-">Ambivalent</a>
 *     <a href="#" data-code=":angel:" title=":angel:">Angel</a>
 *     <a href="#" data-code=":angry:" title=":angry:">Angry</a>
 *     <a href="#" data-code=":miaou:" title=":miaou:">Cat</a>
 * </div>
 *
 * Example of use JS:
 * $('#to-transform').smylies({
 *     smiley: '#smiley'
 * });
 *
 * ~~~~~~~~~~~~~~~~~~
 * Copyright 2015 Achraf Chouk <achrafchouk@gmail.com>
 */

(function ($){
    "use strict";
    var Smylies = function ($el, options){
        //vars
        var _smylies = this;
        _smylies.options = $.extend({}, options);
        _smylies.$el = $el;
        _smylies.$smiley = $(_smylies.options.smiley);

        //check smilies context
        if (!_smylies.$smiley.length) {
            return;
        }

        var $links = _smylies.$smiley.find('a');

        //check smilies links
        if (!$links.length) {
            return;
        }

        //initialize
        $links.on('click', function (e){
            e.preventDefault();

            //get details
            var code = $(this).attr('data-code') || '';

            //insert smile
            _smylies.insertSmile(code);
        });
    };

    Smylies.prototype.options = {};
    Smylies.prototype.$el = null;
    Smylies.prototype.$smiles = null;

    Smylies.prototype.insertSmile = function (code){
        //check code
        if ('' === code) {
            return;
        }

        var _smylies = this,
            _code = ' ' + code + ' ',
            _value = '';

        //set selected text
        if (document.selection) {
            //modify the selected text by the new one
            document.selection.createRange().text = _code;

            //get the focus back to the textarea
            _smylies.$el.focus();
        }
        else if (_smylies.$el[0].selectionStart || 0 === _smylies.$el[0].selectionStart) {
            var startPos = _smylies.$el[0].selectionStart,
                endPos = _smylies.$el[0].selectionEnd,
                cursorPos = startPos;

            //get the element value
            _value = _smylies.$el.val();

            //get the new textarea value
            var _newv = _value.substring(0, startPos);

            //update new value
            _newv += _code + _value.substring(endPos, _value.length);

            //set new value
            _smylies.$el.val('' + _newv);

            //define the new cursor position
            cursorPos += _code.length;

            //get the focus back to the textarea
            _smylies.$el.focus();

            //define the cursor position
            _smylies.$el[0].selectionStart = cursorPos;
            _smylies.$el[0].selectionEnd = cursorPos;
        }
        else {
            //define the new value
            _value = _smylies.$el.val() + _code;
            _smylies.$el.val('' + _value);

            //get the focus back to the textarea
            _smylies.$el.focus();
        }
    };

    var methods = {
        init: function (options){
            if (!this.length) {
                return false;
            }

            var settings = {
                smiley: '#smiley'
            };

            return this.each(function (){
                if (options) {
                    $.extend(settings, options);
                }

                new Smylies($(this), settings);
            });
        },
        update: function (){},
        destroy: function (){}
    };

    $.fn.smilies = function (method){
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Method ' + method + ' does not exist on jQuery.Smylies');
        }
    };
})(window.jQuery);
