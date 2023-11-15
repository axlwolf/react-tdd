import { translate } from "./parser";

describe("parser", () => {
	//1. Write a test to make sure we can translate d to half a dev day.
	// 2. Write a test to make sure we can translate D to one dev day.
	// 3. Write a test to handle more than one mark like dD.
	// 4. Write a test to handle q.
	// 5. Write a test to handle qQ.
	// 6. Write a test to handle ddQ.
	it("translates d to half a dec day", () => {
		expect(translate("d")).toEqual({ Dev: 0.5 });
	});
	it("translates D to one dev day", () => {
		expect(translate("D")).toEqual({ Dev: 1.0 });
	});
	it("translates dD to one and a half dev days", () => {
		expect(translate("dD")).toEqual({ Dev: 1.5 });
	});
	it("translates q to half a qa day", () => {
		expect(translate("q")).toEqual({ QA: 0.5 });
	});
	it("translates qQ to one and a half QA day", () => {
		expect(translate("qQ")).toEqual({ QA: 1.5 });
	});
	it("translates dddQ", () => {
		expect(translate("dddQ")).toEqual({ Dev: 1.5, QA: 1 });
	});
});
