exports.up = knex =>
  knex.schema.createTable('fish_details', t => {
    t.increments('id').primary()
    t.integer('fish_id')
    t.foreign('fish_id').references('fish.id')
    t.string('description')
    t.string('image_URL')
    t.string('video_URL')
    t.timestamps(true, true)
  })

exports.down = knex => knex.schema.dropTable('fish_details')
