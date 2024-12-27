function longestPalindrome(s) {
    let longest = ""
    // Berilgan stringdan palindrome substring larni qaytarib beruvchi function
    function isPalindrome(s, left, right){
        while(left >= 0 && right < s.length && s[left] === s[right]){
            left--; // chapga kengayadi
            right++ // o'nga kengayadi
        }
        return s.slice(left + 1, right)
    }
    for(let i = 0; i < s.length; i++){
        let oddPal = isPalindrome(s, i, i) // b, bab, aba, a, ada, a
        let evenPal = isPalindrome(s, i, i+1) // bu function faqatgina ketma ket bir harf kelib qolsa ishlaydi
        let longestPal = oddPal.length > evenPal.length ? oddPal : evenPal
        if(longestPal > longest){
            longest = longestPal
        }   
    }
    return longest
}

// Misollar:
console.log(longestPalindrome("babada")) 


