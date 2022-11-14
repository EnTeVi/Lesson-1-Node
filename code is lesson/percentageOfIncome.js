function percentageOfIncome (percentage, downPayment, additionalContribution, years) {
    let initialAmount = downPayment * percentage;
    for (let i = 0; i < years; i++) {
        initialAmount = (initialAmount + additionalContribution) * percentage;
        console.log(Math.floor(initialAmount));
    }
}

percentageOfIncome(1.16, 500000, 1600000, 5);