
const products=[
    {name:"Laptop",price:1000},
    {name:"Phone",price:500},
];
const result=products.find(p=>p.price>600);
console.log(result); // {name: "Laptop", price: 1000}

//find() method returns the first element in the array that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.