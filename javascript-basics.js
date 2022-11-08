//String

const name = 'Yash Prasad';
const age = 25;
const address = 'Prestige Falcon City, Bangalore';
console.log(`My name is ${name}, age is ${age}, address is ${address}`);
const input = 'My name is Yash Prasad, age is 25, address is Prestige Falcon City, Bangalore';
console.log(input.split(','));



//Arrays

const fruit = ['orange', 'apple', 'mango'];
console.log(fruit);
fruit.push('lichi');
console.log(fruit);
fruit[2] = 'melon';
console.log(fruit);
fruit.unshift('guava');
console.log(fruit);
fruit.pop();
console.log(fruit);
console.log(fruit);
console.log(Array.isArray(fruit));
console.log(fruit.indexOf('apple'));



//Objects

const person = {
    fname: 'Akhilesh',
    lname: 'Singh',
    hobbies: ['play', 'sing', 'book'],
    address: {
        place: 'Sector - 66',
        city: 'Noida'
    }
}
console.log(person);
console.log(person.hobbies[2]);
console.log(person.fname);
alert(person.address.place);
const { fname, lname, address:{city} } = person;
console.log(fname);
console.log(city);
person.email = 'akhilesh.gmail';
console.log(person);
