//========
//PROBLEM: Return Negative
//========
/* 
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/



//=========
//SOLUTION:
//=========

//make num negative if postive
//if negative already then leave alone

function makeNegative(num) {
  if (num <= 0){
    return num
  }else{
    return -num
  }
}


//===================================
//how I found/felt about solving this particular problem.   
//===================================

/* I ended up solving this "simple" problem on my own correctly but I realized that I am thinking tooo hard about the question. I know what a neg number is (below 0), what a postive number is (above 0), and I know we want to return negatives. So, if our number already is negative then leave it alone. But if its positive then make it negative. I tried returning -num and it worked, I just did not realize I can return that operator with the num like that until I tried it, I thought I had to do more complex code to get a negative.
*/




