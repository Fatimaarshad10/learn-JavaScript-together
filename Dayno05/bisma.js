//Synchronous

console.log("One");
console.log("Two");
console.log("Three");

//Asynchronous
console.log("One");
console.log("Two");

setTimeout(()=>{
    console.log("hello")
},2000);

console.log("Three");
console.log("Four");

//Promises
const data = new Promise ((resolve , reject )=>{
    let username= 'bisma'; 
    if(username === 'fatima'){
        resolve(`Hello this is new user ${username}`)
    }else{
        reject("No user login yet")
    }
})
data.then((info)=>{
    console.log(info)
}).catch((error)=>{
    console.log(error)
})