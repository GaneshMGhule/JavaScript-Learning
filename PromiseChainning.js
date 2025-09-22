function asyncFunc1(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log("Data 1");
            reslove("Success");
        },4000);
    });
}

function asyncFun2(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            console.log("Data 2");
            reslove("Success");
        },4000);
    });

}

console.log("Feching Data1....");
let p1 = asyncFunc1();
p1.then(()=>{
    
    console.log("Feching Data2...");
    let p2=asyncFun2();
    p2.then((err)=>{
        console.log("Successfully:")
    });
});