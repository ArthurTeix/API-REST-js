import User from "../models/User";

class UserController {
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json(novoUser);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      // Busca todos os usuários e me retorna em json
      const users = await User.findAll({ attributes: ["id", "nome", "email"] });
      return res.json(users);
    } catch {
      return res.json(null);
    }
  }

  async show(req, res) {
    try {
      // id do user que quero acessar
      const user = await User.findByPk(req.params.id, { attributes: ["id", "nome", "email"] });
      return res.json(user);
    } catch {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["ID não enviado."],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe."],
        });
      }

      const novosDados = await user.update(req.body);

      return res.json(novosDados);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ["ID não enviado."],
        });
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ["Usuário não existe."],
        });
      }

      await user.destroy();

      return res.json("Deletado com sucesso.");
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
