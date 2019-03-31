const db = require("../database/dbConfig");

module.exports = {
	getDishes,
	addDish,
	getDish
};

function getDishes() {
	return db("dishes");
}

async function addDish(dish) {
	const [id] = await db("dishes").insert(dish);

	return await db("dishes")
		.where({ id })
		.first();
}

function getDish(id) {
	return db("dishes")
		.where({ id })
		.first();
}
