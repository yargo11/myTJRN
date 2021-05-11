import { Pagina } from "./Pagina";
import { Pasta } from "./pasta";
import { TipoDeDocumento } from "./TipoDeDocumento";
import { Usuario } from "./Usuario";

export interface Documento {
    id: number;
    nome: string;
    documento: File;
    publicacao: Date;
    ativo: boolean;
    descricao?: string;
    tipo: TipoDeDocumento;
    autor: Usuario;
    pagina?: Pagina;
    ordem: number;
    extensao: string;
    tamanho: number;
    pasta?: Pasta;
    raizDaPagina: boolean;
}