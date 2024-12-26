var sortedSquares = function(nums) {
    let i = 0
    let g = nums.length - 1
    const result = []
    while(i <= g){
        if(Math.abs(nums[i]) < Math.abs(nums[g])){
            result.push(Math.pow(nums[g], 2))
            g -= 1
        }else {
            result.push(Math.pow(nums[i], 2))
            i += 1
        }
    }
    result.reverse()
    // return result
    console.log(result)
};

let arr = [-4,-1,0,3,10]
sortedSquares(arr)