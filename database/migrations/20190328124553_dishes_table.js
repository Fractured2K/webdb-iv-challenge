exports.up = function(knex) {
	return knex.schema.createTable("dishes", tbl => {
		tbl.increments();

		tbl.string("dish_name", 255)
			.notNullable()
			.unique();
	});
};

exports.down = function(knex) {
	knex.schema.dropTableIfExists("dishes");
};
