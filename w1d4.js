/* for (let i = 0; true; i++){         //given iterator, decide how it gets incrimented
    console.log(i); 
} 

//while loop is just a conditional

while (true){
    1 ++;
} */

// conditions will always evaluate to a boolean
/* 
let arr=[5];            //a data structure  --> benefit of adjacency in memory =
arr.push(null)
arr.push('Johnathan')
arr.push(3)
arr.push(false)
console.log(arr);
 */
/* 
/////BINARY SEARCH - 
function binarySearch(arr, val){
    if(arr.length === 0) return-1;
    const mid = Math.floor(arr.length/2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid + 1);
    if(arr[mid]===val){
        return mid;
    } else if (val < arr[mid]){
        return binarySearch(left,val);
    } else {
        const res = binarySearch(right, val);
        return res === -1?-1:res + mid + 1;
    }

}


let arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]

console.log(binarySearch(arr, 18)); */

//PUSH method ---- MUTATING method

let fruits = ['apple', 'pear'];
fruits.push('watermellon');     //push
//console.log(fruits)
let ele = fruits.pop();         //pop (don't need to have something ot put it in.)
//console.log(fruits);
//console.log(ele);
fruits.unshift('orange');       //adding to the front
//console.log(fruits);
fruits.shift();                 //taking from the front
//console.log(fruits);

let names = ['diaz', 'lacap', 'rodriguez'];
/* //console.log(names[0][3]);       ////this brings back "z" from diaz, which is word zero letter index 3
console.log(names.includes('diaz'));
console.log(names.includes('lin'));
 */

/* console.log(names);
console.log(names.slice(1,2));      //.slice is non mutating, 1st inclusive, 2nd exclusive
console.log(names); */
/* 
console.log(names);
console.log(names.join('-'));       //.join does not mutate
console.log(names);
 */
let words = names.join(' ');
console.log(words);
console.log(words.split(' '));
console.log(words);