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

    suite(' 22, 11', function () {
        test('- returns 33', function (){
            const calculator = createCalculator();
            let sum = calculator.add('22, 11');
            assert.equal(sum, 22 + 11);
        });
    });

    suite(' 22 \\n 11', function () {
        test('- returns 33', function (){
            const calculator = createCalculator();
            let sum = calculator.add('22\n11');
            assert.equal(sum, 11 + 22);
        });
    });

    suite('1,2,3,4,5', function () {
        test('- returns 33', function (){
            const calculator = createCalculator();
            let sum = calculator.add('1,2,3,4,5');
            assert.equal(sum, 1+2+3+4+5);
        });
    });

    suite('1\\n2,3', function () {
        test('- returns 6', function (){
            const calculator = createCalculator();
            let sum = calculator.add('1\n2,3');
            assert.equal(sum, 1 + 2 + 3);
        });
    });

    suite('1,\\n', function () {
        test('- returns Wrong delimiter', function (){
            const calculator = createCalculator();
            let sum = calculator.add('1,\n');
            assert.equal(sum, 'Wrong delimiter');
        });
    });

    suite('//;\\n1;2', function () {
        test('- returns 3', function (){
            const calculator = createCalculator();
            let sum = calculator.add('//;\n1;2');
            assert.equal(sum, 1 + 2);
        });
    });

    suite('negative value', function () {
        test('- returns error', function (){
            const calculator = createCalculator();
            let sum = calculator.add('-2');
            assert.equal(sum, 'negatives not allowed');
        });
    });

    suite('//;\\n-1;2', function () {
        test('- returns 3', function (){
            const calculator = createCalculator();
            let sum = calculator.add('//;\n-1;2');
            assert.equal(sum, 'negatives not allowed');
        });
    });
});





/**
 * Created by HP on 2/13/2017.
 */
