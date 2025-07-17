import axios from "axios";
import { use } from "react";

export const Api = () => {


// interface IUser {
//   id: number;
//   name: string;
//   email: string;
// }

// async function fetchUsers(): Promise<IUser[]> {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
    
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }
//     const json: IUser[] = await response.json();
//     return json;
//   } catch (error: any) {
//     console.error(error.message);
//     return []; 
//   }
// }

// fetchUsers().then(users => console.log(users));





// interface Todo {
//   userId: number;
//   title: string;
//   completed: boolean;
//   id?: number;
// }

// async function createTodo(todo: Todo): Promise<Todo | null> {
//   try {
//     const response = await axios.post<Todo>("https://jsonplaceholder.typicode.com/todos", todo);
//     return response.data;
//   } catch (error: any) {
//     console.error("Failed to create todo:", error.message);
//     return null;
//   }
// }

// const newTodo: Todo = {
//   userId: 1,
//   title: "Learn TypeScript API calls",
//   completed: false,
// };

// createTodo(newTodo).then((createdTodo) => {
//   if (createdTodo) {
//     console.log("Created todo:", createdTodo);
//   } else {
//     console.log("Todo creation failed.");
//   }
// });




// interface User {
//     id:number
//     name:string
//     username:string
//     email:string
// }

// async function fetchUsers(id:number):Promise<User | null> {
//     try{
//         const response = await fetch(`https://fakestoreapi.in/api/users`)
//         if(!response.ok){
//            return null
//         }
//         const user:User = await response.json()
//         return user
//     } catch (error) {
//         console.error(error);
//         return null
//     }
// }
// fetchUsers(3).then(user => {
//   if (user) console.log(user);
//   else console.log("User not found");
// });



// interface Todo {
//   userId: number;
//   email: string;
//   password: string;
// }

// async function createTodo(todo:Todo):Promise<Todo | null>{
//     try{
//         const response = await axios.post<Todo>('https://fakestoreapi.in/api/users',todo)
//         return response.data
//     } catch (error) {
//         console.error('Ошибка при создании задачи:', error);
//         return null
//     }
// }

// const newTodo: Todo = {
//   userId: 1,
//   email: "ee1111ee@gmail.com",
//   password: 'fwdfwdefwefwqefwqefwefwefwefwefwef',
// };

// createTodo(newTodo).then((created)=>{
//     if(created){
//         console.log("Создана задача:", created);
//     }else {
//     console.log("Не удалось создать задачу");
//   }
// })


// const Faktorial = (n:number):number => {
//   if(n===0 || n === 1){
//     return 1
//   }
//   return n * Faktorial(n-1)
// }
// console.log(Faktorial(12))








}