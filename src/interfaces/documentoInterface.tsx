import { PaginaInterface } from "./paginaInterface";
import { PastaInterface } from "./pastaInterface";
import { TipoDeDocumentoInterface } from "./tipoDeDocumentoInterface";
import { UsuarioInterface } from "./usuarioInterface";

export interface DocumentoInterface {
    id: number;
    nome: string;
    documento: File;
    publicacao: Date;
    ativo: boolean;
    descricao?: string;
    tipo: TipoDeDocumentoInterface;
    autor: UsuarioInterface;
    pagina?: PaginaInterface;
    ordem: number;
    extensao: string;
    tamanho: number;
    pasta?: PastaInterface;
    raizDaPagina: boolean;
}