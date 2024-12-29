var twoSum = function(nums, target) {
    let result = []
    let map = new Map()
    for(let i = 0; i < nums.length; i++){
        if(map.has(target - nums[i])){
            result.push(i, map.get(target - nums[i]))
        }
        map.set(nums[i], i)
    }
    return result
};
twoSum([2,7,11,15], 9)