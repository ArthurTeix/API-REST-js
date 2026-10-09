import dotenv from "dotenv";

dotenv.config();

import "./src/database"; // executando arquivo automaticamente para garantir os dados

import express from "express";
import alunoRoutes from "./src/routes/alunoRoutes";
import fotoRoutes from "./src/routes/fotoRoutes";
import homeRoutes from "./src/routes/homeRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import userRoutes from "./src/routes/userRoutes";

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/alunos/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

export default new App().app; // exportando default o express
