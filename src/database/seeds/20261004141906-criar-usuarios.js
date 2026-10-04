const bcryptjs = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    return await queryInterface.bulkInsert(
      "users", // nome da tabela onde estou inserindo os dados
      [
        {
          nome: "Guilherme Santana",
          email: "guilherme@gmail.com",
          password_hash: await bcryptjs.hash("123456", 8), // senha criptografada de tamanho 8
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "Jullio Gabriel",
          email: "jullio@gmail.com",
          password_hash: await bcryptjs.hash("654321", 8), // senha criptografada de tamanho 8
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: "João Paulo",
          email: "gjpvlog@gmail.com",
          password_hash: await bcryptjs.hash("123654", 8), // senha criptografada de tamanho 8
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {},
};
