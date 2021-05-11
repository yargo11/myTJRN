import { Pagina } from "./Pagina";

export interface MenuItem {
    id: number;
    nome: string;
    descricao?: string;
    menuPai?: MenuItem;
    linkInterno: boolean;
    paginaLink?: Pagina;
    linkExterno?: string;
    ordem: number;
}