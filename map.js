const numbers=[1,2,3,4,5];
// const double=[];
// for(const num of numbers){
//     double.push(num*2);
// }
//console.log(double); // [2, 4, 6, 8, 10]

// const doubleIt=num=>num*2;
// const double=numbers.map(doubleIt); //
// console.log(double); // [2, 4, 6, 8, 10]


const double=numbers.map(num=>num*2);
// console.log(double); // [2, 4, 6, 8, 10]


const friends=["Alice","Bob","Charlie"];
const firstLetters=friends.map(frd=>frd[0]);
// console.log(firstLetters); // ['A', 'B', 'C']



const products=[
    {name:"Laptop",price:1000},
    {name:"Phone",price:500},
];
const productNames=products.map(p=>p.name);
console.log(productNames); // ['Laptop', 'Phone']


//forEach
const numbers2=[1,2,3,4,5];
const squares=[];
numbers2.forEach(num=>squares.push(num*num));
console.log(squares); // [1, 4, 9, 16, 25]
