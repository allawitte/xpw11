'use strict';
class Calculator {
    constructor() {
        this._default = 0;
    }

    add(string) {
        if (this.isEmpty(string)) {
            return this._default;
        }

        if (this.isSingleNumber(string)) {
            return parseInt(string);
        }

    }

    isSingleNumber(string){
        if (!isNaN(parseInt(string))) {
            return true;
        }
        return false;
    }

    isEmpty(string) {
        if (!string) {
            return true;
        }
        return false;

    }

}

module.exports = Calculator;
/**
 * Created by HP on 2/13/2017.
 */
