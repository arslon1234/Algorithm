var wordPattern = function(pattern, s) {
    let arr = s.split(" ").filter(item => item !== "")
    let map = new Map()
    if(arr.length !== pattern.length) return false
    if(new Set(arr).size !== new Set(pattern).size) return false
    for(let i = 0; i < pattern.length; i++){
      if(map.has(pattern[i]) && map.get(pattern[i]) !== arr[i]){
        return false
      }
      map.set(pattern[i], arr[i])
    }
    return true
};

console.log(wordPattern("abba", "dog dog dog dog"))