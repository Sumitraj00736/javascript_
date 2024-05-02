// (1) ............uses of this keyword..............
    const obj ={ 
        username : "sumit", 
        id: 3323,
        course: "Btech Cse",
    
        objfun: function(){
            console.log(this.username)
        } 
    }
    obj.objfun()
    
    
    console.log(this); // it return {} empty because we are working on node environment but when we are in browser then same will return the global 
                       // object ie windows object
    
    // we cannot access the this function inside any function 
    function one (){
        let user = "sumit";
        console.log("this: ",this);
        console.log(this.user) //undefined
    }
    one();

console.log(" ");


// (2) ................Arrow functions ...............
    const two = ()=> {
        let user= "sumit Raj"
        console.log(this.user) //undefined
    }
    two()



// (3) ..........concept of using return keyword...............

    const addone = (num1 , num2) =>{
        return num1+num2;   // num1 and num2 are inside the scope ie {} so we have to return the function
    }
    console.log(addone(2,3))
    
    const addtwo = (num1 , num2) => (num1 + num2) // this is also an arrow funnction but we didnt "return" the function because (num1 + num2)
                                                  // are written inside the paranthesis() so that we didnot have to use "return" keyword
    console.log(addtwo(2,3))
    
     // when we are returning the object in the function then we have to use paranthesis ()and inside the paranthesis we have to use curly braces{} 
    
     const funobj =()=> ( {username: "sumit", id: 3323, age: 22, course: "btech CSE"});
     console.log(funobj())
