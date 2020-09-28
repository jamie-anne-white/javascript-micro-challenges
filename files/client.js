console.log('test');

// BASEMODE //

/* 100 - Additions 
Create a function that takes two numbers.
Your function should return the sum of the two numbers passed in.
*/

function addit(num1,num2) {
    return Number(num1) + Number(num2);
}

console.log(addit(3,2)); // logs as 5
console.log(addit(6,4)); // logs as 10

/* 101 Conditionals
Create a function that takes two numbers.

If the first number is bigger than the second number, return `"The first number was bigger!"`.
If the second number is bigger than the first number, return `"The second number was bigger!"`.
If the numbers are the same, return `"The numbers are the same!"`.
*/

function greaterThanConditional(num1,num2){
    if (num1 > num2){
        return "The first number was bigger!"
    }
    else if (num1 < num2){
        return "The second number was bigger!"
    }
    else {
        return "The numbers are the same!"
    }
}

console.log(greaterThanConditional(6,4)); // return "The first number was bigger!"
console.log(greaterThanConditional(3,4)); // return "The second number was bigger!"
console.log(greaterThanConditional(4,4)); // return "The numbers are the same!"