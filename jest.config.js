/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  transform: {
    '^.+\\.[jt]sx?$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['@babel/preset-react', { runtime: 'automatic' }],
        ],
      },
    ],
  },
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/tests/__mocks__/svgMock.js',
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': '<rootDir>/tests/__mocks__/styleMock.js',
    '^@site/(.*)$': '<rootDir>/$1',
    '^@theme/Heading$': '<rootDir>/tests/__mocks__/themeHeading.js',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
};
