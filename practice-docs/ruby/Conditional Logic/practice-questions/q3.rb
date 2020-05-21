puts "Give me a number, preferably between 0 and 100, please!"
user_num = gets.chomp.to_i

case 
when user_num > 0 && user_num < 50
  puts "between 0 and 50"
when user_num > 50 && user_num < 100
  puts "between 51 and 100"
when user_num > 100
  puts "above 100"
else puts "less than 0"
end
