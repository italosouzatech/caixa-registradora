import test from 'node:test';
import assert from 'node:assert';
import { calculateDiscount, calculateTotalWithDiscount } from './cash.js';

test('Calc of discount', async (t) => {
    await t.test('must apply 10% of discount for purchases of $100 or more', () => {
        const discount = calculateDiscount(100);
        assert.strictEqual(discount, 10);
    });

    await t.test('should not apply discount for purchases below of $100', () => {
        const discount = calculateDiscount(99.99);
        assert.strictEqual(discount, 0);
    });
});

test('Total with discount', async (t) => {
    await t.test('must substract the discount of total acumulate', () => {
        const result = calculateTotalWithDiscount(150, 15);
        assert.strictEqual(result, 135);
    });
});