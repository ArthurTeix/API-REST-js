import Aluno from "../models/Aluno";

class AlunoController {
  async index(req, res) {
    try {
      const alunos = await Aluno.findAll();
      return res.json(alunos);
    } catch {
      return res.json(null);
    }
  }
}

export default new AlunoController();
