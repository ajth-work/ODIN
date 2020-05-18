# preparation.rb
require "pry"

a = [1,2,3]
a << 4
binding.pry   # execution should pause here for inspection purposes
puts a