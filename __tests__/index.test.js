import { readFileSync } from 'node:fs';
import { test, expect } from '@jest/globals';
import gendiff from '../index.js'
const firstTestResult = readFileSync('__fixtures__/expectedFirstTest.txt', 'utf-8')

test('testing first test', () => {
expect(gendiff('./filepath1.json', './filepath2.json')).toBe(firstTestResult)
})