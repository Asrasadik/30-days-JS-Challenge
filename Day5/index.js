evenOddFun(6); //Hoisting, function assignment hoisting, variable hoisting
evenOddFun(9);
function evenOddFun(num) {
	if (num % 2) {
		console.log(`Given Number:${num} is Odd`);
	} else {
		console.log(`Given Number:${num} is Even`);
	}
}

/*-----------------------Hoisting--------------------------------*/
/*
console.log(a); // undefined
var a = 5;
console.log(a); // 5
//////////////////////////////////////
above logic can be interpreted as
////////////////////////////////////
var a;
console.log(a); // undefined
a = 5;
console.log(a); // 5
*/
/*----------------------------------------------------*/
const calcSquare = function (num) {
	console.log(`Square of num: ${num} is = ${num ** 2}`);
};
calcSquare(4);
/*---------------------Function Expression-------------------------------*/
const maxNum = function (num1, num2) {
	num1 > num2
		? console.log(`${num1} is greater than ${num2}`)
		: console.log(`${num2} is greater than ${num1}`);
};
maxNum(17, 11);
/*----------------------------------------------------*/
const concateStrings = function (str1, str2) {
	console.log(`Concatenation of strings: ${str1 + str2}`);
};
concateStrings('Billi', 'Meow');
/*----------------------ARROW Function------------------------------*/
const sum = (num1, num2) => console.log(num1 + num2);
sum(2, 3);

/*----------------------------------------------------*/
const strSearch = (str, char) => {
	let isPresentFlag = false;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			isPresentFlag = true;
		}
	}
	console.log(
		`In ${str}, character ${char} is ${
			isPresentFlag ? 'Present' : 'Not Present'
		}`
	);
};

strSearch('MeowBilli', 'w');
strSearch('MeowBilli', 'z');
/*-------------------Functional Default Parameters---------------------------------*/
const product = (num1, num2 = 3) => {
	return `product of ${num1} and ${num2} = ${num1 * num2}`;
	/*prod = `product of ${num1} and ${num2} = ${num1 * num2}`
    return prod;
    */
};
console.log(product(8));
console.log(product(9, 7));
/*--------------------------------------------*/
const greeting = (name, age = 18) => {
	return `Hi ${name}!!! and age is ${age}`;
};
console.log(greeting('Aly'));
console.log(greeting('Ash', 22));
/*------------------HIGHER ORDER FUNCTIONS--------------------------*/
console.log('HIGHER ORDER FUNCTIONS');
const arr = [20, 10, 91, 92];
const filterItems = (arry) => {
	console.log(arr.filter((i) => i > 50));
};

const higherOrderFn = (hFn, times) => {
	for (let i = 1; i <= times; i++) {
		hFn();
	}
};
higherOrderFn(filterItems, 2);
/*--------------------------------------------------*/
const arr1 = [2, 5, 3, 8, 33];
const multiByTwo = (p1) => p1.map((i) => i * 2);
//const multiByTwo = (p1) => console.log(p1.map((i) => i * 2));
//multiByTwo(arr1);
const sumOfArr = (p2) => console.log(p2.reduce((acc, i) => acc + i, 0));
//sumOfArr(arr1);
//higher order fun:
const higherFn2 = (fn1, fn2, arr)=>{
    const fn1Value = fn1(arr);
    fn2(fn1Value);
}
higherFn2(multiByTwo, sumOfArr, arr1);