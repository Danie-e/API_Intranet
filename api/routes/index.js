import express from "express";
import usuarios from "./usuariosRoutes.js";
import publicacao from "./publicacaoRoutes.js"
import formulario from "./formularioRoutes.js";
import respostaFormulario from "./respostasFormularioRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("<h1>Api criada para realização do Trabalho Interdisciplinar: Desenvolvimento de Aplicação Interativa </h1>"));
    app.use(express.json(), usuarios, publicacao, formulario, respostaFormulario);
};

export default routes;
