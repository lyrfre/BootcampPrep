// LOOPS: FOR REFERENCE
/* for (var i = 0; i < 10; i += 1) {
    console.log(i);
  }
  // the above loop will print all numbers 0 through 9
  
  for (var i = 0; i <= 10; i += 1) {
    console.log(i);
  }
  // the above loop will print all numbers 0 through 10
  
  for (var i = 2; i <= 10; i += 2) {
    console.log(i);
  } */
  // the above loop will print all even numbers from 2 through 10



///// 1. logBetween
// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.
//
// Examples:
//
// logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
// logBetween(14, 6); // prints nothing
//
// logBetween(4,6); // prints
// 4
// 5
// 6


function logBetween(lowNum, highNum){
    for (let i = lowNum; i <= highNum; i ++){
        console.log(i);
    }
}

//logBetween(5, 12);  This worked


///// 2.  logBetweenStepper
// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.
//
// Examples:
//
// logBetweenStepper(5, 9, 1) // prints
// 5
// 6
// 7
// 8
// 9
//
// logBetweenStepper(-10, 15, 5) // prints
// -10
// -5
// 0
// 5
// 10
// 15

function logBetweenStepper(min, max, step){
    for (let i = min; i <= max; i += step){
        console.log (i);
    }
}

//logBetweenStepper(0, 10, 5);     // This worked



////// 3. printFives

  // Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional
//
// Example:
//
// printFives(20) // prints
// 0
// 5
// 10
// 15
 
 function printFives(max){
    for (let i = 0; i < max; i += 5)
        console.log(i);

    }
//printFives(20);    //This worked
 


function printFives(max){
    for (let i = 1; i < max; i *= 5) 
        console.log(i);     /////This gave back 1 and 5 because 5*5= 25 **note i = 1

    }
//printFives(20);    //This worked

function printFives(max){
     for (let i = 0; i < max; i += 5) {
         if (i === max){
             break
         } 
         console.log(i);
     }
 }
// printFives(20)  ///this worked


function printFives(max){
    let i = 0
    while (i < max) {
        console.log(i)
        i += 5
    }
}

//printFives(20)  /// This worked

///// 4. printReverse

// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//
// Examples
//
// printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
// printReverse(90, 94) // prints
// 93
// 92
// 91

function printReverse(min, max){
    for (let i = max - 1; i > min; i -= 1)   ///first i always needs =
    console.log(i);
}

//printReverse(90, 94); /// This worked

///// 5.  sumNums(max)

// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//
// Examples:
//
// sumNums(4); // => 10
// sumNums(10); // => 55
// sumNums(365); // => 66795

function sumNums(max){
    let posNums = 0;
    //console.log(posNums);
    for ( let i = 1; i <= max; i += 1){
        //console.log(i, posNums);                  ////reference for fibonacci
        posNums = posNums + i;
        //console.log(i, posNums);
    }
    console.log(posNums);
    return(posNums);
}

//sumNums(10);  //This worked


///// 6. isFactorOf

// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
// Examples:
//
// isFactorOf(6,2); // => true
// isFactorOf(-6, 2); // => true
// isFactorOf(5,0); // => false
// isFactorOf(22, 7); // => false
/* 
function isFactorOf(number, factor){
    let a = (number % factor === 0);
    console.log(a);
}
 */
//isFactorOf(22, 7); ///This worked

function isFactorOf(number, factor){
    let a = ((number % factor) === 0);
    //console.log(a);
    return (a);             ///in order for something else to use the result of this, it MUSt say return.
}


/* 

for (let i = 1; i <= 4; i +=1){
    b = isFactorOf(6, i);         ///This is only calling the result that was returned from the function,
    console.log(i,b);                   /// NOT any of the variables within it
}
 */

/* 
b = isFactorOf(22,7);
c = b || isFactorOf(5,1);

console.log(c); */


////// 7. fizzBuzz
// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//
// Examples:
//
// fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18

function fizzBuzz(max){
    for (let i = 1; i <= max;i += 1){
        a = (i % 3 === 0);
        b = (i % 5 === 0); 
        //console.log (i, a, b);
        if (( a === true && b === false) || (b === true && a === false)){
            console.log(i, a, b);
        }
    }
}


///fizzBuzz(20); This worked

///// 8. isPrime

// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
// Examples:
//
// isPrime(2); // => true
// isPrime(10); // => false
// isPrime(11); // => true
// isPrime(9); // => false
// isPrime(2017); // => true

function isPrime(number){
    for (let i = 2; i <= number - 1; i += 1){
        b = (number % i === 0) 
        if (b === true) {
            return (false)
        }
    }
    return (true);
}


//isPrime(13);
//console.log(isPrime(13));
