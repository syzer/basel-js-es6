var People = require('./OldPeople');

var people = [
    {name: 'ala', data: 'awesome'},
    {name: 'ela', data: 'such name'},
    {name: 'emi', data: 'here'}
];

var myFavPeople = People(people);

console.log(myFavPeople.hasName('emi') === true);

console.log(myFavPeople.findName('emi').data === 'here');

console.log(myFavPeople.allNames()[1] === 'ela');

console.log(myFavPeople.allNames()[0] === 'ala');
