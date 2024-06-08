import respostaFormulario from "../models/RespostasFormularios.js";
import { usuarios } from "../models/Usuario.js";

class RespostaFormularioController {

    static async listarRespostas(req, res) {
        try {
            const respostas = await respostaFormulario.find({});
            res.status(200).json(respostas);
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição.` });
        }
    };

    static async procurarRespostaUsuario(req, res) {
        try {
            const id = req.params.id;
            const respostaUsuario = await respostaFormulario.find({ idUsuario: id });
            res.status(200).json(respostaUsuario);
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição das reposta pelo usuario.` });
        }
    };
    static async procurarRespostaFormulario(req, res) {
        try {
            const id = req.params.id;
            const respFormulario = await respostaFormulario.find({ idFormulario: id });
            res.status(200).json(respFormulario);
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição das respostas pelo formulario.` });
        }
    };

    static async cadastrarRespostas(req, res) {
        const novoformulario = req.body;

        try {
            const respostasCadastrado = await respostaFormulario.create(novoformulario);
            res.status(201).json({ message: "Respostas salvas com sucesso", respostas: respostasCadastrado });
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha ao cadastrar respostas do formulario.` });
        }
    };


};

export default RespostaFormularioController;