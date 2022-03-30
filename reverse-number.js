function reverse( number ) {
  // Convert integer to string
  number += '';
  // Declare an empty result variable
  var result = '';
  // Loop through number length
  for (var i = 0; i < number.length; i++) {
    // Add to result in reverse order
    result += number.charAt( ( number.length - 1 - i ) );
  }
  // Return inverted string in parsed float format else return undefined
  return parseFloat( result ) || undefined;
};

// Test
reverse( 123456 ); // Result 654321
reverse( 568954 ); // Result 459865
reverse( 12345.1045 ); // Result 5401.54321
