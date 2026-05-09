function outerFunction(){
    function innerFunction(){
        console.log("This is inner function");
    }
    return innerFunction;
}

const output=outerFunction();
// output(); // This is inner function 
// console.log(output); // [Function: innerFunction]


function counter(owner){
    let count=0;
    function increment(){
        count++;
        console.log('value of count: ',owner,count);
      
    }
    return increment;
}
const count1=counter("Alice");
console.log(count1); // [Function: increment]
count1(); // value of count: Alice 1
count1(); // value of count: Alice 2

const count2=counter("Bob");
count2();   
// value of count: Bob 1
count2();   
// value of count: Bob 2