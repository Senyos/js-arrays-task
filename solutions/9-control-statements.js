// BEGIN

const getTotalAmount = (wallet, currency) => {
    let countMoney = 0
    for (let money of wallet) {
        let moneyCurrency = money.slice(0, 3)
        if (moneyCurrency === currency) {
            let moneyAmount = Number(money.slice(4))
            countMoney += moneyAmount
        }
    }
    return countMoney
}

export default getTotalAmount

// END
