var containsNearbyDuplicate = function(nums, k) {
    let map = new Map()
    for(let i = 0; i < nums.length; i++){ // 4
       if(map.has(nums[i]) && Math.abs(i - map.get(nums[i])) <= k){
        return true
       }else {
        map.set(nums[i], i)
       }
    }
    return false
};
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))