const removeFromArray = function(array, elementToRemove) {

    let indexOfElement = array.findIndex(n => n ===  elementToRemove)

    return array.splice(indexOfElement)
};

console.log(removeFromArray([1,2,3,4], 3))

// Do not edit below this line
module.exports = removeFromArray;
