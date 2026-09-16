// modelo de criação de dados na base de dados

import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "", // caso não seja enviado
          validate: {
            // objeto que usa o 'validator' para fazer verificações
            len: {
              args: [3, 255], // valor mínimo e máximo de um nome
              msg: "Campo nome deve ter entre 3 e 255 caracteres!",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "E-mail já cadastrado!"
          },
          validate: {
            isEmail: {
              msg: "E-mail inválido!",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        password: {
          type: Sequelize.VIRTUAL, // campo que não vai existir no db
          defaultValue: "",
          validate: {
            len: {
              args: [6, 50],
              msg: "Campo senha deve ter entre 6 e 50 caracteres!",
            },
          },
        },
      },
      { sequelize },
    );

    this.addHook("beforeSave", async user => {
      user.password_hash = await bcryptjs.hash(user.password, 8)
    });

    return this;
  }
}
