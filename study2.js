//just like an object, declare an empty array and then set properties on the array and then modify the properties
const myArray = [];

myArray.summary = "Empty array!";

console.log(myArray);
//=> [ summary: 'Empty array!' ]

myArray["summary"] = "This array is totally empty.";
console.log(myArray);
//=> [ summary: 'This array is totally empty.' ]



// array-style elements vs object-style properties
const array = [];

array["summary"] = "This is why it's special.";

console.log(array);
//=>  [ summary: "This is why it's special." ]

array.push(1, 2, 3, 4);
console.log(array);
//=> [ 1, 2, 3, 4, summary: "This is why it's special." ]

console.log(array.length);
//=> 4
console.log(array[0]);
//=> 1
console.log(array[array.length - 1]);
//=> 4



// indexes in arrays are STRINGS just like keys in objects
const array2 = [1, 2, 3, 4];

console.log(array2[1]);
//=> 2

array2[1] = "two"; 

console.log(array2);
//=> [ 1, 'two', 3, 4 ]
console.log(array2.length)
//=> 4


array2["1"] = "TWO";

console.log(array2);
//=> [ 1, 'TWO', 3, 4 ]
console.log(array2.length);
//=> 4

console.log(Object.keys(array2));
//=> [ '0', '1', '2', '3' ]

