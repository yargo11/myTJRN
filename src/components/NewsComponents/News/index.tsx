import { useState, useEffect } from 'react';
import { Flex, Text, Heading, Image, Link } from '@chakra-ui/react';
import { NoticiaInterface } from '../../../interfaces/noticiaInterface';
import { NewsCard } from '../NewsCard'
//import { api } from '../../../../src/service/api';
import NEWLIST from '../../../../test/noticia.json';
export function News() {

    const [news, setNews] = useState<NoticiaInterface[]>(NEWLIST);

/*
    useEffect(() => {
        api.get('/noticias/listar').then(response => setNews(response.data)).catch(error => console.log(error));
	}, []);
*/

    return (
        <Flex maxW={1320} w='100%' m='auto' mt='52px'>
            <Flex flexFlow='row wrap'>
                <Flex
                    bg='#f5f5f5'
                    w='100%'
                    maxW={582}
                    h={282}
                    p='30px'
                    flexDir='column'
                    mx='15px'
                    mb='60px'
                    transition='color 0.2s'
                    _hover={{
                        color: 'cyan.900'
                    }}
                >
                    <Heading as='h1' fontSize='2rem' fontWeight='500' mb='15px'>Notícias</Heading>
                    <Text fontWeight='400' display='flex' alignItems='center' >
                        Molestie elementum pulvinar leo tincidunt molestie at ultrices morbi ornare. Nulla diam diam ut
                        dignissim. Justo, velit nunc nunc consectetur nunc nec dui. Purus quam at amet a arcu amet, erat.
                    </Text>
                    <Text fontSize='0.875rem' fontWeight='400' display='flex' mt='auto' alignItems='center' transition='color 0.2s'>
                        <Image src="/images/icons/bell.svg" alt="Notificações" mr='20px' />
                        <Link href="#">
                            Inscreva-se para receber atualizações desta página
                        </Link>
                    </Text>
                </Flex>
                {news ? news
                    .map(newsElement => (
                        <NewsCard key={newsElement.id} noticia={newsElement} />
                    )
                    ) : <></>}
            </Flex>
        </Flex>

    )
}