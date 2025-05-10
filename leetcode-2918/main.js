function minSum(nums1, nums2){
    let zero1 = 0
    let zero2 = 0
    let sum1 = 0
    let sum2 = 0
    for(let i = 0; i < nums1.length; i++){
        sum1 += nums1[i]
        if(nums1[i] === 0){
            zero1++
            sum1++
        }
    }
    for(let i = 0; i < nums2.length; i++){
        sum2 += nums2[i]
        if(nums2[i] === 0){
            zero2++
            sum2++
        }
    }
   if((zero1 === 0 && sum2 > sum1) || (zero2 === 0 && sum1 > sum2)){
    return -1
   }
   return Math.max(sum1, sum2)
}

console.log(minSum([3,2,0,1,0], [6,5,0]))