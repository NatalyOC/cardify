(function($) {
  $.fn.extend({ 
	  cardify: function() {  
      var container = $('#container');
      container.find('img')
        .each(function() {     	           
          $(this).wrap('<figure></figure>');
          $(this).after('<figcaption class="image-caption">' + $(this).attr('alt') + '</figcaption>');       
        });
      $('figure').hover(
        function() {
          $('img', this).addClass('hover');
          $('figcaption', this).addClass('hoverFig');
        }, function() {
          $('img', this).removeClass('hover');
          $('figcaption', this).removeClass('hoverFig');
        }
      );
	  }  
  });
})(jQuery);


