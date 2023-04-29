//Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}
//for loop in an array:
let arr: number[] = [1, 3, 5, 7, 9, 11];

//-Basic for loop
console.log(`For index loop in arr: `);
let total = 0;
for (let i = 0; i < arr.length; i++) {
    total += arr[i];
}

console.log(`Total of array: ${total}`);
//-For each loop
console.log(`For each loop in arr: `);
total = 0;
for (let a of arr) {
    total += a;
}
console.log(`Total of array: ${total}`);

//- Growable array:
console.log("Growable array: ");
arr.push(13);
arr.push(15);
arr.push(17);
arr.push(19);
console.log(`Length of array: ${arr.length}`);
console.log(`Element in arr[${arr.length - 1}]: ${arr[arr.length - 1]}`);
