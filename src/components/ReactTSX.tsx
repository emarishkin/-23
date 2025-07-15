// import { ChangeEvent, FC, FormEvent, useMemo, useState } from "react";

import { FC, useMemo, useState } from "react";

// type Order = {
//   id: number;
//   customer: string;
//   amount: number;
//   status: 'pending' | 'shipped' | 'delivered';
// };

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






type Product = {
  id: number;
  name: string;
  price: number;
  category: 'shoes' | 'clothes' | 'accessories';
};

const mockProducts: Product[] = [
  { id: 1, name: 'Sneakers', price: 200, category: 'shoes' },
  { id: 2, name: 'Jacket', price: 350, category: 'clothes' },
];


export const ProductList:FC = () => {

  const [sortBy,setSortBy] = useState<'price' | 'name'>('price')
  
  const sortedProducts = useMemo(()=>{

    const sorted = [...mockProducts]
    if(sortBy === 'price'){
      return sorted.sort((a,b)=>a.price-b.price)
    } else {
      return sorted.sort((a,b)=>a.name.localeCompare(b.name))
    }
    return sorted

  },[sortBy])


  return (
    <div>
         <select value={sortBy} onChange={(e)=>setSortBy(e.target.value as 'price' | 'name')}>
             <option value="price">По цене</option>
             <option value="name">По имени</option>
         </select>
 
        <div>
          {sortedProducts.map(item=>(
          <div key={item.id}>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.category}</p>
          </div>
        ))}
        </div>
    </div>
  )
} 