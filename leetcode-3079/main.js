function encrypt(num){
    let max = 0
    let len = 0
    while(num > 0){
        let n = num % 10
        if(n > max){
            max = n
        }
        num = Math.floor(num / 10)
        len++
    }
    let res = String(max).repeat(len)
    return Number(res)
}
function sumOfEncryptedInt (nums){
    let res = 0
    for(let i = 0; i < nums.length; i++){
        res += encrypt(nums[i])
    }
    return res
}
console.log(sumOfEncryptedInt([10,21,31]))
