var threeConsecutiveOdds = function(arr) {
    for(let i = 1; i < arr.length - 1; i++){
        if(arr[i - 1] % 2 !== 0 && arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0){
            return true
        }
    }
    return false
};