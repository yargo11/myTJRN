import { Box, Flex, Input, Button, Text, UnorderedList, ListItem } from '@chakra-ui/react';
import { useState } from 'react';
import ContainerBox from '../../ContainerBox';
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
            py='81px'
            background='linear-gradient(95.7deg, #20A0CE 8.83%, #B8D272 145.52%)'
            display='inline-block'>

            <ContainerBox>
                <Flex>
                    <SearchButton actualFunction={type} name={SearchBannerFunctions.buscarNoSite} onClick={() => {setType(SearchBannerFunctions.buscarNoSite)}}/>
                    <SearchButton actualFunction={type} name={SearchBannerFunctions.consultaProcessual} onClick={() => {setType(SearchBannerFunctions.consultaProcessual)}}/>
                    <SearchButton actualFunction={type} name={SearchBannerFunctions.pesquisaDeJurisprudencia} onClick={() => {setType(SearchBannerFunctions.pesquisaDeJurisprudencia)}}/>
                    <SearchButton actualFunction={type} name={SearchBannerFunctions.etc} onClick={() => {setType(SearchBannerFunctions.etc)}}/>
                </Flex>

                <Flex px='16px' pt='24px' bgColor='white' borderRadius='0 6px 0 0'>
                    <Input placeholder="O que você está procurando hoje?" h='50px'/>
                    <Button
                        h='50px'
                        w='167px'
                        ml='16px'
                        fontWeight='medium'
                        lineHeight='19.36px'
                        color='white'
                        bgColor='tj_dark_blue'
                        transition='filter 0.2s'
                        _hover={{ filter: 'brightness(120%)' }}
                        _active={{ filter: 'brightness(75%)' }}>Pesquisar</Button>
                </Flex>
                <Flex px='16px' py='16px' flexWrap='wrap' bgColor='white' borderRadius='0 0 6px 6px'>
                    <Text lineHeight='141.66%' fontSize='75%'>Mais buscados:</Text>
                    <UnorderedList display='flex' flexWrap='wrap' listStyleType='none' lineHeight='141.66%' fontSize='75%'>
                        <ListItem mx='4px'>Precatórios</ListItem>
                        <ListItem mx='4px'>Consulta Processual</ListItem>
                        <ListItem mx='4px'>Estágio</ListItem>
                    </UnorderedList>
                </Flex>
            </ContainerBox>
        </Box>
    );
}