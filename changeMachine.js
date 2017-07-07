
function change(amount) {
let remainder = 0;
let change = [];

change.push(Math.floor(amount/20));
remainder = amount % 20;

change.push(Math.floor(remainder/10));
remainder = remainder % 10;

change.push(Math.floor(remainder/5));
remainder = remainder % 5;

change.push(remainder);

return change;
}

module.exports = change;