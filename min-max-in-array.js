function minMax( array ) {
  // Declale min and max variables with the value of first element
  // If not an array or empty array returns undefined
  var min = array[ 0 ] , max = array [ 0 ];
  // Loop through passed array from index 1 || Index 0 was already set to variables
  for (var i = 1; i < array.length; i++) {
    // Check if number is lesser than previous number
    if ( min > array[ i ] ) min = array[ i ];
    // Check if number is greater than previous number
    if ( max < array[ i ] ) max = array[ i ];
  }
  // Return min and max values
  return {
    min : min,
    max : max,
  };
};

// Test
minMax([ 15 , 22 , 75 , 11 , 66 ]); // Result {min: 11, max: 75}
