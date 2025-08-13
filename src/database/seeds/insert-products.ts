import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("products").del();

    // Inserts seed entries
    await knex("products").insert([
        { name: "Spaghetti à Bolonhesa", price: 35 },
        { name: "Lasanha de Frango", price: 38 },
        { name: "Pizza Margherita", price: 45 },
        { name: "Risoto de Cogumelos", price: 42.5 },
        { name: "Filé Mignon com Fritas", price: 65.6 },
        { name: "Frango Grelhado com Legumes", price: 40 },
        { name: "Salmão ao Molho de Maracujá", price: 72 },
        { name: "Camarão à Provençal", price: 85.5 },
        { name: "Hambúrguer Artesanal", price: 32 },
        { name: "Tábua de Frios", price: 58 },
    ]);
}
