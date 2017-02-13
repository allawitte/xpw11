'use strict';
var assert = require('chai').assert;
const Calculator = require('../src/clculator');

suite('When calculator gets', function(){
    suite(' empty input', function () {
        test('- returns 0', function (){
            const calculator = new Calculator();
            let sum = calculator.add();
            assert.equal(sum, 0);
        });
    });

    suite(' 1', function () {
        test('- returns 1', function (){
            const calculator = new Calculator();
            let sum = calculator.add(1);
            assert.equal(sum, 1);
        });
    });
});





/**
 * Created by HP on 2/13/2017.
 */
