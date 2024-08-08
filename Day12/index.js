const throwError = ()=> {
  throw new Error('There is some Error');
}

try{
  throwError();
} catch(err){
  //console.log(err.message)
  console.error(err.message)
}

//
const divide = (num1,num2)=>{
  isError = !num2? throw new Error('Cannot dvide by Zero'): num1/num2
}

//
class CustomError extends Error {
  constructor(message) {
    super(message); 
    this.name = 'CustomError'; 
    this.statusCode = '500'
  }
}

function riskyOperation() {
  throw new CustomError('SOMETHING WENT WRONG!!!');
}

try {
  riskyOperation();
} catch (error) {
  if (error instanceof CustomError) {
    console.error(`Caught a custom error: ${error.name} - ${error.message}`);
  } else {
    console.error(`Caught an unexpected error: ${error.message}`);
  }
}
