import { createServer } from 'miragejs';
import MENUJSON from './menu.json';

export function createApi() {
    createServer({
    
        routes() {
    
        this.get('http://localhost:8080/portaltjrn/api/noticias/listar', () => {
            return [
                {
                    "id": 1,
                    "titulo": "CEJAI encessa ano de 2019 com recorde de adoções internacionais",
                    "corpo": "blá blá blá",
                    "dataPublicacao": new Date("2021-05-01 09:00:00"),
                    "dataCriacao": new Date("2021-05-01 09:00:00"),
                    "qtdAcessos": 1,
                    "ativo": true,
                    "destaque": true,
                }, {
                    "id": 2,
                    "titulo": "Comarca de Touros seleciona estagiário de pós-graduação em Direito",
                    "corpo": "blá blá blá",
                    "dataPublicacao": new Date("2021-05-04 09:00:00"),
                    "dataCriacao": new Date("2021-05-04 09:00:00"),
                    "qtdAcessos": 1,
                    "ativo": true,
                    "destaque": true,
                }, {
                    "id": 3,
                    "titulo": "TJRN divulga edital de seleção temporária com 33 vagas para área de Tecnologia da Informação",
                    "corpo": "blá blá blá",
                    "dataPublicacao": new Date("2021-05-10 09:00:00"),
                    "dataCriacao": new Date("2021-05-10 09:00:00"),
                    "qtdAcessos": 1,
                    "ativo": true,
                    "destaque": true,
                }, {
                    "id": 4,
                    "titulo": "Mérito Legislativo: Des. Vivaldo Pinheiro é homenageado pela ALRN",
                    "corpo": "blá blá blá",
                    "dataPublicacao": new Date("2021-05-14 09:00:00"),
                    "dataCriacao": new Date("2021-05-14 09:00:00"),
                    "qtdAcessos": 1,
                    "ativo": true,
                    "destaque": true,
                }
            ];
        })
    
        this.get('http://localhost:8080/portaltjrn/api/menu/listar', () => {
            return MENUJSON;
        })
        }
    })
}