import { dictionary } from "./constants";

const parse = (c: string) => dictionary[c];

export const translate = (input: string) => {
	const items = input.split("");

	return items.reduce((acc, item) => {
		const { status, effort } = parse(item);
		acc[status] = (acc[status] || 0) + effort;
		return acc;
	}, {});
};

// export const translate = () => ({ Dev: 0.5 });

// export const translate = (c: string) =>
// 	c === "d" ? { Dev: 0.5 } : { Dev: 1.0 };

// export const translate = (input: string) => {
// 	let sum: number = 0;

// 	input.split("").forEach((c: string) => {
// 		sum += c === "d" ? 0.5 : 1;
// 	});

// 	return { Dev: sum };
// };

// export const translate = (input: string) => {
// 	const state: { [key: string]: number } = {
// 		Dev: 0,
// 		QA: 0,
// 	};

// 	input.split("").forEach((c: string) => {
// 		const { status, effort } = parse(c);
// 		state[status] = state[state] + effort;
// 	});

// 	return state;
// };
