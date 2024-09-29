# How Functions Work in JavaScript💥

```
var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}
```
```
output:
10
100
1
```
image1: GEC
<br>
<img src="./Images/image.png" alt="Blocking/nonblocking" width="300" height="200">
<br>

- **call stack is a stack where all global execution context are kept.**
- when we create create global execution context it will be pushed into the call stack (as in above image).
- now, when we execute code, during the first line.
```
var x = 1
```

<br>
<img src="./Images/image2.png" alt="GEC" width="300" height="200">
<br>

<br>
<img src="./Images/image3.png" alt="GEX x becomes 1" width="300" height="200">
<br>

- now x becomes 2.
- now code moves to 2nd line.
```
a()
```


- when a() function is invoked. An execution context is created.