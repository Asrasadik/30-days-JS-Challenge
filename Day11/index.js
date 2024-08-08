//Activity1.1
/*const timeOut = (resolve)=>{setTimeout(()=>{
    console.log("Hi")
  resolve();
},2000)
                    }

const basicPromise = new Promise(function(resolve,reject){
  timeOut(resolve);
})
console.log(basicPromise)
basicPromise.then(()=>console.log("promise resolved"))
//Activity1.2
const validate = (resolve,reject)=>{
   setTimeout(()=>{
    console.log("catch:");
    let isValid = false;
    isValid?resolve():reject();
  },2000)
}

const isPromiseValid = new Promise(function(resolve,reject){
  validate(resolve,reject);
}) 
isPromiseValid
  .then(()=>console.log("promise resolved"))
  .catch(()=>console.log("promise rejected"))
//Activity2.1: chaining promises 
const chainTime = (resolve,reject)=>{
  setTimeout(()=>{
    console.log("chaining promises")
     let data = {productID:1,productName:"Keyboard",price:1000}
    //[{productID:1,productName:"Keyboard",price:1000},
    //            {productID:2,productName:"Mouse",price:600}]
    data?resolve(data):reject();
  },2000)
}
const chainPromise = new Promise(function(resolve,reject){
  console.log("chainPromise:");
  chainTime(resolve,reject);
  //resolve({productID:1,productName:"Keyboard",price:1000})
})

chainPromise.then((data)=>{
  console.log("first chain resolved",data);
  return data.productName;
}).then((data)=>{
  console.log("2nd chain resolved",data);
}).catch(()=>console.log("chain rejected"));
//Activity3.1 & 3.2: Async Await resolve and reject
const asyncPromiseTime = (resolve,reject)=>{
  setTimeout(()=>{
    console.log("Don't make setTimeout typo");
    let successFlag = false;
    successFlag?resolve("promise Resolved Async Await"):reject("SOMETHING WENT WRONG!!");
  },2000)
}

const asyncPromise = new Promise(function(resolve,reject){
  asyncPromiseTime(resolve,reject);
})

const consumeAsync = async ()=>{
  try {
   let msg =  await asyncPromise;
    console.log(msg);
  } catch (error) {
    console.log("catch: ",error);
  }
} 
consumeAsync();
//Activity4: Fetch
fetch("https://jsonplaceholder.typicode.com/users")
.then((resp) => {
  return resp.json();
})
.then((data) => {
  console.log(data);
})
.catch((error) => console.log(error));

const fetchData = async ()=>{
 try {
   const resp = await fetch("https://jsonplaceholder.typicode.com/users")
   const data = await resp.json();
   console.log("fetch Async",data);
 } catch (error) {
   console.log(error);
 }
}
fetchData();
//Activity5: Concurrent Promises
const getConvertedValue = (aItems) => {
  let aPromises = [];
  aItems.forEach((item) => {
    console.log("getConvertedValue:", item);
    let oPromise = new Promise(function (resolve, reject) {
      setTimeout(() => {
        console.log("Promise:", item);
        item
          ? resolve("promise.all Resolved")
          : reject("SOMETHING WENT WRONG!!");
      }, 2000);
    });
    aPromises.push(oPromise);
  });
  return Promise.all(aPromises);
};
let aItems = [
  { productId: 1, productName: "Keyboard", price: 1000 },
  { productId: 2, productName: "Mouse", price: 600 },
];
getConvertedValue(aItems)
  .then(() => {
    console.log("getConvertedValue.then");
  })
  .catch(() => {
    console.log("getConvertedValue.catch");
  });
*/
const promiseRace1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //console.log("promiseRace1");
    resolve("promiseRace1");
  }, 2000);
});

const promiseRace2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    // console.log("promiseRace2");
    resolve("promiseRace1");
  }, 1000);
});

const promiseRace3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    //  console.log("promiseRace3");
    resolve("promiseRace1");
  }, 3000);
});

Promise.race([promiseRace2, promiseRace1, promiseRace3])
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err.message));
