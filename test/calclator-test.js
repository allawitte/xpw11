'use strict';
var assert = require('chai').assert;
const Calculator = require('../src/clculator');
var createCalculator = function(){
    return new Calculator();
}
suite('When calculator gets', function(){
    suite(' empty input', function () {
        test('- returns 0', function (){
            const calculator = createCalculator();
            let sum = calculator.add();
            assert.equal(sum, 0);
        });
    });

    suite(' a single number', function () {
        test('- returns this number', function (){
            const calculator = createCalculator();
            let sum = calculator.add('5');
            assert.equal(sum, 5);
        });
    });
});





/**
 * Created by HP on 2/13/2017.
 */
