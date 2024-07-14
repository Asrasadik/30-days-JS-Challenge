let add = 2 + 5;
console.log(a);
let sub = 10 - 3;
console.log(sub);
let multi = 4 * 5;
console.log(multi);
let div = 90 / 10;
console.log(div);
let rem = 95 % 4;
console.log(rem);
//////////////
console.log('+=, -=');
add += 6;
console.log(add);
sub += 3;
console.log(sub);
////////////////
console.log('<,>,||,&&');
console.log(`3>2: ${3 > 2}`);
console.log(`6<5: ${3 < 2}`);
console.log(`6>=6: ${6 >= 6}`);
console.log(`7<=7: ${7 <= 7}`);
console.log("2=='2':", 2 == '2');
console.log("2==='2':", 2 === '2');
console.log(undefined && null);
console.log(null && undefined);
console.log(1 && 0); //evaluates to falsy value
console.log(0 || 1); // evaluates to truthy value
console.log(!null);
console.log(!!null);
/////my findings:
console.log(Boolean({})); //true
console.log(Boolean([])); // true
console.log(Boolean(function () {})); // true
console.log(Boolean(0n)); // false
// ternary operator:
let checkPositive = sub >= 0 ? 'Positive' : negative;

////////////
//my findings
console.log(`a
b
c`);
console.log('a\nb\nc');

//both produces same results
//When you use console.log('a','\n','b','\n','c'), JavaScript treats each argument as a separate value and inserts spaces between them by default. This results in a space before each newline character
