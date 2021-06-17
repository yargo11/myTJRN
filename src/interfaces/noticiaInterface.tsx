export interface NoticiaInterface {
    id: number;
    titulo: string;
    corpo: string;
    dataPublicacao: Date;
    dataCriacao: Date;
    qtdAcessos: number;
    ativo: boolean;
    destaque: boolean;
}