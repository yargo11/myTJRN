export interface UsuarioInterface {
    id: number;
    login: string;
    senha?: string;
    email?: string;
    ativo: boolean;
    nome: string;
}