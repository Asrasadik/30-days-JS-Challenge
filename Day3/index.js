let num = 6;
if (num > 0) {
	console.log(`Number ${num} is Positive`);
} else if (num === 0) {
	console.log(`Number ${num} is Zero`);
} else {
	console.log(`Number ${num} is Negative`);
}
/*----------------------------------------------*/
let age = 17;
if (age >= 18) {
	console.log(`Eligible to vote`);
} else {
	console.log(`Not Eligible to Vote`);
}
/*----------------------------------------------*/
let arr = [7, 6, 9];
let [num1, num2, num3] = arr;
if (num > num2) {
	if (num1 > num3) {
		console.log(`Number ${num1} is Greater amoung ${arr}`);
	}
} else if (num2 > num1) {
	if (num2 > num3) {
		console.log(`Number ${num2} is Greater amoung ${arr}`);
	}
} else {
	console.log(`Number ${num3} is Greater amoung ${arr}`);
}
/*----------------------------------------------*/
let day = 5;
switch (day) {
	case 1:
		console.log('Monday');
		break;
	case 2:
		console.log('Tuesday');
		break;
	case 3:
		console.log('Wednesday');
		break;
	case 4:
		console.log('Thursday');
		break;
	case 5:
		console.log('Friday');
		break;
	case 6:
		console.log('Saturday');
		break;
	case 7:
		console.log('Sunday');
		break;
	default:
		console.log('Invalid day');
		break;
}
/*----------------------------------------------*/
let grade = 94;
switch (true) {
	case grade >= 90:
		console.log('Grade A');
		break;
	case grade >= 70 && grade < 90:
		console.log('Grade B');
		break;
	case grade > 50 && grade < 70:
		console.log('Grade C');
		break;
	case grade > 30 && grade <= 50:
		console.log('Grade E');
		break;
	case grade <= 30:
		console.log('Grade F');
		break;
	default:
		console.log('Invalid score');
		break;
}
/*----------------------------------------------*/
let numEvOdd = 112;
numEvOdd % 2 ? console.log('Number is Odd') : console.log('Number is Even');
/*----------------------------------------------*/
let year = 2024;
year % 4 === 0
	? year % 100 === 0
		? year % 400 === 0
			? console.log('leap year')
			: console.log('non leap year')
		: console.log('leap year')
	: console.log('non leap year');
