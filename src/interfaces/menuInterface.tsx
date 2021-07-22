export interface MenuInterface {
    id: number;
    nome: string;
    descricao?: string;
    link: string;
    ordem: number;
    menuFilhos?: MenuInterface[];
}