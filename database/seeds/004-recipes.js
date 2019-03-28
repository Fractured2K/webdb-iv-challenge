exports.seed = function(knex) {
	return knex("dishes").insert([
		{ recipe_name: "Easy homemade pizza", dish_id: 1 },
		{ recipe_name: "The best fettuccine alfredo", dish_id: 2 },
		{ recipe_name: "Make baked ziti with leftovers", dish_id: 3 }
	]);
};
