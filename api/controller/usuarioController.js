import { usuarios } from "../models/Usuario.js";

class UsuarioController {

    static async listarUsuarios(req, res) {
        try {
            const usuario = await usuarios.find({});
            res.status(200).json(usuario);
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição.` });
        }
    };

    static async procurarUsuario(req, res) {
        try {
            const id = req.params.id;
            const usuario = await usuarios.findById(id);
            res.status(200).json(usuario);
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição do usuario.` });
        }
    };

    static async validarUsuario(req, res) {
        try {
            const nome = req.params.usuario;
            const senha = req.params.senha;
            const usuario = await usuarios.findOne({ nome: nome, senha: senha });
            res.status(200).json(usuario);
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição do usuario.` });
        }
    };

    static async cadastrarUsuario(req, res) {
        try {
            const usuario ={...req.body, dataAdmissional:Date()}
            const novoUsuario = await usuarios.create(usuario);
            res.status(201).json({ message: "Usuário cadastrado com sucesso!", usuarios: novoUsuario });
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha ao cadastrar usuario.` });
        }
    };

    static async atualizarUsuario(req, res) {
        try {
            const id = req.params.id;
            await usuarios.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Usuário foi atualizado." });
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição do usuario.` });
        }
    };

    static async excluirUsuario(req, res) {
        try {
            const id = req.params.id;
            await usuarios.findByIdAndDelete(id, req.body);
            res.status(200).json({ message: "Usuário foi excluido com sucesso." });
        }
        catch (erro) {
            res.status(500)
                .json({ message: `${erro.message} - falha na requisição do usuário.` });
        }
    };

};

export default UsuarioController;