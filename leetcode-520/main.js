function isRange(str, start, end){
    for(let item of str){
        if(!(start <= item && item <= end)){
            return false
        }
    }
    return true
}
function isUpper(str){
    return isRange(str, 'A', 'Z')
}
function isLower(str){
    return isRange(str, 'a', 'z')
}
var detectCapitalUse = function(word) {
    if(isUpper(word) || isLower(word)){
        return true
    }
    return isUpper(word[0]) && isLower(word.slice(1, word.length))
};

console.log(detectCapitalUse('Hello'))

// ASCII yordamida ishlandi lekin son aralashtirmasdan