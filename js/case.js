function updateCaseTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber('case-number-field', true);
    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal();
});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber('case-number-field', false);
    updateCaseTotalPrice(newCaseNumber);

    calculateSubTotal();
});