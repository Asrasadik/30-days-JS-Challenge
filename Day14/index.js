/*  class Person{
  constructor(name,age){
    this.pName = name;
    this.pAge = age;
  }
  setPersonAge(age){
    this.pAge = age;
    console.log("age is set")
  }
  getPersonAge(){
    return this.pAge;
  }
   getPersonInfo(){
     console.log(`Name: ${this.pName} Age: ${this.pAge}`)
   }
}

const person1 = new Person('Alie',22)
//console.log(`Hi ${person1.pName} your age is ${person1.pAge}`) 
//person1.setPersonAge(25);
//console.log(person1.getPersonAge()) 

//Inheretance
class Student extends Person{
  constructor(name,age, studentID){
    super(name,age)
    this.studentID = studentID;
  }
  getStudentID(){
    return this.studentID;
  }
  // getStudentInfo(){
  //   console.log(`Hi ${this.pName} your age is ${this.pAge} and your studentID is`)
  // }
  getPersonInfo(){
    console.log(`Hi ${this.pName} your age is ${this.pAge} and your studentID is ${this.studentID}`)
  }
}

const student1 = new Student('Alie',22,1567)
//student1.getStudentInfo()
student1.getPersonInfo(); */

class Vehicle {
  static count = 0;
  constructor(name) {
    this.name = name;
    Vehicle.count++;
  }

  static getCount() {
    console.log(`the count is ${Vehicle.count}`);
  }
}

const car = new Vehicle('car');
const v2 = new Vehicle('cycle');
Vehicle.getCount();

class MathUtily{
  static add(a,b){
    return a+b;
  }
  static sub(a,b){
    return a-b;
  }
  static mul(a,b){
    return a*b;
  }
  static div(a,b){
    return a/b;
  }
}

const add = console.log(MathUtily.add(2,3))

//getter 
