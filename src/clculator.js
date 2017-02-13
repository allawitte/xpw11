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

        return this.parseMultSum(string.split(/[\n,]/));


    }

    parseMultSum(arr) {
        console.log('arr', arr);
        if (this.isNumbersArr(arr)) {
            return this.arrSum(arr);
        }
    }

    isNumbersArr(arr) {
        return arr.every(this.isSingleNumber)
    }

    arrSum(arr) {
        return arr.reduce((sum, item) => {
            return sum + parseInt(item)
        }, 0);
    }

    isSingleNumber(string) {
        if (string.match(/[\n,]/)) {
            return false;
        }
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
