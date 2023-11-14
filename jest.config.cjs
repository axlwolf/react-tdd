/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
	coverageProvider: "v8",
	testEnvironment: "node",
	testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
	transformIgnorePatterns: ["node_modules/(?!variables/.*)"],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.cjs"],
};

module.exports = config;
