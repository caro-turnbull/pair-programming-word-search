const wordSearch = (letters, word) => { 
  
  const horizontalJoin = letters.map(array => array.join(''))
  for (lines of horizontalJoin) {
      if (lines.includes(word)) return true
  }

  const transposed = transpose(letters)
  const transposeHorizJoin = transposed.map(array => array.join(''))
  for (lines of transposeHorizJoin) {
      if (lines.includes(word)) return true
    
  }
  return false;
}

module.exports = wordSearch

const transpose = function(letters) {
  const transposed = [];
  for (let row = 0; row < letters[0].length; row++) {
    const newArr = [];
    for (let col = 0; col < letters.length; col ++) {
      newArr.push(letters[col][row]);
    }
    transposed.push(newArr);
  }

  return transposed;
};




// // Do not edit this function.
// const printMatrix = (matrix) => {
//   for (const row of matrix) {
//     for (const el of row) {
//       process.stdout.write(el + " ");
//     }
//     process.stdout.write("\n");
//   }
// };

// printMatrix(
//   transpose([
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//     [1, 2, 3, 4],
//   ])
// );

// console.log("----");

// printMatrix(
//   transpose([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// );

// console.log("----");

// printMatrix(transpose([[1, 2, 3, 4, 5, 6, 7]]))