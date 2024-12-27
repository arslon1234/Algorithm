var lengthOfLongestSubstring = function(s) {
    let longest = 0
    let left = 0
    let right = 0
    let set = new Set()
    while(right < s.length){
        let letter = s[right]
        if(!set.has(letter)){
            set.add(letter)
            longest = Math.max(longest, set.size)
            right++
        }else {
            set.delete(left)
            left++
        }
    }
    return longest
};
console.log(lengthOfLongestSubstring('abcabcbb'))