//========
//PROBLEM: Reversed Strings
//========

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/


//=========
//SOLUTION:
//=========

function solution(str){
    let newString = "";

    for (let i = str.length - 1; i >= 0; i--){  
        result = result + str[i];
    }
    return result;
}


//===================================
//how I found/felt about solving this particular problem.   
//===================================
/*
I knew I needed to reverse the string by looping through it backward. 
I initially thought I could start with let i = -1, but realized I 
needed to use str.length - 1 to get the last valid index position.

The challenging part was remembering the for loop syntax—specifically 
the three parts: starting point (let i = str.length - 1), condition 
(i >= 0), and update (i--). I created an empty string to collect 
characters as I looped backward, adding each character to build the 
reversed result.
*/