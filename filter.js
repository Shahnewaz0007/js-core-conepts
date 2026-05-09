const numbers=  [1,2,3,4,5];


const result=numbers.filter(num=>num%2===0);
console.log(result); // [2, 4]

const friends=["Alice","Bob","Charlie","David"];
const result2=friends.filter(frd=>frd.length>4);
console.log(result2); // ['Alice', 'Charlie', 'David']

const products=[
    {name:"Laptop",price:1000},
    {name:"Phone",price:500},
];
const result3=products.filter(p=>p.price>600);
console.log(result3); // [{name: "Laptop", price: 1000}]