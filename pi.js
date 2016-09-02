  var delta = 0.000001
  var Qsize = 1



  var approxAvg = 0
  var attempts = 0
  var giveup =  Math.floor( 0.1 / delta )
  var i = 0
  var hit = 1	
  var X = 0
  var Y = 0
  var d = 0
  var approx = 1
  var diff = 100
  var radius = Qsize


function getRand(min, max) {
  return (  (Math.random() * (max - min) + min) ) 
 }

function PiApprox() {
console.log("")
  while( diff  > delta ) { 

   if (i > giveup){ 
    approxAvg = approxAvg + approx 
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
 console.log("")
 console.log("Approximate Value:" + result)
 console.log("      Known Value:" + Math.PI)
 console.log("")
 console.log(i + " = number of points used for successful approximation")
 if(attempts > 0){
  console.log(attempts + " = attempts that terminated after " + giveup + " iterations")
  console.log((approxAvg / attempts) + " = average result of unsuccessful attempts")
  }
 console.log("")
}

DisplayResults(PiApprox())



