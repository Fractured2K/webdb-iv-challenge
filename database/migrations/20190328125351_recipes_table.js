exports.up = function(knex) {
	return knex.schema.createTable("recipes", tbl => {
		tbl.increments();

		tbl.string("recipe_name", 255)
			.notNullable()
			.unique();

		tbl.text("instructions", 999).notNullable();

		tbl.integer("dish_id")
			.unsigned()
			.references("id")
			.inTable("dishes")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("recipes");
};
