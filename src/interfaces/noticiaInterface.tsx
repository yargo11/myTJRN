import { UsuarioInterface } from "./usuarioInterface";

export interface NoticiaInterface {
    id: number;
    titulo: string;
    corpo: string;
    publicacao: Date;
    autor: UsuarioInterface;
    quantidadeDeAcessos: number;
    ativo: boolean;
    destaque: boolean;
    ordem: number;
    caminhoImagemDoTitulo: string;
}