const palindromes = function (string) {
    let processedString = string
    .replaceAll(" ", "")    
    .toLowerCase()          
    .replaceAll(",", "")    
    .replaceAll(".", "");

    let arrayString = string.split("");

    if(arrayString === arrayString.reverse())
    {
        return true
    }
    else
    {
        return false
    }
};

console.log(palindromes("A car, a man, a maraca."))

// Do not edit below this line
module.exports = palindromes;
