/* var x = 7;
function getName() {
  console.log("Hi there!!!");
}
getName();
console.log(x);
 */
//example 3:
/* getName();
console.log(x); // we are accessing x before initilization

//var x = 7;
function getName() {
  console.log("Hi there!!!");
} */

//example4a:
/* var x = 7;
function getName() {
  console.log("Hi there!!!");
}
console.log(getName) */ // we are not trying to invoke this function
//example4b:
/* console.log(getName);
var x = 7;
function getName() {
  console.log("Hi there!!!");
} */
//example5:
/* getName();
console.log(getName);
console.log(x)
function getName() {
  console.log("Hi there!!!");
} */
//exampe6: getName as the arrow function
/* getName();
console.log(x);
console.log(getName);

var x = 7;

var getName = () => {
  console.log("Hi there");
}; */

//example7: function
getName2();
var getName2 = function () {
  console.log("getName2");
};
