export const Objects = () => {
    

// interface User {
//   id: number
//   name: string
//   age: number
//   city: string
// }

// const users: User[] = [
//   { id: 1, name: 'Alice', age: 25, city: 'Moscow' },
//   { id: 2, name: 'Bob', age: 30, city: 'London' },
//   { id: 3, name: 'Charlie', age: 22, city: 'Moscow' },
//   { id: 4, name: 'David', age: 28, city: 'Berlin' },
//   { id: 5, name: 'Eve', age: 35, city: 'London' }
// ]

// function groupByCity(users:User[]){

//   const newObj: {[key:string]:User[]} = {}
  
//   for (const user of users){
//     const city = user.city

//     if(!newObj[city]){
//       newObj[city] = []
//     }

//     newObj[city].push(user)
    
//   }
//   return newObj

// }
// const grouped = groupByCity(users)
// console.log(grouped)





// Типизация
// type User = {
//   name: string;
//   age: number;
//   city: string;
// };

// const users: User[] = [
//   { name: 'Anna', age: 28, city: 'Berlin' },
//   { name: 'Mike', age: 32, city: 'Paris' },
//   { name: 'John', age: 25, city: 'Berlin' },
// ];


// const nameArr = users.map(user => user.name)


// function avarageAge(users:User[]):number {
//   const totalAge = users.reduce((acc,item)=>{
//     acc += item.age
//     return acc
//   },0)
//    return totalAge/users.length
// }
// const newAge = avarageAge(users)


// const groupCity = {}

// for(let user of users) {

//    let city = user.city
   
//    if(!groupCity[city]){
//     groupCity[city] = []
//    }

//    groupCity[city].push(user)
// }



// console.log(newAge.toFixed(2))
// console.log(nameArr)
// console.log(groupCity)






// type Product = {
//   name: string;
//   price: number;
//   category: string;
// };

// const products: Product[] = [
//   { name: 'iPhone', price: 999, category: 'electronics' },
//   { name: 'T-shirt', price: 19, category: 'clothing' },
//   { name: 'TV', price: 499, category: 'electronics' },
//   { name: 'Jeans', price: 49, category: 'clothing' },
// ];



// const newArrName = products.map(product => product.name)
// console.log(newArrName)

// function averagePrice(products:Product[]):number {
//   const totalPrice = products.reduce((acc,product)=>{
//      acc+=product.price
//     return acc
//   },0)
//   return totalPrice/products.length
// }
// const ave = averagePrice(products)
// console.log(ave)

// const newObj:Record<string,Product[]> = {}

// for (let product of products) {
  
//   if(!newObj[product.category]){
//     newObj[product.category] = []
//   }

//   newObj[product.category].push(product)

// }

// console.log(newObj)






// type Order = {
//   id: number;
//   customer: string;
//   items: {
//     product: string;
//     quantity: number;
//     price: number;
//   }[];
// };

// const orders: Order[] = [
//   {
//     id: 1,
//     customer: 'Alice',
//     items: [
//       { product: 'iPhone', quantity: 1, price: 999 },
//       { product: 'Case', quantity: 2, price: 19 },
//     ],
//   },
//   {
//     id: 2,
//     customer: 'Bob',
//     items: [
//       { product: 'TV', quantity: 1, price: 499 },
//       { product: 'iPhone', quantity: 1, price: 999 },
//     ],
//   },
// ];


// const uniqueProducts = [...new Set(orders.map(order => order.items.map(product => product.product)).flat())]
// console.log(uniqueProducts)


// const result:Record<number,number> = {}

// for( let order of orders){
//   const totalPrice = order.items.reduce((acc,item)=>{
//     acc += item.price * item.quantity
//     return acc
//   },0)

//   result[order.id] = totalPrice

// }
// console.log(result)




// type Employee = {
//   name: string;
//   age: number;
//   department: string;
//   salary: number;
// };

// const employees: Employee[] = [
//   { name: 'Alice', age: 30, department: 'HR', salary: 3000 },
//   { name: 'Bob', age: 40, department: 'IT', salary: 5000 },
//   { name: 'Charlie', age: 35, department: 'IT', salary: 5500 },
//   { name: 'Diana', age: 28, department: 'Marketing', salary: 4000 },
//   { name: 'Eve', age: 25, department: 'HR', salary: 3100 },
// ];

// const allIT = employees.filter(item => item.department === 'IT')
// console.log(allIT)

// const result:Record<string,Employee[]> = {}

// for (let empl of employees) {

//   if(!result[empl.department]){
//     result[empl.department] = []
//   }
//   result[empl.department].push(empl)
// }
// console.log(result)

// const averageSalaryByDept: Record<string, number> = {};


// for (let dep in result ){
   
//    const total = result[dep].reduce((acc,item)=>acc+=item.salary,0)
//    const res =  total/result[dep].length 
   
//    averageSalaryByDept[dep] = Number(res.toFixed(1))
// }
// console.log(averageSalaryByDept)









type Grade = {
  subject: string;
  score: number;
};

type Student = {
  name: string;
  group: string;
  grades: Grade[];
};

const students: Student[] = [
  {
    name: 'Ivan',
    group: 'A',
    grades: [
      { subject: 'Math', score: 90 },
      { subject: 'History', score: 85 },
    ],
  },
  {
    name: 'Maria',
    group: 'B',
    grades: [
      { subject: 'Math', score: 78 },
      { subject: 'History', score: 95 },
    ],
  },
  {
    name: 'Oleg',
    group: 'A',
    grades: [
      { subject: 'Math', score: 88 },
      { subject: 'History', score: 92 },
    ],
  },
];



// const averageBall:Record<string,number> = {}

// for (let student of students){
//   const totalScore = student.grades.reduce((acc,item)=>acc+item.score,0)
//   const avarage = totalScore/student.grades.length
//   averageBall[student.name] = Number(avarage.toFixed(1))
// }

// console.log(averageBall);

const subjectScores: Record<string, number[]> = {};

for(let student of students){
  for (let grade of student.grades){
    if(!subjectScores[grade.subject]){
      subjectScores[grade.subject] = []
    }
    subjectScores[grade.subject].push(grade.score)
  }
}
console.log(subjectScores);

const averageBySubject: Record<string, number> = {};

for (let subject in subjectScores){
  const avg = subjectScores[subject].reduce((acc,item)=>acc+item,0)/subjectScores[subject].length
  averageBySubject[subject] = Number(avg.toFixed(1))
}
console.log(averageBySubject);












































}