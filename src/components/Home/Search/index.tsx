import { Flex, Input, Button, Text, UnorderedList, ListItem } from '@chakra-ui/react';
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
        <Flex
            w='full'
            h='353px'
            px='0.75rem'
            alignItems='center'
            justifyContent='center'
            background='linear-gradient(95.7deg, #20A0CE 8.83%, #B8D272 145.52%)' flexDirection='column'>

            <Flex w='full' maxW='82.5rem'>
                <SearchButton actualFunction={type} name={SearchBannerFunctions.buscarNoSite} onClick={() => {setType(SearchBannerFunctions.buscarNoSite)}}/>
                <SearchButton actualFunction={type} name={SearchBannerFunctions.consultaProcessual} onClick={() => {setType(SearchBannerFunctions.consultaProcessual)}}/>
                <SearchButton actualFunction={type} name={SearchBannerFunctions.pesquisaDeJurisprudencia} onClick={() => {setType(SearchBannerFunctions.pesquisaDeJurisprudencia)}}/>
                <SearchButton actualFunction={type} name={SearchBannerFunctions.etc} onClick={() => {setType(SearchBannerFunctions.etc)}}/>
            </Flex>

            <Flex w='full' maxW='82.5rem' h='7.87rem' bgColor='white' alignItems='center' justifyContent='center' flexDirection='column'>
                <Flex w='full' px='1rem' py='0.5rem'>
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
                <Flex w='full' px='1rem' py='0.5rem' flexWrap='wrap' alignItems='center'>
                    <Text lineHeight='1.06rem' fontSize='0.75rem'>Mais buscados:</Text>
                    <UnorderedList display='flex' flexWrap='wrap' listStyleType='none' lineHeight='1.06rem' fontSize='0.75rem'>
                        <ListItem mx='0.2rem'>Precatórios</ListItem>
                        <ListItem mx='0.2rem'>Consulta Processual</ListItem>
                        <ListItem mx='0.2rem'>Estágio</ListItem>
                    </UnorderedList>
                </Flex>
            </Flex>
        </Flex>
    );
}