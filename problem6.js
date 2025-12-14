//========
//PROBLEM: Sum of positive
//========

/*
Description:
Task
You get an array of numbers, return the sum of all of the positives ones.

Example
[1, -4, 7, 12] => 1+7+12=20

Note
If there is nothing to sum, the sum is default to 0.
*/



//=========
//SOLUTION:
//=========

function positiveSum(numbers) {
  let sum = 0;
  for (let num of numbers) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}

//===================================
//how I found/felt about solving this particular problem.   
//===================================

/*
This one was similar to the regular sum, but I had to filter out the 
negative numbers. I set up my sum variable and loop like before, but 
added an if statement to only add positive numbers.

I got confused for a second about whether to use > 0 or >= 0, but then 
realized zero isn't positive so I used > 0. The if statement inside the 
loop took me a minute to get right, but once I figured out where to put 
it, it made sense.
*/