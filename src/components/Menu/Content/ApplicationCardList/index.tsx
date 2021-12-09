import { ContentType } from "..";
import CardList from "../../../CardList";
import ApplicationCard from "./ApplicationCard";

interface LinkCardListProps {
    listadeconteudo: Array<ContentType>;
}

export default function ApplicationCardList ({ listadeconteudo }:LinkCardListProps) {
    return (
        <CardList columns={[1,1,1,2]}>
            {listadeconteudo ? listadeconteudo.map((conteudo, index) =>
                <ApplicationCard key={conteudo.link} index={index} sigla={conteudo.sigla} description={conteudo.descricao} label={conteudo.titulo} link={conteudo.link}/>
            ) : <></>}
        </CardList>
    );
}