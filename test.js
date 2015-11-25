import {People} from './People';

const people = [
    {name: 'ala', data: 'awesome', address: 'Oslo strasse'},
    {name: 'ela', data: 'such name', address: 'Basel'},
    {name: 'emi', data: 'here', address: 'Here' }
];

let myFavPeople = new People(people);


console.log(myFavPeople.hasName('emi') === true);

console.log(myFavPeople.findName('emi').data === 'here');

console.log(myFavPeople.allNames()[1] === 'ela');
console.log(myFavPeople.allNames()[0] === 'ala');

let [alaName, elaName, emiName] = myFavPeople.allNames();

console.log(alaName === 'ala');

console.log(myFavPeople.firstPersonCard() === 'ala is from:\nOslo strasse');

console.log(...people.map(p => p.name));
