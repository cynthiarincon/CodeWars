//========
//PROBLEM: Convert boolean values to strings "Yes" or "No"
//========

/*
Description:
Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/


//=========
//SOLUTION:
//=========
function boolToWord(bool) {
  if (bool === true) {
    return "Yes";
  } else {
    return "No";
  }
}


//===================================
//how I found/felt about solving this particular problem.   
//===================================

/*
This one seemed simple at first—just check if it's true or false and 
return the right string. I used an if/else statement to check the boolean 
and return "Yes" or "No".

The part that tripped me up was making sure I returned the strings with 
capital letters ("Yes" not "yes"). I also had to remember to use === 
instead of just =. After submitting, I saw some solutions using something 
called a ternary operator, but I'm sticking with if/else for now since 
that's what makes sense to me.
*/