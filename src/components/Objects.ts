import { use, useSyncExternalStore } from "react";

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









// type Grade = {
//   subject: string;
//   score: number;
// };

// type Student = {
//   name: string;
//   group: string;
//   grades: Grade[];
// };

// const students: Student[] = [
//   {
//     name: 'Ivan',
//     group: 'A',
//     grades: [
//       { subject: 'Math', score: 90 },
//       { subject: 'History', score: 85 },
//     ],
//   },
//   {
//     name: 'Maria',
//     group: 'B',
//     grades: [
//       { subject: 'Math', score: 78 },
//       { subject: 'History', score: 95 },
//     ],
//   },
//   {
//     name: 'Oleg',
//     group: 'A',
//     grades: [
//       { subject: 'Math', score: 88 },
//       { subject: 'History', score: 92 },
//     ],
//   },
// ];



// const averageBall:Record<string,number> = {}

// for (let student of students){
//   const totalScore = student.grades.reduce((acc,item)=>acc+item.score,0)
//   const avarage = totalScore/student.grades.length
//   averageBall[student.name] = Number(avarage.toFixed(1))
// }

// console.log(averageBall);

// const subjectScores: Record<string, number[]> = {};

// for(let student of students){
//   for (let grade of student.grades){
//     if(!subjectScores[grade.subject]){
//       subjectScores[grade.subject] = []
//     }
//     subjectScores[grade.subject].push(grade.score)
//   }
// }
// console.log(subjectScores);

// const averageBySubject: Record<string, number> = {};

// for (let subject in subjectScores){
//   const avg = subjectScores[subject].reduce((acc,item)=>acc+item,0)/subjectScores[subject].length
//   averageBySubject[subject] = Number(avg.toFixed(1))
// }
// console.log(averageBySubject);





// type Item = {
//   name: string;
//   price: number;
//   category: string;
// };

// const items: Item[] = [
//   { name: 'iPhone', price: 1200, category: 'Electronics' },
//   { name: 'TV', price: 800, category: 'Electronics' },
//   { name: 'T-shirt', price: 25, category: 'Clothing' },
//   { name: 'Jeans', price: 50, category: 'Clothing' },
//   { name: 'Shoes', price: 90, category: 'Clothing' },
// ];

// let newObj:Record<string,Item[]> = {}

// for(let item of items) {
//   if(!newObj[item.category]){
//     newObj[item.category] = []
//   }
//   newObj[item.category].push(item)
// }
// console.log(newObj);


// let newPrice:Record<string,number> = {}

// for(let price in newObj){
//   const res = newObj[price].reduce((acc,item)=>acc+item.price,0)/newObj[price].length
//   newPrice[price] = Number(res.toFixed(1))
// }

// console.log(newPrice);





// type Order = {
//   id: number;
//   customer: string;
//   items: {
//     name: string;
//     category: string;
//     price: number;
//     quantity: number;
//   }[];
// };

// const orders: Order[] = [
//   {
//     id: 1,
//     customer: 'Anna',
//     items: [
//       { name: 'iPhone', category: 'Electronics', price: 1200, quantity: 1 },
//       { name: 'TV', category: 'Electronics', price: 800, quantity: 1 },
//     ],
//   },
//   {
//     id: 2,
//     customer: 'Mike',
//     items: [
//       { name: 'T-shirt', category: 'Clothing', price: 25, quantity: 2 },
//       { name: 'Shoes', category: 'Clothing', price: 90, quantity: 1 },
//     ],
//   },
//   {
//     id: 3,
//     customer: 'Anna',
//     items: [
//       { name: 'Jeans', category: 'Clothing', price: 50, quantity: 1 },
//       { name: 'TV', category: 'Electronics', price: 800, quantity: 1 },
//     ],
//   },
// ];

//  let newObj:Record<string,number> = {}

// for (let order of orders){
//   let result = order.items.reduce((acc,item)=>{
//     acc+=item.price * item.quantity;
//     return acc
//   },0)

//   if (!newObj[order.customer]) {
//     newObj[order.customer] = 0;
//   }

//   newObj[order.customer] += result
// }

// console.log(newObj);






// type Item = {
//   product: string;
//   price: number;
//   quantity: number;
//   category: string;
// };

// type Order = {
//   id: number;
//   customer: string;
//   items: Item[];
// };

// const orders: Order[] = [
//   {
//     id: 1,
//     customer: 'Anna',
//     items: [
//       { product: 'iPhone', price: 1200, quantity: 1, category: 'Electronics' },
//       { product: 'TV', price: 800, quantity: 1, category: 'Electronics' },
//       { product: 'T-shirt', price: 25, quantity: 2, category: 'Clothing' },
//     ],
//   },
//   {
//     id: 2,
//     customer: 'Mike',
//     items: [
//       { product: 'Jeans', price: 50, quantity: 1, category: 'Clothing' },
//       { product: 'Shoes', price: 90, quantity: 1, category: 'Clothing' },
//     ],
//   },
//   {
//     id: 3,
//     customer: 'Anna',
//     items: [
//       { product: 'Laptop', price: 2000, quantity: 1, category: 'Electronics' },
//       { product: 'Dress', price: 120, quantity: 1, category: 'Clothing' },
//     ],
//   },
// ];

// const newObj:Record<string,Record<string,number>> = {}

// for (let order of orders){

//   if(!newObj[order.customer]){
//     newObj[order.customer] = {}
//   }

//   for(let item of order.items){
//       if(!newObj[order.customer][item.category]){
//         newObj[order.customer][item.category]= 0
//       }
//       newObj[order.customer][item.category] += item.price*item.quantity
//   }
// }

// console.log(newObj);





// type Item = {
//   product: string;
//   price: number;
//   quantity: number;
//   category: string;
// };

// type Order = {
//   id: number;
//   customer: string;
//   items: Item[];
// };

// const orders: Order[] = [
//   {
//     id: 1,
//     customer: 'Anna',
//     items: [
//       { product: 'iPhone', price: 1200, quantity: 1, category: 'Electronics' },
//       { product: 'TV', price: 800, quantity: 1, category: 'Electronics' },
//       { product: 'T-shirt', price: 25, quantity: 2, category: 'Clothing' },
//     ],
//   },
//   {
//     id: 2,
//     customer: 'Mike',
//     items: [
//       { product: 'Jeans', price: 50, quantity: 1, category: 'Clothing' },
//       { product: 'Shoes', price: 90, quantity: 1, category: 'Clothing' },
//     ],
//   },
//   {
//     id: 3,
//     customer: 'Anna',
//     items: [
//       { product: 'Laptop', price: 2000, quantity: 1, category: 'Electronics' },
//       { product: 'Dress', price: 120, quantity: 1, category: 'Clothing' },
//     ],
//   },
// ];



// const newObj:Record<string,Record<string,number>> = {}


// for (let order of orders){
//   if(!newObj[order.customer]){
//     newObj[order.customer] = {}
//   }
//   for(let item of order.items){
//     if(!newObj[order.customer][item.category]){
//       newObj[order.customer][item.category] = 0
//     }
//     newObj[order.customer][item.category] += item.quantity
//   }
// }
// console.log(newObj);



// type Order = {
//   customer: string;
//   items: {
//     name: string;
//     price: number;
//     quantity: number;
//   }[];
// };

// const orders: Order[] = [
//   {
//     customer: 'Anna',
//     items: [
//       { name: 'Phone', price: 500, quantity: 1 },
//       { name: 'Case', price: 20, quantity: 2 },
//     ],
//   },
//   {
//     customer: 'Mike',
//     items: [{ name: 'Laptop', price: 1500, quantity: 1 }],
//   },
//   {
//     customer: 'Anna',
//     items: [{ name: 'Charger', price: 30, quantity: 1 }],
//   },
// ];


// const newObj:Record<string,number> = {}

// for (const order of orders){

//   if(!newObj[order.customer]){
//     newObj[order.customer] = 0 
//   }
//   newObj[order.customer] += Number(order.items.reduce((acc,item)=>acc+item.price*item.quantity,0))
// }
// console.log(newObj);





// type Order = {
//   customer: string;
//   items: {
//     product: string;
//     brand: string;
//     price: number;
//     quantity: number;
//   }[];
// };
// const orders: Order[] = [
//   {
//     customer: 'Alice',
//     items: [
//       { product: 'iPhone', brand: 'Apple', price: 1000, quantity: 1 },
//       { product: 'AirPods', brand: 'Apple', price: 200, quantity: 2 },
//     ],
//   },
//   {
//     customer: 'Bob',
//     items: [
//       { product: 'Galaxy S21', brand: 'Samsung', price: 900, quantity: 1 },
//       { product: 'TV', brand: 'Samsung', price: 800, quantity: 1 },
//     ],
//   },
//   {
//     customer: 'Alice',
//     items: [
//       { product: 'iPad', brand: 'Apple', price: 600, quantity: 1 },
//     ],
//   },
// ];

// const newObj:Record<string, number> = {}

// for (let order of orders){
//   for (let item of order.items){

//     const total = item.price * item.quantity

//     // const result = order.items.reduce((acc,item)=>acc + total,0)

//     if(!newObj[item.brand]){
//       newObj[item.brand] = 0
//     }

//     newObj[item.brand] += total

//   }
// }

// console.log(newObj);






// enum OrderStatus {
//   Pending = "Pending",
//   Shipped = "Shipped",
//   Delivered = "Delivered"
// }

// type OrderItem = {
//   product: string;
//   category: string;
//   price: number;
//   quantity: number;
// };

// type Order = {
//   id: number;
//   status: OrderStatus;
//   items: OrderItem[];
// };

// const orders: Order[] = [
//   {
//     id: 1,
//     status: OrderStatus.Pending,
//     items: [
//       { product: "iPhone", category: "Electronics", price: 1000, quantity: 1 },
//       { product: "Case", category: "Accessories", price: 20, quantity: 2 },
//     ],
//   },
//   {
//     id: 2,
//     status: OrderStatus.Shipped,
//     items: [
//       { product: "TV", category: "Electronics", price: 1500, quantity: 1 },
//     ],
//   },
//   {
//     id: 3,
//     status: OrderStatus.Delivered,
//     items: [
//       { product: "Shoes", category: "Clothing", price: 100, quantity: 2 },
//     ],
//   },
//   {
//     id: 4,
//     status: OrderStatus.Pending,
//     items: [
//       { product: "Headphones", category: "Electronics", price: 200, quantity: 1 },
//       { product: "T-shirt", category: "Clothing", price: 30, quantity: 2 },
//     ],
//   },
// ];

// type Result = Record<OrderStatus, Record<string, number>>;

// const result: Result = {
//   [OrderStatus.Pending]: {},
//   [OrderStatus.Shipped]: {},
//   [OrderStatus.Delivered]: {}
// };

// for (let order of orders) {
//   if(!result[order.status]){
//     result[order.status] = {}
//   }
//   for(let total of order.items){
//     const res = total.price * total.quantity

//     if(!result[order.status][total.category]){
//       result[order.status][total.category] = 0
//     }
//     result[order.status][total.category] += res
//   }
// }
// console.log(result);



// function uniqueNumbers(numbers: number[]): number[] {
//   return [...new Set(numbers)]
// }
// console.log(uniqueNumbers([34,523,45,234,6,23456,245,6,2456,134,523,41,324,123,45,134,523,145,234,5]))


// const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// function averageScores(words: string[]): Record<string, number>  {
//   const newObj:Record<string,number> = {}

//   for(let word of words){
//     if(!newObj[word]){
//       newObj[word] = 0
//     }
//     newObj[word] +=1
//     // if(newObj[word]){
//     //   newObj[word] += 1
//     // } else {
//     //   newObj[word] = 1
//     // }
//   }
//   return newObj

// }
// console.log(averageScores(words))



// type User = {
//   id: number;
//   name: string;
//   age: number;
// };

// const users: User[] = [
//   { id: 1, name: "Alice", age: 21 },
//   { id: 2, name: "Bob", age: 25 },
//   { id: 3, name: "Charlie", age: 21 },
// ];

// const groupUsersByAge = (users:User[]):{[key:number]:User[]} => {
//   const newObj:{[key:number]:User[]} = {}
  
//   for(let user of users){
//     if(!newObj[user.age]){
//       newObj[user.age] = []
//     }
//     newObj[user.age].push(user)
//   }
//   return newObj
// }
// const res = groupUsersByAge(users)
// console.log(res)


// const numbers = [1, 2, 2, 3, 4, 4, 5];

// // const getUniqueNumbers = (numbers:number[]):number[] => {
// //   const unique = [...new Set(numbers)]
// //   return unique
// // }
// // const res = getUniqueNumbers(numbers)
// // console.log(res)



// const getUniqueNumbers = (numbers:number[]):number[] => {
//   const resultArr:number[] = []

//   for(let number of numbers){

//     if(!resultArr.includes(number)){
//       resultArr.push(number)
//     }

//   }
//   return resultArr
// }
// const res = getUniqueNumbers(numbers)
// console.log(res)


// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };

// const products: Product[] = [
//   { id: 1, title: "Book", price: 10 },
//   { id: 2, title: "Laptop", price: 1000 },
//   { id: 3, title: "Pen", price: 2 },
// ];

// const filterProductsByPrice = (products:Product[],maxPrice:number):Product[] => {
//   const newArr:Product[] = []
  
//   const filtredItem = products.filter(item => item.price <= maxPrice)

//    return filtredItem
// }

// const filterProductsByPrice = (products:Product[],maxPrice:number):Product[] => {
//   const newArr:Product[] = []

//   for(let product of products){
//     if(product.price<=maxPrice){
//       newArr.push(product)
//     }
//   }
//   return newArr

// }


// const res = filterProductsByPrice(products,10)
// console.log(res)

// const str = 'qwertyqweqwq'

// const countLetters = (str: string): { [key: string]: number } => {
//   const newObj:{ [key: string]: number } = {}
 
//   const items = str.split('')

//   for(let item of items){
//     if(newObj[item]){
//       newObj[item]++
//     } else {
//       newObj[item]=1
//     }
//   }
//   return newObj

// }
// const res = countLetters(str)
// console.log(res)



type User = {
  id: number;
  name: string;
};

// const users: User[] = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "bob" },
//   { id: 3, name: "Charlie" },
// ];

// const findUserByName = (users:User[],searchName: string):User|undefined => {
//   return users.find(item=>item.name.toLowerCase() === searchName.toLowerCase())
// }
// const res = findUserByName(users,'bob')
// console.log(res)


// const usersWithDuplicates: User[] = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 1, name: "Alice" }, // дубликат
//   { id: 3, name: "Charlie" },
// ];

// const removeDuplicateUsers = (users:User[]):User[] => {
  
//   const newArr:User[] = []
//   const unique = new Set<number>()

//   for(let user of users) {
//     if(!unique.has(user.id)){
//       unique.add(user.id)
//       newArr.push(user)
//     }
//   }
//   return newArr
// }
// const res = removeDuplicateUsers(usersWithDuplicates)
// console.log(res)



// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };

// const products: Product[] = [
//   { id: 1, title: "Phone", price: 500 },
//   { id: 2, title: "Laptop", price: 1200 },
//   { id: 3, title: "Tablet", price: 800 },
// ];

// // const getMostExpensive = (products:Product[]):Product | null => {
// //   return products.reduce((max,current)=>max.price>current.price?max:current)
// // }

// // const getMostExpensive = (products:Product[]):Product | null => {
// //  const maxPrice = Math.max(...products.map(item=>item.price))
// //  const maxItem = products.find(item => item.price === maxPrice)
// //  return maxItem || null
// // }



// const res = getMostExpensive(products)
// console.log(res)










// const usersList: User[] = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];

// const mapUsersById = (usersList:User[]):{[id:number]:User} => {
  
//   const newObj:{[id:number]:User} = {}

//   for(let user of usersList){
//     if(!newObj[user.id]){
//       newObj[user.id] = user
//     }
//   }
//   return newObj
// }
// const res = mapUsersById(usersList)
// console.log(res)

// type Product = {
//   id: number;
//   title: string;
//   price: number;
// };

// const products: Product[] = [
//   { id: 1, title: "Phone", price: 500 },
//   { id: 2, title: "Laptop", price: 1200 },
//   { id: 3, title: "Tablet", price: 800 },
// ];

// function sortProductsByPrice(products: Product[]): Product[] {
//   const copy = [...products]
//  return copy.sort((a,b)=>a.price-b.price)
// }
// const res = sortProductsByPrice(products)
// console.log(res)




}