import Aluno from "../models/Aluno";

class AlunoController {
  async store(req, res) {
    try {
      const aluno = Aluno.create(req.body)

      return res.json(aluno)
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.message((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["ID não enviado."],
        });
      }

      const aluno = await Aluno.findByPk(id, { attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"] });

      if (!aluno) {
        return res.status(400).json({
          errors: ["Aluno não existente."],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.message((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const alunos = await Aluno.findAll({ attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"] });
      return res.json(alunos);
    } catch {
      return res.json(null);
    }
  }

  async update(req, res) {
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

      const alunoPut = aluno.update(req.body, { attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"] });

      return res.json(alunoPut);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.message((err) => err.message),
      });
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
      return res.status(400).json({
        errors: e.errors.message((err) => err.message),
      });
    }
  }
}

export default new AlunoController();
