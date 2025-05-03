
function countSubarray(nums, k){
    let maxNum = Math.max(...nums)
    let left = 0
    let res = 0
    let maxCount = 0
    for(let right = 0; right < nums.length; right++){
        if(nums[right] === maxNum){
            maxCount++
        }
        while(maxCount === k){
            if(nums[left] === maxNum){
                maxCount--
            }
            left++  
        }
        res += left
    }
    console.log(res)
}
countSubarray([1,3,2,3,3], 2)