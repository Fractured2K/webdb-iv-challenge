exports.seed = function(knex) {
	return knex("ingredients").insert([
		{ ingredient_name: "Flour" },
		{ ingredient_name: "Tomato Sauce" },
		{ ingredient_name: "Fettuccine pasta" },
		{ ingredient_name: "Mozzarella Cheese" },
		{ ingredient_name: "Parmesan cheese" },
		{ ingredient_name: "Ziti pasta" }
	]);
};
