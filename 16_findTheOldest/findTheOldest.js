const findTheOldest = function(object) {

    let age = 0;
    let array = [];

    for(const person of object)
    {
       age = person.yearOfDeath - person.yearOfBirth; 
       array.push(age);
    }

    let maxValue = Math.max(...array);
    let index = array.indexOf(maxValue);
    let name = '';

    for(const person1 of object)
    {
        if(array[index] == (person1.yearOfDeath - person1.yearOfBirth))
        {
            name = person1.name;
        }
    }


    return console.log(name);

};

// Do not edit below this line
module.exports = findTheOldest;
