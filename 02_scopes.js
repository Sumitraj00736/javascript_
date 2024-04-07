// scopes ===>>

//  (1)......................var.......................

//  var :- var are function-scoped or globally-scoped, meaning they are visible 
//  throughout the function in which they are declared or globally if declared outside any function.
//      eg:-
            console.log(" ")
            console.log("......var.......")
            var x = 40;
            
            if(true) {
                x = 20; // This overrides the outer 'x'
                console.log("inner x: ",x)
            }
            console.log("outer x: ",x); //  Output: 20, the value of outer 'x' has changed

//  Generally var is not in used now a days because , Suppose in the given example if statement also has x variable and globally also declare 
    // same variable then suddenly the value of x is changed as the value is assigned in if statement, so it may cause error in  


//  (2)......................let.......................
            console.log(" ")
            console.log("......let.......")
    // the problem in 'var' is solved by  'let' so that in the industry we mustly prefered 'let'
    //      eg:-
                let y = 10;
                if (true) {
                    let y = 20;
                    console.log("inner y: ",y); // 20
                }
                console.log("outer y: ",y); // 10
    //  the value of y is totally independently of if statement            
            
//  (3.)....................const....................... 
             console.log(" ") 
    //  const always has a constant variable
    //  we cannot change the value of const variable
    //      eg:-
                const pi = 3.14;
                pi = 3; // This will throw an error: "Assignment to constant variable."
       


// (4.) try and understand yourself ==> (Assignment)

//      Assignment 01.) 
            function one(){
                const username = "sumit";
        
                function two(){
                    const website = "portfolio";
                    console.log(username )
                }
                console.log(website);
        
                two()
            }
//      Assignment 02.) 
            if(true){
                const username = "Sumit";
                if(username === "Sumit"){
                    const website =" portfolio"
                    console.log(username + website); 
                }
                console.log(website);
            } 
            console.log(username);