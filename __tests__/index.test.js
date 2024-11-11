import { expect, test } from '@jest/globals';
import { readFileSync } from 'node:fs';
import formatter from '../src/formats/index.js';
import diffEngine from '../src/index.js';
import parser from '../src/parser.js';

// Чтение результатов
const stylishResult = readFileSync('__fixtures__/expected.stylish.txt', 'utf-8');
const plainResult = readFileSync('__fixtures__/expected.plain.txt', 'utf-8');
const jsonResult = JSON.stringify(JSON.parse(readFileSync('__fixtures__/expected.json.txt', 'utf-8')), ' ', 2);

// Общее для всех тестов расширение файлов
const extensions = ['json', 'yaml', 'yml'];

// Параметризованный тест для всех форматов
const formats = [
  { format: 'stylish', expected: stylishResult },
  { format: 'plain', expected: plainResult },
  { format: 'json', expected: jsonResult },
];

describe.each(formats)('testing %s nested', ({ format, expected }) => {
  test.each(extensions)('compare %s files', (extension) => {
    const file1 = `__fixtures__/file1.${extension}`;
    const file2 = `__fixtures__/file2.${extension}`;

    expect(diffEngine(file1, file2, format)).toBe(expected);
  });
});

test('should be errors', () => {
  expect(() => parser('randomdata', 'whoops')).toThrow('not supported!');
  expect(() => formatter('randomdata', 'whoops')).toThrow('not supported!');
});
