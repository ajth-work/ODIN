grade = "D"

did_i_pass = case grade 
when "A"
  puts "You're a genius"
  future_bank_account_balance += 5000000
when "D" 
  puts "Better luck next time"
  can_i_retire_soon = false
else 
  puts "McD's is hiring..."
  fml = true
end

age = 16
puts "Welcome to a life of debt." unless age < 17

unless age < 17
  puts "Down with that sort of thing."
else 
  puts "Careful now!"
end