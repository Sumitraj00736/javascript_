// (1) use of filter method in an array    
    // filter method use arrow function 
const myNums= [1,2,3,4,5,6,7,8,9,10]

const newNums2= myNums.filter( (num) => num > 4 )
// console.log(newNums2) // only we have to take the refrence of the function, No need to use of paranthesis "()".


// Method 1..............again..............
const myNums1= [1,2,3,4,5,6,7,8,9,10]

const newNums1= myNums1.filter( (num) => {
    return num > 4
} )
console.log(newNums1); // only we have to take the refrence of the function, No need to use of paranthesis "()".


// Method 2..............again..............
const myNums2= [1,2,3,4,5,6,7,8,9,10]

const newNums3= myNums2.filter( (num) => (num > 4) )  // while using paranthesis "()" no need to use return keyword 
console.log(newNums2); // only we have to take the refrence of the function, No need to use of paranthesis "()".

// ..............use of filter.................
const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction"
    },
    {
      title: "1984",
      author: "George Orwell",
      genre: "Fiction"
    },
    {
      title: "The Origin of Species",
      author: "Charles Darwin",
      genre: "Scientific"
    },
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      genre: "Scientific"
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      genre: "History"
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction"
    },
    {
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      genre: "Fantasy"
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      genre: "Fantasy"
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      genre: "Science Fiction"
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      genre: "Gothic Fiction"
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Literary Fiction"
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      genre: "Historical Fiction"
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      genre: "Psychological Fiction"
    },
    {
      title: "The Adventures of Sherlock Holmes",
      author: "Arthur Conan Doyle",
      genre: "Mystery"
    },
    {
      title: "Alice's Adventures in Wonderland",
      author: "Lewis Carroll",
      genre: "Children's Literature"
    },
    {
      title: "The Odyssey",
      author: "Homer",
      genre: "Epic Poetry"
    },
    {
      title: "Hamlet",
      author: "William Shakespeare",
      genre: "Tragedy"
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      genre: "Adventure"
    },
    {
      title: "The Road",
      author: "Cormac McCarthy",
      genre: "Post-Apocalyptic"
    },
    {
      title: "The Girl with the Dragon Tattoo",
      author: "Stieg Larsson",
      genre: "Crime"
    }
  ];

  const userbooks= books.filter((book)=> book.genre === "Adventure")
  console.log(userbooks);

  

  // .....................use of map .................

  const myNum = [1,2,3,4,5,6,7,8,9,10]
  
  const newNums =myNum.map((num)=> num+10);
  console.log(newNums);

  // ....................use of multiple map and filter in a single function..........................
  const myNum1 = [1,2,3,4,5,6,7,8,9,10]
  const newNum1 = myNum1
                   .map((num)=> num * 10 )
                   .map((num)=> num+1 )
                   .filter((num)=>num >=20)

  console.log(newNum1);                  