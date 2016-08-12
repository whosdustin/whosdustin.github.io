---
title: "Asset Naming Consistency"
date: 2016-05-05
categories: "Show"
---
Finding image assets in a directory can be a pain in the ass. They tend to have crazy names and lack consistency using numbers, camel case, dashes, and underscores. I've seen an attempt of naming conventions that explain everything that is going on in an image. Some have the size of the image, the name of the image (ex. Brand_Logo_White_240x240.png).

The worst I've, is if the name comes straight from the camera to the developer. Names from the camera mean nothing to a developer or even a designer for that matter. (ex. _DCMI039476301.jpg_). How is this supposed to be helpful for besides the photographer?

Organization is key and helps balance the speed between the folder structure and the code where developers only see the words of the image. With a proper/simple naming convention both designers and developers can work quickly and easily. Plus the handoff is far simpler for both parties.

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
