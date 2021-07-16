import { CategoriaInterface } from "./categoriainterface";

export interface NoticiaInterface {
    id: number;
    titulo: string;
    corpo: string;
    dataPublicacao: string;
    dataCriacao: string;
    categoria: CategoriaInterface;
    imagemTitulo?: string;
}