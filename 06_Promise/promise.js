const promiseOne =  new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, Cryptography, network
    setTimeout(function() {
        console.log('async task is complete')
        resolve()
    },1000);
})
promiseOne.then(function(){
    console.log("promise consume");
}) 

//................... another method ..................
new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2 complete')
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2 comsumed")
})
//.....................resolve contain an object ....................................
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("")
        resolve({username: "Sumit",email: "sumitraj00736@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

//.............................how reject work      ...................................

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username: "Sumit",email: "sumitraj00736@gmail.com"})
        }else{
            reject('Error: Something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
})
.then((username)=>{
    console.log("username: ",username);
})
.catch(function(e){
    console.log(e);
})
.finally(()=>
    console.log("finally promise ether resolve or rejected")
)

// ......................promise can handel by async await or .then both.......................
const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username: "javascript",email: "12345"})
        }else{
            reject('Error: JS went wrong')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

async function getAllUser(){
   try {
     const response = await fetch('https://api.github.com/users/sumitraj00736')
     const data = await response.json()
     console.log(data)
   } catch (error) {
    console.log("E:", error)
   }
}
getAllUser()


//..................direct using fetch....................
fetch('https://api.github.com/users/sumitraj00736')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
})
.catch((error)=>
    console.log(error)
)