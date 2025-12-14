//========
//PROBLEM: Remove First and Last Character
//========

/*
Task
Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.

Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.
*/


//=========
//SOLUTION:
//=========

//remove [0] and [-1] of string
//function can handle strings >= 2
//if exactly 2ch return empty string [];

function removeChar(str){
let newStr = str.slice(1, -1);
  return newStr;
}

//===================================
//how I found/felt about solving this particular problem.   
//===================================

/*
I knew there was a property/method out there can help me but I couldnt remember which one. I first thought .filter() but thats for arrays. So I had to use the clue to use .slice().

I know I dont want the first letter[0] so I would start at 1, but I thought we didnt need our last letter[-1] so I used [-2] to skip it but with hints I realized its suppose to be -1. I could have also used a loop*/