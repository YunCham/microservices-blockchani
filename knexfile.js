// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    // connection: {
    //   host: 'sw2-parcial2.cr6qwyiua5dq.us-east-2.rds.amazonaws.com',
    //   port: 5432,
    //   user: 'postgres',
    //   password: '79052451Aa',
    //   database: 'blockchain_db',
    //   ssl: {
    //     rejectUnauthorized: false
    //   }
    // },
    //   connection: {
    //   host: 'localhost',
    //   port: 5434,
    //   user: 'postgres',
    //   password: '2405',
    //   database: 'blockchain_db',
    //   ssl:false
    //   // ssl: {
    //   //   rejectUnauthorized: false
    //   // }
    // },
    connection: {
      host: 'ep-polished-wind-ac2i62ca-pooler.sa-east-1.aws.neon.tech',
      port: 5432,
      user: 'neondb_owner',
      password: 'npg_6XsBMarzo0cQ',
      database: 'neondb',
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./migrations",
    },
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
