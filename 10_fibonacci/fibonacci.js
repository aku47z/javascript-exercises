const fibonacci = function(n) {
    if (n < 0)
        return "OOPS";
    else if (n == 0)
        return 0;
    else
        return n < 3 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
