//Declare an Array
var MyArray = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ] ;
console.log( MyArray ) ;


//change individual values
console.log( MyArray[1] ) ;
MyArray[1] = "B";
console.log( MyArray[1] ) ;

//use of the forEach method
var all=0;
var obj=[ 1 , 2 , 3 , 4 , 5 ];
console.log(obj);
function addall(thing){ all += thing; }
obj.forEach(addall);
console.log(all);

//Sort
var QYTREW = [ 1 , 6 , 5 , 4 , 3 , 2 ];
QYTREW.sort( function( before , after) { return before < after  } );
QYTREW.sort( function( before , after) { return after  < before } );
QYTREW.sort( function( before , after) { return before > after  } );
QYTREW.sort( function( before , after) { return after  > before } );
console.log( QYTREW ) ;

var QYTREW = [ 'Q' , 'Y' , 'T' , 'R' , 'E' , 'W' ];
QYTREW.sort( function( before , after) { return before < after  } );
QYTREW.sort( function( before , after) { return after  < before } );
QYTREW.sort( function( before , after) { return before > after  } );
QYTREW.sort( function( before , after) { return after  > before } );
console.log( QYTREW ) ;

var MyArray = [ "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z" ] ;
MyArray.sort( function( before , after) { return before < after  } );
console.log(MyArray);

MyArray.sort();
console.log(MyArray);

MyArray.reverse();
console.log(MyArray);
