//========
//PROBLEM: Opposite number
//========




//=========
//SOLUTION:
//=========

function opposite(number) {
  if (number > 0){
    return -number
  } else {
    return -number
  }
}

//===================================
//how I found/felt about solving this particular problem.   
//===================================

/* 
My first try was this:

function opposite(number) {
  if (number > 0){
    return -number;
  } else {
    return +number;
  }
}

but with hints I realized return +number was not going to work and all I did was switch + to - and it worked! (I was just not thinking correctly while I was coding because I do know that 2 negatives make a positive)
*/