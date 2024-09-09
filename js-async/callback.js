/*
Write a function processTransaction that takes two callbacks: success and failure.
If the amount is greater than the balance, the failure callback is called;
otherwise, the success callback is called.
*/

function processTransaction(amount, balance, success, failure){
    if (amount > balance)
        failure("Transaction failed: Insufficient balance.");
    else
        success(`Transaction successful: Withdrawn ${amount}BDT, Current balance: ${balance - amount}BDT`);
}

processTransaction(5000, 3000,
    (msg) => console.log(msg),
    (err)=> console.log(err)
);

processTransaction(2000, 3000,
    (msg) => console.log(msg),
    (err)=> console.log(err)
);

