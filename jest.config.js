module.exports = {
  preset: 'jest-expo',

  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['./jest/setup.js'],

  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!src/**/*.spec.tsx',
    '!src/routes/**/*.tsx',
  ],
  coverageReporters: ['lcov'],
};
