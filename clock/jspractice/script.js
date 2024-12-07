// 1.Variables
// These are how a variable gets their value and which can be changed and which cannot be changed

// const myName = "Basanta"; .....> This variable cannot be reassigned since its decleared as const 
// const age = 22; .....> This variable cannot be reassigned since its decleared as const 
// let favHobby = "Playing Guitar"; .....> This variable can be reassigned since its decleared as let  

// myName += "Khatri";
// favHobby += " PLaying Cricket";
// console.log(favHobby)


// 2.Data Types

// const myName = "Basanta"
// let age = 22
// let isAlive = true
// const dob = null
// const myTopThreeLanguages = ['javascript','python','R']
// const car = {
//     brand:"BMW",
//     model: "X5",
//     year:2022,
//     owner: {  //Nested object inside 1 object
//         name:'Basanta',
//         age:22,
//         city:"Butwal"
//     }
// }

// console.log(`I know a friend his name is ${car.owner.name} from ${car.owner.city}.
//     He is ${car.owner.age} years old. He has a ${car.brand} ${car.model} of ${car.year}`)


// const num1 = 10 ;
// const num2 = 20 ;
// const sum = num1 + num2;
// const difference = num2 - num1;
// const product = num2 * num1;
// console.log("The sum is "+sum +" difference is "+difference + " and product is "+product)

// const isEqual = num1 === 10
// const isGreater = num2 > 20

// const age = 34
// const isAlive = true

// const checkCondition = age>21 || isAlive

const num = 0

if(num > 0) {
    console.log("This number is Positive")
}else{
    if(num<0) {
        console.log("The number is negative")
    }else{
        console.log("The number is Zero")
    }
}


const mark = 76
if(mark >= 85) {
    console.log("A")
}else if(mark >= 70) {
    console.log("B")
}else{
    console.log("C")
}