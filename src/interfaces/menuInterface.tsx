export interface MenuInterface {
    id: number;
    nome: string;
    descricao?: string;
    menuPai?: MenuInterface;
    linkInterno: boolean;
    paginaLink?: string;
    linkExterno?: string;
    ordem: number;
}