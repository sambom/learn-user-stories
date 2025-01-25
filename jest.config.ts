/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Use ts-jest for TypeScript files
  },
  moduleNameMapper: {
    // Optional: Map module aliases if you're using them
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
