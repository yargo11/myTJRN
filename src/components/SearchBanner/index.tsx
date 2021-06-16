import { useState } from 'react';
import { Flex, Spacer } from '@chakra-ui/react';
import { SearchBannerButton } from './SearchBannerButton';

export function SearchBanner() {
    enum SearchBannerFunctions {
        buscarNoSite = 'Buscar no Site',
        consultaProcessual = 'Consulta Processual',
        pesquisaDeJurisprudencia = 'Pesquisa de Jurisprudência'
    }

    const [type, setType] = useState(SearchBannerFunctions.buscarNoSite);

    return (
        
        <Flex h='80' w='100%' maxW='1120px' m='auto' p='73px 0px' bgImage="url('/images/background.svg')">
            <Spacer width='10'>
            <SearchBannerButton
                actualFunction={type}
                name={SearchBannerFunctions.buscarNoSite}
                onClick={() => setType(SearchBannerFunctions.buscarNoSite)} />

            <SearchBannerButton
                actualFunction={type}
                name={SearchBannerFunctions.consultaProcessual}
                onClick={() => setType(SearchBannerFunctions.consultaProcessual)} />
            
            <SearchBannerButton
                actualFunction={type}
                name={SearchBannerFunctions.pesquisaDeJurisprudencia}
                onClick={() => setType(SearchBannerFunctions.pesquisaDeJurisprudencia)} />
            </Spacer>
        </Flex>
    )
}