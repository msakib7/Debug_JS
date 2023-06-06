document.getElementById("btn-withdraw").addEventListener("click", function () {

  const newWithdrawAmount = parseFloat(document.getElementById("withdraw-field").value);
  
  const previousWithdrawTotal = parseFloat(document.getElementById("withdraw-total").innerText);
  

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  console.log(newWithdrawTotal);

  setTextElementValueById("withdraw-total", newWithdrawTotal);

  const previousBalanceTotal = parseFloat(document.getElementById("balance-total").innerText);
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
  document.getElementById("withdraw-field").value = '';
});
