var reverseString = function(s) {
    let left = 0
    let right = s.length - 1
    while(left < right){
        [s[left], s[right]] = [s[right], s[left]]
        left += 1
        right -= 1
    }
    return s
};
// bu joyda two pointer va descruction bilan elementlar o'rnini almashtirdik
