import mongoose from "mongoose";
import { usuariosSchema } from "./Usuario.js";
import { json } from "express";

const respostaFormularioSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    idFormulario: { type: String, required: true },
    idUsuario: { type: String, required: true },
    data: { type: Date },
    conteudo: { type: JSON, require: true },
}, { versionKey: false });

const respostaFormulario = mongoose.model("respostaFormulario", respostaFormularioSchema);

export default respostaFormulario;
