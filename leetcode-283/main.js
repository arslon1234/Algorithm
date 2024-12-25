function moveZeroes(nums){
    let count = 0
    for(let i = 0; i < nums.length; i++){
        if(nums[i] !== 0){
            // bu joyda destructing assignment dan foydalanib
            // sonlar ning o'rnini almashtirayapti
           [nums[i], nums[count]] = [nums[count], nums[i]]
           count++
        }
        
    }
   return nums
}
moveZeroes([1,0,3,0,5])