// modelo de criação de dados na base de dados

import Sequelize, { Model } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
      },
      { sequelize },
    );
    return this;
  }
}
