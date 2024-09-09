// Create an async function that simulates fetching data with setTimeout, and use await to wait for the data.

async function fetch(){
    const data = await new Promise(resolve => {
        setTimeout(() => {
            resolve('Data fetched.')
        }, 2000)
    })
    console.log(data);
}

fetch().then(() =>
    console.log('Fetched complete.')
).catch(err=>
    console.log("Error:",err)
);
console.log('Fetching data...');