// Create a an Object constructor function called BankAcct with the properties
// acctNum, acctOwner, checkBalance, saveBalance, acctType.
function BankAcct(acctNum, acctOwner, checkBalance, saveBalance, acctType) {
  this.acctNum = acctNum;
  this.acctOwner = acctOwner;
  this.checkBalance = checkBalance;
  this.saveBalance = saveBalance;
  this.acctType = acctType;
}

// BankAcct.prototype method called checkTransfer()
BankAcct.prototype.checkTransfer = function(amount) {
  // Check if the amount + checkBalance is greater than 0
  if ((amount + this.checkBalance) > 0) {
    alert(amount + ' + ' + this.checkBalance + ' is greater than 0');
  } else {
    alert(amount + ' + ' + this.checkBalance + ' is ' + (amount+this.checkBalance) + ' and it is not greater than 0');
  }
};

var x = new BankAcct(1,2,3,4,5);
x.checkTransfer(-10)
