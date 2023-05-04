console.log("Problem Set Week 1 Day 1");
console.log(' ');
console.log(' ');
console.log("ROUND ONE");

let a1 = 4 + 4 / 2;
let a2 = ((2 + (7 * -1)) * 3);
let a3 = (101 % 10);
let a4 = (12 - 4 % 3);


console.log("a1 =" + a1);
console.log("a2 =" + a2);
console.log("a3 =" + a3);
console.log("a4 =" + a4);
console.log("a5 =" + (true && false));
console.log("a6 =" + (true && !(false || false)));
console.log("a7 =" + (!true && !(false || false)));
console.log("a8 =" + ('cat' + 'dog'));
console.log("a9 =" + 2 + 'pizza');
console.log(2.5 * 'fish');
console.log("a11 =" + (5 >= 11));
console.log("a12 =" + (5 === 5.0));
console.log("a13 =" + (7 !== 7.1));
console.log("a14 = " + (5 + 5 > 8));
console.log("a15 =" + (6 + 6 !== 12));
console.log("a16 =" + (2 > 1 || false));
console.log("a17 =" + ('true' === true));
console.log("a18 =" + (10 % 2 === 0));
console.log("a19 =" + (21 % 2 === 0));
console.log("a20 =" + (21 % 2 !== 0));
console.log('a21 =' + (21 % 2 === 1));
console.log('a22 =' + (12 % 3 === 0));
console.log('a23 =' + (9 % 3 === 0));
console.log('a24 =' + (14 % 3 === 0));
console.log('a25 =' + ('new york' [ 0 ]));
console.log('a26 =' + ('new york' [ 1 ]));
console.log('*a27 =' + ('san francisco'[ 2 * 3 ]));
console.log('a28 =' + ('bootcamp' [3].toUpperCase()));
console.log('a29 =' + ('bootcamp'.indexOf('camp')));
console.log('a30 =' + ('bootcamp'.indexOf('o') > -1));
console.log('a31 =' + ('bootcamp'.indexOf('x') === -1));
console.log(' ');
console.log(' ');

console.log('ROUND TWO');
console.log('** // 3 - why only 3 returns? c and c!'); // notes will this show up


// 3
var str1 = 'marker';
var num = 'whiteboard'.length - str1.length;
console.log(num); // ?
var str2 = 'bootcamp';
console.log(str2[num].toUpperCase()); // ?
var char = str2[num].toLowerCase(); // ?
console.log(char + '!'); // ?
