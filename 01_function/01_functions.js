//1. function introduction
    function sayMyName(){
        console.log("S")
        console.log("U")
        console.log("M")
        console.log("I")
        console.log("T")
    }
// sayMyName => "function name without paranthesis '()'  is a reference of the function , To execute the function we have to add paranthesis'()'. "
    sayMyName()

// -----------------------------------------------------------------------------------------------------------------------------------------------
//2. function with parament or Parametric Function

    function addTwoNumber(number1 , number2){ /* inside () paranthesis is a parameter */
        console.log(number1+number2);
    }

    addTwoNumber(3,4)  /* indside ()paranthesis is a arguement */
    const result = addTwoNumber(4,5)
    console.log("Result:", result); /*The value of result remain undefine because function addTwoNumber doesn't return the sum ,
                          It just a console.log() which didnt return value */
    

//3. To assign the value to the result we have to use return  in the function for eg:-

    function addTwoNumber1(number1 , number2){ 
        const ans= number1 + number2 ;
        return ans
    }
    const result1 =  addTwoNumber1(2,3)
    console.log("Result1: ", result1) /* Now result has its value ie 5 */


//4. ..........rest operator.........

    function calculateCartPrice(...num1){ // ... this 3 dot is a rest operator that help to print all the value which is passed in the argument
        return num1;
    }
    console.log(calculateCartPrice(299,300,400,5000)); // print all the value in array

//5. interview question................. *****
    
    function calculateCartPrice1(val1, val2, ...num1){ // val1 = 299, val2 = 300 and rest value ie 400,5000,600,700 is store in 'num1' as an array
        return  [val1 ,val2, num1];
    }
    console.log(calculateCartPrice1(299,300,400,5000,600,700));

//6. We can pass objects , array in a function below the code through you can understand

   // 6.(a) passing OBJECT in Function  
    const obj ={
        1 : "A",
        2 : "B",
        3 : "C"
    }

    function handleObject (anyObjects){
        console.log( `${anyObjects[1]} take loan from ${anyObjects[2]}`);
    }

    handleObject(obj);
   //............OR...............
    handleObject({
        1 : "A",
        2 : "B",
        3 : "C"
    })

    //6.(b) passing Array in Function
    const arr = [100,200,300,400,500]

    function handleArray (anyArray){
        console.log( `${anyArray[1]} take loan from ${anyArray[2]}`);
    }

    handleArray(arr);
    // ...........OR..............
    handleArray([100,200,300,400,500])



//............interesting concept..................
    // 1.
    function addone(num){
        return num+1;
    }
    console.log(addone(5));
    
    // 2.
    const addthree = function( num){
        return num+3;
    }
    console.log(addthree(6));

    // Ans => both are generally same as a function the only difference in this is given below
    
    addone(5)// this doesnt create error
    function addone(num){
            return num+1;
        }


    addtwo(6)// this create error
    const addtwo = function( num){
            return num+2;
        }
