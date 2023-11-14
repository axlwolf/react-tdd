module.exports = {
	presets: [
		["@babel/preset-env", { targets: { node: "current" } }],
		"@babel/preset-typescript",
	],
	plugins: [
		"@babel/plugin-transform-modules-commonjs",
		function () {
			return {
				visitor: {
					MetaProperty(path) {
						path.replaceWithSourceString("process");
					},
				},
			};
		},
	],
};
/* eslint-disable no-undef */
// module.exports = {
// 	presets: [
// 		[
// 			"@babel/preset-env",
// 			{
// 				targets: { esmodules: true },
// 			},
// 		],
// 		["@babel/preset-react", { runtime: "automatic" }],
// 	],
// 	plugins: [
// 		"@babel/plugin-transform-modules-commonjs",
// 		function () {
// 			return {
// 				visitor: {
// 					MetaProperty(path) {
// 						path.replaceWithSourceString("process");
// 					},
// 				},
// 			};
// 		},
// 	],
// };
