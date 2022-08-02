export class SomeClass {
    constructor(value) {
        this.value = value;
    }

    getValue() {
        return this.value;
    }
}

const NOT_TO_BE_EXPORTED = 'This value will not be exported';
