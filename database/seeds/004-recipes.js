exports.seed = function(knex) {
	return knex("recipes").insert([
		{
			recipe_name: "Easy homemade pizza",
			instructions: `In a small bowl, dissolve yeast in warm water. Let stand until creamy, about 10 minutes.
In a large bowl, combine flour, salt and shortening. Stir in the yeast mixture. When the dough has pulled together, turn it out onto a lightly floured surface, and knead until smooth and elastic, about 8 minutes. Lightly oil a large bowl, place the dough in the bowl, and turn to coat with oil. Cover with a damp cloth, and let rise in a warm place until doubled in volume, about 45 minutes.
Heat oil in a small saucepan over medium heat. Saute onion until tender. Stir in tomato paste and water. Season with sugar, salt, black pepper, garlic powder, basil, oregano, marjoram, cumin, chili powder and red pepper flakes. Simmer 15 to 20 minutes.
Recipe makes 2 (12 inch) pizzas. Divide dough in half, and spread onto pizza pans. Cover with sauce, and desired toppings. Bake at 400 degrees for 20 minutes, or until crust is golden brown.`,
			dish_id: 1
		},
		{
			recipe_name: "The best fettuccine alfredo",
			instructions: `Bring a large pot of lightly salted water to a boil. Add fettuccini and cook for 8 to 10 minutes or until al dente; drain.
In a large saucepan, melt butter into cream over low heat. Add salt, pepper and garlic salt. Stir in cheese over medium heat until melted; this will thicken the sauce.
Add pasta to sauce. Use enough of the pasta so that all of the sauce is used and the pasta is thoroughly coated. Serve immediately.`,
			dish_id: 2
		},
		{
			recipe_name: "Make baked ziti with leftovers",
			instructions: `Bring a large pot of lightly salted water to a boil. Add ziti pasta, and cook until al dente, about 8 minutes; drain.
In a large skillet, brown onion and ground beef over medium heat. Add spaghetti sauce, and simmer 15 minutes.
Preheat the oven to 350 degrees F (175 degrees C). Butter a 9x13 inch baking dish. Layer as follows: 1/2 of the ziti, Provolone cheese, sour cream, 1/2 sauce mixture, remaining ziti, mozzarella cheese and remaining sauce mixture. Top with grated Parmesan cheese.
Bake for 30 minutes in the preheated oven, or until cheeses are melted.`,
			dish_id: 3
		}
	]);
};
