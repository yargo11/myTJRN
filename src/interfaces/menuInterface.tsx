export interface MenuInterface {
    nome: string;
    descricao?: string;
    link: string;
    ordem: number;
    menuFilhos?: MenuInterface[];
}