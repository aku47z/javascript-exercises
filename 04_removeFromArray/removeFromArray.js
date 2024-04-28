const removeFromArray = function(arr, ...args) {
    let i = 0;
    while (i < arr.length) {
        for (let j = 0; j < args.length; j++) {
            if (args[j] === arr[i]) {
                arr.splice(i, 1);
                i--;
            }
        }
        i++;
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
