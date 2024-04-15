// (1)...........for of loop.............

let arr = ["ram", "shyam" , "hari", "gita"]
for (const i of arr) {
    // console.log(i);
}

// (2)..........Map.....................

const map = new Map()
map.set("ram" , "32a");
map.set("shyam" , "32b");
map.set("hari" , "32c");
map.set("gita", "32e");
// console.log(map) 

// (3).........use of "forof" loop in map..........
for (const key of map) {
    // console.log(key)
}

   // ...........or.............

for (const [key , value] of map) {
    // console.log(key, ":-", value)
}   

// (4)................loop in object...................
//......when we have to access loop in object then we have to use "forin" loop..........

let obj ={
    name : "sumit",
    age: "22",
    class: "btech CSE",
    rank: "32",
}

for (const key in obj) {
    console.log(key, ":-" , obj[key])
}


let programing = ["js", "python", "Ruby", "c++"]


for (const key in programing) { 
    console.log(key, ":-" , programing[key])
}

for (const [key, value] of programing) {
    console.log(key, ":-" , value)
}

programing.forEach( (item, index, programing) => {
    console.log(item,index, programing);

})

// (5).................... if an array with an object , It can access only by forEach loop..................
// .....................very important loop ,used while handling database...................................
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item, index, programing) => {
    console.log(item,index, programing);

})