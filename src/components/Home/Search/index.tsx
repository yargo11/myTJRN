import { Box, Flex, Input, Button, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { useState } from 'react';
import SearchButton from './SearchButton';

export default function Search () {

    enum SearchBannerFunctions {
        buscarNoSite = 'Buscar no Site',
        consultaProcessual = 'Consulta Processual',
        pesquisaDeJurisprudencia = 'Pesquisa de Jurisprudência',
        etc = '...'
    }

    const [type, setType] = useState(SearchBannerFunctions.buscarNoSite);

    return (
        <Box
            w='full'
            px='0.75rem'
            py='5.063rem'
            background='linear-gradient(95.7deg, #20A0CE 8.83%, #B8D272 145.52%)' display='inline-block'>

            <Flex w='full' maxW='82.5rem'>
                <SearchButton actualFunction={type} name={SearchBannerFunctions.buscarNoSite} onClick={() => {setType(SearchBannerFunctions.buscarNoSite)}}/>
                <SearchButton actualFunction={type} name={SearchBannerFunctions.consultaProcessual} onClick={() => {setType(SearchBannerFunctions.consultaProcessual)}}/>
                <SearchButton actualFunction={type} name={SearchBannerFunctions.pesquisaDeJurisprudencia} onClick={() => {setType(SearchBannerFunctions.pesquisaDeJurisprudencia)}}/>
                <SearchButton actualFunction={type} name={SearchBannerFunctions.etc} onClick={() => {setType(SearchBannerFunctions.etc)}}/>
            </Flex>

            <Box w='full' maxW='82.5rem' bgColor='white' pt='1.5rem' pb='1rem'>
                <Flex w='full' px='1rem'>
                    <Input placeholder="O que você está procurando hoje?" h='3.125rem'/>
                    <Button
                        h='3.125rem'
                        w='10.43rem'
                        ml='1rem'
                        fontWeight='medium'
                        lineHeight='1.37rem'
                        color='white'
                        bgColor='#00384D'
                        transition='filter 0.2s'
                        _hover={{ filter: 'brightness(145%)' }}
                        _active={{ filter: 'brightness(75%)' }}>Pesquisar</Button>
                </Flex>
                <Flex w='full' px='1rem' mt='1rem' flexWrap='wrap'>
                    <Text lineHeight='1.06rem' fontSize='0.75rem'>Mais buscados:</Text>
                    <UnorderedList display='flex' flexWrap='wrap' listStyleType='none' lineHeight='1.06rem' fontSize='0.75rem'>
                        <ListItem mx='0.2rem'>Precatórios</ListItem>
                        <ListItem mx='0.2rem'>Consulta Processual</ListItem>
                        <ListItem mx='0.2rem'>Estágio</ListItem>
                    </UnorderedList>
                </Flex>
            </Box>
        </Box>
    );
}