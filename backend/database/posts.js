
const knex = require('knex') ({
  client: 'sqlite3',
  connection: {
    filename: './posts.db'
  },
  useNullAsDefault: true
})

knex.schema
  .hasTable("posts")
  .then((exists) => {
    // create the posts table if it doesnt exist already
    if (!exists) {
      console.log("Creating the posts table")
      return (
        knex.schema.createTable('posts', (table) => {
          table.string('id').primary;
          table.string('title');
          table.string('timedate');
          table.string('subject');
          table.string('content');
        })
        .then(() => {
          console.log('Posts table created')
        })
        .catch((error) => {
          console.error(`Posts table couldn\'t be created: ${error}`)
        })
      )
    }
  })
  .then(() => {
    console.log('Posts Table setup done')
  })
  .catch((error) => {
    console.error(`Posts table couldn\'t be set up : ${error}`)
  })

module.exports = knex