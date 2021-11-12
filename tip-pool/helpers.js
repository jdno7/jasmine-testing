
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
    
  }
  // console.log(total);
  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}
function appendServerDeleteBtn(tr) {
  let newDeleteBtn = document.createElement('td');
  newDeleteBtn.innerText = 'X';
  newDeleteBtn.className = 'delete-btn'
  // newDeleteBtn.id = `server${serverId}`

  newDeleteBtn.addEventListener('click', function(e){
    let parentTr = e.target.closest('tr');
    parentTr.remove();
    delete allServers[e.target.id];
    serverId--;
  })

  tr.append(newDeleteBtn);
}

function appendPaymentDeleteBtn(tr) {
  let newDeleteBtn = document.createElement('td');
  newDeleteBtn.innerText = 'X';
  newDeleteBtn.className = 'delete-btn'
  // newDeleteBtn.id = `server${serverId}`

  newDeleteBtn.addEventListener('click', function(e){
    let parentTr = e.target.closest('tr');
    parentTr.remove();
    delete allPayments[e.target.id];
    paymentId--;
  })

  tr.append(newDeleteBtn);
}
