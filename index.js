// document.getElementById("count-el").innerText = 5

// ======================================================================
// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch
// // console.log(count)
// ======================================================================


// ======================================================================
// let myAge = 26
// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)
// ======================================================================


// ======================================================================
// let count = 5
// count = count + 1
// console.log(count)
// ======================================================================


// ======================================================================
// Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// Decrease it down to 25, and then finally increase it to 70
// Console.log the value after each step

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)
// ======================================================================


// ======================================================================

// function countDown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }


// countDown()
// ======================================================================


// ======================================================================
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times
// function sum(){
//     console.log(lap1+lap2+lap3)
// }

// sum()
// ======================================================================


// ======================================================================
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// let count = 0
// let countEl = document.getElementById("count-el")
// function increment() {
//     count += 1
//     console.log(count)
//     countEl.innerText = count
// }

// ======================================================================


// ======================================================================
// 1. Create a function, save(), which logs out the count when it's called
// function save() {
//     console.log(count)
// }
// ======================================================================


// ======================================================================
// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

// let name = "Anchit"
// let greeting = "Hi, my name is "

// let myGreeting = greeting + name
// console.log(myGreeting)
// ======================================================================


// ======================================================================
// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(totalPoints)
// ======================================================================

// ======================================================================
// console.log(4 + 5) //9
// console.log("2" + "4") // 24
// console.log("5" + 1) // 51
// console.log(100 + "100") // 100100
// ======================================================================

// ======================================================================
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText


// ======================================================================
// Grab the welcome-el paragraph and store it in a variable called welcomeEl

// let welcomeEl = document.getElementById("welcome-el")

// // Create two variables (name & greeting) that contains your name
// // and the greeting we want to render on the page
// let name = "Anchit"
// let greeting = "Welcome "

// // Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name
// ======================================================================


// ======================================================================
// let welcomeEl = document.getElementById("welcome-el")

// let name = "Anchit"
// let greeting = "Welcome back "

// welcomeEl.innerText = greeting + name

// welcomeEl.innerText += "👋"

// ======================================================================


// ======================================================================
// 1. Grab the save-el paragrah and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let previous =  count + " - "
    saveEl.textContent +=  previous
    countEl.textContent = 0
    count = 0
}
// ======================================================================
