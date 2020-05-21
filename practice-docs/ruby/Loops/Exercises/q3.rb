def countdown(start)
  puts start
  if start >= 0
    countdown( start - 1 )
  end
end
countdown(10)


#solution
=begin 
def count_to_zero(number)
  if number <= 0
    puts number
  else
    puts number
    count_to_zero(number-1)
  end
end

count_to_zero(10)
count_to_zero(20)
count_to_zero(-3)
 =end