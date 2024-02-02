const assert = require('assert');
const { it, describe } = require("mocha");
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
    it('should return 4', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    it('should return 6', function() {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
    it('should return 5', function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
    it('should return 0', function() {
        assert.strictEqual(calculateNumber(-1, 1), 0);
    });
    it('should return 0', function() {
        assert.strictEqual(calculateNumber(-1.4, 1.5), 1);
    });
});
