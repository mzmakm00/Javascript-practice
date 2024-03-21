const today = new Date();
const currentYear = today.getFullYear()
const christmas = new Date(currentYear , 11 , 25)

if (today.getMonth() == 11 && today.getDate() > 25)
{
    christmas.setFullYear(currentYear + 1)
}

const timeDifference = christmas.getTime() - today.getTime();

const daysleft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

console.log(`There are ${daysleft} days left until Christmas `)