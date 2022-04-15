
const bestPeople = [
    {
        name: 'Nazira',
        salary: 34600
    },
    {
        name: 'Meerim',
        salary: 38000
    },
    {
        name: 'Firdavs',
        salary: 47263
    },
    {
        name: 'Nurdin',
        salary: 15000
    },
    {
        name: 'Temirlan',
        salary: 58456
    },
    {
        name: 'Semen',
        first_letter: "S",
        salary: 56654
    },
    {
        name: 'Syimyk',
        first_letter: "S",
        salary: 76543
    },
    {
        name: 'Luisa',
        salary: 59452
    },
    {
        name: 'Kutman',
        salary: 63213
    },
    {
        name: 'Luisa',
        salary: 59452
    },
    {
        name: 'Chyngyzhan',
        salary: 23459
    },
    {
        name: 'Aliya',
        salary: 45697
    }
]

const s = bestPeople.filter((bestPerson)=> bestPerson.name[0]==='S');
console.log(s)

let cash = bestPeople.map(function({salary}) {
  return salary / 100;
});
console.log(cash);


let totalsalary = bestPeople.reduce(function(accumulator, salaries) {
  return accumulator + salaries.salary;
}, 0);
console.log(totalsalary)

