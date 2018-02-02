(function($) {
  $.fn.extend({ 
	  cardify: function() {  
      var container = $('#container');
      container.find('img')
        .each(function() {     	           
          $(this).wrap('<figure class="image-frame"></figure>');
          $(this).after('<figcaption class="image-caption">' + $(this).attr('alt') + '</figcaption>');       
        });  
      $('.image-frame').hover(function() {
        console.log($(this));
        $('.image-caption', this).slideToggle('slow');
      }, function() {
        $('.image-caption', this).slideToggle('slow');
      });
	  }  
  });
})(jQuery);


