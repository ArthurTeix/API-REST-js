import multer from "multer";
import { extname, resolve } from "path";

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb(new multer.MulterError("Arquivo precisa ser PNG ou JPG."));
    }

    return (null, true);
  },

  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, "..", "..", "uploads"));
    },

    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${extname(file.originalname)}`); // extrai apenas a extensão do arquivo
    },
  }),
};
