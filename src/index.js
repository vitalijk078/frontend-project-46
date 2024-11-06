import { readFileSync } from 'node:fs';
import path from 'path';

import parser from './parser.js';
import getDifference from './getDiff.js';
import formatter from './formats/index.js';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getFormat = (filepath) => path.extname(filepath).slice(1);

const getData = (filepath) => parser(readFileSync(getFullPath(filepath), 'utf8'), getFormat(filepath));

const diffEngine = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = getData(filepath1);
  const data2 = getData(filepath2);

  const diff = getDifference(data1, data2);
  return formatter(diff, formatName);
};

export default diffEngine;
