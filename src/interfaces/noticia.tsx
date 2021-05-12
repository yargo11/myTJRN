import { Usuario } from "./usuario";

export interface Noticia {
    id: number;
    titulo: string;
    corpo: string;
    publicacao: Date;
    autor: Usuario;
    quantidadeDeAcessos: number;
    ativo: boolean;
    destaque: boolean;
    ordem: number;
    imagemDoTitulo: File;
    tamanhoDaImagem: number;
    extensao: string;
}