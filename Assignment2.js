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
