const db = require("../database/dbConfig");

module.exports = {
	getRecipes,
	addRecipe
};

function getRecipes() {
	return db("recipes");
}

async function addRecipe(recipe) {
	const [id] = await db("recipes").insert(recipe);

	return await db("recipes")
		.where({ id })
		.first();
}
