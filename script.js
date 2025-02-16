let balance = 1000;

function updateBalance() {
    document.getElementById('balance').innerText = balance;
}

function deposit() {
    const depositAmount = parseFloat(document.getElementById('depositAmount').value);
    if (isNaN(depositAmount) || depositAmount <= 0) {
        alert("Please enter a valid amount to deposit.");
        return;
    }
    balance += depositAmount;
    updateBalance();
    document.getElementById('depositAmount').value = '';
}

function withdraw() {
    const withdrawAmount = parseFloat(document.getElementById('withdrawAmount').value);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
        alert("Please enter a valid amount to withdraw.");
        return;
    }
    if (withdrawAmount > balance) {
        alert("Insufficient funds.");
        return;
    }
    balance -= withdrawAmount;
    updateBalance();
    document.getElementById('withdrawAmount').value = '';
}

// Initialize balance display
updateBalance();
