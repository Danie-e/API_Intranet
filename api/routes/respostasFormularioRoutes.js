import express from "express";
import RespostaFormularioController from "../controller/respostaFormularioController.js";

const routes = express.Router();

routes.get("/formulario/respostas", RespostaFormularioController.listarRespostas);
routes.get("/formulario/respostas/usuario/:id", RespostaFormularioController.procurarRespostaUsuario);
routes.get("/formulario/respostas/formulario/:id", RespostaFormularioController.procurarRespostaFormulario);
routes.post("/formulario/respostas/", RespostaFormularioController.cadastrarRespostas);

export default routes;
