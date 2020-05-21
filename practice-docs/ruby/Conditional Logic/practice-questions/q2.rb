b = "helLo WorlD"
puts b + ", up or down?"
a = gets.chomp

case a
when "up"
  answer = b.upcase
 when "down"
  answer = b.downcase 
end
puts answer