let items=[111,333,444,555];

let i=0;
for(let val of items){
    console.log(`Value at a index ${i} = ${val}`);
    let offer=val/10;
    items[i]-=offer;
    console.log(`Value After a Offer ${items[i]}`);
    i++;

}