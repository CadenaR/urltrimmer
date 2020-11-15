

exports.up = function(knex) {
    return knex.schema
    .createTable('urls', (table) => {
      table.increments('id');
      table.string('original');
      table.string('hash');
      table.integer('count').defaultTo(0)
      table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTable('urls');
};
