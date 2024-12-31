var canConstruct = function(ransomNote, magazine) {
    let map = new Map()
    for(let item of magazine){
        map.set(item, (map.get(item) || 0) + 1)
    }
    for(let item of ransomNote){
        if(!map.has(item) || map.get(item) === 0){
            return false
        }
        map.set(item, map.get(item) - 1)
    }
    return true
    
};
console.log(canConstruct('aa', 'aab'))