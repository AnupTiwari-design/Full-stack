//Function Declarations 

function greet(){
    console.log("hello");
}
greet();

function add(a,b){
    console.log(a+b);

}
add(3,4);

//Arrow Functions

const add1 = (a, b) => {
  return a + b;
};

console.log(add1(2, 3));

//scope
let a=8;//global variable
function print(){
    console.log(a);
    let v=7;//local variable
    console.log(v);
}
print();


const value=0;
const value1=0;

let value3;
value3=0;

