/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst
 * nog wat uitbreiden met nieuwere opdrachten Je mag me bij elke opdracht om
 * hulp vragen Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1
 * of meerdere opdrachten af hebt
 */


/**
 * Uitleg van deze opdrachten:
 * Kijk hoever je komt met deze opdrachten. Ik zal deze lijst in de toekomst nog wat uitbreiden met nieuwere opdrachten
 * Je mag me bij elke opdracht om hulp vragen
 * Sowieso wil ik je werk zien. Dus loop even bij me langs als je 1 of meerdere opdrachten af hebt
 */

/**
 * Opdracht 1: primitives
 * Maak voor de volgende primitives 5 goed bedachte variabelen per primitive
 *
 * 5 variabelen met daarin een string
 * 5 variabelen met daarin een number
 * 5 variabelen met daarin een boolean
 *
 * Geef ze een goede engelse naam en sla er iets in op wat een goed voorbeeld geeft
 * van Media Development producten (apps, sites, etc.)
 * Bijvoorbeeld een string variabele met de naam 'teacherName' en als waarde 'Berend'
 */

const github = 'http://github.com';
const name = 'Miguel';
const helloWorld = 'Hello World!';
const language = 'JS';
const hobby = 'programming';

const age = 20;
const length = 1.73;
const pi = 3.14159265359;
const hours = 14;
const commits = 1;

const isProgramming = true;
const isHungry = false;
const needsCoffee = true;
const arrayIsEmpty = true;
const isHappy = true;


/**
 * Opdracht 2: Arrays
 * Bedenk 3 arrays en vul ze met primitives
 * console.log de lengte van de arrays
 *
 * Bijvoorbeeld een Array met de naam 'students' en als waarde ['Berend', "Erwin']
 */

const studentNames = [name, 'Marly', 'Jesse'];
const teachers = ['Berend', 'Hugo'];
const languages = ['HTML', 'CSS', language, 'PHP'];

console.log("Students length: " + studentNames.length);
console.log("Teachers length: " + teachers.length);
console.log("Languages length: " + languages.length);


/**
 * Opdracht 3: Arrays push
 * Maak een lege array aan
 * push er een string in
 */

const emptyArray = [];
emptyArray.push(helloWorld);
console.log("EmptyArray: " + emptyArray);

/**
 * Opdracht 4: Array splice
 * Maak een array aan en vul hem met namen
 * Gooi de naam op de 1e plek weg
 * Gooi de naam op de 3e plek weg
 */

const names = [name, 'Marly', 'Jesse', 'Berend', 'Hugo'];
names.splice(0, 1);
names.splice(1, 1);
console.log("Names: " + names);

/**
 * Opdracht 5: Objects
 * Maak van 10 objecten uit je dagelijkse leven een object
 *
 * Bijvoorbeeld een object met de gegevens van je mobiel zoals welk merk, type en hoe oud hij is
 */

const mobile = {brand: 'Samsung', os: 'Android', color: 'black', age: '1 year'};
const laptop = {brand: 'Apple', os: 'MacOS', color: 'Silver'};
const bag = {brand: 'Eastpack', color: 'Black'};
const watch = {brand: 'Seiko', color: 'Silver', age: '8 years'};
const coat = {brand: 'Nike', age: '2 weeks', color: 'Blue'};
const chair = {type: 'wood', legs: '4', color: 'lightbrown'};
const bike = {wheels: 2, gears: 8, color: 'blue/gray'};
const bottle = {isEmpty: false, brand: 'SPA'};
const pen = {color: 'blue', type: 'ballpoint'};
const shoe = {brand: 'Nike SB', type: 'Suede', color: 'grey', size: 42.5};


/**
 * Opdracht 6: Functions
 * Bedenk 4 functies die handig zouden kunnen zijn
 * Bijvoorbeeld een functie met de naam 'multiply'. Deze functie verwacht 2 parameters value & multiplier
 * console.log( value * multiplier)
 */

console.log("Function 1 = perimeterSquare(s) -> s = length of side");
console.log("Function 2 = perimeterRectangle(l, w) -> l = length, w = width");
console.log("Function 3 = perimeterTriangle(a, b, c) -> lengt of all sides");
console.log("Function 4 = volumeCube(s) -> s = length of side");

/**
 * Opdracht 7: Function & objects
 * Maak een functie die een firstName en lastName verwacht als parameter
 * vervolgens returned de functie een object met daarin de firstname en lastname opgeslagen
 * roep deze functie aan en console.log() de waarde
 */
const objects = [];
const makeObject = (firstname, lastname) => {
    objects.push({
        firstname: firstname,
        lastname: lastname
    });
    console.table(objects);
};

makeObject('Miguel', 'Korn');

/**
 * Opdracht 8: Functions, objects
 * Maak een object genaamd 'student'
 * Maak in dit object bij het aanmaken een functie aan met de naam 'showName'
 */

let student = {
    name: 'Miguel',
    showName: () => {
        console.log(student.name);
    },
};

student.showName();

/**
 * Opdracht 9: Functions, objects
 * Maak een object genaamd 'student'
 * Voeg nadat je het object hebt aangemaakt een functie toe aan 'student' met de naam 'showName'
 */

/**
 * Opdracht 10: Arrays & for loops
 * Maak een array genaamd 'students' met daarin 10 namen van je medeleerlingen
 * Schrijf een for loop om alle namen in de Array te laten zien
 */
const students = ['naam1', 'naam2', 'naam3', 'naam4', 'naam5', 'naam6', 'naam7', 'naam8', 'naam9', 'naam10'];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

/**
 * Opdracht 11: Strings samenvoegen
 * Maak een variabele met de naam firstName, sla je voornaam hierin op
 * Maak een variabele met de naam lastName, sla je achternaam hierin op
 * Maak een variabele fullName, en zorg ervoor dat de variabelen 'firstName' en
 * 'lastName' hier samen in worden opgeslagen
 */

const firstName = 'Miguel';
const lastName = 'Korn';
const fullName = firstName + ' ' + lastName;
console.log(fullName);

/**
 * Opdracht 12: Random cijfers
 * console.log() een willekeurige cijfer tussen 0 en 5
 * console.log() een willekeurige cijfer tussen 1 en 10
 * console.log() een willekeurige cijfer tussen 30 en 40
 * console.log() een willekeurige cijfer tussen -100 en 100
 */

console.log(Math.floor(Math.random() * 5));
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 40) + 30);
console.log(Math.floor(Math.random() * 100) - 100);

/**
 * Opdracht 13: Primitive, Array of object?
 * Geef in de console.log antwoord op de vraag door een boolean op true of
 * false te zetten
 */
console.log('De naam van een gebruiker sla ik op in een:',
    {array: false, object: false, primitive: true});

console.log('De naam, leeftijd en lengte van een gebruiker sla ik op in een:',
    {array: false, object: true, primitive: false});

console.log('Alle facturen van een zakelijke klant sla ik op in een:',
    {array: true, object: false, primitive: false});

console.log('Een factuur sla ik op in een:',
    {array: false, object: true, primitive: false});

console.log('Als ik vanuit JavaScript een menu maak met knoppen, dan sla ik de knoppen op in een:',
    {array: true, object: false, primitive: false});

/**
 * Opdracht 14: Keywords
 * Maak 4 variabelen aan met de let keyword
 * Maak 4 variabelen aan met de const keyword
 */

let speed = 5;
let coins = 100;
let batteryLife = '50%';
let tmpName = 'Miguel';

const carWheels = 4;
const username = 'miguelkorn';
const pi = 3.14159265359;
const mail = '123@mail.com';


/**
 * Opdracht 15: Keywords
 * Geef antwoord op de volgende vragen:
 */
console.log('Wanneer gebruik je de let keyword?', 'Als je geen vaste value wilt gebruiken');
console.log('Wanneer gebruik je de const keyword', 'Als je zeker weet dat de value vast is');

/**
 * Opdracht 16: Objects en array
 * Maak een object voor jezelf (naam, leeftijd, lengte)
 * Maak in je object een array aan genaamd 'family' en vul deze array met namen uit je familie
 * (objecten en arrays kunnen in elkaar opgeslagen worden)
 */

