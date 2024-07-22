# CallBack Hell
1. Advantages of Callbacks
2. Disadvantages of callbacks
    - CallBack Hell
    - Inversion of control.

### Advantages of Callbacks
- callback plays very important role in Async JS.
eg:
```
const cart = ['pen', 'Eraser','Bag']
api.createOrder(cart, function(){
    api.proceedToPayment()
} ) 
```
```
const cart = ['pen', 'Eraser','Bag']
api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary()
    })
} ) 
```
- if we need to proceed to payment after creation of order here callbacks come into picture.
- here all actions happens one after the other.
- where we are giving createOrder responsibility to execute proceedToPayment api.
```
const cart = ['pen', 'Eraser','Bag']
api.createOrder(cart, function(){
    api.proceedToPayment(function(){
        api.showOrderSummary(function(){
            api.updateWallet()
        })
    })
} ) 
```
- when we have a large code base and there are so many apis and apis are dependent on on after the other.
- so we endup falling into callback hell.
- one callback inside another....goes on....
- this type of code structure is unReadable and Unmaintainable
- because of this structure its known as 'Pryamid of Doom'.

### Inversion of Control:
- you loose the control of the code when we are using callbacks
```
api.createOrder(cart, function(){
    api.proceedToPayment()
} ) 
```
- in above code we are blindly trusting createOrder api to execute createOrder api, that at somepoint of time it will create an order and call proceedToPayment function back
- we are giving responsibility to some other function to handle our code which we have written which might go wrong.

above can be controllerd using below methods:
- Callbacks: Functions passed as arguments to be executed later.
- Promises: A modern approach for handling asynchronous operations.
- Async/Await: Syntactic sugar over Promises for a more synchronous-looking code.
- Dependency Injection: External entities providing an object's dependencies.
- Event Emitters: Event-driven architecture to decouple components.
