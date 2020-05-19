banana = " hello "

# More 
puts banana.capitalize
puts banana.include?("lo")
puts banana.include?("z")
puts banana.upcase
puts banana.downcase
puts banana.empty?
puts banana.length
puts banana.reverse 
puts banana.split
puts banana.strip

# Even More
puts banana.sub("e", "a") # singular substitution
puts banana.gsub("l", "L") # global substitution
puts banana.insert(-1, " friend")
puts banana.split("")
puts "!".prepend(banana)
