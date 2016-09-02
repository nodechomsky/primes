  var delta = 0.000001
  var Qsize = 1

function getRand(min, max) {
  return (  (Math.random() * (max - min) + min) ) 
 }

function PiApprox() {
  while( diff  > delta ) { 

   if (i > giveup){ 
    approxAvg = approxAvg + approx
//    process.stdout.write( "Approximation \t"+ (approxAvg / attempts ) + "\r") 
    process.stdout.write( " Attempt: #" + attempts + " Approximation: "+ (approxAvg / attempts ) + "\r")
    i = 1
    hit = 1
    attempts++
    }
   X = getRand( - Qsize , Qsize)
   Y = getRand( - Qsize , Qsize)
   d = Math.sqrt( Math.pow( X , 2 ) + Math.pow( Y , 2 ) )
   if ( d < radius ) { hit++ } 
   else (i++)
   approx = ( hit / i )
   diff = (Math.abs( Math.PI - approx ) )
  }
  return ( approx )
 }
 

function DisplayResults(result){
 console.log("")
 console.log("Approximate Value:" + result)
 console.log("      Known Value:" + Math.PI)
 console.log("")
 console.log(i + " = number of points used for successful approximation")
 if(attempts > 0){
  console.log(attempts + " = attempts that terminate after " + giveup + " iterations")
  console.log((approxAvg / attempts) + " = average result of unsuccessful attempts")
  }
 console.log("")
}

  var approxAvg = 0
  var attempts = 0
  var giveup =  ( (1/delta) /10 )
  var i = 0
  var hit = 1	
  var X = 0
  var Y = 0
  var d = 0
  var approx = 1
  var diff = 100
  var radius = Qsize

DisplayResults(PiApprox())


