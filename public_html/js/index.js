const SOMETHING = 'SOMETHING EXPORTED';

class SomeClass {
    constructor(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}

console.log('I guess I managed to automate rolling-up...');
console.log(SOMETHING);

const someClass = new SomeClass(SOMETHING);
console.log(someClass);
