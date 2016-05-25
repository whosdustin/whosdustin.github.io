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
  errorClass: 'form__input--has-error',
  errorElement: 'span',
  highlight: function(element, errorClass, errorElement) {
    $(element).addClass(errorClass);
  },
  unhighlight: function(element, errorClass) {
    $(element).removeClass(errorClass);
  },
  errorPlacement: function(error, element) {
    error.addClass('form__help-text').insertAfter(element);
  }
});

$(document).ready(function(){
  $('.js-nofollow a').NoFollow();
  $('.hero .wrapper').Center().fadeIn(500);
  $('[data-validate]').validate({
    messages: {
      email: {
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

  var priceKey = 0;
  $('#priceInput').keyup(function(event) {
    if(event.which >= 37 && event.which <= 40) return;
    // format number
    $(this).val(function(index, value) {
      return value
      .replace(/\D/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    });
    var val = $(this).val().replace(/,/g, '');
    if (val > 2999) {
       $('#priceButton').removeClass("button--is-disabled");
    } else {
      $('#priceButton').addClass("button--is-disabled");
    }
    priceKey++;
    if (priceKey == 7) {
      $('.form__input--money').append('<span class=\'form__help-text form__help-text--has-success\'>For real? I\'d be honored to work with you.</span>');
      $(this).addClass('form__input--has-success');
    } else if (val.length < 6) {
      $(this).removeClass('form__input--has-success');
      $('#priceInput + .form__help-text').remove();
    }
  });

  $('#priceButton').click(function() {
    var val = $('#priceInput').val();
    $('#jsShow').addClass('sidepanel--is-visible');
    $('#jsShow input[name=subject]').val('My budget is $' + val);
    $('#jsShow textarea[name=message]').val('Hey Dustin,\n\nThe project includes...');
  });

  $('.sidepanel-close').click(function() {
    if ($('#jsShow').hasClass('sidepanel--is-visible')) {
      $('#jsShow').removeClass('sidepanel--is-visible');
    }
  });


});
