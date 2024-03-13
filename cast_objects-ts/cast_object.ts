interface Person {
    name: string,
    surname: string,
    age: number
}

interface Animal {
    name: string,
    legs: number,
    flies: boolean,
    swims: boolean
}

const larry: Person = {
    name: 'Larry',
    surname: 'Test2',
    age: 30
}

const firulais: Animal = {
    name: 'Firulais',
    legs: 4,
    flies: false,
    swims: false
}

const show = (object: Person | Animal): any => {
    if(object.hasOwnProperty('age')) {
        console.log(object.age)
    } else {
    }
}

const showAge = (object: Person): any => {
    const ageObj = {
        age: object.age
    }
    console.log(ageObj);
}

const showLegs = (object: Animal): any => {
    const legsObj = {
        legs: object.legs
    }
    console.log(legsObj);
}

console.log(checkInterface(larry))

// show(firulais as unknown as Person)      // casting object
// show(larry)