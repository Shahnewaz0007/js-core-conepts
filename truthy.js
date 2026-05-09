let data;
data=0; //falsy
data='';//falsy
data='0';//truthy
data=false;//falsy
data=true;//truthy
data=null;//falsy
data=undefined;//falsy
data=[];//truthy
data={};//truthy
if(data)
{
    console.log('Truthy');  
}
else{
    console.log('Falsy');
}

let price=0;
if(!price){ //price is falsy but !price is truthy
    console.log('Truthy');  
}
else{
    console.log('Falsy');
}


let value=0;
if(!!value){ //value is falsy but !!value is truthy
    console.log('Truthy');  
}
else{
    console.log('Falsy');
}
