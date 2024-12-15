function getElement(id) {
    const input = document.getElementById(id).innerText;
    const inputNum = parseFloat(input);
    return inputNum;
}

function getInputValue(id) {
    const inputField = document.getElementById(id);
    const input = inputField.value;
    const currentDonation = parseFloat(input);
    inputField.value = '';
    return currentDonation;
}


function setElement(id, newMoney) {
    const input = document.getElementById(id);
    input.innerText = newMoney;
}


function currentDonationCalculation(previousTotalMoney, currentDonation) {
    if (currentDonation < 0 || isNaN(currentDonation)) {
        alert('invalid input');
        return previousTotalMoney;
    }
    const newTotalMoney = previousTotalMoney + currentDonation;
    return newTotalMoney;
}




document.querySelector('#noakhali-btn').addEventListener('click', function () {
    const noakhaliPreviousDonation = getElement('noakhali-donation-money')

    const noakhaliCurrentDonation = getInputValue('noakhali-input')

    const totalNoakhaliDonation = currentDonationCalculation(noakhaliPreviousDonation, noakhaliCurrentDonation);

    setElement('noakhali-donation-money', totalNoakhaliDonation);

    totalRestMoneyCalculation(noakhaliCurrentDonation);

})



document.querySelector('#feni-btn').addEventListener('click', function (e) {
    const feniPreviousDonation = getElement('feni-donation-money');

    const feniCurrentDonation = getInputValue('feni-input');

    const totalFeniDonation = currentDonationCalculation(feniPreviousDonation, feniCurrentDonation);

    setElement('feni-donation-money', totalFeniDonation);

    totalRestMoneyCalculation(feniCurrentDonation);
})


document.querySelector('#quota-btn').addEventListener('click', function () {
    const quotaPreviousDonation = getElement('quota-donation-money');

    const quotaCurrentDonation = getInputValue('quota-input');;

    const totalQuotaDonation = currentDonationCalculation(quotaPreviousDonation, quotaCurrentDonation);

    setElement('quota-donation-money', totalQuotaDonation);

    totalRestMoneyCalculation(quotaCurrentDonation)
})


// total donation and rest money setup

function totalRestMoneyCalculation(newDonation) {
    const totalAvailabePreviousMoney = getElement('total-available-money');

    if (isNaN(newDonation) || newDonation < 0) {
        return;
    }

    if (totalAvailabePreviousMoney <= 0 || totalAvailabePreviousMoney < newDonation) {
        alert('You have not enough money to donate.');
        return;
    }

    const restAvalilableTotalMoney = totalAvailabePreviousMoney - newDonation;

    setElement('total-available-money', restAvalilableTotalMoney);
}