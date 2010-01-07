/*
 * jQuery Broadcaster Plugin
 * version: 0.02 (05-JAN-2010)
 * 
 * @author Scott Weeks
 * 
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($) {
/**
 * register() causes an element to listen for an arbitrary event.
 */
   $.fn.register = function(evt, f) {
     $._subscribers      = $._subscribers || {};
     $._subscribers[evt] = $._subscribers[evt] || [];
     $(this).bind(evt, f);
     $._subscribers[evt].push($(this));
     return $(this);
   };

/**
 * broadcast() alerts all listening elements that an
 * event has fired and passes along an optional arbitrary data object.
 */
   $.broadcast = function(evt, data) {
     $.each($._subscribers[evt], function() {
	      this.trigger(evt, data);
	    });
   };
 })(jQuery);
