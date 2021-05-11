export interface MenuItem {
    id: number;
    nome: string;
    descricao?: string;
    menuPai?: MenuItem;
    linkInterno: boolean;
    paginaLink?: any;
    linkExterno?: string;
    ordem: number;
}