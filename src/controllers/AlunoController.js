import Aluno from "../models/Aluno";

class AlunoController {
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["ID não enviado."],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existente."],
        });
      }

      return res.json(aluno, {
        attributes: ["id", "nome", "idade", "email", "idade", "peso", "altura"],
      });
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.message((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch {
      return res.json(null);
    }
  }

  async store(req, res) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async update(req, res) {
    try {
    } catch (e) {
      console.log(e);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["ID não enviado."],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existente."],
        });
      }

      await aluno.destroy();
      return res.json("Aluno deletedo com sucesso!");
    } catch (e) {
      console.log(e);
      return res.status(400).json({
        errors: e.errors.message((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
