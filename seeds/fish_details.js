exports.seed = knex =>
  knex('fish_details').del()
    .then(() =>
      knex('fish_details').insert([
        {
          fish_id: 3,
          description: 'The southern yellowtail amberjack, yellowtail kingfish or great amberjack (Seriola lalandi) is a large fish found in the Southern Ocean. Although previously thought to be found in all oceans and seas, recent genetic analysis restricts S. lalandi proper to the Southern Hemisphere waters.',
          image_URL: 'http://www.fishspecies.nz/wp-content/uploads/2015/12/kingfish-yellowtail-nz-fish-species.jpg'
        },
        {
          fish_id: 8,
          description: 'Nemadactylus macropterus, commonly known as the tarakihi or jackass morwong, is a morwong of the genus Nemadactylus, found off southern Australia, the Atlantic coast of South America, and New Zealand to depths of about 400 m, on all types of bottoms. Its length is between 30 and 60 cm. ',
          image_URL: 'http://www.fishspecies.nz/wp-content/uploads/2015/12/tarakihi-nz-fish-id-973x389.jpg'
        },
        {
          fish_id: 10,
          description: 'Blue cod are caught mainly in winter (from April to September) around southern New Zealand and the Chatham Islands.  They are also found in the Marlborough Sounds, Cook Strait, and off  Wanganui.  Most are caught in cod pots.',
          image_URL: 'http://www.fishspecies.nz/wp-content/uploads/2015/12/blue-cod-parapercis-colias-nz.jpg'
        }
      ]))
