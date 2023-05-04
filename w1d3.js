//LOOPS

//From videos:

/* function printTen() {
    for (let num = 0; num <= 10; num += 1) {
        console.log(num);
    }
}

printTen();
 */

// for loop components: initializer, condition, step. 
// syntatctic sugar i += 1 means plus one each time, also ++ as well.

// FOR loop:
/* function printNums(start, end) {
    for (let i = start; i <= end; i += 1) {
        console.log (i);
    }
}

printNums(10, 22); */

// WHILE loop:
/* function printNUms(start, end) {
    let i = start; //counter
    while(i < end) { //condition
        console.log (i);

        i += 1; //incriment
    }
}

printNUms (2, 12);
 */

//KEYWORDS:

//continue - skip to the next iteration 
//break-  exit the loop immediately
//common pitfall: using keywords outside of loops


/* i = 1

while (i < 11 ) {
    console.log(i)
    i ++
}
*/

function test() {
let str = "abcd"
for (let i = 0; i < str.length; i++) {
    if (i === 1){
        return('Hello World')
    }
    console.log(str[i])
}

console.log( 'after for loop')
}

console.log(test());


// i = i + 1 same as i

// i ++ is i = i + 1
// i --  is i = i - 1
// i x= 3 is i = i * 3
// i /= 3 is i = i / 3