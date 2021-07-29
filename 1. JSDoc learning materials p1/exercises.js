/*
/====================Variables=====================

const userName = 'johndoe'
const userPassword = 'fwvvj3q=yS&W8&&5'
const userID = 10472
const isOnline = true
const userRole = 'Web Developer'
const userRepositories = ['The Unitix Project', 'Calculator Tool']

const userPersonalInformations = {
    fullName: 'John Doe'
    gender: 'male',
    location: 'Wathwaite',
    isMarried: true,
    age: 33,
    friends: ['Jayden Atkinson', 'Jake Snee'],
    familyMembers: new Map([ // Hint: this property have Map type, so use the type expression {Map} to document this property
        ['father', 'Jack Doe'],
        ['mother', 'Jesscia Mullins'],
        ['brother', 'James Doe'],
        ['wife', 'Joshua Williams'],
        ['son', 'Jacob Doe']
    ])
}

/====================Functions=====================
function getAJob(personName, jobName) {
    console.log(`${personName} get a new ${jobName} job`)
}

function talkAboutYourPet(name, age, isAlive = true) {
    console.log(`I had a pet named ${name}, and its ${age} years old`)
}

function multiply(a, b = 2) {
    console.log(a * b);
}

function countFamilyMembers(...members) {
    console.log(`Your family has ${members.length} members`)
}

/==============Constructor Functions===============
function Student(name, grade) {
    this.name = name
    this.grade = grade
    this.friends = []
}

// Instance method
Student.prototype.makeFriend = function (friend) {
    this.friends.push(friend)
}

// Static method
Student.definition = function () {
    console.log('A person who is studying at a college, university, or school')
}


function Pet(species, name) {
    this.species = species
    this.name = name
}

// Instance method
Pet.prototype.eat = function (food) {
    console.log(`${this.name} is eating ${food}`)
}

// Static method
Pet.definition = function () {
    console.log('An animal that is kept in the home as a companion and treated kindly')
}


function Robot(name, inventor) {
    this.name = name
    this.inventor = inventor

    function innerFunction() { // Use this function to learn about namepath
        console.log('this is a function that will not appear in instance objects, use this function to learn about namepath')
    }
}
*/