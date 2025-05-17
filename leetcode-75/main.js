function sortColors(nums, left = 0, right = nums.length - 1){
    if(left < right){
        let pivotIndex = partition(nums, left, right)
        sortColors(nums, left, pivotIndex - 1)
        sortColors(nums, pivotIndex + 1, right)
    }
    return nums
}
function partition(arr, left, right){
    let pivot = arr[right]
    let i = left - 1
    for(let j = left; j < right; j++){
        if(pivot > arr[j]){
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]
    return i + 1
}