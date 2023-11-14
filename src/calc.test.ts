/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { add } from "./calc";

describe("calculator", () => {
	it("should be able to add two numbers", () => {
		expect(add(1, 2)).toEqual(3);
	});
});

describe("jest.fn for Spying", () => {
	it("create a callable function", () => {
		const mock = jest.fn();

		mock("Axel");

		expect(mock).toHaveBeenCalled();
		expect(mock).toHaveBeenCalledWith("Axel");
		expect(mock).toHaveBeenCalledTimes(1);
	});
});

describe("jest mock implementation", () => {
	it("mock implementation", () => {
		const fakeAdd = jest.fn().mockImplementation((a, b) => 5);

		console.log(fakeAdd);

		expect(fakeAdd(1,1)).toBe(5);
		expect(fakeAdd).toHaveBeenCalledWith(1,1);
	});
});
