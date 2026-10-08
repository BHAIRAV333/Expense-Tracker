let expenseName = document.querySelector("#expense-name-input")
let amountNumber = document.querySelector("#expense-amount-input")
let categoryList = document.querySelector("#expense-category-input")
let addExpenseBtn = document.querySelector("#add-expense-btn")
let showEnpense = document.querySelector("#show-expense")
let cards = document.querySelector("#cards")
let totalExpense = document.querySelector("#total-expense-value")
let NumberofExpense = document.querySelector("#expense-count-value")
let highestExpense = document.querySelector("#highest-expense-value")

// let expenseData = JSON.parse( localStorage.getItem("expenses"))
if(localStorage.getItem('expenses') == true){
    JSON.parse( localStorage.getItem("expenses"))
}


function displayExpense() {

    showEnpense.innerHTML = ""

    let total = 0
    

    for (let i = 0; i < expenseData.length; i++) {

        let expenseDiv = document.createElement("div")

        expenseDiv.innerHTML = `
            Expense: ${expenseData[i].expense}<br>
            Amount: ${expenseData[i].amount}<br>
            Category: ${expenseData[i].category}<br>
        `

        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"

        deleteBtn.addEventListener("click", function() {

            expenseData.splice(i, 1)

            displayExpense()
        })

        expenseDiv.appendChild(deleteBtn)

        showEnpense.appendChild(expenseDiv)

        total += Number(expenseData[i].amount)
    }

    let heighst = 0

    for (let i=0; i<expenseData.length; i++){
        if(Number(expenseData[i].amount) > heighst){
            heighst = Number(expenseData[i].amount)
        }

    }

    totalExpense.innerHTML = total

    NumberofExpense.innerHTML = expenseData.length

    highestExpense.innerHTML = heighst
}


addExpenseBtn.addEventListener("click", function() {

    let expenseShow = expenseName.value
    let amount = amountNumber.value
    let category = categoryList.value

    if (expenseShow === "" || amount === "" || category === "") {
        alert("Write something first")
        return
    }

    if(Number(amount)<0 || Number.isNaN(Number(amount))){
        alert("Type a valid amount!")
        return
    }
    
    if(! /[a-zA-Z]/.test (expenseShow)){
        alert("Type a valid expense name")
        return
    }

    expenseData.push({
        expense: expenseShow,
        amount: amount,
        category: category
    })

    

    

    expenseName.value = ""
    amountNumber.value = ""
    categoryList.value = ""

    displayExpense()
}) 



console.log("Testing GitHub")
