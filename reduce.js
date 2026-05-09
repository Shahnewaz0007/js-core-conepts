const numbers = [1, 2, 3, 4, 5, 6];
let sum=0;
for(const num of numbers){
    sum+=num;
}
console.log(sum); // 21

const total=numbers.reduce((acc,num)=>acc+num,0);//const total=numbers.reduce((prev,curr)=>prev+curr,0);
console.log(total); // 21