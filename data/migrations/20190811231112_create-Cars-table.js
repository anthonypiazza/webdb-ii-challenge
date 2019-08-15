
exports.up = function(knex) {
  return knex.schema.createTable('car-dealers', tbl => {
    tbl.increments();
    tbl.text('vin', 17)
        .unique()
        .notNullable();
    tbl.text('make')
        .notNullable();
    tbl.text('model')
        .notNullable();
    tbl.integer('mileage')
        .notNullable();
    tbl.text('transmissionType')
    tbl.text('titleStatus')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('car-dealers')
};
