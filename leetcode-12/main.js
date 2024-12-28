var intToRoman = function(num) {
    const romanValues = [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1]
    ];
    let number = num
    let result = ""
    for(let i = 0; i < romanValues.length; i++){
        let count = Math.floor(number / romanValues[i][1])
        if(count > 0){
            console.log(count, i)
            result += romanValues[i][0].repeat(count)
        }
        number -= count * romanValues[i][1]
    }
    return result
    
};
console.log(intToRoman(53))
console.log(53 / 50)