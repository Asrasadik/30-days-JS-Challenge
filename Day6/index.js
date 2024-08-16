let arr1 = [1, "Hello", { Id: 1, name: "abc" }];
console.log(arr1);

console.log(arr1[0], arr1[arr1.length - 1]);
console.log(arr1.at(-1));
arr1.slice(-1); //slice returns new array
arr1.slice(-1)[0];

console.log(arr1.push(5, 6, 9));
console.log(arr1.pop());
arr1.shift(); // console.log(arr1.shift()) //op: 1 means item which shifted
console.log("shift: ", arr1);
