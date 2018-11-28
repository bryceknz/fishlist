exports.up = knex =>
  knex.schema.createTable('threat_levels', t => {
    t.increments('id').primary()
    t.string('threat')
    t.string('description')
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('threat_levels')
