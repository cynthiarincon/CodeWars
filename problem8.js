//========
//PROBLEM: 
//========

/*
Description:
Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

*/


//=========
//SOLUTION:
//=========

function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

//===================================
//how I found/felt about solving this particular problem.   
//===================================

/*
I needed to repeat a string a certain number of times. I created an empty 
string to build the result, then used a for loop that runs n times. Each 
time through the loop, I added the string to my result.

The confusing part was figuring out the loop—I wasn't sure if I should loop 
through the string or just loop n times. Once I realized I just needed to 
count from 0 to n and keep adding the whole string each time, it clicked. 
I saw after submitting that there's a .repeat() method that does this in 
one line, but I didn't know that existed when I was solving it.
*/