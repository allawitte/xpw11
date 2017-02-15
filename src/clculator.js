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
        if (this.wrongInputDelimiter(string)) {
            return 'Wrong delimiter'
        }

        return this.parseMultSum(this._delimiter(string));


    }

    _delimiter(string) {
        let parseObj = this.isDelimiterSeparateLIne(string);
        if (parseObj) {
            return parseObj.data.split(parseObj.delimiter);

        }
        return string.split(/[\n,]/)
    }


    isDelimiterSeparateLIne(string) {
        let match = string.match(/^\/\//);
        if (match) {
                var delimiter = string[2];
                var data = string.slice(4);
                return {
                    'delimiter': delimiter,
                    'data': data
                }
            }
        return false;
    }

    wrongInputDelimiter(string) {
        if ((string.indexOf('\n') - string.indexOf(',')) == 1) {
            return true;
        }

    }

    parseMultSum(arr) {

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
