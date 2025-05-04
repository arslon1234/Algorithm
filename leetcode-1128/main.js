function numEquivDominoPairs (nums){
    let map = new Map()
    let count = 0
    for(let i = 0; i < nums.length; i++){
        let [a,b] = nums[i]
        let mapKey = [Math.min(a,b), Math.max(a,b)].join(',')
        if(map.has(mapKey)){
            count += map.get(mapKey)
        }
        map.set(mapKey, (map.get(mapKey) || 0) + 1)
    }
    return count
}
numEquivDominoPairs([[1,2],[2,1],[3,4],[5,6]])