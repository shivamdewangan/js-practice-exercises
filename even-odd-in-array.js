function evenOdd( array ) {
  var even = [] , odd = [];
  for (var i = 0; i < array.length; i++) {
    if ( array[i] % 2 === 0 ) {
      even.push( array[i] );
    } else {
      odd.push( array[i] );
    }
  }
  return {
    even : even,
    odd : odd,
    evenCount : even.length,
    oddCount : odd.count,
  };
};
