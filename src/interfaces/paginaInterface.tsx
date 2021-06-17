import { UsuarioInterface } from "./usuarioInterface";

export interface PaginaInterface {
    id: number;
    titulo: string;
    corpo: string;
    publicacao: Date;
    autor: UsuarioInterface;
    ativo: boolean;
}