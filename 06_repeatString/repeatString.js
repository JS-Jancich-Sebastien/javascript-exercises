const repeatString = function(string, number) {

    let newString = "";

    if (number >= 0)
    {
        for(let i = 0; i < number; i++)
        {
            newString = newString + string;
        }
    }
    else 
    {
        return console.log('ERROR')
    }

    return newString
};

// Do not edit below this line
module.exports = repeatString;
