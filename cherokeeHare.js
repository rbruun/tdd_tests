function reproduce(starting, rate, howLong) {

// take the starting value times the rate to the power of the period length
// round down to the next whole number
return Math.floor(starting * Math.pow(1+rate, howLong));

}

module.exports = reproduce;