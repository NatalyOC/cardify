(function($) {
  $.fn.extend({ 
	  cardify: function() {        	
	    $('img').each(function() {       	    	           
        $(this).wrap('<figure></figure>');
        $(this).after('<figcaption class="style-img">' + $(this).attr('alt') + '</figcaption>');       
	    });  
	  }  
  });
})(jQuery);
