var Calc = (function (b) {
 return{
   'add': function add ( b ) { return b + 1 } ,
   'sub': function sub ( b ) { return b - 1 },
 'adder': function adder(b) { 
                       function internal( a ) { a = b + a;  return a }  
                       return ( internal )  
                      }
 }
}() )

  exports.add = Calc.add
  exports.sub = Calc.sub
exports.adder = Calc.adder

