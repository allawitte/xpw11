'use strict';
var assert = require('chai').assert;
const Calculator = require('../src/clculator');
suite('When calculator gets empty input', function () {
    test('- returns 0', function (){
        const calculator = new Calculator();
        let sum = calculator.add();
        assert.equal(sum, 0);
    });
});


/**
 * Created by HP on 2/13/2017.
 */
