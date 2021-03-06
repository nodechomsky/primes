
// RUN ME BY USING COMMAND LINE

// Syntax command shell_width rule
 
// Example: "node.js CellAut 50 110"



function CellAut(gridX , rule){

gridX = Number(gridX)

rule = Number(rule)

var gridY = ( (gridX - (gridX % 2) ) / 2 )

//Sub-Functions

function MkGrid(cdim , rdim)
{
 var grid = new Array(cdim)
 for (col = 0; col < cdim; col++) {
  grid[col] = new Array(rdim) 
  for (row = 0; row < rdim; row++) {
   grid[col][row] = "0"
  }
 }
return grid
}

function ApplyRule(){
 for (row = 0; row < (gridY - 1); row++) {
  for  (col = 1; col < gridX - 1; col++) {
   if (  ( grid[col - 1][row] == "0" ) && ( grid[col][row] == "0" ) && ( grid[col + 1][row] == "0" ) ) { grid[col] [row + 1] = ruleAr[7] }
   if (  ( grid[col - 1][row] == "0" ) && ( grid[col][row] == "0" ) && ( grid[col + 1][row] == "1" ) ) { grid[col] [row + 1] = ruleAr[6] }
   if (  ( grid[col - 1][row] == "0" ) && ( grid[col][row] == "1" ) && ( grid[col + 1][row] == "0" ) ) { grid[col] [row + 1] = ruleAr[5] }
   if (  ( grid[col - 1][row] == "0" ) && ( grid[col][row] == "1" ) && ( grid[col + 1][row] == "1" ) ) { grid[col] [row + 1] = ruleAr[4] }
   if (  ( grid[col - 1][row] == "1" ) && ( grid[col][row] == "0" ) && ( grid[col + 1][row] == "0" ) ) { grid[col] [row + 1] = ruleAr[3] }
   if (  ( grid[col - 1][row] == "1" ) && ( grid[col][row] == "0" ) && ( grid[col + 1][row] == "1" ) ) { grid[col] [row + 1] = ruleAr[2] }
   if (  ( grid[col - 1][row] == "1" ) && ( grid[col][row] == "1" ) && ( grid[col + 1][row] == "0" ) ) { grid[col] [row + 1] = ruleAr[1] }
   if (  ( grid[col - 1][row] == "1" ) && ( grid[col][row] == "1" ) && ( grid[col + 1][row] == "1" ) ) { grid[col] [row + 1] = ruleAr[0] }
  }
 }
}

function DisplayGrid(){
document.write("<title>" + rndrule + "</title>")
//document.write("<h1 align=\"center\" >" + rndrule + "</h1>")
document.write("<br>")
 for (col = 0; col < gridY ; col++) {
 var displayAr = []
  for  (row = 0; row < gridX ; row++) {
  if (grid[row] [col] == "1") { displayAr.push('\u25FB') } else { displayAr.push('\u25FC') }
  }
 document.write(displayAr.join(""))
 document.write("<br>")
 }
}

//main

var ruleStr = rule.toString(2);
var ruleAr = ruleStr.split("");

for(a=0 ;  ruleAr.length < 8 ; a++){
ruleAr.unshift("0")
}
console.log(ruleAr)
grid = MkGrid( gridX , gridY )
grid[( (gridX - (gridX % 2) ) / 2 )][0] = 1
ApplyRule()
DisplayGrid()
}

function getRand(min, max, decP) {
  return ( Number( (Math.random() * (max - min) + min).toFixed(decP) ) ) 
 }

var rndrule = getRand(0,255)
CellAut(150, rndrule)



