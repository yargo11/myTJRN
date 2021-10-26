import ApplicationCardList from "./ApplicationCardList";
import LinkCardList from "./LinkCardList";
import LinkList from "./LinkList";

export interface AreaType {
    titulo: string;
    tipo: 'links' | 'linkCards' | 'applicationCards';
    listadeconteudo: Array<ContentType>;
}

export interface ContentType {
    sigla: string;
    titulo: string;
    link: string;
    descricao?: string;
}

export default function Content ({ tipo, listadeconteudo }: Omit<AreaType, 'titulo'>) {
    switch(tipo) {
        case 'linkCards':
            return  <LinkCardList listadeconteudo={listadeconteudo}/>
        case 'links':
            return  <LinkList listadeconteudo={listadeconteudo}/>
        case 'applicationCards':
            return  <ApplicationCardList listadeconteudo={listadeconteudo}/>
        default: return <></>;
    }
}