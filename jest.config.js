export default {
  testEnvironment: 'node',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  extensionsToTreatAsEsm: ['.jsx'],
  moduleFileExtensions: ['js', 'jsx'],
  transformIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {},
};
