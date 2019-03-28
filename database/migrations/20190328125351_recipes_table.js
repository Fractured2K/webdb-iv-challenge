exports.up = function(knex, Promise) {
	knex.schema.createTable("recipes", tbl => {
		tbl.increments();

		tbl.string("recipe_name", 255)
			.notNullable()
			.unique();

		tbl.integer("dish_id")
			.unsigned()
			.references("id")
			.inTable("dishes")
			.onDelete("CASCADE")
			.onUpdate("CASCADE");
	});
};

exports.down = function(knex, Promise) {};
