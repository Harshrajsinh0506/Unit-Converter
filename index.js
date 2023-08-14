/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
// let inputEl = "abc"
const cnvBtn = document.getElementById("convert-btn")
const Ans1 = document.getElementById("ans1")
const Ans2 = document.getElementById("ans2")
const Ans3 = document.getElementById("ans3")

cnvBtn.addEventListener("click", function(){
    let inpValue = Number(inputEl.value)
    let mtValue = (3.281 * inpValue).toFixed(3)
    let ftValue = (inpValue/3.281).toFixed(3)
    let ltValue = (0.264 * inpValue).toFixed(3)
    let glValue = (inpValue/0.264).toFixed(3)
    let klValue = (2.204 * inpValue).toFixed(3)
    let pdValue = (inpValue/2.204).toFixed(3)
    
    Ans1.textContent = `${inpValue} meters =  ${mtValue} feet | ${inpValue} feet = ${ftValue} meters`
    
    Ans2.textContent = `${inpValue} liters = ${ltValue} gallons | ${inpValue} gallons = ${glValue} liters`
    
    Ans3.textContent = `${inpValue} kilos = ${klValue} pounds | ${inpValue} pounds = ${pdValue} kilos`
})