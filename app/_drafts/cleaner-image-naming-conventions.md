---
layout: post
title: Cleaner Image Naming Conventions
publish_date:
categories:
---

## What Image folders look like to developers

It is very complicated sifting through an entire image directory for the exact image that is needed on a particular page in a particular section. They always have crazy names with camel case or dashes or underscores. Some have outrageous name that explain everything that is going on in an image. Some have the size of the image appended to the name of the image.

{% highlight html %}
Brand_Logo_White_240x240.png
{% endhighlight %}

Worst, is if the name comes straight from the camera to the development environment. Names from the camera mean nothing to a developer or even a designer.

{% highlight html %}
DCMI039476301.jpg
{% endhighlight %}

How is this supposed to be helpful for anyone but the photographer, who can look at the chronological order of the images taken on that given day.

Organization is key and helps balance the speed between the folder structure and the code where developers only see the words of the image and have to judge what type of image it is by saving and refreshing the page to see how it looks. With a proper naming convention both designers and developers can work quickly and easily. Plus the handoff is far simpler for both parties

**Naming images in design tools**
With all the design platforms they have amazing exportable features attached to them. Especially Sketch, which will export and image or folder which surrounds an svgs that was created. Photoshop, although a little more complicated, offer slice naming when exporting sections of images. There are also incredible plugins for photoshop such as pngexpress which uses the name of the layer/group to export directly from the document to a specified folder on the computer.

## How to Name the images for cleanliness

It’s as simple as

Prefix Images

- Logo = lgo
- Icon = ico
- Image = img
- Background = bkg
- Banner = bnr
- Video = vid
- Sprite = spr
