import Sequelize, { Model } from "sequelize";

export default class Foto extends Model {
  // esse método de importar é do próprio Sequelize
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              msg: "Este campo não pode ficar vazio.",
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              msg: "Este campo não pode ficar vazio.",
            },
          },
        },
      },
      {
        sequelize,
        tableName: "fotos",
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: "aluno_id" });
  }
}
