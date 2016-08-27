// Check if "tst" is divisible by "divinc", returns a boolean.
function divbytst ( tst, divinc ) {
    if ( Math.trunc ( tst / divinc ) == ( tst / divinc ) )
     { return true }
    else
     { return false }
}


// Check if "a" is prime, returns boolean.
function prmchk ( a ) {
    var TorF = true;
    for (step = 2; ( (step <= a/2) ) ; step++ )
     {
      if(TorF == false) {break};
      if ( divbytst(a,step) == true )
       {
        TorF = false
       };
     };
    return TorF;
}


// Check all numbers "n1" through "n2", print all primes to console.
function prmhose ( n1, n2 )
  {
      var PrimAr = [];
      for (step2 = n1; step2 <= n2 ; step2++ )
       {
        if ( prmchk( step2 ) )
         {
          console.log( step2 )
         };
       };
      console.log ("Done");
      return(PrimAr);

  }


// Check all numbers "n1" through "n2", returns them as an array of primes.
function prmhoseAr ( n1, n2 )
{
    var PrimAr = [];
    for (step2 = n1; step2 <= n2 ; step2++ )
     {
      if ( prmchk( step2 ) )
       {
        PrimAr.push( step2 )
       };
     };
    console.log ("Done");
    return(PrimAr);
}



