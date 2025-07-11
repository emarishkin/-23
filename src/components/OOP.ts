export const OOP = () => {


// class PasswordManager {
//     private password:string = ''
//     nickname:string 
//     constructor(nickname){
//       this.nickname = nickname
//     }
//     changePassword(value){
//       this.password = value
//       return this.password
//     }
//     getPassword(){
//       return this.password
//     }

// }
// const result = new PasswordManager('Вася')
// console.log(result.changePassword(''))
// console.log(result.getPassword())
// console.log(result)





// class createSecretHolder {
//     private secret:string 
    
//     constructor(initialSecret: string){
//         this.secret = initialSecret
//     }
//     getSecret(){
//         return this.secret
//     }

//     setSecret(value:string):void{
//        this.secret = value
//     }

// }

// const obj =new createSecretHolder('abc');
// obj.getSecret(); // 'abc'
// obj.setSecret('def');
// obj.getSecret(); // 'def'




// class User {

//     firstName:string
//     lastName:string

//     constructor(firstName:string,lastName:string){
//         this.firstName = firstName
//         this.lastName = lastName
//     }

//     get fullname() {
//         return `${this.firstName} ${this.lastName}`
//     }

//     set fullname(fullName:string){
//         const [first,last] = fullName.split(' ')
//         this.firstName = first
//         this.lastName = last
//     }

// }
// const result = new User('Егор','Маришкин')

// result.fullname = 'Роман Митрофанов'
// console.log(result.lastName)




// class MathHelper {
//     static PI:number = 3.1415
    
//     square(n){
//         return n**2
//     }


// }

// const res = new MathHelper()
// console.log(res.square(2))
// console.log(MathHelper.PI)





// class Shape {
    
//     user:string

//     constructor(user:string){
//         this.user = user  
//     }

//     getArea(){
//         console.log('ок')
//     }
// }


// class Circle extends Shape {

//     radius:number

//      constructor(user:string,radius:number){
//         super(user)
//         this.radius = radius  
//     }

//     getArea(){
//         return this.radius**2 * 3.14
//     }
// }

// class Rectangle extends Shape {
    
//     width:number
//     heigth:number

//     constructor(user:string,width:number,heigth:number){
//         super(user)
//         this.width = width
//         this.heigth = heigth
//     }

//     getArea(){
//         return this.width * this.heigth
//     }
// }



// abstract class Shape {
//   name: string

//   constructor(name:string){
//     this.name = name
//   }

//   abstract getArea(): number

//   describe(): string {
//     return `Это фигура: ${this.name} с площадью ${this.getArea()}`;
//   }

// }

// class Circle extends Shape{
//     radius:number

//     constructor(name:string,radius:number){
//         super(name)
//         this.radius = radius
//     }
    
//     getArea(): number {
//         return this.radius **2 * Math.PI
//     }
// }

// class Rectangle extends Shape{
//     width:number
//     height:number

//     constructor(name:string,width:number,height:number){
//         super(name)
//         this.width = width
//         this.height = height
//     }
    
//     getArea(): number {
//         return this.width *this.height
//     }
// }



// class Triangle extends Shape{
//     base:number
//     height:number

//     constructor(name:string,base:number,height:number){
//         super(name)
//         this.base = base
//         this.height = height
//     }
    
//     getArea(): number {
//         return 0.5 * this.base *this.height
//     }
// }




// class BankAccount {
//   private _balance: number = 0;
//   owner: string;

//   constructor(owner: string) {
//     this.owner = owner;
//   }

//   deposit(amount: number): void {
//     if (amount > 0) {
//       this._balance += amount;
//     }
//   }

//   withdraw(amount: number): void {
//     if (amount > 0 && this._balance >= amount) {
//       this._balance -= amount;
//     }
//   }

//   get balance(): number {
//     return this._balance;
//   }

//   set balance(value: number) {
//     if (value >= 0) {
//       this._balance = value;
//     } else {
//       console.log("Баланс не может быть отрицательным");
//     }
//   }
// }


// class Address {
//     city: string
//     street: string
//     houseNumber: number

//     constructor(city: string, street: string, houseNumber: number) {
//         this.city = city;
//         this.street = street;
//         this.houseNumber = houseNumber;
//     }

// }

// class User {
//     name: string
//     age: number
//     address: Address 

//     constructor(name: string,age: number,city: string,street: string,houseNumber: number){
//         this.name = name
//         this.age =age
//         this.address = new Address(city,street,houseNumber)
//     }

//     getUserInfo(): string {
//         return `Имя: ${this.name}, Возраст: ${this.age}, Адрес: г.${this.address.city}, ул. ${this.address.street} дом ${this.address.houseNumber}`
//     }
// }

// const res = new User('Егор',12,'Самара','Ташкентская',204)
// console.log(res.getUserInfo())





// class Product {
//     name: string
//     private _price: number
//     private _quantity: number

//     constructor(name: string,_price: number,_quantity: number){
//         this.name = name
//         this._price = _price
//         this._quantity = _quantity
//     }

//     get price(){
//         return this._price
//     }

//     set price(value:number){
//         if(value>=0){
//             this._price = value
//         } else {
//             console.log('Ошибка: цена не может быть отрицательной')
//         }
//     }

//     get quantity(){
//         return this._quantity
//     }
    
//     set quantity(value:number){
//         if(value>=0){
//             this._quantity = value
//         } else {
//             console.log('Ошибка: количество не может быть отрицательным')
//         }
//     }
    
//     getTotalPrice():number{
//        return this._price*this._quantity
//     }
// }
// const res = new Product('Стомеска',1000,6)
// console.log(res.getTotalPrice())

// console.log(res.price)
// console.log(res.getTotalPrice())





// class Employee {
//   name: string
//   salary:number
  
//   constructor(name:string, salary:number) {
//     this.name = name
//     this.salary = salary
//   }

//   getDetails():void {
//     console.log(`Сотрудник: ${this.name}, зарплата: ${this.salary}`)
//   }

// }

// class Manager extends Employee {
//   department: string
//    constructor(name:string,salary:number,department: string){
//      super(name,salary)
//      this.department = department
//    }

//    getDetails():void {
//     console.log(`Сотрудник: ${this.name}, отдел: ${this.department}, зарплата: ${this.salary}`)
//   }
// }
// const res = new Manager('Миша',1000,'Отдел')
// res.getDetails()



// abstract class Vehicle {
//     brand: string

//     constructor(brand: string){
//         this.brand = brand
//     }

//     abstract startEngine(): string 
// }

// class Car extends Vehicle {
//     doors: number

//     constructor(brand:string,doors:number){
//         super(brand)
//         this.doors = doors
//     }
    
//     startEngine() {
//         return `Машина ${this.brand} запускает двигатель с ключа`
//     }
// }

// class Bike extends Vehicle {
//     type: string

//     constructor(brand:string,type: string){
//         super(brand)
//         this.type = type
//     }
    
//     startEngine() {
//         return `Мотоцикл ${this.brand} запускается кнопкой`
//     }
// }
// const res1 = new Car('Lada',3)
// console.log(res1)
// const res2 = new Bike('Lada','qwqfqefw')
// console.log(res2)




// interface Drawable {
//     draw(): void
// }
// class Circle implements Drawable {
//     radius: number

//     constructor(radius: number){
//         this.radius = radius
//     }

//     draw(): string{
//         return `Рисую круг с радиусом ${this.radius}`
//     }
// }

// class Square  implements Drawable {
//     side: number

//     constructor(side: number){
//         this.side = side
//     }

//     draw(): string{
//         return `Рисую квадрат со стороной ${this.side}`
//     }
// }

// const res = new Circle(6)
// console.log(res.draw())
// const res1 = new Square(6)
// console.log(res1.draw())

// const arr = [
//     {
//         name:'Стул',
//         price:1000,
//         expirationDate:'12-12-2027'
//     },
//     {
//         name:'Стол',
//         price:2000,
//         expirationDate:'12-12-2027'
//     },
//     {
//         name:'Кровать',
//         price:15000,
//         expirationDate:'12-12-2027'
//     },
// ]

// class Product {
//     name: string
//     price: number

//     constructor(name: string,price:number){
//         this.name = name
//         this.price = price
//     }

//     getInfo(): string{
//         return `Товар: ${this.name}, цена: ${this.price}`
//     }

// }

// class FoodProduct extends Product {
//     expirationDate: string

//     constructor(name: string,price:number,expirationDate: string){
//         super(name,price)
//         this.expirationDate = expirationDate
//     }

//     getInfo():string{
//         return `Товар:  ${this.name}, цена: ${this.price}, годен до: ${this.expirationDate}`
//     }
// }

// const products:Product[] = arr.map(item=>new FoodProduct(item.name,item.price,item.expirationDate))

// for(let product of products){
//     console.log(product.getInfo())
// }


// class Product  {
//     name: string
//     price: number

//     constructor(name: string,price: number){
//         this.name = name
//         this.price = price
//     }

//     getInfo():string{
//         return `Название ${this.name}, цена: ${this.price}`
//     }
// }

// class DiscountedProduct extends Product {
//     discount: number
//     constructor(name: string,price: number,discount: number){
//         super(name,price)
//         this.discount = discount
//     }
//     getInfo(){
//         console.log(`Скидка ${this.discount}`)
//         let newPriceWithDiscount = this.price * (1 - this.discount/100)
//         return `Цкна со скидкой ${newPriceWithDiscount}`
//     }
// }

// type ProductItem = {
//   name: string
//   price: number
//   discount?: number
// }

// const arr:ProductItem[] = [
//     {
//         name:'Рыба',
//         price:600
//     },
//     {
//         name:'молоко',
//         price:90
//     },
//     {
//         name:'несквик',
//         price:300,
//         discount:25
//     },
//     {
//         name:'баранина',
//         price:1200
//     },
//     {
//         name:'филк курицы',
//         price:400,
//         discount:40
//     },
// ]

// const products:(Product | DiscountedProduct)[] = arr.map(item=>{
//     if(item.discount !== undefined){
//         return new DiscountedProduct(item.name,item.price,item.discount)
//     } else {
//         return new Product(item.name,item.price)
//     }
// })

// function calculateTotal(products: Product[]): number {
//     const res =  products.reduce((acc,item)=>{
//       if(item instanceof DiscountedProduct){
//         return acc + item.price * (1 - item.discount / 100);
//       } else {
//         return acc + item.price
//       }
//     },0)
//     return res
// }

// interface IData {
//     type:string
//     brand:string
//     price:number
//     camera?:number
//     ram?:number
// }

// const data:IData[] = [
//   { type: 'smartphone', brand: 'Samsung', price: 30000, camera: 108 },
//   { type: 'laptop', brand: 'HP', price: 60000, ram: 16 },
//   { type: 'smartphone', brand: 'iPhone', price: 100000, camera: 12 },
//   { type: 'laptop', brand: 'Asus', price: 75000, ram: 32 }
// ]

// class Device {
//     brand: string
//     price: number

//     constructor(brand: string, price: number) {
//     this.brand = brand
//     this.price = price
//     }

//     getInfo(): string {
//         return `Название ${this.brand}, Цена: ${this.price}`
//     }
// }

// class Smartphone extends Device {
//     camera: number

//     constructor(brand: string,price: number,camera: number){
//         super(brand,price)
//         this.camera = camera
        
//     }

//     getInfo():string {
//         return `Название ${this.brand}, Цена: ${this.price}, Камера ${this.camera} мп`
//     }
// }

// class Laptop extends Device {
//     ram: number 

//     constructor(brand: string,price: number,ram: number ){
//         super(brand,price)
//         this.ram = ram
//     }

//     getInfo():string {
//         return `Название ${this.brand}, Цена: ${this.price}, Камера ${this.ram} ГБ`
//     }
// }

// const devices = data.map(item => {
//     if(item.type === 'smartphone'){
//         return new Smartphone(item.brand,item.price,item.camera as number)
//     } else {
//         return new Laptop(item.brand,item.price ,item.ram as number)
//     }
// })
// for(let dev of devices){
//     console.log(dev.getInfo())
// }

// function getAveragePrice(devices) {
//     const total = devices.reduce((acc,item)=>{
//         return acc+item.price
//     },0)
//     return total/devices.length
// }
// console.log(getAveragePrice(devices))


class Client {
    public name: string
    private _balance: number = 0

    constructor(name: string, balance: number) {
        this.name = name
        this._balance = balance
    }

    get balance(): number {
        return this._balance
    }

    deposit(amount: number): void {
        if (amount > 0) {
            this._balance += amount
            console.log(`✅ ${this.name} внес ${amount}₽`)
        } else {
            console.log('❌ Сумма должна быть положительной')
        }
    }

    withdraw(amount: number): boolean {
        if (amount <= 0) {
            console.log('❌ Нельзя снять ноль или меньше')
            return false
        } else if (amount <= this._balance) {
            this._balance -= amount
            console.log(`✅ ${this.name} снял ${amount}₽`)
            return true
        } else {
            console.log('❌ Недостаточно средств')
            return false
        }
    }
}

class Bank {
    private clients:Client[] = []

    addClient(client:Client):void {
        this.clients.push(client)
    }

    findClient(name:string):Client | undefined {
       return this.clients.find(item => item.name === name)
    }

    transfer(fromName:string,toName:string,amount:number){
        const sender = this.findClient(fromName)
        const receiver = this.findClient(toName)
        
        if(!sender || !receiver){
            console.log('❌ Один из клиентов не найден')
            return
        }
        if(sender.withdraw(amount)){
            receiver.deposit(amount)
            console.log(`💸 Перевод ${amount}₽ от ${fromName} к ${toName} выполнен`)
        }
    }
}







}