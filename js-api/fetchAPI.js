async function fetchUser(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    console.log(users);
}

fetchUser();