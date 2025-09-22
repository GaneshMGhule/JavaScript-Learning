//callback Hell
/*
function getData(dataID,getNextData){
    setTimeout(()=>{
        console.log("Data", dataID);
        if(getNextData){
            getNextData();
        }
    },2000);
}
    
getData(1,()=>{
    console.log("getting Data2");
    getData(2,()=>{
        console.log("getting Data2");
        getData(3,()=>{
            console.log("getting Data2");
            getData(4);
        });
    });
});
*/

/*

//Promise Chain

function getData(dataID){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            console.log("Data", dataID);
            resolve("Successs");
        },3000);
        
    });
}

getData(1)
    .then((res)=>{
        return getData(2);
    })
    .then((res)=>{
        return getData(3);
    })
    .then((res)=>{
        console.log(res);
    });
*/

/*
getData(1,()=>{
    console.log("getting Data2");
    getData(2,()=>{
        console.log("getting Data2");
        getData(3,()=>{
            console.log("getting Data2");
            getData(4);
        });
    });
});

*/

// async Function

function getData(dataID){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data", dataID);
            resolve("Success");
        },3000);
    });
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
}

getAllData();


