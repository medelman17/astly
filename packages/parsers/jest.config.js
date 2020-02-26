module.exports = {
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    '@testing-library/jest-dom/extend-expect',
  ],
  testMatch: ['**/?(*.)spec.ts?(x)'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: false,
    },
  },
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
};
