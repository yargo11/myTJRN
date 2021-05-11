import { Pagina } from "./Pagina";
import { Usuario } from "./Usuario";

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