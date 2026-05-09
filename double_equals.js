//double equals does type coercion
//

console.log(2==2)//

console.log(2=='2')//compare the value first.if value is same then it will return true even if data types are different

console.log(2==true);//true is converted to 1 and 2 is not equal to 1 so it will return false
console.log(Nan==Nan); //NaN is not equal to anything, even itself. So, NaN == NaN will return false.

console.log({} == {});//two different objects are not equal even if they have same properties and values. So, it will return false.     