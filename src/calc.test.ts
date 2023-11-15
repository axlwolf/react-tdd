/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { add } from "./calc";

describe("calculator", () => {
	describe("addition", () => {
		it("returns 5 adding 2 and 3", () => {
			const a: number = 2;
			const b: number = 3;

			const result: number = add(a, b);

			expect(result).toEqual(5);
		});

		it("returns 6 when adding 2 and 4", () => {
			const a: number = 2;
			const b: number = 4;
			const add = (a: number, b: number): number => 2 + b;

			const result: number = add(a, b);

			expect(result).toEqual(6);
		});
	});

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

		//console.log(fakeAdd);

		expect(fakeAdd(1, 1)).toBe(5);
		expect(fakeAdd).toHaveBeenCalledWith(1, 1);
	});
});
