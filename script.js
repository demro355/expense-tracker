let balance = 0;
const transactionsList = document.getElementById('transactions');
const balanceDisplay = document.getElementById('balance');

// When pressed the function retrieves the item purchased and amount spent
function addTransaction() {
    const text = document.getElementById('text').value;
    const amount = parseFloat(document.getElementById('amount').value);

// Create a new list item for the transaction
const transaction = document.createElement('li');
transaction.innerHTML = `${text} <span>${amount >= 0 ? '+' : '-'}£${Math.abs(amount).toFixed(2)}</span> <button onclick="removeTransaction(this)">Delete</button>`;

 // Append the transaction to the transactions list
 transactionsList.appendChild(transaction);







//  Will check if number and text is entered, if not it will throw an error  
    if (text.trim() === '' || isNaN(amount)) {
        alert('Please enter valid text and amount.');
        return;
    }
    

// Called to display current balance
    balance += amount;
    updateBalance();

}

/*Updates the balance displayed on the webpage by setting 
the inner text of the balance display element to the 
formatted balance value (fixed to 2 decimal places).*/
function updateBalance() {
    balanceDisplay.innerText = balance.toFixed(2);
}

function removeTransaction(transactionElement) {
    const amountStr = transactionElement.previousElementSibling.innerText; // Extracting the amount string
    const amount = parseFloat(amountStr.replace('£', '')); // Extracting the amount and converting to a number
    balance -= amount; // Update the balance by subtracting the amount

    transactionElement.parentElement.remove(); // Remove the transaction element from the DOM
    updateBalance(); // Update the displayed balance
}
