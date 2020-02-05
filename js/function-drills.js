"use strict";

(function() {

    function isOdd(num) {
        return num % 2 === 1;
    }
    function isEven(num) {
        return num % 2 === 0;
    }
    function identity(input) {
        return input;
    }
    function isFive(input) {
        return input === 5;
    }
    function addFive(input) {
        return input + 5;
    }
    function isMultipleOfFive(input) {
        return input % 5 === 0;
    }
    function isThree(input) {
        return input === 3;
    }
    function isMultipleOfThree(input) {
        return input % 3 === 0;
    }
    function isMultipleOfThreeAndFive(input) {
        return isMultipleOfThree(input) && isMultipleOfFive(input);
    }
    function isMultipleOf(target, n) {
        return target % n === 0;
    }
    function isTrue(boolean) {
        return true === boolean;
    }
    function isFalse(boolean) {
        return false === boolean;
    }
    function isTruthy(input) {
        return true == Boolean(input);
    }
    function isFalsy(input) {
        return false == !!input;
    }
    function isVowel(letter) {
        // return ['a','e','i','o','u'].indexOf(letter.toLowerCase()) !== -1;
        return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o'        || letter === 'u';
    }
    function isConsonant(letter) {
        return !isVowel(letter);
    }
    function isCapital(letter) {
        return letter === letter.toUpperCase();
    }
    function isLowerCase(letter) {
        return letter === letter.toLowerCase();
    }
    function hasLowerCase(str) {
        return str.toUpperCase() != string;
    }
    function isSpace(letter) {
        return letter === ' ';
    }
    function isZero(number) {
        return number === 0;
    }
    function notZero(input) {
        return input !== 0;
    }
    function lowerCase(str) {
        return str.toLowerCase();
    }
    function double(n) {
        return n * 2;
    }
    function triple(n) {
        return n * 3;
    }
    function quadruple(n) {
        return n * 4;
    }
    function half(n) {
        return n / 2;
    }
    function subtract(a, b) {
        return a - b;
    }
    function multiply(a, b) {
        return a * b;
    }
    function divide(a, b) {
        return a / b;
    }
    function remainder(a, b) {
        return a % b;
    }
    function modulo(a, b) {
        return remainder(a, b);
    }
    function cube(n) {
        return Math.pow(n, 3);
    }
    function squareRoot(n) {
        return Math.sqrt(n);
    }
    function cubeRoot(n) {
        return Math.cbrt(n);
    }
    function invertSign(number) {
        return (typeof number === 'number' ? -1 * number : false);
    }
    function degreesToRadians(number) {
        return number * Math.PI / 180;
    }
    function radiansToDegrees(number) {
        return number * 180 / Math.PI;
    }
    function isBlank(input) {
        return input.trim() === "";
    }
    function trim(str) {
        return str.trim();
    }
    function areEqual(input1, input2) {
        return input1 == input2;
    }
    function areIdentical(input1, input2) {
        return input1 === input2;
    }
    function not(input) {
        return !input;
    }
    function notNot(input) {
        return !not(input);
    }
    function and(predicate1, predicate2) {
        return predicate1 && predicate2;
    }
    function or(predicate1, predicate2) {
        return predicate1 || predicate2;
    }
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    function absoluteValue(number) {
        return Math.abs(number);
    }
    function rollDice(sides) {
        return Math.floor(Math.random() * sides) + 1);
    }


})();