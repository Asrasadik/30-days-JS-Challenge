setTimeout(function timer() {
	console.log('timer');
}, 2000);
// function greet() {
//     console.log("hello time")
// }
function x(y) {
	console.log('x');
	y();
}
x(function y() {
	console.log('y');
});
