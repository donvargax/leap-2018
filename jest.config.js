module.exports = {
  transform: {
    ".(ts|tsx)": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  testRegex: "\\.(test|spec)\\.(ts|tsx)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "json",
  ],
  testEnvironment: "node",
}
