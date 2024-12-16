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

    // if (isNaN(newMoney) || newMoney <= 0) {
    //     return;
    // }
    // else {
    //     console.log(newMoney)
    //     document.getElementById('my_modal_1').showModal();
    // }

}


function currentDonationCalculation(previousTotalMoney, currentDonation) {

    const availableMoney = getElement('total-available-money');

    if (currentDonation <= 0 || isNaN(currentDonation) || currentDonation > availableMoney) {
        alert('invalid input or do not have sufficient balance');
        return previousTotalMoney;
    }
    const newTotalMoney = previousTotalMoney + currentDonation;
    document.getElementById('my_modal_1').showModal();
    return newTotalMoney;
}




document.querySelector('#noakhali-btn').addEventListener('click', function () {
    const noakhaliPreviousDonation = getElement('noakhali-donation-money')

    const noakhaliCurrentDonation = getInputValue('noakhali-input')

    const totalNoakhaliDonation = currentDonationCalculation(noakhaliPreviousDonation, noakhaliCurrentDonation);

    setElement('noakhali-donation-money', totalNoakhaliDonation);


    totalRestMoneyCalculation(noakhaliCurrentDonation);

    // // create history

    createHistory(noakhaliCurrentDonation, 'noakhali-title');

})



document.querySelector('#feni-btn').addEventListener('click', function (e) {
    const feniPreviousDonation = getElement('feni-donation-money');

    const feniCurrentDonation = getInputValue('feni-input');

    const totalFeniDonation = currentDonationCalculation(feniPreviousDonation, feniCurrentDonation);

    setElement('feni-donation-money', totalFeniDonation);

    totalRestMoneyCalculation(feniCurrentDonation);

    // history create 
    createHistory(feniCurrentDonation, 'feni-title');
})


document.querySelector('#quota-btn').addEventListener('click', function () {
    const quotaPreviousDonation = getElement('quota-donation-money');

    const quotaCurrentDonation = getInputValue('quota-input');;

    const totalQuotaDonation = currentDonationCalculation(quotaPreviousDonation, quotaCurrentDonation);

    setElement('quota-donation-money', totalQuotaDonation);

    totalRestMoneyCalculation(quotaCurrentDonation)

    // history create 
    createHistory(quotaCurrentDonation, 'quota-title');
})


// total donation and rest money setup

function totalRestMoneyCalculation(newDonation) {
    const totalAvailabePreviousMoney = getElement('total-available-money');

    if (isNaN(newDonation) || newDonation < 0) {
        return;
    }

    if (totalAvailabePreviousMoney <= 0 || totalAvailabePreviousMoney < newDonation) {
        return;
    }

    const restAvalilableTotalMoney = totalAvailabePreviousMoney - newDonation;

    setElement('total-available-money', restAvalilableTotalMoney);
}


// history setup zone

function createHistory(money, id) {
    const availableMoney = getElement('total-available-money')

    if (isNaN(money) || money > availableMoney) {
        return;
    }
    const title = document.getElementById(id).innerText;
    const historyTitle = `${money} Taka is ${title}`;
    const currentDate = new Date();


    const div = document.createElement('div');
    div.classList.add('w-5/6', 'max-w-[1140px]', 'mx-auto', 'border', 'border-[#1111111A]', 'rounded-lg', 'p-8', 'my-8', 'space-y-4');


    div.innerHTML = `
     <h2 class="text-xl font-bold">${money} Taka is ${title}</h2>

     <p class="text-[#111111B3]">Date: ${currentDate}</p>
    `

    const historyBox = document.getElementById('history-section');
    historyBox.insertBefore(div, historyBox.firstChild);
}


// history and donation toggle zone

document.getElementById('history-btn').addEventListener('click', function () {
    const donationBtn = document.getElementById('donation-btn');

    donationBtn.classList.remove('bg-[#B4F461]', 'hover:bg-[#B4F461]')

    donationBtn.classList.add('bg-transparent');


    const historyBtn = document.getElementById('history-btn');

    historyBtn.classList.remove('bg-transparent')
    historyBtn.classList.add('bg-[#B4F461]', 'hover:bg-[#B4F461]')

    const historyBox = document.getElementById('history-section');

    const donationBox = document.getElementById('donation-container');



    historyBox.classList.remove('hidden');

    donationBox.classList.add('hidden');
})


document.getElementById('donation-btn').addEventListener('click', function () {

    const historyBtn = document.getElementById('history-btn');

    historyBtn.classList.remove('bg-[#B4F461]', 'hover:bg-[#B4F461]')

    historyBtn.classList.add('bg-transparent');


    const donationBtn = document.getElementById('donation-btn');

    donationBtn.classList.remove('bg-transparent')
    donationBtn.classList.add('bg-[#B4F461]', 'hover:bg-[#B4F461]')

    const historyBox = document.getElementById('history-section');

    const donationBox = document.getElementById('donation-container');



    historyBox.classList.add('hidden');

    donationBox.classList.remove('hidden');

})

