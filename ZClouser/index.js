// function generateId(){
//   let id = Math.round(Math.random() * 10000)+1
//   //console.log(id)
//   function inner(){
//     return id +=1
//   }
//   return inner;
// }

// const uID = generateId()
// console.log(uID())
// console.log(uID())
// console.log(uID())

/* function greet(name){
  function inner(){
    return `Hi ${name}, how are you?`
  }
  return inner;
}
const greeting = greet('James')
console.log(greeting())


const funArray = []

for(let i=0; i<4; i++){
  funArray.push(function inner(){
    return `function ${i} called`
  })
}

console.log(funArray[0]())
console.log(funArray[1]())
console.log(funArray[2]()) */

/* function itemManager() {
  let items = [];

  return {
    addItem: function (item) {
      items.push(item);
      //console.log(items);
    },
    listItem: function () {
      //console.log(items.length);
      return items.length ? items : "No items found";
    },
    removeItem: function(item){
      items = items.filter((i)=>{
        return i !== item;
      })
    }
  };
}

const itemsManager = itemManager();
itemsManager.addItem("apple");
itemsManager.addItem("orange");
itemsManager.addItem("grapes");
console.log(itemsManager.listItem());
itemsManager.removeItem("orange");
console.log(itemsManager.listItem()); */

/* function memoize(){
  let cache = {};
function factorial(num){
  let prod = 1;
  if(cache[num]){
    return cache[num]
  }else{
  for(let i=1; i<=num;i++){
    prod *=i;
  }
    cache[num] =prod;
  return prod;
  }
}
  return factorial;
}

const memoizeResult = memoize();
 console.log(memoizeResult(5))
console.log(memoizeResult(3))
console.log(memoizeResult(4))
console.log(memoizeResult(6)) 
//console.log(memoizeResult(189))


function memoizeSum(){
  let cache = {};
function sum(num){
  let res = 1;
  if(cache[num]){
    return cache[num]
  }else{
  for(let i=1; i<=num;i++){
    res +=i;
  }
    cache[num] =res;
  return res;
  }

}
  return sum;
}

const memoizeResult1 = memoizeSum();
console.log(memoizeResult(5))
console.log(memoizeResult(3))
console.log(memoizeResult(4))
console.log(memoizeResult(6)) 
console.log(new Date().getSeconds())
console.log(memoizeResult1(10000000000))
console.log(new Date().getSeconds())
console.log(memoizeResult1(10000000000))
console.log(new Date().getSeconds()) */

/* localStorage.setItem('product','keyboard')
localStorage.setItem('product','mouse')
localStorage.setItem('product2','bottle')
console.log(localStorage.getItem('product'))
console.log(localStorage.getItem('product2')) */
/* 
localStorage.setItem('Fruits', ['apple','orange','grapes'])
localStorage.setItem('Fruits', JSON.stringify(['apple',2,'grapes']))
console.log(localStorage.getItem('Fruits'))
console.log(JSON.parse(localStorage.getItem('Fruits'))) */

const form = document.getElementById('formId');

onSave = (event)=>{
  event.preventDefault();
  const formData = new FormData(event.target)
  for(let [key,value] of formData.entries()){
    localStorage.setItem(key,value);
  }

}

form.addEventListener('submit',onSave)

//form.addEventListener('load')
window.onload = ()=> {
 let name = localStorage.getItem('name')
 let email = localStorage.getItem('email')
  if( name && email){
    document.getElementById('nameId').value = name;
    document.getElementById('emailId').value = email;
  }
}


