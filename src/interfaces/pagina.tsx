import { Usuario } from "./usuario";

export interface Pagina {
    id: number;
    titulo: string;
    corpo: string;
    publicacao: Date;
    autor: Usuario;
    ativo: boolean;
}