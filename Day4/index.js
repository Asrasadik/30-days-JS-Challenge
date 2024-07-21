let sum = 0;
for (let i = 1; i <= 10; i++) {
	sum += i;
}
console.log(sum);
/*-----------------------------------*/
for (let i = 1; i <= 10; i++) {
	console.log(`5 * ${i} = ${5 * i}`);
}
/*-----------------------------------*/
let i = 1;
sum = 0;
while (i <= 10) {
	sum += i;
	i++;
}
console.log(sum);
/*-----------------------------------*/
i = 10;
while (i >= 1) {
	console.log(i);
	i--;
}
/*---------------POST INSCREMENT--------------------*/
console.log('POST INSCREMENT:');
i = 5;
let result = i++; // result is 5, i is incremented to 6

console.log(result); // 5
console.log(i); // 6
/*-----------------------------------*/
console.log('Do while Loop:');
let j = 0;
do {
	console.log(j);
	j++;
} while (j <= 5);

////////////////////////////////
result = '';
i = 0;
do {
	i += 1;
	result += `${i} `;
} while (i > 0 && i < 5);
// Despite i === 0 this will still loop as it starts off without the test

console.log(result);
/*-----------------------------------*/
/*
for in used for objects keys 
for of used for arrays
*/
/*-----------------------------------*/
for (let m = 1; m <= 5; m++) {
	let stars = '';
	for (let n = 1; n <= m; n++) {
		stars += '* ';
	}
	console.log(stars);
}
/*---------------CONTINUE--------------------*/
console.log("CONTINUE:")
for (i = 1; i <= 10; i++) {
	if (i === 5) {
		continue;
	}
	console.log(i);
}
/*---------------BREAK--------------------*/
console.log('BREAK:');
for (i = 1; i <= 10; i++) {
	if (i === 7) {
		break;
	}
	console.log(i);
}