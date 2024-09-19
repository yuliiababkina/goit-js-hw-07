"use strict";

class StringBuilder {
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value;
    }

    padStart(str) {
        this.#value = this.#value.padStart(this.#value.length + 1, str);
    }

    padEnd(str) {
        this.#value = this.#value.padEnd(this.#value.length + 1, str);
    }

    padBoth(str) {
        this.#value = this.#value
            .padStart(this.#value.length + 1, str)
            .padEnd(this.#value.length + 2, str);
    }
}

const builder = new StringBuilder(".");

console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
