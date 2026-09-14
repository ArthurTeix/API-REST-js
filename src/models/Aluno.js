// modelo de criação de dados na base de dados
// um modelo é referente a UM dado, se o nome no db é alunoS, aqui é aluno

import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model { // esse método de importar é do próprio Sequelize
  static init(sequelize) {
    super.init({
      nome: Sequelize.STRING,
      sobrenome: Sequelize.STRING,
      email: Sequelize.STRING,
      idade: Sequelize.INTEGER,
      peso: Sequelize.FLOAT,
      altura: Sequelize.FLOAT
    }, { sequelize }) // sempre envio dois objetos, um com os dados e outro com o sequelize que recebi
    return this
  }
}
