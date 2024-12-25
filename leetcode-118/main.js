function generate_row(prev){
     let next = [1]
     for(let i = 0; i < prev.length - 1; i++){
        next.push(prev[i] + prev[i+1])
     }
     next.push(1)
     return next
}
var generate = function(numRows) {
    if(numRows === 0) return []
    let row = [1]
    let result = [row]
    for(let i = 1; i < numRows; i++){
        let a = generate_row(row)
        result.push(a)
        row = a
    }
    return result
};
console.log(generate(0))