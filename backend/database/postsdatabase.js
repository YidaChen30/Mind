
const knex = require('knex') ({
  client: 'sqlite3',
  connection: {
    filename: './database/posts.db'
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
          table.increments('id').primary;
          table.string('title');
          table.string('author')
          table.string('subject');
          table.text('content');
          table.string('time added');
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

knex.schema
  .hasTable('comments')
  .then((exists) => {
    if (!exists) {
      console.log('Creating comments table')
      return (
        knex.schema.createTable('comments', (table) => {
          table.integer('id').primary
          table.string('content')
          table.string('author')
          table.string('time added')
        })
        .then(() => console.log('Comments table created'))
        .catch((error) => console.log(error))
      )
    }
  })
  .then(() => console.log('Comments table setup done'))
  .catch((error) => console.log(error))
module.exports = knex