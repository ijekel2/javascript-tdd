// This array holds the values of the coins available (UK).
var coins = [200, 100, 50, 20, 10, 5, 2, 1];

// This function calculates the change from a vending machine purchase.
function getChange (totalPayable, cashPaid) {
    var change = [];
    changeTotal = cashPaid - totalPayable;
    coins.forEach(function(coin) {
    	while(changeTotal >= coin){
        	change.push(coin);
          	changeTotal -= coin;
        }
    })
      
    return change;
};