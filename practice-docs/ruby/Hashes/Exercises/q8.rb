words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
  'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
  'flow', 'neon']

# I didn't know how to do this, so I commented each step for my own understanding.
# Solution: 

result = {}

#for each word in hash called words do the following:
words.each do |word|
  # each word is split into its individual letters, then sorted in abc order, then joined back together
  key = word.split("").sort.join
  #if a repeat of a word, i.e., demo, is found, then it adds the original order of that word to the list for the key, i.e, found "demo" becomes original "dome" or "mode".
  if result.has_key?(key)
    result[key].push(word)
  # otherwise, if that word occurs only once, then the key becomes that word that only occured once.
  # (not 100% about my understanding of that previous comment)
  else
    result[key] = [word]
  end
end

result.each_value do |v|
  puts "------"
  p v
end