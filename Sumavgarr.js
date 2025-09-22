let marks=[50,55,88,77,66];
let sum=0;
for(let val of marks){
    sum+=val;
}
console.log(sum);

let avg=sum/marks.length;
console.log("Avg of marks",avg)