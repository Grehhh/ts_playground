"use strict";
const larry = {
    name: 'Larry',
    surname: 'Test2',
    age: 30
};
const firulais = {
    name: 'Firulais',
    legs: 4,
    flies: false,
    swims: false
};
const show = (object) => {
    // if(object is Person) {
    //     showAge(object)
    // } else {
    //     showLegs(object)
    // }
};
const checkInterface = (object) => {
    return 'member' in object;
};
const showAge = (object) => {
    const ageObj = {
        age: object.age
    };
    console.log(ageObj);
};
const showLegs = (object) => {
    const legsObj = {
        legs: object.legs
    };
    console.log(legsObj);
};
console.log(checkInterface(larry));
// show(firulais as unknown as Person)      // casting object
// show(larry)
