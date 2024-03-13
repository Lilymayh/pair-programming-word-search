const wordSearch = (letters, word) => {
    const reversed = word.split('').reverse().join('');
  
    console.log(reversed);
  
    const horizontalJoin = letters.map((ls) => ls.join(''));
  
    // transpose matrix to check for vertical
    const transpose = (matrix) =>
      matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
    const verticalJoin = transpose(letters).map((ls) => ls.join(''));
  
    //console.log(horizontalJoin);
  
    // check horizontal
    for (l of horizontalJoin) {
      // forwards
      if (l.includes(word) || l.includes(reversed)) return true;
      // backwards
    }
  
    // check vertically
    for (const l of verticalJoin) {
      // top down
      if (l.includes(word) || l.includes(reversed)) return true;
    }
  
    return false;
  };
  
 
  
  module.exports = wordSearch;
  
