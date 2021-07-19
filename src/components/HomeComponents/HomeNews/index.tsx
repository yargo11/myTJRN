import { NoticiaInterface } from '../../../interfaces/noticiaInterface';
import { NewsCard } from '../../NewsComponents/NewsCard'
import { ButtonFilters } from './ButtonFilter';
import { Flex, Box, Link, Image, Heading, Text, Wrap, WrapItem, useMediaQuery, List, ListItem } from '@chakra-ui/react'

export interface NoticiaListProps {
    noticias: NoticiaInterface[];
}

export function HomeNews({ noticias }: NoticiaListProps) {
    const [isLargerThan1320] = useMediaQuery("(min-width: 768px)")

    return (
        <Flex w='100%' maxW={1320} my={40} mx='auto'>
            <Flex direction='column'>
                <Box >
                    <Link href="#" display='flex' flexFlow='row wrap' justifyContent='center'
                        _hover={{
                            color: 'cyan.500'
                        }}>
                        <Image src="/images/image25.svg" alt="Notícia em Destaque" w='100%' maxW={582} p='10px' />

                        <Flex direction='column' flex='1' fontSize='2rem' mx='20px'>
                            <Heading color='#171e44' fontWeight='600' fontSize='2rem'>Mérito Legislativo: Des. Vivaldo Pinheiro é homenageado pela ALRN</Heading>
                            <Text fontWeight='400' mt='25px' fontSize='1rem'>
                                Solenidade realizada nesta segunda-feira (16) com o objetivo de reconhecer e valorizar
                                personalidades que tem atuação destacada em favor da coletividade. solenidade realizada
                                nesta segunda-feira (16) com o objetivo de reconhecer e valorizar personalidades que tem
                                atuação destacada em favor da coletividade.
                            </Text>
                            <Text color='#656d72' mt='20px'>Segunda, 16 Dezembro 2019. </Text>
                        </Flex>
                    </Link>
                </Box>

                <Wrap justify={isLargerThan1320 ? 'space-between' : 'center'}>
                    {noticias ? noticias
                        .map(noticia => (
                            <WrapItem>
                                <NewsCard key={noticia.id} noticia={noticia} />
                            </WrapItem>
                        )
                        ) : <></>}
                </Wrap>

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
                                background:'#2d3667'
                            }}
                        ><Link href="/noticia">Todas as notícias</Link></ListItem>
                    </List>
                </Flex>
            </Flex>
        </Flex>
    )
}