

// type Order = {
//   id: number;
//   customer: string;
//   amount: number;
//   status: 'pending' | 'shipped' | 'delivered';
// };

import { FC, useEffect, useState } from "react";

// interface OrderCardProps{
//     order:Order
// }

// const OrderCard:FC<OrderCardProps> = ({order}) => {
//     return (
//        <div>
//           <h2>{`Заказчик ${order.customer}`}</h2>
//           <h2>{`Оплатил ${order.amount} рублей`}</h2>
//           <p><span>{`Статус ${order.status}`}</span></p>
//        </div>
//     )
// }


// export const OrdersTable:FC = () => {

//   const [statusFilter, setStatusFilter] = useState<"all" | Order["status"]>("all")
  
//   const [orderList,setOrderList] = useState<Order[]>([])
//   const [addOrder,setAddOreder] = useState({
//     customer:'',
//     amount:0,
//     status:'pending'
//   })

//   const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const {name,value} = e.target
//     setAddOreder({
//         ...addOrder, [name]:name === 'amound'? Number(value):value
//     })
//   }

//   const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     setStatusFilter(e.target.value as "all" | Order["status"]);
//   };

//    const filteredOrders = useMemo(() => {
//     if (statusFilter === "all") return orderList;
//     return orderList.filter((order) => order.status === statusFilter);
//   }, [statusFilter]);

//   const handleSubmit = (e:FormEvent) => {
//     e.preventDefault()

//     const newOrder:Order = {
//         id:Date.now(),
//         customer:addOrder.customer,
//         amount:addOrder.amount,
//         status:addOrder.status as 'pending' | 'shipped' | 'delivered'
//     }

//     setOrderList([...orderList,newOrder])
//     setAddOreder({customer:'',amount:0,status:''})

//   }

//   return(
//     <div>

//         <div>
//         <label>Фильтр по статусу:</label>
//         <select value={statusFilter} onChange={handleFilterChange}>
//           <option value="all">Все</option>
//           <option value="pending">В ожидании</option>
//           <option value="shipped">Отправлено</option>
//           <option value="delivered">Доставлено</option>
//         </select>
//         </div>
        
//         <div>
//            {filteredOrders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.customer}</td>
//               <td>{order.amount}₽</td>
//               <td>{order.status}</td>
//             </tr>
//           ))}
//         </div>
        


//         <form onSubmit={handleSubmit}>
//             <h2>Таблица заказов</h2>

//             <div>
//                 <label>Заказчик:</label>
//                 <input 
//                 type="text" 
//                 name="customer"
//                 value={addOrder.customer}
//                 onChange={handleChange}
//                 required
//                 />
//             </div>
//             <div>
//                 <label>Cумма:</label>
//                 <input 
//                 type="number" 
//                 name="amount"
//                 value={addOrder.amount}
//                 onChange={handleChange}
//                 required
//                 />
//             </div>
//             <div>
//                 <label>Cумма:</label>
//                 <select name="status" value={addOrder.status} onChange={handleChange} >
//                     <option value="pending">в рассмотрении</option>
//                     <option value="shipped">отправленно</option>
//                     <option value="delivered">доставлен</option>
//                 </select>
//             </div>

//             <button type="submit">Отправить</button>
      
//         </form>

//         <div>
//             <h2>Таблица карточек:</h2>
//             {orderList && (
//                 <div>
//                     {orderList.map(item => (
//                         <OrderCard key={item.id} order={item} />
//                     ))}
//                 </div>
//             )}
//             {!orderList.length && (
//                 <h2>заказов нет</h2>
//             )}
//         </div>

//     </div>
//   )

// }






// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   category: 'shoes' | 'clothes' | 'accessories';
// };

// const mockProducts: Product[] = [
//   { id: 1, name: 'Sneakers', price: 200, category: 'shoes' },
//   { id: 2, name: 'Jacket', price: 350, category: 'clothes' },
// ];


// export const ProductList:FC = () => {

//   const [sortBy,setSortBy] = useState<'price' | 'name'>('price')
  
//   const sortedProducts = useMemo(()=>{

//     const sorted = [...mockProducts]
//     if(sortBy === 'price'){
//       return sorted.sort((a,b)=>a.price-b.price)
//     } else {
//       return sorted.sort((a,b)=>a.name.localeCompare(b.name))
//     }
//     return sorted

//   },[sortBy])


//   return (
//     <div>
//          <select value={sortBy} onChange={(e)=>setSortBy(e.target.value as 'price' | 'name')}>
//              <option value="price">По цене</option>
//              <option value="name">По имени</option>
//          </select>
 
//         <div>
//           {sortedProducts.map(item=>(
//           <div key={item.id}>
//             <h2>{item.name}</h2>
//             <p>{item.price}</p>
//             <p>{item.category}</p>
//           </div>
//         ))}
//         </div>
//     </div>
//   )
// } 




// type User = {
//   id: number;
//   name: string;
//   age: number;
//   role: 'admin' | 'manager' | 'user';
// };


// export const UserForm:FC = () => {
  
//   const [filterUser,setFilterUser] = useState<'all' | User['role']>('all')

//   const [userList,setUserList] = useState<User[]>([])
//   const [addUser,setAddUser] = useState({
//     name:'',
//     age:0,
//     role:'user'
//   })

//   const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const {name,value} = e.target
//     setAddUser({...addUser,[name]:name === 'age'? Number(value):value})
//   }

//   const handleSubmit = (e:FormEvent) => {
//     e.preventDefault()

//     const newUser:User = {
//       id:Date.now(),
//       name:addUser.name,
//       age:addUser.age,
//       role:addUser.role as 'admin' | 'manager' | 'user'
//     }

//     setUserList([...userList,newUser])
//     setAddUser({name:'',age:0,role:'user'})
//   }

//   const FilterIserFun = useMemo(()=>{
//     const filtred = [...userList]
   
//     if(filterUser === 'all')return userList
//     if(filterUser === 'admin'){
//       return userList.filter(item=>item.role === 'admin')
//     } else if (filterUser === 'manager') {
//       return userList.filter(item=>item.role === 'manager')
//     } else if (filterUser === 'user') {
//       return userList.filter(item=>item.role === 'user')
//     }
//     return filtred
 
//   },[filterUser,userList])

//   return (
//     <div>
//       <div>
//          <select value={filterUser} onChange={(e)=>setFilterUser(e.target.value as 'all' | 'admin' | 'manager' | 'user')}>
//             <option value="all">Все</option>
//             <option value="admin">Админ</option>
//             <option value="manager">Менеджер</option>
//             <option value="user">Пользователь</option>
//          </select>
//       </div>

//       <form onSubmit={handleSubmit}>
//           <h2>Форма добавдения нового пользователя</h2>
//           <div>
//             <label>Имя:</label>
//             <input 
//             type="text" 
//             name="name"
//             value={addUser.name}
//             onChange={handleChange}
//             required 
//             />
//           </div>
//           <div>
//             <label>Возраст:</label>
//             <input 
//             type="number" 
//             name="age"
//             value={addUser.age}
//             onChange={handleChange}
//             required 
//             />
//           </div>
//           <div>
//             <label>Роль:</label>
//             <select name="role" value={addUser.role} onChange={handleChange}>
//               <option value="admin">Админ</option>
//               <option value="manager">Менеджер</option>
//               <option value="user">Пользователь</option>
//             </select>
//           </div>

//           <button type="submit">Добавить</button>
//       </form>

//       <div>
//           {FilterIserFun.map(item => (
//           <div key={item.id}>
//             <h2>{item.name}</h2>
//             <p>{item.age}</p>
//             <p>{item.role}</p>
//           </div>
//           ))}
//       </div>
//     </div>
//   )
// } 



// type Product = {
//   id: number;
//   name: string;
//   price: number;
//   category:'all' | 'shoes' | 'clothes' | 'accessories';
// };

// interface CardProps{
//   card:Product
// }

// const ProductCard:FC<CardProps> = ({card}) => {
//   return (
//     <div key={card.id}>
//         <h2>{card.name}</h2>
//         <p>{card.price}</p>
//         <p>{card.category}</p>
//     </div>
//   )
// }


// export const ProductList:FC = () => {

//   const [filterProduct,setFilterProduct] = useState<Product['category']>('all')

//   const [productList,setProductList] = useState<Product[]>([])
//   const [addProduct,setAddProduct] = useState({
//     name:'',
//     price:0,
//     category:'all'
//   })

//   const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     const {name,value} = e.target
//     setAddProduct({...addProduct,[name]:name === 'price'?Number(value):value})
//   }

//   const handleSubmit = (e:FormEvent)=>{
//     e.preventDefault()

//     const newProduct:Product = {
//       id:Date.now(),
//       name:addProduct.name,
//       price:addProduct.price,
//       category:addProduct.category as 'all' | 'shoes' | 'clothes' | 'accessories'
//     }

//     setProductList([...productList,newProduct])
//     setAddProduct({name:'',price:0,category:'все'})
//   }

//   const filterResult = useMemo(()=>{
  
//      if(filterProduct === 'all')return productList
//      return productList.filter(item=>item.category === filterProduct)

//   },[filterProduct,productList])

//   return (
//     <div>
//       <div>
//          <select value={filterProduct} onChange={(e)=>setFilterProduct(e.target.value as 'all' | 'shoes' | 'clothes' | 'accessories')}>
//             <option value="all">Все</option>
//             <option value="shoes">shoes</option>
//             <option value="clothes">clothes</option>
//             <option value="accessories">accessories</option>
//          </select>
//       </div>

//       <form onSubmit={handleSubmit}>
//           <h2>Форма добавдения нового пользователя</h2>
//           <div>
//             <label>Имя:</label>
//             <input 
//             type="text" 
//             name="name"
//             value={addProduct.name}
//             onChange={handleChange}
//             required 
//             />
//           </div>
//           <div>
//             <label>Возраст:</label>
//             <input 
//             type="number" 
//             name="price"
//             value={addProduct.price}
//             onChange={handleChange}
//             required 
//             />
//           </div>
//           <div>
//             <label>Роль:</label>
//             <select name="category" value={addProduct.category} onChange={handleChange}>
//               <option value="shoes">shoes</option>
//               <option value="clothes">clothes</option>
//               <option value="accessories">accessories</option>
//             </select>
//           </div>

//           <button type="submit">Добавить</button>
//       </form>
       
//        <div>
//         {filterResult && (
//           <div>
//             {filterResult.map(item=>(
              
//                 <ProductCard card={item} />
              
//             ))}
//           </div>
//         )}
//        </div>
      
//     </div>
//   )
// }

// interface TodoItem{
//   id: number;
//   text: string;
//   completed: boolean;
// }

// type TodoListProps = {
//   todos: TodoItem;
//   onToggle: (id: number) => void;
// };

// let todos:TodoItem[] = [
//     { id: 1, text: "Выучить TypeScript", completed: true },
//     { id: 2, text: "Пойти на собеседование", completed: false }
//   ]

//  const TodoItem:FC<TodoListProps> = ({todos,onToggle}) => {
//     return (
//         <div>
//            <h2>{todos.text}</h2>
//            <button onClick={()=>onToggle(todos.id)}>{todos.completed?'Выполнено':'Не выполнено'}</button> 
//         </div>
//     )
// }

// export const TodoList = () => {
    
//     const [TodoList,setTodoList] = useState([
//     { id: 1, text: "Выучить TypeScript", completed: true },
//     { id: 2, text: "Пойти на собеседование", completed: false }
//     ])

//     const handleClick = (id:number) => {
//       setTodoList(TodoList.map(item=>item.id===id?{...item,completed:!item.completed}:item))
//     }

//     return (
//         <div>
//             {TodoList.map(item => (
//                 <div>
//                     <TodoItem todos={item} onToggle={()=>handleClick(item.id)} />
//                 </div>
//             ))} 
//         </div>
       
//     )
// }


export const Stopwatch:FC = () => {

    const [count,setCount] = useState<number>(0)
    const [isRunning,setIsRunning] = useState<boolean>(false)
    
    const handleClickStart = () => {
        if(!isRunning){
            setIsRunning(true)
        }
    }

    const handleClickStop = () => {
        if(isRunning){
            setIsRunning(false)
        }
    }

    const handleClickReset = () => {
        setCount(0)
        setIsRunning(false)
    }
    
    useEffect(()=>{
        let interval;

        if(isRunning){
           interval = setInterval(()=>{
                setCount(prev=>prev+1)
            },1000)
        } 
        return ()=>{
           clearInterval(interval)
        }
        
    },[isRunning])

    return (
        <div>
            <button onClick={handleClickStart}>Start</button>
            <button onClick={handleClickStop}>Stop</button>
            <button onClick={handleClickReset}>Reset</button>
            <div>
                {count}
            </div>
        </div>
        
    )
}

