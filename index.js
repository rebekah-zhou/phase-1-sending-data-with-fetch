// Add your code here
function submitData(name1, email1) {
    const url = 'http://localhost:3000/users'
    const obj = {
        name: name1,
        email: email1  
    }

    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(obj)
    }

    return fetch(url, configObj)
        .then(res => res.json)
        .then(data => console.log(data))
}
