(function($) {
  $.fn.extend({ 
    // nombramos nuestro plugin (cardify)
	  cardify: function() {  
      // Guardo en una variable el elemento que contenga el id container
      var container = $('#container');	
      // find, busca dentro del container el elemento img
      container.find('img')
        // each, recorro todos los elementos img para que ejecute la sgte función
        .each(function() {  
          // wrap, envuelve c/u de los elementos seleccionado (img's) en un </figure>	    	           
          $(this).wrap('<figure></figure>');
          var alt = $(this).attr('alt');
          // after, inserta su contenido al elemento </figure>
          $(this).after('<figcaption class="style-img">' + alt + '</figcaption>');       
        });
	  }  
  });
})(jQuery);


