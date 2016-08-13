---
title: "Asset Naming Consistency"
date: 2016-05-05
categories: "Show"
---
Finding image assets in a directory can be a pain in the ass. They tend to have crazy names and lack consistency using numbers, camel case, dashes, and underscores. There have been attempts at naming conventions that explain every detail of the image. Some files may state the size, the name, colors, and size (ex. Brand_Logo_White_240x240.png).

The worst is if the name comes straight from a camera to the developer. Names from the camera mean nothing to a developer or even a designer for that matter. (ex. _DCMI039476301.jpg_). Who is this supposed to be helpful for besides possibly the photographer? With a proper/simple naming convention both designers and developers can work quickly and easily.

## Prefix Name With Asset Type

Adding the asset type at the beginning followed by a dash will is all you'd have to do. The reason for this is because file explorers will arrange documents by alphabetical order. By prefixing the asset time you are grouping assets by what they are and where they belong in the project. Below are the prefix names I use for all of my images.

- Logo = lgo
- Icon = ico
- Image = img
- Background = bkg
- Banner = bnr
- Video = vid
- Sprite = spr

__Examples:__
{% highlight html %}
lgo-brand-image.png
bkg-hero-image.png
img-author.jpg
{% endhighlight %}


## Naming images in design tools

Design platforms have amazing exportable features integrated in them. [Sketch](http://sketchapp.com/) seems to be the best, exporting images using the layer name as the exported title. Photoshop is getting better, although a little more complicated. There is an incredible plugin for Photoshop called [PNGexpress](http://www.pngexpress.com/), which uses the name of the layer/group to export directly from the document to a any folder on the computer.
