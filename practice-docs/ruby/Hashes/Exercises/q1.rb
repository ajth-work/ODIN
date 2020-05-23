# Given

family = {  uncles: ["bob", "joe", "steve"],
  sisters: ["jane", "jill", "beth"],
  brothers: ["frank","rob","david"],
  aunts: ["mary","sally","susan"]
}

immed_fam = family.select do |k, v| 
  k == :sisters || k == :brothers 
end 

immed_fam = immed_fam.flatten

puts immed_fam

# immediate_family = family.select do |k, v|
#   k == :sisters || k == :brothers
# end

# arr = immediate_family.values.flatten

# p arr