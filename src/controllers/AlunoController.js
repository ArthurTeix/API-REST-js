import Aluno from "../models/Aluno";

class AlunoController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Miguel",
      sobrenome: "Lucas",
      email: "miguel@gmail.com",
      idade: 25,
      peso: 45.0,
      altura: 2.1,
    });
    res.json(novoAluno);
  }
}

export default new AlunoController();
