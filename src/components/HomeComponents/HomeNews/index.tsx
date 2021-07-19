import { NoticiaInterface } from '../../../interfaces/noticiaInterface';
import { NewsCard } from '../../NewsComponents/NewsCard'
import { ButtonFilters } from './ButtonFilter';
import { Flex, Box, Link, Image, Heading, Text, Wrap, WrapItem, useMediaQuery, List, ListItem, SimpleGrid } from '@chakra-ui/react'

export interface NoticiaListProps {
    noticias: NoticiaInterface[];
}

export function HomeNews({ noticias }: NoticiaListProps) {
    const [isLargerThan1320] = useMediaQuery("(min-width: 768px)")

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
                    {noticias ? noticias
                        .map(noticia => (
                            <WrapItem>
                                <NewsCard key={noticia.id} noticia={noticia} />
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
                        ><Link href="/noticia">Todas as notícias</Link></ListItem>
                    </List>
                </Flex>
            </Flex>
        </Flex>
    )
}