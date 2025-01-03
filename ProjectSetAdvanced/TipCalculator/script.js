const submit = document.querySelector('#Submit');
const bill = document.querySelector('#billP');
const rate = document.querySelector('#Percentage');
const insert = document.querySelector('#insert');

function calculateTotal(e) {
    e.preventDefault();
    const billVal = parseFloat(bill.value);
    const rateVal = parseFloat(rate.value);

    if (isNaN(billVal) || isNaN(rateVal)) {
        insert.innerHTML = `<p>Please enter valid numbers for both fields.</p>`;
        return;
    }

    const tipValue = billVal * (rateVal / 100);
    const totalVal = billVal + tipValue;

    insert.innerHTML = `
        <p>Bill Amount: ${billVal.toFixed(2)}</p>
        <p>Tip Amount: ${tipValue.toFixed(2)}</p>
        <p>Total Amount: ${totalVal.toFixed(2)}</p>
    `;
}

submit.addEventListener('click', calculateTotal);
