import { PaginaInterface } from "./paginaInterface";

export interface MenuInterface {
    id: number;
    nome: string;
    descricao?: string;
    menuPai?: MenuInterface;
    linkInterno: boolean;
    paginaLink?: PaginaInterface;
    linkExterno?: string;
    ordem: number;
}