---
title: Writing Articles in Jekyll with a Rakefile
date: 2015-03-10 00:00:00 Z
categories:
- TIL
---

First, I will layout the entire Rakefile for those whom prefer to copy and paste the code into their solution. Then, I'll explain each section to those, like myself, whom have no idea what half of this code means.


## The Rakefile

{% highlight ruby %}
require ‘fileutils’
require ‘colorize’

namespace :draft do
  desc “Creating a new draft for post/entry”
  task :new do
    puts “What’s the name for your next post?”.colorize(:magenta)
    @name = STDIN.gets.chomp
    @slug = “#{@name}”
    @slug = @slug.tr(‘ÁáÉéÍíÓóÚú’, ‘AaEeIiOoUu’)
    @slug = @slug.downcase.strip.gsub(‘ ‘, ‘-‘)
    FileUtils.touch("_drafts/#{@slug}.md”)
    open(“_drafts/#{@slug}.md”, ‘a’ ) do |file|
      file.puts “—“
      file.puts “layout: post”
      file.puts “title: #{@name}”
      file.puts “date: 2015-03-10”
      file.puts “customid: #{@customid}”
      file.puts “tags:”
      file.puts “—“
      file.puts “# Write Content Here”
    end
    puts “Opening: #{@slug}"
    system(“open -a ‘ia\ writer’ _drafts/#{@slug}.md”)
  end

desc “Publish draft to production folder”
  task :publish do
    puts “List of drafts:\n”.colorize(:light blue)
    Dir.foreach(“_drafts”) do |fname|
    next if fname == ‘.’ or fname == ‘..’ or fname == ‘.keep’
      puts fname.colorize(:blue)
    end
    puts “\nWhat’s the name of the draft to post?”.colorize(:magenta)
    @post_name = STDIN.gets.chomp
    @post_date = Time.now.strftime(“%F”)
    FileUtils.mv(“_drafts/#{@post_name}”, “_posts/#{@post_name}”)
    FileUtils.mv(“_posts/#{@post_name}”, “_posts/#{@post_date}-#{@post_name}”)
    file = “_posts/#{@post_date}-#{@post_name}”
    text = File.read(file)
    puts = text.gsub(/date: 2015-03-10/, “date: #{@post_date}”)
    File.open(file, “w”) { |file| file << puts }
    puts “—  Post copied and ready to deploy!  —“.colorize(:green)
  end
end
{% endhighlight %}

---

## How the Rakefile works

Each section is broken down into smaller code blocks. If at any point you get lost, refer to the completed code block at the top.

### Require gems

Require the gems needed in the Rakefile.

{% highlight ruby %}
# Rakefile
require ‘fileutils’
require ‘colorize’
{% endhighlight %}

{% highlight ruby %}
# Gemfile
source 'https://rubygems.org'
ruby '2.0.0'

gem 'jekyll'
gem 'rake'
gem 'colorize'
{% endhighlight %}

{% highlight bash %}
# terminal
$ bundle install
{% endhighlight %}


*Side Note:* You don’t need the `colorize` gem for this to work. Colorize is a personal preference in order to customize my terminal. The colors help for better readability. If you choose to ignore it you may remove `.colorize(:color)` every where in the document.

### Namespace if you’d like

Using the namespace keeps our writing tasks better organization.

The two tasks included are `:new` and `:publish`. I've added descriptions to help explain our tasks in the task list. To view the list type the following in your terminal:

{% highlight bash %}
# terminal
$ rake -T
{% endhighlight %}

Below is the code for the namespace and tasks:

{% highlight ruby %}
namespace :draft do
  desc “Creating a new draft for post/entry”
  task :new do
    …
  end

  desc “Publish draft to production folder”
  task :publish do
    …
  end
end
{% endhighlight %}

### Inside draft:new

__Grab Title__

First, we need a title of the article when calling the task `$ rake draft:new` in the terminal. The snippet will name the file and add the title to the front matter.

{% highlight ruby %}
puts “What’s the name for your next post?”.colorize(:magenta)
@name = STDIN.gets.chomp
{% endhighlight %}

`STDIN.gets.chomp` will capture what you type in the terminal preceding the question.

__Format Title__

The typed title needs to be converted into a readable string. Then replaces all special characters. Following the special characters is lowercasing everything, then replacing all spaces with a dash. This will now name the document properly for Jekyll.

{% highlight ruby %}
@slug = “#{@name}”
@slug = @slug.tr(‘ÁáÉéÍíÓóÚú’, ‘AaEeIiOoUu’)
@slug = @slug.downcase.strip.gsub(‘ ‘, ‘-‘)
{% endhighlight %}

__Create File__

The `fileutils` gem plays a part in creating a file in the `_drafts` folder. Create this folder before executing the Rakefile.

{% highlight ruby %}
FileUtils.touch(“_drafts/#{@slug}.md”)
{% endhighlight %}

__Write in Document__

The following script will open the file that was just created and right the front matter for you with all of the following information. Feel free to edit this to fit your needs.

{% highlight ruby %}
open(“_drafts/#{@slug}.md”, ‘a’ ) do |file|
   file.puts “—“
   file.puts “layout: post”
   file.puts “title: #{@name}”
   file.puts “date: 2015-03-10”
   file.puts “tags:”
   file.puts “—“
   file.puts “# Write Content Here”
end
{% endhighlight %}

__Open in Application__

Finally, open the new document in your favorite writing application. I've chosen iA Writer.

{% highlight ruby %}
puts “Opening: #{@slug}”
system(“open -a ‘ia\ writer’ _drafts/#{@slug}.md”)
{% endhighlight %}

### Inside draft:publish

Publishing an article from the drafts folder has its own task for specific reasons. For obvious reasons the publish date should be the date the article is published.

__List Drafts__

The terminal wil write out “List of drafts” followed by the obvious loop through all the draft documents in your `_drafts` folder.

{% highlight ruby %}
puts “List of drafts:\n”.colorize(:light blue)
Dir.foreach(“_drafts”) do |fname|
next if fname == ‘.’ or fname == ‘..’ or fname == ‘.keep’
  puts fname.colorize(:blue)
end
{% endhighlight %}

__Choose Draft__

Following listing of the drafts will be a prompt asking what draft you wish to publish. The `@post_name` variable will capture your text.

{% highlight ruby %}
puts “\nWhat’s the name of the draft to post?”.colorize(:magenta)
@post_name = STDIN.gets.chomp
{% endhighlight %}

__Move & Rename Draft__

Added a new variable to display the publish date in the post name for Jekyll. Move the `@post_name` chosen to the `_posts` folder. Once again move within the same folder but prepend the `@post_date` to the document description.

{% highlight ruby %}
@post_date = Time.now.strftime(“%F”)
FileUtils.mv(“_drafts/#{@post_name}”, “_posts/#{@post_name}”)
FileUtils.mv(“_posts/#{@post_name}”, “_posts/#{@post_date}-#{@post_name}”)
{% endhighlight %}

__Add Publish Date to Front Matter__

In the `draft:new` task you may notice we simply added `publish_date` to the front matter. The next part will open the published file, look for the `publish_date` text and replace it with the actual publish date.

{% highlight ruby %}
file = “_posts/#{@post_date}-#{@post_name}”
text = File.read(file)
puts = text.gsub(/date: 2015-03-10/, “date: #{@post_date}”)
File.open(file, “w”) { |file| file << puts }
puts “—  Post copied and ready to deploy!  —“.colorize(:green)
{% endhighlight %}

---

## Done

Finally the terminal responds with the post copied and ready to deploy your new article.
