import { Pagina } from "./pagina";
import { Usuario } from "./usuario";

export interface Pasta {
    id: number;
    nome: string;
    ativo: boolean;
    descricao?: string;
    pagina?: Pagina; //Alterar para permitir null no back
    pastaPai?: Pasta;
    autor: Usuario;
    ordem: number;
}