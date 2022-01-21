import { Box, Button, Link, Wrap, WrapItem } from "@chakra-ui/react";
import ContainerBox from "../../ContainerBox";
import AreaTitle from "../AreaTitle";
import NewsList from "../../NewsList";
import { NewsCardProps } from "../../NewsList/NewsCard";

interface NewsProps {
    newsList: Array<NewsCardProps>;
    categoryList: Array<CategoryProps>
}

export interface CategoryProps {
    id: number,
    nome: string
}

export default function News ({ newsList, categoryList }: NewsProps) {

    return (
        <Box w='full' py='63px' bgColor='#F7FCEC'>
            <ContainerBox>
                <AreaTitle title='Notícias' subtitle='Saiba o que acontece no Poder Judiciário'/>
                <Box w='full' mt='40px'>
                    <NewsList newsList={newsList}/>
                </Box>

                <Wrap w='full' justify='end' mt='20px' wrap='wrap' spacing='32px' maxW='95%'>
                    {categoryList? categoryList.map(
                        category =>
                            <WrapItem
                                as={Link}
                                key={category.id}
                                fontWeight='normal'
                                lineHeight='121%'
                                textDecor='underline'
                                _hover={{textDecor:'underline'}}
                                alignSelf='center'
                                href='#'>
                                    {category.nome}
                            </WrapItem>
                    ) : <></>}
                    <WrapItem>
                        <Button
                            as={Link}
                            h='38px'
                            w='167px'
                            href='/noticias'
                            fontWeight='semibold'
                            lineHeight='137.5%'
                            color='white'
                            bgColor='tj_dark_blue'
                            transition='filter 0.2s'
                            _hover={{ filter: 'brightness(120%)' }}
                            _active={{ filter: 'brightness(75%)' }}>Todas as notícias</Button>
                    </WrapItem>
                </Wrap>
            </ContainerBox>
        </Box>
    );
}