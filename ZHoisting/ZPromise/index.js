"use strict";
// as promise is an object so will be using new  keywork to create an instance
//create promise, resolve here is a method
const promise1 = new Promise(function (resolve, reject) {
  //Do async task
  setTimeout(function () {
    console.log("Async Task is complete");
    resolve(); //this needs to be called if .then() needs to be executed
  }, 1000);
}); // promise accepts a callback
//consume Promise
promise1.then(function () {
  console.log("Promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task is complete");
    resolve();
  }, 2000);
}).then(function () {
  console.log("Async 2 Resolved");
});
//passing data from resolve 
const promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async Task is complete-promise3");
    let data = { username: "abc", email: "abc@gmail.com" };
    resolve(data);
  }, 2000);
});
promise3.then(function (data) {
  console.log(data);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let data = { username: "abc", email: "abc@gmail.com" };
    let error = false;
    if (!error) {
      resolve(data);
    } else {
      reject("message: ERROR OCCURRED");
    }
  }, 2000);
});
/* below code gives error as we cant assign a value to a promise that is already resolved
const username =promise4.then(function(data){
  console.log("Promise4:" + data);
  return data.username
}) */
promise4
  .then(function (data) {
    console.log("Promise4:", data);
    return data.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log("Promise4:" + error);
  })
  // finally will always be executed wether its resolved or rejected
  .finally(() => console.log("Promise is either resolved or rejected"));

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let data = { username: "Yorichii", email: "yorichii@gmail.com" };
    // let error = false; //--> this won't give error
    let error = true; // this will give error when catch block is not used
    if (!error) {
      resolve(data);
    } else {
      reject("message: SOMETHING WENT WRONG");
    }
  }, 2000);
});
//below codes will asume that promise will resolve in all cases
async function consumePromise5() {
  try {
    const response = await promise5; //as promise is an object
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromise5();

// async function getUserData() {
// try{
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   //const userData = response.json(); //conversion also takes time
//   const userData = await response.json();
//   console.log(userData)
// }catch(error){
//   console.log("Fetch ERROR")
// }
// }
//getUserData()
//Promise.all()
/* below promise won't work we need to add .then to convert resp.json
fetch("https://jsonplaceholder.typicode.com/users").then((resp)=>{
  console.log(resp.json());
}).catch((error)=>console.log("error")) */
/*********************FETCH*********************************************/
fetch("https://jsonplaceholder.typicode.com/users")
  .then((resp) => {
    return resp.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));