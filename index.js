import { generateMatrix, getMatrixFromInput, sortMatrix, displayMatrix } from './matriz.js';

document.getElementById("generateButton").addEventListener("click", start);
document.getElementById("sortButton").addEventListener("click", sortAndDisplayMatrix);

function start() {
    const matrixSizeInput = document.getElementById("matrixSize");
    const matrixSize = parseInt(matrixSizeInput.value);
    
    const matrixInputDiv = document.getElementById("matrixInput");
    matrixInputDiv.innerHTML = generateMatrix(matrixSize);
}

function sortAndDisplayMatrix() {
    const matrix = getMatrixFromInput();
    const sortedMatrix = sortMatrix(matrix);
    displayMatrix(sortedMatrix);
}
