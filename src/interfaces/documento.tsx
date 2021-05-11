import { Pagina } from "./pagina";
import { Pasta } from "./pasta";
import { TipoDeDocumento } from "./tipoDeDocumento";
import { Usuario } from "./usuario";

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