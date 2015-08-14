---
layout: post
title: Freshly Rebuilt Website
date: 2015-08-14
categories: articles
---

Rebuilt my website after several years with a stagnant portfolio site. It was built fast and careless as my knowledge for development was that of a junior developer. I considered myself a’hybrid’ UI designer and front-end developer but focused more on design. The new site on the other hand is a reflection upon my career choice and passion for Front-end Development. 

## Under The Hood

My site is built in [Jekyll](http://jekyllrb.com) with the help of an amazing [Yeoman generator](https://github.com/robwierzbowski/generator-jekyllrb). I highly recommend to those using Jekyll. A major change to the site is it’s hosting. What was once hosted by [Pagoda Box](http://pagodabox.io) has now found a new home at [Github pages](https://pages.github.com/).

As far as the front-end, my site is comprised of Sass for layout and styling. Also, combination of javascript and jQuery for small tracking items. I will soon be making the move to coffeescript for any DOM manipulations.

### Sass styling

Over the past year I have been developing [style guidelines](https://github.com/Bisk/Front-end-Standards/wiki/Table-of-Contents) for [Bisk Education](http://bisk.com) and decided to implement them on this new site as well.

The grid system is built with the help of the semantic grid framework [Susy](http://susydocs.oddbird.net/en/latest/). No more ‘bloated’ css libraries full of every possible grid combination. I am allowed to capture the bare minimum for what I need; keeping my code small, clean, and concise.

### Scripting

All of my javascript is basically for tracking and SEO purposes. I use [GoSquared](http://gosquared.com) for all my site tracking. Google Analytics is an amazing and free tool but I chose to venture away from the norm. I added a simple jQuery plugin that added `data-event`s to all my article links explaining in plain english where my visitors have gone.

It looks like this:

{% highlight javascript %}
;(function($){
  ‘use strict’;
  $.fn.NoFollow = function() {
    var $this = $(this);
    var page = window.location.pathname;
    var url = $this.attr(‘href’);
    $this.attr(‘rel’, ‘nofollow’)
         .attr(‘data-event’, ‘Left site from ‘ + page + ‘ to ‘ + url)
         .attr(‘target’, ‘_blank’);
  };
})(jQuery);
{% endhighlight %}  

{% highlight javascript %}
$(‘.js-nofollow a’).NoFollow();
{% endhighlight %}

GoSquared has great documentation when it comes to click tracking on all site actions. With the attached js I am able to read all `data-event`s with their simple call.

{% highlight javascript %}
$(‘[data-event]’).on(‘click’, function() {
    _gs(‘event’, $(this).data(‘event’));
  });
{% endhighlight %}

## No More Designs

I previously had designs on the site for my portfolio. I have removed them and will no longer be hosting them here. My designs will be hosted on external sites such as [Behance](https://www.behance.net/whosdustin) and [Dribbble](http://dribbble.com/whosdustin). This is all part of an effort to focus all my efforts to writing articles about front-end development. 

Coming soon to the site will also be all my open-source projects I am working on. 





  