function findCountNumber(num){
    return Math.floor(Math.log10(num)) + 1
}
var findNumbers = function(nums) {
    let count = 0
    for(let i = 0; i < nums.length; i++){
        if(findCountNumber(nums[i]) % 2 == 0){
            count++
        }
    }
    return count
};