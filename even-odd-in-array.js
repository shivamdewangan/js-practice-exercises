function evenOdd( array ) {
  // Declare empty even and odd arrays
  var even = [] , odd = [];
  // Loop through passed array
  for (var i = 0; i < array.length; i++) {
    // Check number is even or not and push in respective arrays
    if ( array[i] % 2 === 0 ) {
      even.push( array[i] );
    } else {
      odd.push( array[i] );
    }
  }
  // Return even and odd number length
  return {
    even : even.length,
    odd : odd.length,
  };
};

// Test
evenOdd([ 1 , 4 , 6 , 7 , 5 , 2 , 3 ]); //Result {even: 3, odd: 4}
