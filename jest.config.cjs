
module.exports = {
  testEnvironment: "jsdom",

  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.cjs"],

  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },

  testMatch: ["**/?(*.)+(test|spec).[jt]s?(x)"],
};
