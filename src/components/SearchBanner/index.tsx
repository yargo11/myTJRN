import { useState } from 'react';
import { Flex, ButtonGroup, Button, InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { SearchBannerButton } from './SearchBannerButton';

export function SearchBanner() {
    enum SearchBannerFunctions {
        buscarNoSite = 'Buscar no Site',
        consultaProcessual = 'Consulta Processual',
        pesquisaDeJurisprudencia = 'Pesquisa de Jurisprudência'
    }

    const [type, setType] = useState(SearchBannerFunctions.buscarNoSite);

    return (
        <Flex m='auto' bgImage="url('/images/background.svg')">
            <Flex h='80' w='100%' maxW='1120px' m='auto' p='73px 0px' flexDirection='column'>
                <ButtonGroup spacing='5px'>
                    <SearchBannerButton
                        actualFunction={type}
                        name={SearchBannerFunctions.buscarNoSite}
                        boxShadow={SearchBannerFunctions.buscarNoSite === type ? '0px 5px #ffffff, inset 0 3px #82a81a' : ''}
                        onClick={() => setType(SearchBannerFunctions.buscarNoSite)} />

                    <SearchBannerButton
                        actualFunction={type}
                        name={SearchBannerFunctions.consultaProcessual}
                        boxShadow={SearchBannerFunctions.consultaProcessual === type ? '0px 5px #ffffff, inset 0 3px #82a81a' : ''}
                        onClick={() => setType(SearchBannerFunctions.consultaProcessual)} />
                    
                    <SearchBannerButton
                        actualFunction={type}
                        name={SearchBannerFunctions.pesquisaDeJurisprudencia}
                        boxShadow={SearchBannerFunctions.pesquisaDeJurisprudencia === type ? '0px 5px #ffffff, inset 0 3px #82a81a' : ''}
                        onClick={() => setType(SearchBannerFunctions.pesquisaDeJurisprudencia)} />
                </ButtonGroup>

                <InputGroup h='118px' w='full' mt='5px' bg='white' >
                    <Input
                        borderRadius='0'
                        type='text'
                        placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={() => {}}>
                        show
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Flex>
    )
}