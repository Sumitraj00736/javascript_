// learn about if Else statement 
let userlogin = true;
if(userlogin){
    console.log("welcome");
}

//learn about switch statement 
// === three equal to helps to compare the va;ue with datatype
let key = 3323;
switch (key) {
    case 2213:
        console.log("denied")
        break;
    case 3323:
        console.log("access sucessfully")
        break;
    case 2213:
        console.log(" denied")
        break;

    default:
        break;
}

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value
//"0" string ke aandar 0 hey toh truthy value
//"false"  ," ",[],{},function( ){}

// object is empty hay ya nahi
const emptyObj ={
 name: "sumit",
 age: 30,
}
if(Object.keys(emptyObj).length===0){
    console.log("obj is empty")
}
console.log(Object.keys(emptyObj))// it shows an object as an array and only show key in an array not its value


//Nulish Coalescing Operator(??): null, undefined
let val;
val = 10?? 20;
val = null ?? 30
val = undefined ?? 45

console.log(val);

//Ternary operator
//consition? true : false  (syntax)
const icetea =100;
icetea>=80 ? console.log("not ready") : console.log("ready");



  