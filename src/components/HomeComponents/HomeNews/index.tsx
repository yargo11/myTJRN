import { useState, useEffect } from 'react';
import { NoticiaInterface } from '../../../interfaces/noticiaInterface';
import { NewsCard } from '../../NewsComponents/NewsCard'
//import { api } from '../../../service/api';
import { ButtonFilters } from './ButtonFilter';
import { Flex, Box, Link, Image, Heading, Text, Wrap, WrapItem, useMediaQuery, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import NEWLIST from '../../../../test/noticia.json';

export function HomeNews() {
    const [isLargerThan768] = useMediaQuery("(min-width: 768px)")

    const [news, setNews] = useState<NoticiaInterface[]>(NEWLIST);
    /*
        useEffect(() => {
            api.get('/noticias/listar').then(response => setNews(response.data)).catch(error => console.log(error));
        }, []);
    */
    return (
        <Flex w='100%' maxW={1320} my='40px' mx='auto'>
            <Flex direction='column'>
                <Box mb='30px'>
                    <Link href="#" display='flex' flexFlow='row wrap' justifyContent='center'
                        _hover={{
                            color: 'cyan.500'
                        }}>
                        <Wrap maxW={1320} w='100%'>
                            <WrapItem maxW={645}>
                                <Image src="/images/image25.svg" alt="Notícia em Destaque" w='100%' maxW={645} />
                            </WrapItem>
                            <WrapItem display='flex' flex='1'>
                                <Flex direction='column' flex='1' fontSize='2rem' mx='20px'>
                                    <Heading color='#171e44' fontWeight='600' fontSize='2rem'>Mérito Legislativo: Des. Vivaldo Pinheiro é homenageado pela ALRN</Heading>
                                    <Text fontWeight='400' mt='25px' fontSize='1rem' textAlign='justify'>
                                        Solenidade realizada nesta segunda-feira (16) com o objetivo de reconhecer e valorizar
                                        personalidades que tem atuação destacada em favor da coletividade. solenidade realizada
                                        nesta segunda-feira (16) com o objetivo de reconhecer e valorizar personalidades que tem
                                        atuação destacada em favor da coletividade.
                                    </Text>
                                    <Text color='#656d72' mt='20px' fontSize='1rem'>Segunda, 16 Dezembro 2019. </Text>
                                </Flex>
                            </WrapItem>
                        </Wrap>
                    </Link>
                </Box>

                <SimpleGrid minChildWidth="276px" spacingX="72px" spacingY="30px">
                    {news ? news
                        .map(newsElement => (
                            <WrapItem>
                                <NewsCard key={newsElement.id} noticia={newsElement} />
                            </WrapItem>
                        )
                        ) : <></>}
                </SimpleGrid>


                <Flex justify='flex-end' mt='60px' fontSize='1rem' fontWeight='400'>
                    <List display='flex' alignItems='center' color="#343434">
                        <ButtonFilters link='#' text='Filtro1' />
                        <ButtonFilters link='#' text='Filtro2' />
                        <ButtonFilters link='#' text='Filtro3' />
                        <ButtonFilters link='#' text='Filtro4' />
                        <ListItem
                            background='#171e44'
                            color='#ffffff'
                            padding='10px 20px'
                            transition='background 0.2s'
                            _hover={{
                                background: '#2d3667'
                            }}
                        ><Link href="/noticias">Todas as notícias</Link></ListItem>
                    </List>
                </Flex>
            </Flex>
        </Flex>
    )
}