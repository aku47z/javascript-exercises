const palindromes = function (string) {
    string = string.toLowerCase();
    const alphanumeric = 'qwertyuiopasdfghjklzxcvbnm1234567890';
    string = string.split('');
    string = string.filter((char) => alphanumeric.includes(char));
    string = string.join('');

    let mid = string.length / 2;
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return (string.substr(0, mid) === reversed.substr(0, mid));
};

// Do not edit below this line
module.exports = palindromes;
