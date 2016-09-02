function getRand(min, max, decP) {
  return ( Number( (Math.random() * (max - min) + min).toFixed(decP) ) ) 
 }

function PiApprox() {
  
  var delta = 0.001
  var radius = 1
  var i = 1
  var hit = 1	
  var X = 0
  var Y = 0
  var d = 0
  var approx = 1
  var diff = 100

  while( diff  > delta ) { 
   
   X = getRand(-1, 1, 10)
   Y = getRand(-1, 1, 10)
   d = Math.sqrt( Math.pow( X , 2 ) + Math.pow( Y , 2 ) )

   console.log(diff)
   console.log("")

   if ( d < radius ) { hit++ }
   else (i++)
   approx = ( hit / i )
   diff = (Math.abs( Math.PI - approx ) )
  }
  return ( approx )
 }

console.log(PiApprox())



//   console.log(X)
//   console.log(Y)
//   console.log(hit)
//   console.log(i)
//   console.log((( ( i / hit ) - Math.PI ) ))
//   console.log(i / hit)
//   console.log("")

