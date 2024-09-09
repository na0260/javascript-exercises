/*
Create a function createBankAccount that returns an object with methods to deposit, withdraw,
and checkBalance. The balance should be private and only accessible through these methods.
*/

function createBankAccount(){
    let balance = 0;
    return {
        deposit(amount){
            balance += amount;
            return `Deposited ${amount}BDT, Current balance: ${balance}BDT`;
        },
        withdraw(amount){
            if (amount > balance)
                return 'Insufficient balance';
            else {
                balance -= amount;
                return `Withdrawn ${amount}BDT, Current balance: ${balance}BDT`;
            }
        },
        checkBalance(){
            return `Current balance: ${balance}BDT`;
        }
    };
}

const newAcc = createBankAccount();
console.log(newAcc.deposit(5000));
console.log(newAcc.withdraw(2000));
console.log(newAcc.checkBalance());
console.log(newAcc.withdraw(5000));