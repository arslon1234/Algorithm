var productExceptSelf = function(nums) {
    let prefix_count = 1
    let suffix_count = 1
    const prefix = []
    const suffix = []
    for(let item of nums){
        prefix_count *= item
        prefix.push(prefix_count)
    }
    for(let item of nums.reverse()){
        suffix_count *=  item
        suffix.push(suffix_count)
    }
    suffix.reverse()
    const result = []
    console.log(suffix, 'suffix')
    console.log(prefix, 'prefix')
    for(let i = 0; i < nums.length; i++){
        let left = 1
        let right = 1
        if(i > 0){
            left = prefix[i - 1]
        } 
        if(i < nums.length - 1){
            right = suffix[i + 1]
        }
        let prod = left * right
        result.push(prod)
    }
    return result
};
productExceptSelf([1,2,3,4])

// Bu savolni prefix va suffix yordamida ishlandi
// arrayning boshidan boshlab qo'shib kelish va oxiridan boshlab qo'shib kelish