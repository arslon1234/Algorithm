function countPairs(nums, k){
    let count = 0
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[i] === nums[j] && (i * j) % k == 0){
                count++
            }
        }
    }
    return count
}
countPairs([3,1,2,2,2,1,3], 2)