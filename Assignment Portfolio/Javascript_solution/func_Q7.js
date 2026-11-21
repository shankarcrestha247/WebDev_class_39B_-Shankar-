const validateWithdrawal = (amount, balance) => {
    if (amount > balance) {
        return false;
    }
    else if (amount % 500 !== 0) {
        return false;
    }
    else {
        return true;
    }
};

const withdrawMoney = (amount, balance, callback) => {

    if (callback(amount, balance)) {
        balance = balance - amount - 25;

        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs. 25");
        console.log("Remaining Balance: Rs.", balance);
    }
    else {
        console.log("Withdrawal Failed!");
        console.log("insufficient balance.");
        console.log("Remaining Balance: Rs.", balance);
    }
};

withdrawMoney(3129, 10000, validateWithdrawal);
