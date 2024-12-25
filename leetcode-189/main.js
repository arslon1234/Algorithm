var rotate = function(nums, k) {
    let n = nums.length
    k = k % n
    
    // helper function yaratish reverse qilish uchun
    function reverse(arr, start, end){
        while(start < end){
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++,
            end--
        }
    }

    // 1. to'liq array ni reverse qilish
    reverse(nums, 0, n - 1)
    // 2. birinchi k element ni reverse qilish
    reverse(nums, 0, k - 1)
    // 3. k dan tashqari qoganlarini qayta reverse qilish
    reverse(nums, k, n - 1)
    console.log(nums)
};
const nums = [1,2,3,4,5,6,7]
const k =  3
rotate(nums, k)