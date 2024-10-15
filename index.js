import path from 'path';
import path from 'path';
import fs from 'fs';
import _ from 'lodash';
import parser from './srs/parser.js'; 


const getFormat = (filepath) => {
  return path.extname(filepath).slice(1); 
};

const readFile = (filepath) => {
  const pathF = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(pathF, 'utf-8');
  const format = getFormat(filepath); 
  return parser(data, format);
};

const gendiff = (filepath1, filepath2) => {
  const data1 = readFile(filepath1);
  const data2 = readFile(filepath2);
  const keys = (_.union(_.keys(data1), _.keys(data2))).sort();
  const diffobj = keys.map((key) => {
    if (_.has(data1, key) && !_.has(data2, key)) {
      return `  - ${key}: ${data1[key]} `;
    }
    if (_.has(data2, key) && !_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (data1[key] != data2[key]) {
      return `  - ${key}: ${data1[key]} \n  + ${key}: ${data2[key]}`;
    }
    return `    ${key}: ${data1[key]} `;
  });

  return `{\n${diffobj.join('\n')}\n}`;
};

export default gendiff;