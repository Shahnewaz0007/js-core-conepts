let pi=3.14;

add(2,3); 
function add(a,b)
{
    const factor=0.5;
    const result=(a+b)*factor+pi;
    return result;
}
add(2,3);


const multiply=(a,b)=>{
    console.log(result);
    //TDZ: result is not defined because it is declared inside the add function and it is not accessible outside the add function. So, it will throw an error.
    const result=a*b;
    return result;
}
multiply(2,3);
