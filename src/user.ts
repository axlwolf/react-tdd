import jsonpath from "jsonpath";

export const user = {
	name: "Axel Lanuza",
	address: "Cuautla, Morelos, Mexico",
	projects: [{ name: "Exym" }, { name: "Owner Insite" }],
};

export const result = jsonpath.query(user, "$.projects");

console.log(JSON.stringify(result));
