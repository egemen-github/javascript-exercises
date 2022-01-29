const findTheOldest = function(people) {

    currentYear = new Date().getFullYear()

    for (let i = 0; i < people.length; i++) {
        
        if ("yearOfDeath" in people[i]){
            people[i]["yearsAlive"] = people[i].yearOfDeath - people[i].yearOfBirth
        } else {
            people[i]["yearsAlive"] = currentYear - people[i].yearOfBirth
        }
    };

    // Sorts descending order by years alive. Oldest first.
    const ordered = people.sort((a, b) => a.yearsAlive > b.yearsAlive ? -1 : 1)
    return ordered[0]
};

// Do not edit below this line
module.exports = findTheOldest;
