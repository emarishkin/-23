import { ChangeEvent, FC, FormEvent, useState } from "react";


type Product = {
  name: string;
  price: number;
  category: 'не выбрано' | 'Косметика' | 'Обувь' | 'Штаны' | 'Куртки';
};



export const ProductForm:FC = () => {
    
    const [formList,setFormList] = useState<Product[]>([])
    const [ADDform,setADDForm] = useState({
        name:'',
        price:0,
        category:'не выбрано'
    }) 
    
    const handleChange = (e:ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const {name,value} = e.target
       setADDForm({...ADDform,[name]:name === 'price'? Number(value):value})
    }
     
    const handleSubmit = (e:FormEvent) => {
        e.preventDefault()

        const newProduct:Product = {
         name:ADDform.name,
         price:ADDform.price,
         category:ADDform.category as 'не выбрано' | 'Косметика' | 'Обувь' | 'Штаны' | 'Куртки'
        }
        
        setFormList([...formList,newProduct])
        setADDForm({
            ...ADDform,name:'',price:0,category:'не выбрано'
        })

    }



    return (
        <div>

        
        <form onSubmit={handleSubmit}>
            <h2>Форма</h2>

            <div>
                <label>Имя:</label>
                <input
                 type="text" 
                 name="name"
                 value={ADDform.name}
                 onChange={handleChange}
                 placeholder="Введите имя"
                 required
                 />
            </div>

            <div>
                <label>Цена:</label>
                <input
                 type="number" 
                 name="price"
                 value={ADDform.price}
                 onChange={handleChange}
                 placeholder="Введите цену"
                 required
                 />
            </div>

            <div>
                <label>Категория:</label>
                <select name="category" value={ADDform.category} onChange={handleChange}>
                     <option value="не выбрано">не выбрано</option>
                     <option value="Косметика">Косметика</option>
                     <option value="Обувь">Обувь</option>
                     <option value="Штаны">Штаны</option>
                     <option value="Куртки">Куртки</option>
                </select>
            </div>

            <button type="submit">Добавить</button>
        </form>

        <div>
            {!formList.length?(
                <h2>Список пуст</h2>
            ):(
                <div>
                    <h2>Список продуктов</h2>
                    {formList.map(item=>(
                        <div>
                            <h2>{item.name}</h2>
                            <p>{item.price}руб</p>
                            <p>{item.category}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>

        </div>
    )
}