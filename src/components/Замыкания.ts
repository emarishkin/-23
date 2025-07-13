export const Замыкания = () => {

//   function createCounter() {
//     let count = 0
//     function increment():number{
//       count++
//       console.log(`Значение ${count}`)
//     }
//     return count
//   }
//   const res = createCounter()
//   res.increment()

//   function createCounter() {
//   let count = 0
//   return { 
//     increment(): void {
//       count++
//       console.log(`Значение ${count}`)
//     }
//   }
// }
// const res = createCounter()
// res.increment()
// res.increment()
// res.increment()




// function createCounter() {
//     let count = 0 
//     return {
//       increment() {
//         count++
//       },
//       reset() {
//         count = 0
//       },
//       get() {
//         return count
//       }
//     }
// }
// const counter = createCounter()
// counter.increment()
// counter.increment()
// console.log(counter.get()) 
// counter.reset()
// console.log(counter.get())


// function createCounter(step: number){
//     let count = 0
//     return {
//         increment() {
//             return count += step
//         },
//         decrement() {
//             return count -= step
//         },
//         get(){
//             return count
//         },
//         reset(){
//             return count =0
//         }
//     }
// }
// const counter = createCounter(5)
// counter.increment()
// counter.increment()
// counter.increment()
// counter.decrement()
// console.log(counter.get())
// console.log(counter.reset())




// function createStorage() {
//   let store: {[key:string]:any} = {}
//   return {
//     set(key: string, value: any): void { 
//         return store[key] = value
//      },
//     get(key: string): any { 
//         return store[key]
//      },
//     remove(key: string): void { 
//        delete store[key]
//      },
//     getAll(): object {
//        return {...store}
//      }
//   }
// }


// function createTimer() {
//   let count = 0
//   let timer: ReturnType<typeof setInterval> | null = null
//   return {
//     start() {
//       if(timer === null){
//         timer = setInterval(()=>{
//           console.log(`Время: ${count++}`)
//         },1000)
        
//       }
//     },
//     pause() {
//        if(timer!==null){
//         clearInterval(timer)
//         timer = null
//         console.log('Таймер на паузе')
//        }
//     },
//     reset() {
//       if(timer!==null){
//       clearInterval(timer)
//       timer = null
  
//       }
//       count = 0
//       console.log('Таймер сброшен')
//     },
//     getTime() {
//       return count
//     }
//   }
// }

// const timer = createTimer()
// timer.start()
// timer.reset()






// function createLimitedCounter(start: number, step: number, limit: number){
//   let current = start
//   return {
//     increment(){
//       if(current + step <=limit){
//         current+=step
//       }
//       return current
//     }
//   }
// }
// const counter = createLimitedCounter(0, 2, 10)
// console.log(counter.increment()) 
// console.log(counter.increment()) 
// console.log(counter.increment()) 
// console.log(counter.increment()) 
// console.log(counter.increment()) 
// console.log(counter.increment()) 
// console.log(counter.increment()) 




// function createTaskManager() {
//   const tasks: { description: string; priority: 'low' | 'medium' | 'high' }[] = []

//   return {
//     addTask(description: string, priority: 'low' | 'medium' | 'high'): void {
//       tasks.push({ description, priority })
//     },

//     getTasks(priority?: 'low' | 'medium' | 'high') {
//       if (priority) {
//         return tasks.filter(task => task.priority === priority)
//       }
//       return [...tasks]
//     },

//     removeTask(description: string): void {
//       const index = tasks.findIndex(task => task.description === description)
//       if (index !== -1) {
//         tasks.splice(index, 1)
//       }
//     },

//     clear(): void {
//       tasks.length = 0
//     }
//   }
// }


// const Users:{[key:string]:any}[] = []



// // function createCounter(){
// //     let count = 0
// //     return {
// //         increment(){
// //             count++
// //         },
// //         decrement(){
// //             count --
// //         },
// //         get(){
// //             return count
// //         },
// //         reset(){
// //             count = 0
// //         }
// //     }
// // }
// // const res = createCounter()
// // res.increment()
// // res.increment()
// // res.increment()
// // res.increment()
// // res.decrement()
// // console.log(res.get())



// function createCounter(){
//     let count = 0
//     return function calc() {
//         return{
//           increment(){
//            return count++
//         },
//         decrement(){
//            return  count --
//         },
//         get(){
//             return count
//         },
//         reset(){
//             count = 0
//         }
//         }
//     }
// }
// const res = createCounter()
// console.log(res().increment())
// console.log(res().increment())
// console.log(res().increment())
// console.log(res().decrement())

// interface Task {
//   id: number
//   title: string
//   completed: boolean
// }



// function createTaskManager() {
  
//   let  arr:Task[] = []
//   let nextStep = 1

//   return {
//     add(title: string):void {
//       arr.push({id:nextStep++,title,completed:false})
//     },
//     remove(id: number):void {
//       arr = arr.filter(item => item.id !== id)
//     },
//     toggle(id: number):void{
//         const task = arr.find(item => item.id ===id)
//         if(task)task.completed = !task.completed
//     },
//     getAll(){
//         return [...arr]
//     },
//     getCompleted(){
//       return arr.filter(item => item.completed === true)
//     }
//   }
// }

// const manager = createTaskManager()
// manager.add("Купить хлеб")
// manager.add("Сделать уроки")
// console.log(manager.getAll())
// manager.toggle(2)
// console.log(manager.getAll())
// manager.toggle(2)
// console.log(manager.getAll())
// manager.toggle(2)
// console.log(manager.getCompleted())


// interface Command{
//     id:number
//     command:string
// }

// function createHistoryManager(){
//     let arr:Command[] = []
//     let nextId = 1

//     return{
//         add(command: string): void{
//         arr.push({id:nextId++,command})
//         },
//         undo(): string | null {
//             if(arr.length>0){
//                 const lastEl = arr.pop()!
//                 return lastEl.command
//             } else {
//                 return null
//             }
//         },
//         getHistory(): string[]{
//            return arr.map(item => item.command)
//         }
//     }
    
    
// }







}