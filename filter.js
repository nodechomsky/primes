//filter even numbers
function Even(value) { return ( ( value % 2 ) == 0 ); }
var NumPile = [ 1,2,3,4,5,6,7,8,9,10 ];
var filtered = NumPile.filter(Even);
console.log(filtered);

//filter strings
function Find3(value) { value = value.toString(); return ( value.includes(3) ); };
var NumPile = [ 1,2,3,4,5,6,7,8,9,10,13 ];
filtered = NumPile.filter(Find3);
console.log(filtered);

