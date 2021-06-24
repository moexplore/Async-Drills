// function displayMessage() {
//     console.log('Yo.  Message over Here.')
// }
// displayMessage()

// setTimeout(() => {
//  displayMessage()
// }, 2000)

// function getWords() {
//     console.log('Instant')
//     setTimeout(() =>{
//         console.log('first')
//     }, 3000)
//     setTimeout(() =>{
//         console.log('Second')
//     }, 5000)
//     setTimeout(() =>{
//         console.log('Third')
//     }, 6000)
// }
// getWords()

// let done = () =>{
//     console.log("Job's done!")
// }

// let countdown = (num, callback) => {
//     setTimeout(()=>{
//         if (num>0) {
//             console.log(num)
//             countdown(num-1, callback)
//         } else {
//             callback()
//         }
//     }, 1000)
// }

// countdown(8, done)



let lunchtime = false

function orderMeSomeFood() {
    return new Promise((resolve, reject) => {
        // lunchtime = lunchtime? false : true
        if (lunchtime == true) {
          
        resolve({lunch: 'Beans and Rice', drink: 'Seltzer'})
            
        } else {
            let err = new Error('Error!')
            reject(err)
        }
    })
}

orderMeSomeFood().then((message)=>{
    console.log(`Here are your favorite foods: ${message.lunch} and ${message.drink}`)
}).catch((error)=>{
    console.log(`Oh no! ${error}`)
})
