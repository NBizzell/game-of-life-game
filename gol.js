/**
 * function to count number of neighbors
 *   
 * @param {Array} currGen initial array state 
 * @param {Number} row number of rows in array 
 * @param {Array} col number of columns in array
 * @returns {number} number of neighbors
 */
function getNeighborCount(currGen, row, col) {
  let count = 0;
  let nrow=Number(row);
  let ncol=Number(col);

    
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

/**
 * function to calculate state for the next iteration based on
 * game of life rules
 * 
 * @param {Number} input the number of neighbors
 * @param {Number} state the current state of the cell
 * @returns {Number} state for next iteration, 0 - dead cell, 1 - live cell
 */
function calculateStatus(input, state){
  let status = 0
  if ((state === 1 && input > 1 && input < 4) || (state === 0 && input === 3))
    status = 1
  return status;
}

/**
 * function to produce new array state from old array 
 * @param {*} currGen current array state
 * @returns {array} new array state
 */
function produceNextGen(currGen){
  //set up an array of 0's same size as initial array
  let nextGen =[]
  for (let row=0; row<rows; row++) {
    nextGen.push(new Array(cols).fill(0));
  };

  //loop through the array and process each cell using the rules
  for(var i = 0; i < currGen.length; i++) {
    for(var j = 0; j < currGen[i].length; j++) {
        //get number of neighbors
        let neighbours = getNeighborCount(currGen, i, j)
        //set call to calculated value
        nextGen[i][j] = calculateStatus(neighbours, currGen[i][j])        
        }
  }
  return nextGen
}

//sets initial array
let array = [
  [0,0,1,0,0,0],
  [0,0,1,0,0,0],
  [0,0,1,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
]
//sets number of cols and rows
let rows = array.length
let cols = array[0].length

//output to show process
console.table(array)
console.table(produceNextGen(array))