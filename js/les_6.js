/**
 * Opdracht 1: imports
 * Importeer conditions.utils.js
 *
 * Maak een object aan en check via existy() of hij bestaat
 * Maak een variabele aan maar geef hem nog geen vulling. Console.log() wat existy() teruggeeft
 */

import {existy} from 'utils/conditions.utils';

const obj = {};
let variable;

console.log(existy(obj));
console.log(existy(variable));

/**
 * Opdracht 2: exports
 *
 * Maak een eigen util bestand aan met een functie die je handig lijkt om te hebben
 * Je kan aan iets simpels denken als je multiply functie
 * Maar misschien weet je iets anders te bedenken. Bijvoorbeeld een functie die je helpt
 * met random getallen. getRandom(from, to)
 * importeer je bestand hier en voer je functie uit
 */

import {getRandom} from 'utils/random.utils';

console.log(getRandom(5, 10));
console.log(getRandom(1, 20));


/**
 * Opdracht 3: Analyseer de Student Class
 *
 * Importeer de Class en maak 3 studenten aan
 * Beantwoord de volgende vragen
 */
console.log('Wat is de prototype chain van een student?',
    'object');

console.log('Kan je na het aanmaken van een student nog bij zijn leeftijd?',
    'ja, uitlezen en aanpassen');

import Student from 'entities/student';

const stud1 = new Student('fname1', 'lname1', 31);
const stud2 = new Student('fname2', 'lname2', 32);
const stud3 = new Student('fname3', 'lname3', 33);

const stud4 = new Student('fname4', 'lname4', 34);
const stud5 = new Student('fname5', 'lname5', 35);
const stud6 = new Student('fname6', 'lname6', 36);

/**
 * Opdracht 4: Student Class
 *
 * Console.log() de fullNames van je 3 aangemaakte studenten
 */

console.log('stud1: ',stud1.getFullName());
console.log('stud2: ',stud2.getFullName());
console.log('stud3: ',stud3.getFullName());

/**
 * Opdracht 5: Custom class
 *
 * Roep mij erbij als je langer dan 5 a 10 minuten over deze opdracht na moet denken
 * Dan help ik even
 *
 * Maak een eigen Classroom class met de volgende functionaliteiten:
 * addStudent() sla de student op in een array
 * getStudent() studenten kunnen ophalen
 * getAllStudents(). Deze functies geeft alle toegevoegde studenten terug
 * Mocht je meer methods weten: voeg deze zeker toe
 * maak een aantal classrooms aan
 */

import Classroom from 'entities/Classroom'

const cs = new Classroom();
cs.addStudent('stud1', stud1);
cs.addStudent('stud2', stud2);
cs.addStudent('stud3', stud3);

console.log(cs.getStudent('stud2'));
console.log(cs.getAllStudents());

const cs2 = new Classroom();
cs.addStudent('stud4', stud4);
cs.addStudent('stud5', stud5);
cs.addStudent('stud6', stud6);

/**
 * Opdracht 6: Custom class
 *
 * Maak een eigen School class met de volgende functionaliteiten:
 * addClassRoom()
 */

import School from 'entities/School';

const school = new School();
school.addClassroom('cs1', cs);
school.addClassroom('cs2', cs2);

console.log(school.showClassrooms());


console.log("END LES6 -------------------------------------------------------");