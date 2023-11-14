import { convert } from "./rot13";

// • Returns N when given A
// • Returns A when given N
// • Returns NO when given AB (multiple letters)
// • Returns AB!! when given NO!! (keep other symbols as is while converting)

describe("ROT13", () => {
	it("should return N when given an A", () => {
		expect(convert("A")).toEqual("N");
	});

	it("should return A when given an A", () => {
		expect(convert("N")).toEqual("A");
	});

	it("should return NO when given AB", () => {
		expect(convert("AB")).toEqual("NO");
	});

	it("return AB!! when given NO!!", () => {
		expect(convert("NO!!")).toEqual("AB");
	});
});
