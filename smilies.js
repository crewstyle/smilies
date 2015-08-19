/*! *//*!
 * smilies.js v1.0.0 - "Sogeking no shima deeeeeee - One Piece"
 * ~~~~~~~~~~~~~~~~~~
 *
 * Example of use HTML:
 * <textarea id="to-transform"></textarea>
 * <div id="smiles">
 *     <a href="#" data-code="-_-" title="-_-">Ambivalent</a>
 *     <a href="#" data-code=":angel:" title=":angel:">Angel</a>
 *     <a href="#" data-code=":angry:" title=":angry:">Angry</a>
 *     <a href="#" data-code=":miaou:" title=":miaou:">Cat</a>
 * </div>
 *
 * Example of use JS:
 * $('#to-transform').smilies({
 *     smiles: '#smiles'
 * });
 *
 * ~~~~~~~~~~~~~~~~~~
 * Copyright 2015 Achraf Chouk <achrafchouk@gmail.com>
 */

(function ($){
    "use strict";
    var Smilies = function ($el, options){
        //vars
        var _s = this;
        _s.options = $.extend({}, options);
        _s.$el = $el;
        _s.$smiles = $(_s.options.smiles);

        //check smilies context
        if (!_s.$smiles.length) {
            return;
        }

        //check smilies links
        if (!_s.$smiles.find('a').length) {
            return;
        }

        //initialize
        _s.$smiles.find('a').on('click', function (e){
            e.preventDefault();

            //get details
            var code = $(this).attr('data-code') || '';

            //insert smile
            _s.insertSmile(code);
        });
    };

    Smilies.prototype.options = {};
    Smilies.prototype.$el = null;
    Smilies.prototype.$smiles = null;

    Smilies.prototype.insertSmile = function (code){
        //check code
        if ('' === code) {
            return;
        }

        var _s = this,
            _code = ' ' + code + ' ',
            _value = '';

        //set selected text
        if (document.selection) {
            //modify the selected text by the new one
            document.selection.createRange().text = _code;

            //get the focus back to the textarea
            _s.$el.focus();
        }
        else if (_s.$el[0].selectionStart || 0 === _s.$el[0].selectionStart) {
            var startPos = _s.$el[0].selectionStart,
                endPos = _s.$el[0].selectionEnd,
                cursorPos = startPos;

            //get the element value
            _value = _s.$el.val();

            //get the new textarea value
            var _newv = _value.substring(0, startPos);

            //update new value
            _newv += _code + _value.substring(endPos, _value.length);

            //set new value
            _s.$el.val('' + _newv);

            //define the new cursor position
            cursorPos += _code.length;

            //get the focus back to the textarea
            _s.$el.focus();

            //define the cursor position
            _s.$el[0].selectionStart = cursorPos;
            _s.$el[0].selectionEnd = cursorPos;
        }
        else {
            //define the new value
            _value = _s.$el.val() + _code;
            _s.$el.val('' + _value);

            //get the focus back to the textarea
            _s.$el.focus();
        }
    };

    var methods = {
        init: function (options){
            if (!this.length) {
                return false;
            }

            var settings = {
                smiles: '#smiles'
            };

            return this.each(function (){
                if (options) {
                    $.extend(settings, options);
                }

                new Smilies($(this), settings);
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
            $.error('Method ' + method + ' does not exist on jQuery.Smilies');
        }
    };
})(window.jQuery);
