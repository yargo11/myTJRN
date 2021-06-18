import { useState } from 'react';
import { Flex, ButtonGroup, Button, Input, UnorderedList } from '@chakra-ui/react';
import { SearchBannerButton } from './SearchBannerButton';
import { TopSearchItems } from './TopSearchItems';

export function SearchBanner() {
    enum SearchBannerFunctions {
        buscarNoSite = 'Buscar no Site',
        consultaProcessual = 'Consulta Processual',
        pesquisaDeJurisprudencia = 'Pesquisa de Jurisprudência'
    }

    const [type, setType] = useState(SearchBannerFunctions.buscarNoSite);

    return (
        <Flex m='auto' bgImage="url('/images/background.svg')">
            <Flex w='100%' maxW='1120px' m='auto' p='73px 0' flexWrap='wrap'>
                <ButtonGroup spacing='5px' w='full'>
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
                </ButtonGroup>

                <Flex minH='118px' w='full' mt='5px' bg='white' flexWrap='wrap'>
                    <Flex w='full' p='30px 20px'>
                        <Input
                            borderRadius='0'
                            type='text'
                            placeholder="Buscar no TJRN..."/>
                        <Button borderRadius='0'
                            bg='cyan.500'
                            color='white'
                            transition= 'background 0.2s'
                            _hover={{
                                bg: '#2ca1cf'
                            }}
                            _active={{
                                bg: 'cyan.500'
                            }}>
                            Pesquisar
                        </Button>
                    </Flex>
                    <Flex fontWeight='normal' fontSize='0.85rem' mt='-25px' ml='20px'>
                        Mais buscados:
                        <UnorderedList listStyleType='none'>
                            <TopSearchItems name='Precatórios' link='#'/>
                            <TopSearchItems name='Consulta processual' link='#'/>
                            <TopSearchItems name='Estágio' link='#'/>
                        </UnorderedList>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}