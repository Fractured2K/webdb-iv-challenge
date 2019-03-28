exports.seed = function(knex) {
	return knex("dishes").insert([
		{ measurement_name: "tsp" },
		{ measurement_name: "tbsp" },
		{ measurement_name: "cups" },
		{ measurement_name: "lbs" },
		{ measurement_name: "qtz" },
		{ measurement_name: "oz" },
		{ measurement_name: "ml" },
		{ measurement_name: "l" },
		{ measurement_name: "g" },
		{ measurement_name: "kg" }
	]);
};
