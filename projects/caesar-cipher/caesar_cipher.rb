# convert string to number
# wrap z to a 
# keep the same case
# i.e., caesar_cipher("What a string!", 5)
#       "Bmfy f xywnsl!"

num_array = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] 

# Get Letters 
puts "Enter letters from a to z: "
request = gets.chomp
# Get NUmber to Offset Letters By
puts "Enter a number: "
offset_number = gets.chomp.to_i

#Split the Letters" string into an array
breakdown = request.split("")
p breakdown

# Change each letter in the array to the offset value
puts breakdown.each {|.gsub(breakdown[i], num_array[num_array["#{breakdown[i]}"].index + offset_number]) }