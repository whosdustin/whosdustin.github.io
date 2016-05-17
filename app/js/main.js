;(function($){
  'use strict';
  $.fn.NoFollow = function() {
    var $this = $(this);
    $this.attr('rel', 'nofollow')
         .attr('data-exit', '')
         .attr('target', '_blank');
  };
})(jQuery);
;(function($){
  'use-strict';
  $.fn.Center = function() {
    var $this, height, width;
    $this = $(this);
    height = $this.height();
    width = $this.width();
    return $this.each(function() {
      $this.css({
        'position' : 'absolute',
        'top' : 50 + '%',
        'left': 50 + '%',
        'margin-top' : -(height/2) + 'px',
        'margin-left': -(width/2) + 'px'
      });
    });
  };
})(jQuery);

// Set Defaults to the Validator
jQuery.validator.setDefaults({
  errorClass: 'has-error',
  errorElement: 'span',
  highlight: function(element, errorClass, errorElement) {
    $(element).addClass(errorClass);
  },
  unhighlight: function(element, errorClass) {
    $(element).removeClass(errorClass);
  },
  errorPlacement: function(error, element) {
    error.addClass('help-text').insertAfter(element);
  }
});

$(document).ready(function(){
  $('.js-nofollow a').NoFollow();
  $('#successBox').Center().fadeIn(500);
  $('.hero .wrapper').Center().fadeIn(500);
  $('[data-validate]').validate({
    messages: {
      name: 'I need a name, I can\'t just call you \"blank\"',
      _replyto: {
        required: "How can I reply without an email?",
        email: 'I\m looking for an email address similar to \"john-snow@thewall.com\"'
      },
      message: 'Anything here helps communication :)'
    }
  });

  $('.page-link, .page-title, .post-list h2 a').each(function() {
    var wordArray = $(this).text().split(' ');
    if (wordArray.length > 1) {
      wordArray[wordArray.length - 2] += '&nbsp;' + wordArray[wordArray.length - 1];
      wordArray.pop();
      return $(this).html(wordArray.join(' '));
    }
  });

});

function priceCheck() {
  var val = document.getElementById('price').value;
  if (val > 999) {
     document.getElementById('jsShow').style.display = "block";
  } else {
    document.getElementById('jsShow').style.display = "none";
  }
}
