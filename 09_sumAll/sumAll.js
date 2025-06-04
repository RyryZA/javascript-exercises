
const sumAll = function(first, last) {
    if (first <= 0 || last <= 0) return "ERROR";
    if (!Number.isInteger(first) || !Number.isInteger(last)) return "ERROR";
    if (first > last) {
        const large = first;
        first = last;
        last = large;
    }

    let newAnswer = 0;

    for (let i = first; i <= last; i++) {
        newAnswer += i;
    }

    return newAnswer;

};

// Do not edit below this line
module.exports = sumAll;
