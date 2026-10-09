// modelo de criação de dados na base de dados
// um modelo é referente a UM dado, se o nome no db é alunoS, aqui é aluno

import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  // esse método de importar é do próprio Sequelize
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 150],
              msg: "Nome precisa ter entre 3 e 150 caracteres.",
            },
          },
        },
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 150],
              msg: "Sobrenome precisa ter entre 3 e 150 caracteres.",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "E-mail já existe."
          },
          validate: {
            isEmail: {
              msg: "E-mail inválido.",
            },
          },
        },
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Idade precisa ser um número inteiro.",
            },
          },
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Peso precisa ser um número inteiro ou de ponto flutuante.",
            },
          },
        },
        altura: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Altura precisa ser um número inteiro ou de ponto flutuante",
            },
          },
        },
      },
      { sequelize },
    ); // sempre envio dois objetos, um com os dados e outro com o sequelize que vou enviar
    return this;
  }
}
