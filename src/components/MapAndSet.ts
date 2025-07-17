import { count } from "console"

export const MapAndSet = () => {


//1
// const arr = [1, 2, 2, 3, 3, 3, 4]
// const result = new Set(arr)
// console.log(result)

//2
// const res = new Map()
// res.set('name','Bob')
// res.set('age',25)
// console.log(res.get('name'))

//3
// const result = new Set()
// result.add('apple')
// result.add('banana')
// result.add('orange')
// console.log(result.has('banana'))
// console.log(result.has('grape'))

//4
// const res = new Map()
// res.set(1,'one')
// res.set(2,'two')
// res.delete(1)
// console.log(res.size)

//5

// const res = new Map()
// res.set('a',1)
// res.set('b',2)
// res.set('c',3)

// for(let [key,value] of res){
//     console.log(key)
// }


//------------------------------------------------

//6
// const getUniqueWords = (str:string) => {
//   const arr = str.split(' ')
//   const result = new Set(arr)
//   return  result
// }
// const res = getUniqueWords("apple banana apple orange banana")
// console.log(res)

//7

// const words = ['one', 'two', 'one', 'three', 'two', 'one']

// const res = new Map()


// words.map(word => {
//     if(res.has(word)){
//         res.set(word,res.get(word)+1)
//     }else {
//         res.set(word,1)
//     }
// })
// console.log(res)

//8

// const a = new Set([1, 2, 3])
// const b = new Set([3, 4, 5])

// const res = new Set([...a,...b])
// console.log(res)


//9

// const a = new Set([1,2,3])
// const b = new Set([4,5,3])

// // const c = new Set([...a].filter(item=>b.has(item)))
// // console.log(c)

// const c = new Set()

// a.forEach(item => {
//     if(b.has(item)){
//         c.add(item)
//     }
// })
// console.log(c)

//10

// const map = new Map<string, string | number>([
//   ['name', 'Alice'],
//   ['age', 30]
// ])

// for(let [key,value] of map){
//     console.log({key,value})
// }

//11
 

// function firstDuplicateChar(str) {
//   const res = new Set()
  
//   for(let char of str){
//    if(!res.has(char)){
//     res.add(char)
//    } else {
//     return char
//    }
//   }
   
// }
// const result = firstDuplicateChar('wefewf')
// console.log(result)


//12

// function uniqueChars(str){
//     const res = new Set()

//     for(let char of str){
//         if(!res.has(char)){
//             res.add(char)
//         } else if(res.has(char)) {
//             res.delete(char)
//         }
        
//     }
//     return res
// }
// const result = uniqueChars('qqwerty')
// console.log(result)


// const arr = [1, 2, 3, 4, 5, 6]
// const filterOdds = (arr:number[]):number[] => {
//   const res = arr.filter(item=>item%2===1)
//   return res
// }
// const result = filterOdds(arr)
// console.log(result)


// const str = 'hello'

// const filterOdds = (str:string):string => {
//   return str.charAt(0).toUpperCase() + str.slice(1)
   
// }
// const result = filterOdds(str)
// console.log(result)

// const arr = [1, 2, 3, 4, 5, 6]

//  const filterOdds = (arr: number[]): number | null => {
//   const unique = [...new Set(arr)]
//   const sorted = unique.sort((a,b)=>b-a) 
//   return sorted[1] 
// }
// const result = filterOdds(arr)
// console.log(result)




// const users = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 45 },
//   { name: "Charlie", age: 25 }
// ]

// // const Old = Math.max(...users.map(item=>item.age))
// // const res = users.find(item=>item.age === Old)

// const res = users.reduce((old,current)=>old.age>current.age?old:current)


// console.log(res.name)







// function firstUniqueChar(str) {
//     const res = new Map()
    
//     for(let char of str){
//         res.set(char,(res.get(char) || 0)+1)
//     }

//      for (let char of str) {
//     if (res.get(char) === 1) {
//       return char;
//     }
//   }
// return null

// }


// function firstRepeatedChar(str) {
//     const res = new Map()

//     for(let char of str){
//         res.set(char,(res.get(char)||0)+1)

//         if(res.get(char)===2){
//             return char
//         }
//     }
   
//     return null

// }



// const res = firstRepeatedChar(str)
// console.log(res)


const str = "abc"


function areAllUnique(str){
    const unique = new Set(str)
    const strArr = str.split('')
    if(strArr.length === unique.size){
        return true
    }
    return false
}
const res = areAllUnique(str)
console.log(res)








}
