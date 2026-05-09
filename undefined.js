let data;
// console.log(data)
const sum=(a,b)=>{
    console.log(a,b)
}
sum(1,2);

const student={
    name:'John',
    age:20,
};
delete student.age;
console.log(student.age);// undefined
console.log(student.marks);


const arr=[1,2,3];
console.log(arr[5]);//undefined

/*undefined পাওয়া যায় যখন:

Variable declared but not assigned
Function returns nothing
Missing object property
Missing array index
Missing function argument
Explicit assignment
Missing return statement
Deleted property*/