// import jsonpath from "jsonpath";

// expect.extend({
// 	toMatchJsonPath(received, argument) {
// 		const result = jsonpath.query(received, argument);
// 		if (result.length > 0) {
// 			return {
// 				pass: true,
// 				message: () => "matched",
// 			};
// 		} else {
// 			return {
// 				pass: false,
// 				message: () =>
// 					`expected ${JSON.stringify(received)} to match jsonpath ${argument}`,
// 			};
// 		}
// 	},
// });
