class BodyClassTag < Liquid::Tag

  def generate_body_class(prefix, id)
		id = id.downcase
    case prefix
    when "class"
      prefix = ""
    else
      prefix = "#{prefix}__"
    end

    "#{prefix}#{id}"
  end

  def render(context)
    page = context.environments.first["page"]
    classes = []

    %w[categories].each do |prop|
      next unless page.has_key?(prop)
      if page[prop].kind_of?(Array)
        page[prop].each { |proper| classes.push generate_body_class(prop, proper) }
      else
        classes.push generate_body_class(prop, page[prop])
      end
    end

    classes.join(" ")
  end

end

Liquid::Template.register_tag('body_class', BodyClassTag)
