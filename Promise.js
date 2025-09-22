//let promise=new Promise((resolve,reject) =>{
   // console.log("Some Error Occured:");
   // resolve("Suceess")
//});

const getPromise=()=>{
   return new Promise((resolve,reject)=>{
    console.log("I am a Promise");
   // resolve("Sucesss");
   reject("Error");s
   });
};

let promise=getPromise();
promise.then((res)=>{
    console.log("Promise Fullfilled",res);
});

promise.catch((err)=>{
   console.log("rejected",err);
});
