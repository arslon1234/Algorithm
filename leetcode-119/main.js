
function generatedRow(prev){
    let next = [1]
    for(let i = 0; i < prev.length - 1; i++){
        next.push(prev[i] + prev[i + 1])
    }
    next.push(1)
    return next
}
var getRow = function(rowIndex) {
    let row = [1]
    let result = [row]
    for(let i = 0; i < rowIndex; i++){
        let generated_row = generatedRow(row) 
        result.push(generated_row)
        row = generated_row
    }
    return result.at(-1)
};

console.log(getRow(0))