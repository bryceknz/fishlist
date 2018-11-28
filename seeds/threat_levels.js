exports.seed = knex =>
  knex('threat_levels').del()
    .then(() =>
      knex('threat_levels').insert([
        {threat: 'Best choice', description: 'Great to eat'},
        {threat: 'Good choice', description: 'Good to eat'},
        {threat: 'OK choice', description: 'OK to eat'},
        {threat: 'OK but some concerns choice', description: 'Eat less of'},
        {threat: 'Worst choice', description: 'Don\'t eat'}
      ]))
