const yaml = require('js-yaml');

const parser = (data, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(data);
    case 'yaml':
    case 'yml':
      return yaml.load(data);
    default:
      throw new Error(`Format ${format} is not supported!`);
  }
};

module.exports = parser;


export default parser;