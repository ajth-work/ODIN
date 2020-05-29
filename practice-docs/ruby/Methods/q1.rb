def greeting (name="User", city="New York", country="America") 
  return "Hello, #{name}. I hear you're from the #{city} area in #{country}. How's the weather in #{city} these days?"
end

puts greeting("Runako", "Harare", "Zimbabwe")
puts greeting()

# #solution
# def greeting(name)
#   "Hello, " + name + ". How are you doing?"
# end

# puts greeting("Bob")