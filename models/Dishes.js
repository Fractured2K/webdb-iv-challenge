const db = require("../database/dbConfig");

module.exports = {
	getDishes,
	addDish
};

function getDishes() {
	return db("dishes");
}

function addDish(dish) {
	return db("dishes").insert(dish);
}
