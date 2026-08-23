// O Eslint e o Editorconfig servem para padronizar o código e evitar erros de sintaxe.
// Eles padronizam identação, aspas, ponto e vírgula, entre outros aspectos do código.

import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.node } },
]);
