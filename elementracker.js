(function ( $ ) {
    $.fn.elementracker = function( options ) {
        var config = $.extend({
        	wrapper: window,
        	currentClass: 'active',
            enter: function(obj){},
            leave: function(obj){},
            in: function(obj){}
        }, options );
 
        console.log($(this).position().top);

        return this.each(function() {
        	var obj = $(this);
	    	$(config.wrapper).scroll(function(e){
	    		if($(this).scrollTop() >= obj.offset().top && $(this).scrollTop() < obj.offset().top + obj.height()){
	    			if(!obj.hasClass(config.currentClass)){
		    			obj.addClass(config.currentClass);
		    			config.enter(obj[0]);
	    			}
	    			config.in(obj[0]);
	    		}else{
	    			if(obj.hasClass(config.currentClass)){
		    			obj.removeClass(config.currentClass);
		    			config.leave(obj[0]);
	    			}
	    		}
	    	});
	    });
 
    };
 
}( jQuery,window));