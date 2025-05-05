function countCompleteSubarray (nums){
    // find the count of unique numbers
    let set = new Set(nums)
    let map = new Map()
    let j = 0
    let count = 0
    for(let i = 0; i < nums.length; i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        while(map.size === set.size){
            map.set(nums[j], map.get(nums[j]) - 1)
            if(map.get(nums[j]) === 0) map.delete(nums[j])
                j++
        }
        count += j
    }
    console.log(count)
}

countCompleteSubarray([1,3,1,2,2])