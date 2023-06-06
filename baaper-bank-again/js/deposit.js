document.getElementById("btn-deposit").addEventListener('click', function () {

  const newDepositAmount = parseFloat(document.getElementById("deposit-field").value);
  const previousDepositTotal = parseFloat(document.getElementById("deposit-total").innerText);

  // calculate new deposit total
  const newDepositTotal = newDepositAmount + parseInt(previousDepositTotal);
  console.log(typeof(newDepositAmount));
  
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // set previous balance by using the function
  const previousBalanceTotal = parseFloat(document.getElementById("balance-total").innerText);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
  document.getElementById("deposit-field").value = '';
});
