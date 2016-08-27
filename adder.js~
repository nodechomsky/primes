function adder(quant) { 
                       function internal( a ) { a = quant + a ; return a };  
                       return ( internal );  
                      };
var two = adder( 2 );
var three = adder( 3 );
var million = adder( 1000000 );

two( 10 );
three( 10 );
million( million( 1 ) );

