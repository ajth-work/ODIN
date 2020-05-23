person = {name: 'K', occupation: 'shop clerk', hobby: 'playing games'}

puts person.keys
puts person.values
puts person.flatten

person.each { |k, v| puts "K's #{k} is #{v}"}

# #solution
# opposites = {positive: "negative", up: "down", right: "left"}

# opposites.each_key { |key| puts key }
# opposites.each_value { |value| puts value }
# opposites.each { |key, value| puts "The opposite of #{key} is #{value}" }