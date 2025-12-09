const leapYears = function(year) {

    let remainder = year % 4;

    if(remainder == 0)
    {
        if(year % 100 == 0)
        {
            if(year % 400 == 0)
            {
                return true
            }
            else
            {
                return false;
            }
        }
        else
        {
            return true;
        }
    }
    else 
    {
        return false
    }
};

console.log(leapYears(1996))

// Do not edit below this line
module.exports = leapYears;
