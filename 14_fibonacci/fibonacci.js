const fibonacci = function (n) {

    n = Number(n);
    if (n < 0) return "OOPS";
    if (n === 0) return 0;

    let a = 0, b = 1;

    for (let i = 1; i < n; i++) {
        [a, b] = [b, a + b];
    }

    return b;
};

// Do not edit below this line
module.exports = fibonacci;
