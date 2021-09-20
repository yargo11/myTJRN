import { Flex, Button } from '@chakra-ui/react';
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
            alignItems='center'
            justifyContent='center'
            bgGradient='linear(to-r, #20A0CE, #B8D272)'>
            <SearchButton
                actualFunction={type}
                name={SearchBannerFunctions.buscarNoSite}
                onClick={() => {setType(SearchBannerFunctions.buscarNoSite)}}/>
            <SearchButton
                actualFunction={type}
                name={SearchBannerFunctions.consultaProcessual}
                onClick={() => {setType(SearchBannerFunctions.consultaProcessual)}}/>
            <SearchButton
                actualFunction={type}
                name={SearchBannerFunctions.pesquisaDeJurisprudencia}
                onClick={() => {setType(SearchBannerFunctions.pesquisaDeJurisprudencia)}}/>
            <SearchButton
                actualFunction={type}
                name={SearchBannerFunctions.etc}
                onClick={() => {setType(SearchBannerFunctions.etc)}}/>
        </Flex>
    );
}