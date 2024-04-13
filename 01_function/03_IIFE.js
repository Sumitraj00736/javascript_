// (1)..........Immediately Invoke function Expression (IIFE)......... :-

// it is a function that exicute immediately
// global scope ke pollution se problem hoti hey so  uske pollution ko hatane kilye IIFE function use karte hey   (*** Interview meh yahi jabaf dena hey ***)
   
// (2)IIFE function writing method
    (function one() { // named IIFE
        console.log(`DB is connected`);
    })(); // use of semi collon ; is very important in IIFE function to end the function

// (3) we can  also use arrow function
    ( ()=>{// unnamed IIFE
        console.log(`Db connected two`);
    } )();

    ( (name)=>{
        console.log(`Db connected two ${name}`);
    } )("sumit")
