(function() {
   $.fn.register = function(evt, f) {
     $._subscribers      = $._subscribers || {};
     $._subscribers[evt] = $._subscribers[evt] || [];
     $(this).bind(evt, f);
     $._subscribers[evt].push($(this));
     return $(this);
   };

   $.broadcast = function(evt, data) {
     $.each($._subscribers[evt], function() {
	      this.trigger(evt, data);
	    });
   };
 })();
