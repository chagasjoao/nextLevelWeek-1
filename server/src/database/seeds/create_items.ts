import Knex from "knex";

export async function seed(knex: Knex) {
  await knex("items").insert([
    { title: "Lâmpadas", images: "lampadas.svg" },
    { title: "Pilhas e Baterias", images: "baterias.svg" },
    { title: "Papéis e Papelão", images: "papeis-papelao.svg" },
    { title: "Resíduos Eletônicos", images: "eletronicos.svg" },
    { title: "Resíduos Orgânicos", images: "organicos.svg" },
    { title: "Óleo de Cozinha", images: "oleo.svg" },
  ]);
}
