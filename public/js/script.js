console.log('test');


// var x=5;
// console.log(x);
//
// y=10;
// console.log(y);
//
// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);


let x=2;// let has block scope. it is known only inside the structure where it is declared
const y=10; //cannot change the value when a variable is declared
// y=25;
console.log(y);

for (let i = 0; i < 5; i++) {
  console.log(i);
}
//es5
// total(5,8);
// function total(p,q){
//   console.log(p,q);
// }


// es6
let total =(p,q) => {
  console.log(p+q);
}

total(2,3)
