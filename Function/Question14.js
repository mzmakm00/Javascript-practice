function amountToCoins(amount, coins) {
    if (amount <= 0) {
        return "Amount should be a positive integer.";
    }

    coins.sort((a, b) => b - a);

    const result = [];
    let remainingAmount = amount;

    for (let i = 0; i < coins.length; i++) {
        const coin = coins[i];
        while (remainingAmount >= coin) {
            result.push(coin);
            remainingAmount -= coin;
        }
    }

    return result;
}

console.log(amountToCoins(46, [25, 10, 5, 2, 1])); 
