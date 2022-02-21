function getInput(inputId) {
    const inputField = document.getElementById(inputId);
    if (inputField.value >= 0) {
        const Cost = inputField.value;
        return Cost;
    }
    else if (inputField.value < 0) {
        window.alert('Please enter a valid amount!!');
        return 0;
    }
    else if (typeof (inputField.value) == 'string') {
        window.alert('Please enter a valid amount not string!!');
        return 0;
    }
}

// Event handler for calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    //get value by calling getInput() function
    const foodExpenses = Number(getInput('food-field'));
    const rentExpenses = Number(getInput('rent-field'));
    const clothesExpenses = Number(getInput('clothes-field'));
    const totalExpenses = foodExpenses + rentExpenses + clothesExpenses;
    const totalIncome = Number(getInput('income-field'));
    //checking is income greater than expences
    if (totalIncome < totalExpenses) {
        swal({
            title: "Wrong Amount!",
            text: "Expences can't be bigger than income!!",
            icon: "warning",
            button: "Retry",
        });
    } else {
        document.getElementById('total-expenses').innerText = totalExpenses;
        document.getElementById('balance').innerText = totalIncome - totalExpenses;
    }
});
// Event handler for save button
document.getElementById('save-btn').addEventListener('click', function () {
    console.log('save-btn')
    const totalIncome = Number(getInput('income-field'));
    const saveField = Number(getInput('save-field'));
    const totalSaving = document.getElementById('total-saving');
    totalSaving.innerText = (totalIncome * saveField) / 100;
    //checking balance must be greater than Savings
    const balance = document.getElementById('balance');
    if ((balance.innerText - totalSaving.innerText) < 0) {
        swal({
            title: "Wrong Amount!",
            text: "Savings amount can't be bigger than balance!!",
            icon: "warning",
            button: "Retry",
        });
    } else {
        document.getElementById('remaining-balance').innerText = balance.innerText - totalSaving.innerText;
    }
})