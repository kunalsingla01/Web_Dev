// //get the form and added a event
// document.getElementById('expForm').addEventListener('submit', addExpense);

// // creating a variable expenses and getting the data in local storage
// const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

// function addExpense(e){
//     e.preventDefault();

//     // get type, name, date, and amount
//     let type = document.getElementById('type').value;
//     let name = document.getElementById('name').value;
//     let amount = document.getElementById('amount').value;

//     if(type != 'chooseOne' 
//         && name.length > 0  
//         && amount > 0)
//     {
//         const expense = {
//             type, 
//             name, 
//             amount, 
//             id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
//         }
//         // pushing the data 
//         expenses.push(expense);

//         // localStorage 
//         localStorage.setItem('expenses', JSON.stringify(expenses));
//     }

//     document.getElementById('expForm').reset();
//     showExpenses();
// }

// const showExpenses = () => {

//     const expenseTable = document.getElementById('expenseTable');

//     expenseTable.innerHTML = '';

//     for(let i = 0; i < expenses.length; i++){
//         expenseTable.innerHTML += `
//             <tr>
//                 <td>${expenses[i].type}</td>
//                 <td>${expenses[i].name}</td>
//                 <td>${expenses[i].amount}</td>
//                 <td><a class="deleteButton" onclick="deleteExpense(${expenses[i].id})">
//                     Delete</td>
//             </tr>
//         `;

//  let total = 0;
//  total = expenses[i].amount;
//  	console.  log(total);


//     }
// }



// const deleteExpense = (id) => {
//     for(let i = 0; i < expenses.length; i++){
//         if(expenses[i].id == id){
//             expenses.splice(i, 1);
//         }
//     }

//     // localStorage
//     localStorage.setItem('expenses', JSON.stringify(expenses));
//     showExpenses();
// }

// showExpenses();

//get the form and added a event
document.getElementById('expForm').addEventListener('submit', addExpense);

// creating a variable expenses and getting the data in local storage
const expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function addExpense(e){
    e.preventDefault();

    // get type, name, date, and amount
    let type = document.getElementById('type').value;
    let name = document.getElementById('name').value;
    let amount = document.getElementById('amount').value;


    if(type != 'chooseOne' && name.length > 0 && amount > 0)
    {
        const expense = {
            type, 
            name, 
            amount, 
            id: expenses.length > 0 ? expenses[expenses.length - 1].id + 1 : 1,
        }
        // pushing the data 
        expenses.push(expense);

        // localStorage 
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    document.getElementById('expForm').reset();
    showExpenses();
}

const showExpenses = () => {

    const expenseTable = document.getElementById('expenseTable');

    expenseTable.innerHTML = '';

    for(let i = 0; i < expenses.length; i++){
        expenseTable.innerHTML += `
            <tr>
                <td>${expenses[i].type}</td>
                <td>${expenses[i].name}</td>
                <td>${expenses[i].amount}</td>
                <td><a class="deleteButton" onclick="deleteExpense(${expenses[i].id})">
                    Delete</td>
            </tr>
        `;

 let total = 0;
 total = expenses[i].amount;
    console.  log(total);


    }
}

function total(){
    var table = document.getElementById('expenseTable');
    let total = 0
    for(let i = 1; i<expenses.length; i++){
        total+=Number(expenseTable.expenses[i].amount.innerText)
    }
    const totalInput = document.getElementById('total')
    totalInput.value=total

}