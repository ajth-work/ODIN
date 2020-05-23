my_hash = Hash.new
my_hash = {
  9 => "nine", 
  :six => 6 
}

my_hash[:six] = 60

my_hash.delete(9)
puts my_hash

hash1 = { "a" => 100, "b" => 200 }
hash2 = { "b" => 254, "c" => 300 }
puts hash1.merge(hash2)      #=> { "a" => 100, "b" => 254, "c" => 300 }

# "Rocket" syntax 
american_cars = {
  :chevrolet => "Corvette",
  :ford => "Mustang",
  :dodge => "Ram"
}

# "Symbols" syntax
japanese_cars = {
  honda: "Accord",
  toyota: "Corolla",
  nissan: "Altima"
}

puts american_cars[:ford]
puts japanese_cars[:honda]

person = {
  name: "Bob",
  height: "6 ft",
  weight: "160 lbs",
  hair: "brown"
}

person.each do |key, value, name|
  puts "Bob's #{key} is #{value}."
end
