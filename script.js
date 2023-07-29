const tital = document.getElementById('tital');
const titalInput = document.getElementById('tital-input');
const debtPaid = document.getElementById('debt-paid');
const debtPaidInput = document.getElementById('debt-paid-input');
const debtTotal = document.getElementById('debt-total');
const debtTotalInput = document.getElementById('debt-total-input');
const percentbar = document.getElementById('percentbar');
const btn = document.getElementById('btn');
const addBtn = document.getElementById('add-btn');

// -------end of variables----------------

function EditMode(a , b){
    a.style.display = 'none'
    b.style.display = 'inline-block'
}
function viewMode(a , b){
    a.style.display = 'inline-block'
    b.style.display = 'none'
}
// function updatePercentBar() {
//     const amountPaidValue = parseFloat(debtPaidInput.value) || 0;
//     const totaldebtValue = parseFloat(debtTotal.textContent.slice(1)) || 0;
//     const percentage = (amountPaidValue / totaldebtValue) * 100;
//     percentbar.style.width = percentage + '%';
//   }

// ---------end of functions----------

tital.addEventListener('click', function(){
    EditMode(tital, titalInput)
});
titalInput.addEventListener('dblclick', function(){
    viewMode(tital, titalInput);
    tital.textContent = titalInput.value;
    if(tital.textContent == ''){
        tital.textContent = 'Debt'
    }
});
// ---------------tital----------------------------------

debtPaid.addEventListener('click', function(){
    EditMode(debtPaid, debtPaidInput)
});
debtPaidInput.addEventListener('dblclick', function(){
    viewMode(debtPaid, debtPaidInput);
    debtPaid.textContent = debtPaidInput.value;
    if(debtPaid.textContent == ''){
        debtPaid.textContent = '0.00'
    };

    // updatePercentBar()
});
// ---------------Debt paid-------------------------------

debtTotal.addEventListener('click', function(){
    EditMode(debtTotal, debtTotalInput)
});
debtTotalInput.addEventListener('dblclick', function(){
    viewMode(debtTotal, debtTotalInput);
    debtTotal.textContent = debtTotalInput.value;
    if(debtTotal.textContent == ''){
        debtTotal.textContent = '0.00'
    }
});

