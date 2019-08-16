// CODE here for your Lambda Classes
// Person Code

class Person {
    constructor(info) {
        this.name = info.name;
        this.age = info.name;
        this.location = info.location;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}.`
    }
}

// Instructor Code

class Instructor extends Person {
    constructor(info) {
        super(info);
        this.specialty = info.specialty;
        this.favLanguage = info.favLanguage;
        this.catchPhrase = info.catchPhrase;
    }

    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }

    grade(Student, subject) {
        return `${Student.name} receives a perfect score on ${subject}.`
    }
}

// Student Code

class Student extends Person {
    constructor(info) {
        super(info);
        this.previousBackground = info.previousBackground;
        this.className = info.className;
        this.favSubjects = info.favSubjects;
    }

    listsSubjects() {
        return this.favSubjects;
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

// Project Manager Code

class PM extends Instructor {
    constructor(info) {
        super(info)
        this.gradClassName = info.gradClassName;
        this.favInstructor = info.favInstructor;
    }

    standUp(slack) {
        return `${this.name} announces to ${slack}, @channel standby times!`
    }

    debugsCode(Student, subject) {
        return `${this.name} debugs ${Student.name}'s code on ${subject}.`
    }
}

// Object Creation

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const caiden = new Student({
    name: 'Caiden',
    location: 'Wichita',
    age: 21,
    previousBackground: 'Call Centers',
    className: 'WEBPT9',
    favSubjects: ['HTML', 'CSS', 'JavaScript'],
  });

const nice = new PM({
    name: 'Nediac',
    location: 'Wichita',
    age: 12,
    gradClassName: 'WEBPT7',
    favInstructor: 'Pace',
  });

// Executing Methods

console.log(fred.speak());
console.log(fred.demo("HTML"));
console.log(fred.grade(caiden, 'HTML'));

console.log(caiden.listsSubjects());
console.log(caiden.PRAssignment('HTML'));
console.log(caiden.sprintChallenge('HTML'));

console.log(nice.standUp('WEBPT9'));
console.log(nice.debugsCode(caiden, 'HTML'));