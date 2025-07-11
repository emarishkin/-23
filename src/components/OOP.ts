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





class Product {
    name: string
    private _price: number
    private _quantity: number

    constructor(name: string,_price: number,_quantity: number){
        this.name = name
        this._price = _price
        this._quantity = _quantity
    }

    get price(){
        return this._price
    }

    set price(value:number){
        if(value>=0){
            this._price = value
        } else {
            console.log('Ошибка: цена не может быть отрицательной')
        }
    }

    get quantity(){
        return this._quantity
    }
    
    set quantity(value:number){
        if(value>=0){
            this._quantity = value
        } else {
            console.log('Ошибка: количество не может быть отрицательным')
        }
    }
    
    getTotalPrice():number{
       return this._price*this._quantity
    }
}
const res = new Product('Стомеска',1000,6)
console.log(res.getTotalPrice())

console.log(res.price)
console.log(res.getTotalPrice())






















}