function updatePhoneTotalPrice(newCaseNumber) {
    const caseTotalPrice = newCaseNumber * 1219;
    const caseTotalElement = document.getElementById('phone-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber('phone-number-field', true);
    updatePhoneTotalPrice(newCaseNumber);

    calculateSubTotal();
});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber('phone-number-field', false);
    updatePhoneTotalPrice(newCaseNumber);

    calculateSubTotal();
});