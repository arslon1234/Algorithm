function setZeroes(matrix){
    let position = []
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                position.push([i,j])
            }
        }
    }
    for(let i = 0; i < position.length; i++){
        let [row, col] = position[i]
        for(let j = 0; j < matrix.length; j++){
            matrix[j][col] = 0
        }
        for(let f = 0; f < matrix[0].length; f++){
            matrix[row][f] = 0
        }
    }
    return matrix
}