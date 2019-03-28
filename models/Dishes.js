const db = require("../database/dbConfig");

module.exports = {
	getDishes
};

function getDishes() {
	return db("dishes");
}
