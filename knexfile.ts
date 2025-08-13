import type { Knex } from "knex";

const config: Knex.Config = {
    client: "sqlite3",
    connection: { filename: "./src/database/database.db" },
    useNullAsDefault: true,
    pool: {
        afterCreate: (conn: any, done: any) => {
            conn.run("PRAGMA foreign_keys = ON", done);
        },
    },
    migrations: {
        extension: "ts",
        directory: "./src/database/migrations",
    },
    seeds: {
        extension: "ts",
        directory: "./src/database/seeds",
    },
};

export default config;
