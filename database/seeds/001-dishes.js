exports.seed = function(knex) {
	return knex("dishes").insert([
		{ dish_name: "Homemade Pizza" },
		{ dish_name: "Fettuccine Alfredo" },
		{ dish_name: "Baked Ziti" }
	]);
};
