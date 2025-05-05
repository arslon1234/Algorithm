function sumNumber(n){
    let res = 0
    while(n > 0){
        res += n % 10
        n = Math.floor(n / 10)
    }
    return res
}

function countLargestGroup (num){
    let map = new Map()
    let result = 0
    for(let i = 1; i <= num; i++){
        let sum = sumNumber(i)
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    let arr = map.values()
    let max = Math.max(...arr)
    for(let [_, count] of map){
        if(count === max){
            result += 1
        }
    }
    return result
}
countLargestGroup(13)