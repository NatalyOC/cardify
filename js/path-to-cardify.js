(function($) {
  $.fn.extend({
    cardify: function() {
      $('img').each(function() {
        let pathSrc = $(this).attr('src');
        let pathAlt = $(this).attr('alt');
        let replace = `<figure class="image-frame"><img src=${pathSrc}><figcaption class="image-caption"><h5>${pathAlt}</h5></figcaption></figure>`;
        $(this).replaceWith(replace);
      });
      $('.image-frame').hover(function() {
        console.log($(this));
        $('.image-caption',this).slideToggle('slow');
      }, function() {
        $('.image-caption',this).slideToggle('slow');
        
      });
    }
  });       
})(jQuery);