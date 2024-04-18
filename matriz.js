export function generateMatrix(matrixSize) {
    let matrixInputHTML = "";
    for (let i = 0; i < matrixSize; i++) {
        for (let j = 0; j < matrixSize; j++) {
            matrixInputHTML += `<input type="number" class="matrix-cell" placeholder="0">`;
        }
        matrixInputHTML += "<br>";
    }
    return matrixInputHTML;
}

export function getMatrixFromInput() {
    const matrixCells = document.getElementsByClassName("matrix-cell");
    const matrixSize = calculateMatrixSize(matrixCells.length);
    const matrix = [];

    let cellIndex = 0;
    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = [];
        for (let j = 0; j < matrixSize; j++) {
            let cellValue = 0;
            if (matrixCells[cellIndex].value !== "") {
                cellValue = parseInt(matrixCells[cellIndex].value);
            }
            matrix[i][j] = cellValue;
            cellIndex++;
        }
    }

    return matrix;
}

export function sortMatrix(matrix) {
    const flattenedMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            flattenedMatrix.push(matrix[i][j]);
        }
    }

    for (let i = 0; i < flattenedMatrix.length - 1; i++) {
        for (let j = 0; j < flattenedMatrix.length - i - 1; j++) {
            if (flattenedMatrix[j] > flattenedMatrix[j + 1]) {
                const temp = flattenedMatrix[j];
                flattenedMatrix[j] = flattenedMatrix[j + 1];
                flattenedMatrix[j + 1] = temp;
            }
        }
    }

    const sortedMatrix = [];
    let index = 0;
    for (let i = 0; i < matrix.length; i++) {
        sortedMatrix[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            sortedMatrix[i][j] = flattenedMatrix[index];
            index++;
        }
    }

    return sortedMatrix;
}

export function displayMatrix(matrix) {
    let outputHTML = "<h2>Matriz Ordenada:</h2>";
    for (let i = 0; i < matrix.length; i++) {
        let rowString = "";
        for (let j = 0; j < matrix[i].length; j++) {
            rowString += matrix[i][j] + " ";
        }
        outputHTML += "<p>" + rowString + "</p>";
    }
    document.getElementById("output").innerHTML = outputHTML;
}

function calculateMatrixSize(totalCells) {
    let size = 1;
    while (size * size < totalCells) {
        size++;
    }
    return size;
}
