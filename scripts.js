function addExpense() {
    const description = document.getElementById('expenseDescription').value;
    const amount = document.getElementById('expenseAmount').value;

    console.log("Description:", description);
    console.log("Amount:", amount);

    if (description.trim() !== "" && amount.trim() !== "") {
        const expenseList = document.getElementById('expenseList');
        
        console.log("Adding expense to the list...");

        const li = document.createElement('li');
        li.textContent = `${description}: $${amount}`;
        
        expenseList.appendChild(li);

        // Clear the input fields
        document.getElementById('expenseDescription').value = "";
        document.getElementById('expenseAmount').value = "";
    } else {
        console.log("Description or Amount is empty.");
    }
}
