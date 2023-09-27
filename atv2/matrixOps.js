function transpose(matrix) {
    let transposition = [];
    for(j = 0; j < matrix[0].length; j++) {
        transposition.push(new Array(matrix.length));
    }

    for(i = 0; i < matrix.length; i++) {
        for(j = 0; j < matrix[i].length; j++) {
            transposition[j][i] = matrix[i][j];
        }
    }

    return transposition;
}

function multiply(a, b) {

}