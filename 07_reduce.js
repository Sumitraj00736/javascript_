const myNum= [1,2,3,4]

const myTotal = myNum.reduce((acc, currVal)=> 
     ( acc + currVal), 0
)
console.log(myTotal);

const ShoppingCart =[
    {
        itemName:"js Course",
        price: 999
    },
    {
        itemName:"python Course",
        price: 99
    },
    {
        itemName:"c++ Course",
        price: 19
    },
    {
        itemName:"c# Course",
        price: 299
    }
]

const pricrToPay = ShoppingCart.reduce((acc, item) => acc + item.price, 0 )
console.log(pricrToPay);