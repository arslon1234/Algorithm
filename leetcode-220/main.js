var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
    for(let i = 0; i < nums.length; i++){
        for(let g = 0; g < i; g++){
            if(Math.abs(nums[i] - nums[g]) <= valueDiff && Math.abs(i - g) <= indexDiff){
                return true
            }
        }
    }
    return false
};
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3))
// hali tugamadi