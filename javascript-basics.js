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


//Loop

for(let i = 0; i < 5; i++){
    console.log(i);
}
let j= 0;
while(j  < 5){
    console.log(j);
    j++;
}



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

//Functions

function convert(temp){
	return temp + 273;
}

console.log(convert(35));

function convertKC(temp, conversion){
	if(conversion == 'K'){
		return temp + 273;
	}
	else if(conversion == 'C'){
		return temp - 273;
    }
}

console.log(convertKC(350, 'C'));


//Constructors

function Person(firstName, lastName, rollNo, gender, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.rollNo = rollNo;
    this.gender = gender;
    this.age = new Date(age);
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
    this.getAgeYear = function(){
        return this.age.getFullYear();
    }
}
function eligible(stage){
    if(p1.getAgeYear() < stage){
        return 'False';
    }
    else{
        return 'True';
    }
}
const p1 = new Person('aman', 'nath', 12, 'M', '06/10/2002');
const p2 = new Person('amit', 'thar', 14, 'F', '06/06/2008');
console.log(`${p1.firstName} ${p1.lastName}`);
console.log(p1.getAgeYear());
console.log(p1.getFullName());
console.log(eligible(13));
console.log(p1);


//Array of Objects/Todo

const todo = [
    {
        id: 1,
        task: 'eat',
        isDone: false
    },

    {
        id: 2,
        task: 'sleep',
        isDone: true
    },

    {
        id: 3,
        task: 'go',
        isDone: false
    }
];
console.log(todo[1].task);
console.log(todo);
const todoJSON = JSON.stringify(todo);
console.log(todoJSON);
for(let i = 0; i < todo.length; i ++){
    console.log(`id is ${todo[i].id}, task is ${todo[i].task}, is task done ${todo[i].isDone}`)
}
for(let todos of todo){
    console.log(todos);
}
todo.forEach(function(todos){
    console.log(todos);
});
const todoText = todo.map(function(todos){
    return todos.task;
});
console.log(todoText);
const todoFilter = todo.filter(function(todos){
    return todos.isDone === false;
}).map(function(todos){
    return todos.task;
})
console.log(todoFilter);
