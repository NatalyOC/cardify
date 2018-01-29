(function($) {
  $.fn.extend({
    cardify: function() {
      $('img').each(function() {
        let pathSrc = $(this).attr('src');
        let pathAlt = $(this).attr('alt');
        let replace = `<figure><img src=${pathSrc}><figcaption>${pathAlt}</figcaption></figure>`;
        // $(this).html(replace);
        $(this).replaceWith(replace);
      });
    }
  });       
})(jQuery);