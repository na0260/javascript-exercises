function sendRequest(method, url, data){
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = ()=>{
            if (xhr.status < 400){
                resolve(xhr.response);
            }else {
                reject(`An error occurred: ${xhr.status} ${xhr.statusText}`);
            }
        };

        xhr.onerror = ()=>{
            reject(`An error occurred: ${xhr.status} ${xhr.statusText}`);
        };

        xhr.open(method, url, true);
        xhr.send(data);
    });

    return promise;
}

function getData(){
    sendRequest("GET","https://jsonplaceholder.typicode.com/todos/1")
        .then((responseData)=>{
            document.getElementById("output").innerHTML = `Data: ${responseData}`;
        }).catch((error)=>{
            document.getElementById("output").innerHTML = error;
        });
}

function postData(){
    sendRequest("POST","https://jsonplaceholder.typicode.com/posts", JSON.stringify({
        title: 'Nur',
        body: 'Ahmed',
        userId: 1
    })).then((responseData)=>{
        document.getElementById("output").innerHTML = `Data posted successfully : ${responseData}`;
    }).catch((error)=>{
        document.getElementById("output").innerHTML = error;
    });
}

document.getElementById("get").addEventListener("click", getData);
document.getElementById("post").addEventListener("click", postData);