
function getNeighborCount(currGen, row, col) {
  let count = 0;
  let nrow=Number(row);
  let ncol=Number(col);
  let rows = currGen.length
  let cols = currGen[0].length
    
  // Make sure we are not at the first row
  if (nrow - 1 >= 0) {
    // Check top neighbor
    if (currGen[nrow - 1][ncol] == 1){ 
      count++;
    }
  }
        
  // Make sure we are not in the first cell
  // Upper left corner
  if (nrow - 1 >= 0 && ncol - 1 >= 0) {
    //Check upper left neighbor
    if (currGen[nrow - 1][ncol - 1] == 1) {
      count++;
    }
  }
  
  // Make sure we are not on the first row last column
  // Upper right corner
  if (nrow - 1 >= 0 && ncol + 1 < cols) {
    //Check upper right neighbor
    if (currGen[nrow - 1][ncol + 1] == 1) {
      count++;
    }
  }

  // Make sure we are not on the first column
  if (ncol - 1 >= 0) {
    //Check left neighbor
    if (currGen[nrow][ncol - 1] == 1) {
      count++;
    }
  }
    
  // Make sure we are not on the last column
  if (ncol + 1 < cols) {
    //Check right neighbor
    if (currGen[nrow][ncol + 1] == 1){ 
      count++;
    }
  }

  // Make sure we are not on the bottom left corner
  if (nrow + 1 < rows && ncol - 1 >= 0) {
    //Check bottom left neighbor
    if (currGen[nrow + 1][ncol - 1] == 1) {
      count++;
    }
  }

  // Make sure we are not on the bottom right
  if (nrow + 1 < rows && ncol + 1 < cols) {
    //Check bottom right neighbor
    if (currGen[nrow + 1][ncol + 1] == 1) {
      count++;
    }
  }
    
  // Make sure we are not on the last row
  if (nrow + 1 < rows) {
    //Check bottom neighbor
    if (currGen[nrow + 1][ncol] == 1) {
      count++;
    }
  }    
  
  return count;
}

function calculateStatus(input, state){
  let status = 0
  if ((state === 1 && input > 1 && input < 4) || (state === 0 && input === 3))
    status = 1
  return status;
}

function produceNextGen(currGen){
  let nextGen = currGen
  for(var i = 0; i < currGen.length; i++) {
    for(var j = 0; j < currGen[i].length; j++) {
        let neighbours = getNeighborCount(currGen, i, j)
        console.log(currGen[i][j])
        nextGen[i][j] = calculateStatus(neighbours, currGen[i][j])
        console.log(i, j, currGen[i][j],nextGen[i][j], neighbours)
    }
  }
  return nextGen
}

let array = [
  [0,0,1,0,1,0],
  [0,0,1,0,0,1],
  [0,0,1,0,0,0],
  [0,1,0,1,0,0],
  [0,1,1,1,0,0],
  [0,0,0,0,0,0]
]
console.log(array)
console.log(produceNextGen(array))