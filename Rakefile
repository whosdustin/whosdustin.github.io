require 'fileutils'
require 'colorize'

# task :default => :draft:new

@time = Time.now.utc
@draft_dir = 'app/_drafts'
@post_dir = 'app/_posts'
@resume_dir = 'app/_data'

## Articles ====================================================================

namespace :draft do
  # New Drafts
  desc "Creating a new draft for post/entry"
  task :new do
    puts "What's the name for your next post?".colorize(:magenta)
    @name = STDIN.gets.chomp
    @slug = "#{@name}"
    @slug = @slug.tr('ÁáÉéÍíÓóÚú', 'AaEeIiOoUu')
    @slug = @slug.downcase.strip.gsub(' ', '-')
    FileUtils.touch("#{@draft_dir}/#{@slug}.md")
    open("#{@draft_dir}/#{@slug}.md", 'a' ) do |file|
      file.puts "---"
      file.puts "layout: post"
      file.puts "title: #{@name}"
      file.puts "publish_date:"
      file.puts "categories:"
      file.puts "---"
      file.puts "Write Content Here..."
    end
    puts "Opening: #{@slug}"
    system("open -a 'ia\ writer' #{@draft_dir}/#{@slug}.md")
  end

  # Open Drafts
  desc "Open from the draft list"
  task :open do
    puts "List of drafts:\n".colorize(:lightblue)
    Dir.foreach("#{@draft_dir}") do |fname|
    next if fname == '.' or fname == '..' or fname == '.keep'
      puts fname.colorize(:blue)
    end
    puts "\nWhat draft would you like to open?".colorize(:magenta)
    @post_name = STDIN.gets.chomp
    puts "Opening #{@post_name}"
    system("open -a 'ia\ writer' #{@draft_dir}/#{@post_name}")
  end

  # Publish Drafts
  desc "Copy draft to production post!"
  task :publish do
    puts "List of drafts:\n".colorize(:lightblue)
    Dir.foreach("#{@draft_dir}") do |fname|
    next if fname == '.' or fname == '..' or fname == '.keep'
      puts fname.colorize(:blue)
    end
    puts "\nWhat's the name of the draft to post?".colorize(:magenta)
    @post_name = STDIN.gets.chomp
    @post_date = Time.now.strftime("%F")
    FileUtils.mv("#{@draft_dir}/#{@post_name}", "#{@post_dir}/#{@post_name}")
    FileUtils.mv("#{@post_dir}/#{@post_name}", "#{@post_dir}/#{@post_date}-#{@post_name}")
    file = "#{@post_dir}/#{@post_date}-#{@post_name}"
    text = File.read(file)
    puts = text.gsub(/publish_date:/, "date: #{@post_date}")
    File.open(file, "w") { |file| file << puts }
    puts "--  Post copied and ready to deploy!  --".colorize(:green)
  end
end

## Resume Build ================================================================

namespace :build do

  desc "Build Resume"
  task :resume do
    status = system("cd #{@resume_dir} && resume export dustin-delatore-resume.pdf --theme short")
    puts status ? "-- Success -- ".colorize(:green) : "[FAILED]".colorize(:red)
  end

end

## Source Control ==============================================================

desc "Commit repository"
task :commit do
  puts "\n## Staging modified files".colorize(:blue)
  status = system("git add -A")
  puts status ? "-- Success --".colorize(:green) : "[FAILED]".colorize(:red)
  puts "\n## Committing a site build at #{@time}".colorize(:blue)
  puts "\n## What is your commit message?".colorize(:magenta)
  @message = STDIN.gets.chomp
  status = system("git commit -am \"#{@message}\"")
  puts status ? "-- Success --".colorize(:green) : "[FAILED]".colorize(:red)
end
