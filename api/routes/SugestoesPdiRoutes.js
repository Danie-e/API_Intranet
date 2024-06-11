import express from "express";
import sugestoesPDIController from "../controller/sugestoesPdiController.js"; // Importando o PDIController

const routes = express.Router();

// Rotas para PDI
routes.get("/sugestoespdi", sugestoesPDIController.listarsugestoesPDI);
routes.get("/sugestoespdi/:id", sugestoesPDIController.procurarsugestoesPDI); // pelo id do usuário
routes.post("/sugestoespdi", sugestoesPDIController.cadastrarsugestoesPDI);

export default routes;
