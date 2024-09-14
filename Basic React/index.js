const firstBusket = document.querySelector('.busket-1 > h1 > span')
const secondBusket = document.querySelector('.busket-2 > h1 > span')

const leftBtn = document.querySelector('.left-arrow')
const rightBtn = document.querySelector('.right-arrow')

let totalBusket = 10

let rightBusketAmount = 0
let leftBusketAmount = totalBusket - rightBusketAmount

firstBusket.innerText = leftBusketAmount
secondBusket.innerText = rightBusketAmount

leftBtn.addEventListener('click',()=>{
  if(rightBusketAmount>0){
    leftBusketAmount++
    rightBusketAmount--
    firstBusket.innerText = leftBusketAmount
    secondBusket.innerText = rightBusketAmount
  }
})

rightBtn.addEventListener('click',()=>{
  if(leftBusketAmount>0){
    rightBusketAmount++
    leftBusketAmount--
    firstBusket.innerText = leftBusketAmount
    secondBusket.innerText = rightBusketAmount
  }
})



// 3 Primary Reasons to learn React -
// 1. Declarative Programming
// 2. Component Architecture
// 3. Single Page Application












// let num = 100;

// let leftApples = document.querySelector('.busket-1 > h1 > span').innerHTML
// let rightApples = document.querySelector('.busket-2 > h1 > span').innerHTML

// let leftNumber = Number(leftApples)
// let rightNumber = Number(rightApples)

// const leftBtn = document.querySelector('.left-arrow')
// const rightBtn = document.querySelector('.right-arrow')

// leftBtn.addEventListener('click',()=>{
//   if(leftNumber<100){
//     leftNumber += 1
//     rightNumber -= 1
//   }
//   document.querySelector('.busket-1 > h1 > span').innerHTML = leftNumber.toString()
//   document.querySelector('.busket-2 > h1 > span').innerHTML = rightNumber.toString()
// })

// rightBtn.addEventListener('click',()=>{
//   if(rightNumber<100){
//     rightNumber += 1
//     leftNumber -= 1
//   }
//   document.querySelector('.busket-1 > h1 > span').innerHTML = leftNumber.toString()
//   document.querySelector('.busket-2 > h1 > span').innerHTML = rightNumber.toString()
// })





