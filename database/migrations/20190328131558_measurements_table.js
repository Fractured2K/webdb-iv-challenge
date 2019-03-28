exports.up = function(knex) {
	return knex.schema.createTable("measurements", tbl => {
		table.increments();

		tbl.string("measurement_name", 255);
	});
};

exports.down = function(knex) {
	return knex.schema.dropTableIfExists("measurements");
};
