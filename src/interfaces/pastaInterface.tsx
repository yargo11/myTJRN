import { PaginaInterface } from "./paginaInterface";
import { UsuarioInterface } from "./usuarioInterface";

export interface PastaInterface {
    id: number;
    nome: string;
    ativo: boolean;
    descricao?: string;
    pagina?: PaginaInterface; //Alterar para permitir null no back
    pastaPai?: PastaInterface;
    autor: UsuarioInterface;
    ordem: number;
}