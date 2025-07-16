export const TypeScript = () => {



// type IUser = {
// name:string,
// age:number
// }
// const formatUser = (user:IUser) => `${user.name} (${user.age})`;

// type IProduct = {
//     title:string
//     price:number
//     discount:number
// }

// const product:IProduct = {
//   title: "Smartphone",
//   price: 1000,
//   discount: 20
// };

// const getFinalPrice = (product:IProduct):number => {
//     const newSkidka = product.discount/100
//     if(product.discount === 0)return product.price
//     return product.price - (product.price * newSkidka)
// }
// const result = getFinalPrice(product)
// console.log(result)


// type IArr = {
//     id:number
//     name:string
// }

// const arr:IArr[] = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" }
// ]
// // {[key:number]:IArr}
// const mapUsersById = (users:IArr[]):{ [key: number]: IArr } => {
//   const newObj:{ [key: number]: IArr } = {}
  
//   for(let user of users){
//     newObj[user.id] = user
//   }
//   return newObj
// }
// const result = mapUsersById(arr)
// console.log(result)


// type Circle = {
//     kind: "circle"
//     radius: number
// }

// type Square = {
//     kind: "square"
//     side: number
// }

// type Shape = Circle | Square

// const getArea = (shape:Shape):number => {
//   if(shape.kind === 'circle')return Math.PI * (shape.radius)
//   if(shape.kind === 'square')return shape.side **2

//   const _exhaustiveCheck: never = shape;
//   return _exhaustiveCheck;
// }

// getArea({ kind: "circle", radius: 10 }) 
// getArea({ kind: "square", side: 5 })   

// type SuccessResponse = {
//     status: "ok"
//     data:{
//       userId: number,
//       username: string
//     }
// }

// type ErrorResponse = {
//     status: "error",
//     message: string;
// }

// type ApiResponse = SuccessResponse | ErrorResponse


// const handleResponse = (response: ApiResponse): void => {
//     if(response.status === 'ok') console.log(`Hello, ${response.data.username}`)
//     if(response.status === 'error') console.log(`Error, ${response.message}`)
// }
// const res = handleResponse({ status: "ok", data: { userId: 1, username: "john_doe" } });
// console.log(res)




// type User = {
//   id: number;
//   name: string;
// };

// type AdminRights = {
//   canDeleteUsers: boolean;
//   canEditSettings: boolean;
// };
// type AdminUser = User & AdminRights




// type BlogPost = {
//   id: number;
//   title: string;
//   content?: string; 
//   author: string;
// };


// const printPostSummary = (post: BlogPost): string  => {
//    if(post.content){
//      return `название:${post.title},автор:${post.author},контент:${post.content}`
//    }
//    return `название:${post.title},автор:${post.author}`
// }


// const greeting = (user?:string):string => {
//     return `hello, ${user ?? 'guest'}`
// }




// function identity<T>(arg: T): T {
//   return arg;
// }
// const res = identity('wee')
// console.log(res)


// function useStateGeneric<T>(initialValue: T): [T, (newValue: T) => void] {
//     let state = initialValue

//     function setState(newValue:T):void {
//         state = newValue
//         console.log("State updated to:", state);
//     }
//     return [state,setState]
// }




// function mergeObjects<T,U>(obj1:T,obj2:U):T&U{
//     return {...obj1,...obj2}
// }






}