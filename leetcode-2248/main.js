function intersection (nums){
    let map = new Map()
    let res = []
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums[i].length; j++){
            let num = nums[i][j]
            if(!map.has(num)){
                map.set(num, [j])
            }else {
                map.get(num).push(j)
            }
        }
    }
    for(let [key, value] of map){
        if(value.length === nums.length){
            res.push(key)
        }
    }
    return res
}
console.log(intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]))