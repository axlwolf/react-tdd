/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { add } from "./calc";

describe("calculator", () => {
	test("should be able to add two numbers", () => {
		expect(add(1, 2)).toEqual(3);
	});
});
