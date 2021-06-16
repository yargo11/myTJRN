import { useState } from 'react';
import { Flex, ButtonGroup, Button, Input, UnorderedList, ListItem, Grid } from '@chakra-ui/react';
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

                <Flex h='118px' w='full' mt='5px' bg='white' padding='30px 20px' flexDirection='column'>
                    <Flex minWidth='full'>
                        <Input
                            borderRadius='0'
                            type='text'
                            placeholder="Buscar no TJRN..."/>
                        <Button borderRadius='0'
                            colorScheme='cyan'
                            color='white'
                            transition= 'background 0.2s'
                            _hover={{
                                bg: '#2ca1cf'
                            }}>
                            Pesquisar
                        </Button>
                    </Flex>
                    <Flex fontWeight='normal' fontSize='0.85rem' mt='10px' flexDirection='row'>
                        Mais buscados:
                        <UnorderedList listStyleType='none'>
                            <ListItem float='left' m='0px 5px'><a href="">Precatorios</a></ListItem>
                            <ListItem float='left' m='0px 5px' _before={{ content: '"/ "'}}><a href="">Consulta processual</a></ListItem>
                            <ListItem float='left' m='0px 5px' _before={{ content: '"/ "'}}><a href="">Estagio</a></ListItem>
                        </UnorderedList>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}