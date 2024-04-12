//object types
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
//   console.log(person.lastname);
//   let object ={
//     firstName: "sachin",
//     lastName: "kharwar",
//     age: "20",
//     number: "8090305060",
//   };
//   console.log(object);
  
//   //Expresion
//   let ab = 1;
//   ab++;
//   a+b 
//   'a'+'b'
//   //operator in java
//   let a = 10;
//   let b = 12;
//   console.log("a =" + a);
//   console.log("b =" + b);
//   let addvalue =a + b;
//   let diff = a - b;
//   let product = a * b;
//   let quo = a/b;
//   let re = a%b;
//   console.log("a + b = ", addvalue);
//   console.log("a - b = ", diff);
//   console.log("a * b = ", product);
//   console.log("a / b = ", quo);
//   console.log("a % b = ", re);

//   // precedence operator
// let ans =1*2+10;
//   console.log(ans);
//   //*/% work this form 
// //   + - 

// // equality operator  (this give always true / false )
// /**
//  * <
//  * >
//  * <=
//  * >=
//  * ==
//  */
// console.log(10==5);
// //output is (False)
// console.log(10>5);
// //true
// console.log(10<5);
// //false
// console.log(10>=5);
// //true
// console.log(10<=5);
// // false
// console.log(10>=10);
// //true
// console.log(10>10);
// //false

// //conditional operator
// let age =20;
// if(age>10){
//     console.log("you can vote")
// }
// else{
//     console.log("you can't vote")
// }


// let age = 35;
// if(age>25){
//     console.log("you are young")
// }
// else if (age>18){
//     console.log("you are greater than 18")
// }
// else{
//     console.log("you are lesser than 18")
// }

// if you want to print specific value 
// console.log(object[age]);

// array
// let a =[10, 20, 'sachin' ,true ,false]
// console.log(a);
// if you want to add some value in array add with the help of (push)
// a.push("sachin")
// console.log(a);

// if you want to delete any array in your index do with the help of (pop)
// a.pop()
// 'sachin'
// console.log(a);

// let a =[1,2,3];
// console.log(a);
// a.shift();
// console.log(a);

// a.unshift(10);
// console.log(a);
// let a =[1,2,3];
// console.log("array:"+a);
// a.shift();
// console.log("after shifting array " +a);
// a.unshift(321);
// console.log("after unshift array" +a);
// console.log(a.length);

// loops in javascript
// let i =1;
// while(i<10){

//     console.log("Hello");
//     i++;
// }

// let i= 0;
// const array=[1,2,3,4,5,6,7,8,9,10];
// while(i < array.length){
//     i=i+1;
//     console.log(array[i]);
// }

// for(i=0;i<=10;i++){
//     console.log(i);
// }

// let array=[1,2,3,4];
// for(let i=0;i<array.length;++i){
//     console.log(array[i]);
// }

// const list =[1,2,3,4,5,6,7,8,9,10];
// for(const value of list){
//     console.log(value);
// }

// Function in javascript

// function fun(){
//     console.log("hello");
// }
// fun();

// function add(a,b){
//    let sum=a+b;
//     console.log(sum);

// }
// add(12,23);
// add(22,33);
// add(25,56);
// add(78,89);
// add(47,56);

// function sub(a, b){
//     let diff=a-b;
//     return diff;

// }
// let diff=sub(22,33);
// console.log(diff);

// function add(a,b){
//     let sum=a+b;
//     return sum;

// }
// let s = add(22,33);
// console.log(s);

// function product(a,b){
//           let product   =a*b;
//           return product;
// }
// let b=product(22,33);
// console.log(b);

// function quo(a,b){
//     let quo=a/b ;
//     return quo;

// }
// let a=quo(22,11);
// console.log(a);

// function re(a,b){
//     let re=a%b;
//     return re;
// }
// let b=re(22,11);
// console.log(b);

function add(a,b){
        let sum=a+b;
        return sum;
    
    }
    let s = add(22,33);
    // console.log(s);