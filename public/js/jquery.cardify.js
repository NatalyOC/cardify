(function($) {
  $.fn.extend({ 
	  cardify: function() {        	
	    $('img').each(function() {       	    	           
        $(this).wrap('<figure></figure>');
        $(this).after('<figcaption class="style-img">' + $(this).attr('alt') + '</figcaption>');       
      });  
      $('figure').hover(function() {
        console.log($(this));
        $('.style-img',this).slideToggle('slow');
      }, function() {
        $('.style-img',this).slideToggle('slow');
        
      });
	  }  
  });
})(jQuery);
