i = 0
loop do
  puts "loop loop i is #{i}"
  i += 1
  break if i == 10
end

i = 0
while i < 10 do
  puts "while loop i is #{i}"
  i += 1
end

while gets.chomp != "yes" do
  puts "Do you like me?"
    if gets.chomp == "yes"
      then puts "that's just great"
    end
end 

i = 0
until i > 10 do
  puts "until loop i is #{i}"
  i += 1
end

until gets.chomp == "yes" do
  puts "Do you like me?"
end

puts 1..10
puts 1...10
puts 'a'..'g'
puts 'a'...'g'

for i in 0..5
  if i == 1 then puts "#{i} zombie incoming!"
  else puts "#{i} zombies incoming!"
  end
end

5.times do
  puts "Hello, world!"
end

5.times do |number|
  puts "Alternative fact number #{number+1}"
end

5.upto(10) {|num| print "#{num} "}

10.downto(5) {|num| print "#{num} "}

