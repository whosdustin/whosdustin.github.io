---
layout: post
title: jQuery Validation for Formspree.io
publish_date:
categories: articles
---

At work I have been tasked with creating a validation standards. While I have been working on the standards I was in the middle of rebuilding my site. At first, I was going to offer up my email address as a place for someone to compose the email and send me questions or complaints.

After about a day or two I realized I am incapable of tracking how many people have sent me an email. Therefore I went back to having a contact form. I stumbled upon an amazing site called [Formspree.io](http://formspree.io) which allows me to add from to my static site.

Formspree only tells me how to add the form and post to their site along with the email I want the form to be sent to. After that they stop and don’t add any validation to the form. No point in sending a bunch of empty emails to myself.

While working with form validations at work I have been working with jQuery-validation as a library to check my form and bind error classes and messages to each input field that errors out.

## Formspree Form

Below is the form with all of the unique fields they offer within their service. 

{% highlight html %}
<form id=“formId” action=“//formspree.io/your@email.com” method=“post”>
  <label for=“name”>Name</label>
  <input type=“text” name=“name” value=“” required>
  <label for=“_replyto”>Email</label>
  <input type=“email” name=“_replyto” required>
  <label for=“message”>Message</label>
  <textarea name=“message” rows=“4” required></textarea>
  <input type=“submit” name=“submit” value=“Send” />
  <input type=“hidden” name=“_subject” value=“Submitted Form”>
  <input type=“hidden” name=“_next” value=“//domain.com/success/“ />
  <input type=“text” name=“_gotcha” style=“display:none” />
</form>
{% endhighlight %}

## Install Validation

Before starting it would be smart to download the jQuery validation scripts. The simplest way is to use [Bower](http://bower.io/) inside your directory.

{% highlight bash %}
$ bower install jquery-validate
{% endhighlight %}

This will install in your directory a folder `_bower_components` and fill it with both jQuery as well as the jQuery-validate. I recommend moving the files to a `js/vendor` library. You will put them both scripts the bottom of your document.

{% highlight html %}
<script src=“/js/vendor/jquery.min.js”></script>
<script src=“/js/vendor/jquery.validate.min.js”></script>
{% endhighlight %}

## Enter Defaults for Validation

The validator has a method for including customizations to the error messages.

{% highlight javascript %}
// Set Defaults to the Validator
jQuery.validator.setDefaults({
  errorClass: ‘has-error’,
  errorElement: ‘span’,
  highlight: function(element, errorClass, errorElement) {
    $(element).addClass(errorClass);
  },
  unhighlight: function(element, errorClass) {
    $(element).removeClass(errorClass);
  },
  errorPlacement: function(error, element) {
    error.addClass(‘help-text’).insertAfter(element);
  }
});
{% endhighlight %} 

{% highlight javascript %}
$(‘#formId’).validate({
    messages: {
      name: ‘Please enter a name.’,
      _replyto: {
        required: “Please enter an email”,
        email: ‘Please enter a valid email email@domain.com’
      },
      message: ‘Please enter a message’
    }
  });
{% endhighlight %}
