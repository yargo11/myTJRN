import { ContentType } from "..";
import CardList from "../../../CardList";
import LinkCard from "./LinkCard";

interface LinkCardListProps {
    listadeconteudo: Array<ContentType>;
}

export default function LinkCardList ({ listadeconteudo }:LinkCardListProps) {
    return (
        <CardList columns={[1,2,3]}>
            {listadeconteudo ? listadeconteudo.map(conteudo =>
                <LinkCard key={conteudo.link} description={conteudo.descricao} label={conteudo.titulo} link={conteudo.link}/>
            ) : <></>}
        </CardList>
    );
}