;(function($){
  'use strict';
  $.fn.NoFollow = function() {
    var $this = $(this);
    $this.attr('rel', 'nofollow')
         .attr('data-exited')
         .attr('target', '_blank');
  };
})(jQuery);

$(document).ready(function(){
  $('.js-nofollow a').NoFollow();
  // Data event tracking all links for GoSquared
  $('[data-exited]').on('click', function() {
    analytics.track('Exited', {
      page:  window.location.pathname,
      url: $(this).attr('href')
    });
  });

  $('.m-page-link, .m-page-title').each(function() {
    var wordArray = $(this).text().split(' ');
    if (wordArray.length > 1) {
      wordArray[wordArray.length - 2] += '&nbsp;' + wordArray[wordArray.length - 1];
      wordArray.pop();
      return $(this).html(wordArray.join(' '));
    }
  });

});
