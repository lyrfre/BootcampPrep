//Coding Problem Set
 1.
// Write a function `isOdd` that takes in a number as an argument and returns `true`
// if the number is odd and returns `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isOdd(2);    // => false
// isOdd(5);    // => true
// isOdd(-17);  // => true

function isOdd(num) {
    if((num % 2) !== 0) {
        console.log('true')
    } else {
        console.log('false')
    }
}

function nonconditOdd(num){
    console.log ((num % 2 !== 0))
}

////these both worked


2.
// Write a function `plusFive` that takes in a number as an argument and returns
// the sum of that number and 5.
//
// Examples:
// plusFive(10);  // => 15
// plusFive(2);   // => 7
// plusFive(-8);  // => -3
//

function plusFive(num) {
    let sum = num + 5
    return sum
  }

  ///this worked
 
  
  3.
  // Write a function `threeOrSeven` that takes in a number and returns `true`
// if the number is divisible by either 3 or 7 and `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
//
// Examples:
// threeOrSeven(3);   // => true
// threeOrSeven(42);  // => true
// threeOrSeven(8);   // => false
//

function threeOrSeven(number) {
    if((number % 3 === 0) || (number % 7 === 0)){
    return('True')
    } else {
        return('False');
    }
}

///// this worked


4.
// Write a function `hello` that takes in a string and prints out "Hello, " followed
// by the string. HINT: this function doesn't need to return anything, it should
// just print using console.log
//
// Examples:
// hello("child");    // prints "Hello, child"
// hello("Anthony");  // prints "Hello, Anthony"
//
function hello(str) {
    console.log('Hello, ' + str + '.');
  }

//hello("child");
//hello( "Anthony");

////This worked


//      5. Yell
// Write a function `yell` that takes in a string and returns a "yelled" version
// of that string.
//
// Examples:
// yell("I want to go to the store"); // => "I WANT TO GO TO THE STORE!!!"
// yell("Time to program"); // => "TIME TO PROGRAM!!!"
//
function yell(string) {
    console.log(string.toUpperCase(string) + "!!!")
  }

// yell("fuck this");

///// This worked (lol)

/// 6. Whisper

// Write a function `whisper` that takes in a string and returns a "whispered" version
// of that string.
//
// Examples:
// whisper("Hey Anthony"); // => "...hey anthony..."
// whisper("YEA! that was fun"); // => "...yea! that was fun..."
function whisper(string) {
    console.log("... " + string.toLowerCase(string) + "..." + " shhh!");
  }

  /// whisper("I'M THIRSTYYYYY");

  /////// THIS WORKED


/// 7. isSubstring
// Write a function `isSubstring` that takes in two strings, `searchString` and
// `subString`. The function should return `true` if `subString` is a part of the
// `searchString`, `false` otherwise.
// Write two versions of this function, using conditionals and without using conditionals
//
// Examples:
// isSubstring("The cat went to the store", "he cat went"); // => true
// isSubstring("Time to program", "time"); // => true
// isSubstring("Jump for joy", "joys"); // => false
//
//function isSubstring(searchString, subString) {
//    if (searchString.indexOf(subString) >= 0)
//    return "true"
//}
  
//let searchString = "Life is a bitch then you die"
//let subString = "bitCh"

//console.log(isSubstring(searchString, subString));

//// This worked only because I had everything lower case, but then the answer key had a better one as follows:

function isSubstring(searchString, subString) {
    let lowersearchstring = searchString.toLowerCase();
    let lowersubstring = subString.toLowerCase();

    return (lowersearchstring.indexOf(lowersubstring) !== -1)
    // return "true"
}

//isSubstring(searchString, subString);

//let string = " meow "

//console.log(string.indexOf('me')); ////this gives back the number "1", so that's showing the me is starting in the 1 position?
//console.log(string.indexOf('ow'));
//console.log(string.indexOf('bark'));


////// 8. Echo
// Write a function `echo` that takes in a string and returns that string "echo-ized".
//
// Examples:
// echo("Mom!"); // => "MOM! ... Mom! ... mom!"
// echo("hey"); // => "HEY ... hey ... hey"
// echo("JUMp"); // => "JUMP ... JUMp ... jump"
//
//function echo(echoString) { 
//    console.log(echoString.toUpperCase() + '!!!');
//    console.log(' ... ' + echoString + ' ... ');              /// This gave back correct answers but one as it's own paragraph
//    console.log(echoString.toLowerCase()+ ' ......');
//  }

function echo(echoString){
     let echoUp = (echoString.toUpperCase() + '!!!');
     let echoNorm = (' ... ' + echoString + ' ... ');
     let echoLow = (echoString.toLowerCase() + ' ......');
    return ( echoUp + echoNorm + echoLow);
}

///console.log(echo('bitch'));


//// this worked!! yay

/// how they did it: 
//function echo(str) {
//  var firstEcho = str.toUpperCase();
//  var lastEcho = str.toLowerCase();
//
//  return firstEcho + " ... " + str + " ... " + lastEcho;
//}

////// 9. // Write a function `isEven` that takes in a number and returns `true` if the number
// is even, `false` otherwise. Write `isEven` by using the `isOdd` function you
// made previously. HINT: you can call `isOdd` from within `isEven`.
//
// Examples:
// isEven(2); // => true
// isEven(5); // => false
function isEven(num) {
    return (num % 2 === 0);
  }

//  console.log (isEven(5));

///// 10. // Write a function `averageOfFour(num1, num2, num3, num4)` that takes in four
// numbers. The function should return the average of all of the numbers.
//
// Examples:
//
// averageOfFour(10, 10, 15, 5); // => 10
// averageOfFour(3, 10, 11, 4); // => 7
// averageOfFour(1, 2, 3, 4); // => 2.5

function averageOfFour(num1, num2, num3, num4) {
    return ((num1 + num2 + num3 + num4) / 4);
}

//console.log(averageOfFour(10, 10, 15, 5));


/// this worked!

console.log (5 / (-1 * (5 - (-10))))
