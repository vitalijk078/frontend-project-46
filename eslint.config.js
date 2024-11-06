export default [
  {
    files: ['**/*.js'],
    rules: {
      indent: ['error', 2],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      'no-multiple-empty-lines': ['error', { max: 1 }],
    },
  },
];
//линтер 