'use strict';
class Calculator {
    constructor() {
        this._default = 0;
    }

    add(string) {
        if (this.isEmpty(string)) {
            return this._default;
        }
        if (this.isOne(string)) {
            return 1;
        }
        if (!isNaN(parseInt(string))) {
            return parseInt(string);
        }

    }

    isEmpty(string) {
        if (!string) {
            return true;
        }
        return false;

    }

    isOne(string) {
        if (string == 1) {
            return true
        }
        return false;
        
    }
}

module.exports = Calculator;
/**
 * Created by HP on 2/13/2017.
 */
