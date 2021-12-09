import { Link } from "@chakra-ui/react"
import { ContentType } from "..";

interface LinkListProps {
    listadeconteudo: Array<ContentType>;
}

export default function LinkList ({ listadeconteudo }:LinkListProps) {
    return (
        <>
            {listadeconteudo ? 
                listadeconteudo.map(conteudo =>
                <Link
                    key={conteudo.link}
                    fontSize='112.5%'
                    fontWeight='semibold'
                    lineHeight='138.88%'
                    color='#336699'
                    display='block'
                    href={conteudo.link}
                    mb='33px'
                    textDecor='underline'
                    _hover={{textDecor:'underline'}}>{conteudo.titulo}</Link>
            ) : <></>}
        </>
    );
}