import {People} from './People';

const people = [
    {name: 'ala', data: 'awesome'},
    {name: 'ela', data: 'such name'},
    {name: 'emi', data: 'here'}
];

let myFavPeople = new People(people);


console.log(myFavPeople.hasName('emi') === true);

console.log(myFavPeople.findName('emi').data === 'here');

console.log(myFavPeople.allNames()[1] === 'ela');
console.log(myFavPeople.allNames()[0] === 'ala');

let [alaName, elaName, emiName] = myFavPeople.allNames();

console.log(alaName === 'ala');