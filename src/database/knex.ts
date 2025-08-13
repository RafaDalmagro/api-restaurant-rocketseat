import knex, { type Knex } from "knex";
import config from "../../knexfile.js";

export const db = knex(config as Knex.Config);
