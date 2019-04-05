 // This is my first Javascript code!
 let name = 'Nosa'; //spring literal
console.log(name); 
let firstName = 'Nosa';
let lastName = 'Itepu';
let selectColor = null;
let age = 10; //number literal
let isApprove = false; //boolean literal
//cannot be a reserved keyword
//should be meaniful 
//cannot start with a number (1name)
//cannot contain a space or hyphen (-)
//are case-sensitive

name = 'Nosa';
 age = 10;

let person = {
    name: 'Mosh',
    age:30
};
person.name='John'; //dot notation
person['name']  = 'mary';

console.log(person.name); //bracket notation
 
function great(name, lastName) //performing a task
{
    console.log('Hello ' + name + ' ' + lastName);
}
great('john', 'Smith');

//calculating a value
function square(number) {
    return number * number;
}
let number = square(2)
console.log (square(2))
