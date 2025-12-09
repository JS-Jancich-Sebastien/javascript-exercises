const removeFromArray = function(array, elementToRemove) {

    let indexOfElement = array.findIndex(n => n ===  elementToRemove)

    let arrayStart = array.slice(0, indexOfElement)
    let arrayEnd = array.slice(indexOfElement +1, array.length);

    let newArray = [...arrayStart, ...arrayEnd]


    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
