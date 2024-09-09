// Create an async function that simulates fetching data with setTimeout, and use await to wait for the data.

async function fetch(){
    const data = await new Promise(resolve => {
        setTimeout(() => {
            resolve('Data fetched')
        }, 2000)
    })
    console.log(data);
}

fetch();
console.log('Fetching data...');