var People = require('./OldPeople');

var people = [
    {name: 'ala', data: 'awesome', address: 'Oslo strasse'},
    {name: 'ela', data: 'such name', address: 'Basel'},
    {name: 'emi', data: 'here', address: 'Here' }
];

var myFavPeople = People(people);

console.log(myFavPeople.hasName('emi') === true);

console.log(myFavPeople.findName('emi').data === 'here');

console.log(myFavPeople.allNames()[1] === 'ela');

console.log(myFavPeople.allNames()[0] === 'ala');

console.log(myFavPeople.firstPersonCard() === 'ala is from:\nOslo strasse');