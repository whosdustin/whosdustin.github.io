;(function($){
  $.fn.NoFollow = function() {
    var $this = $(this);
    var page = window.location.pathname;
    var link = $this.attr('href');
    $this.attr('rel', 'nofollow')
         .attr('data-event', 'Left site from ' + page + ' to ' + link)
         .attr('target', '_blank');
  };
})(jQuery);

$(document).ready(function(){
  $('.js-nofollow a').NoFollow();
  // Data event tracking all links for GoSquared
  $('[data-event]').on('click', function() {
    _gs('event', $(this).data('event'));
  });
});
