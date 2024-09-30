# Promise: [MDN Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- <b>The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.</b>
- It means whatever the task we gave to promise it won't perform immediately in Queue
- Three States:
  - pending
  - fullfilled
  - rejected
- we can consume promise using fetch()
- Promise is an object which represents eventual success or failure.
- .then() is directly connect to resolve in promise.
```
const promise1 = new Promise(...);
```
-  'Promise' is a built-in global object provided by the JavaScript language. Promise is a constructor function that allows you to create Promise instances
- we can add as many .then() as we want
### Async await
- its like .then and .catch it waits sometime to task get completed.
- if it does get completed it will proceed else give error.
- we can't handle catch gracefully that's one disadvantage.
- https://jsonplaceholder.typicode.com/users
- fetch returns promise 