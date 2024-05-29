// This tells JS to treat what is inside of the parentheses as an expression
// Does not pollute the global namespace
import { frontendExpert, algoExpert } from './helper.js'
// Syntax can actually be combined but better to keep it consistent on imports
import { Person } from './Person.js'
frontendExpert();
algoExpert();

    const alex = new Person('Alex');
    alex.sayHello();

const shouldSayFrontend = true;

if(shouldSayFrontend){
    const { frontendExpert } = await import('./helper.js');
    frontendExpert();
}