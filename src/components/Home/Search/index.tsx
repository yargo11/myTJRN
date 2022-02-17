import { Box, Flex, Input, Button, Text, UnorderedList, ListItem, HStack, List, Link } from '@chakra-ui/react';
import { useState } from 'react';
import ContainerBox from '../../ContainerBox';
import SearchButton from './SearchButton';

export default function Search() {

    enum SearchBannerFunctions {
        consultaProcessual = "Consulta Processual",
        jurisprudencia = 'Jurisprudência',
        diarioDeJustica = 'Diário de Justiça',
        precedentes = 'Precedentes',
        pje = 'Processo Judicial Eletrônico',
    }

    enum SearchBannerDescFunctions {
        consultaProcessual = "Texto Consulta Processual",
        jurisprudencia = 'Jurisprudência é o termo jurídico que designa o conjunto das decisões sobre interpretações das leis feitas pelos tribunais de uma determinada jurisdição.',
        diarioDeJustica = 'O Diário da Justiça é um veículo de comunicação através do qual a Imprensa Nacional brasileira tornava públicos assuntos relacionados ao Poder Judiciário.',
        precedentes = 'Precedentes',
        pje = 'Processo Judicial Eletrônico',
    }

    const typeLinks = {
        consultaProcessual: {
            links:
                [
                    { linkName: 'PJe 1º Grau', linkAnchor: 'teste' },
                    { linkName: 'PJe 2º Grau', linkAnchor: '#' },
                    { linkName: 'SAJ 1º Grau', linkAnchor: '#' },
                    { linkName: 'SAJ 2º Grau', linkAnchor: '#' },
                    { linkName: 'Projudi', linkAnchor: '#' },
                ]
        },
        jurisprudencia: {
            links:
                [
                    { linkName: 'Link 1', linkAnchor: '' },
                    { linkName: 'Link 2', linkAnchor: '' },
                    { linkName: 'Link 3', linkAnchor: '' },
                ]
        },
        diarioDeJustica: {
            links:
                [
                    { linkName: '', linkAnchor: '' },
                    { linkName: '', linkAnchor: '' },
                    { linkName: '', linkAnchor: '' },
                ]
        },
        precedentes: {
            links:
                [
                    { linkName: '', linkAnchor: '' },
                    { linkName: '', linkAnchor: '' },
                    { linkName: '', linkAnchor: '' },
                ]
        },
        pje: {
            links:
                [
                    { linkName: '', linkAnchor: '' },
                    { linkName: '', linkAnchor: '' },
                    { linkName: '', linkAnchor: '' },
                ]
        },
    }

    const [type, setType] = useState(SearchBannerFunctions.consultaProcessual);
    const [descType, setDescType] = useState(SearchBannerDescFunctions.consultaProcessual);
    const [typeLink, setTypeLink] = useState(typeLinks.consultaProcessual)

    return (
        <Box
            w='full'
            py='81px'
            background='linear-gradient(95.7deg, #20A0CE 8.83%, #B8D272 145.52%)'
            display='inline-block'
        >
            <ContainerBox>
                <Flex>
                    <SearchButton
                        actualFunction={type} name={SearchBannerFunctions.consultaProcessual}
                        onClick={() => {
                            setType(SearchBannerFunctions.consultaProcessual), setDescType(SearchBannerDescFunctions.consultaProcessual),
                                setTypeLink(typeLinks.consultaProcessual)
                        }} />
                    <SearchButton
                        actualFunction={type} name={SearchBannerFunctions.jurisprudencia}
                        onClick={() => {
                            setType(SearchBannerFunctions.jurisprudencia), setDescType(SearchBannerDescFunctions.jurisprudencia),
                                setTypeLink(typeLinks.jurisprudencia)
                        }} />
                    <SearchButton
                        actualFunction={type} name={SearchBannerFunctions.diarioDeJustica}
                        onClick={() => {
                            setType(SearchBannerFunctions.diarioDeJustica), setDescType(SearchBannerDescFunctions.diarioDeJustica),
                                setTypeLink(typeLinks.diarioDeJustica)
                        }} />
                    <SearchButton
                        actualFunction={type} name={SearchBannerFunctions.precedentes}
                        onClick={() => {
                            setType(SearchBannerFunctions.precedentes), setDescType(SearchBannerDescFunctions.precedentes),
                                setTypeLink(typeLinks.precedentes)
                        }} />
                    <SearchButton
                        actualFunction={type} name={SearchBannerFunctions.pje}
                        onClick={() => {
                            setType(SearchBannerFunctions.pje), setDescType(SearchBannerDescFunctions.pje),
                                setTypeLink(typeLinks.pje)
                        }} />
                </Flex>

                <Flex px='24px' pt='24px' bgColor='white' borderRadius='0 6px 0 0' direction="column">
                    <Text
                        fontSize="200%"
                        fontWeight="700"
                        lineHeight="40px"
                        color="#00384D"
                    >
                        {type}
                    </Text>
                    <Flex>
                        <Text
                            maxW="832px"
                            fontSize="112.5%"
                            fontWeight="400"
                            lineHeight="25px"
                            color="#4F5257"
                        >
                            {descType}
                        </Text>
                        <Button
                            h='50px'
                            // w='167px'
                            px="24px"
                            py="16px"
                            ml='auto'
                            fontWeight='medium'
                            lineHeight='121%'
                            color='white'
                            bgColor='tj_light_blue'
                            transition='filter 0.2s'
                            _hover={{ filter: 'brightness(120%)' }}
                            _active={{ filter: 'brightness(75%)' }}>
                            Ir para consulta processual
                        </Button>
                    </Flex>
                </Flex>

                <Flex px='24px' pt='16px' pb="32px" flexWrap='wrap' bgColor='white' borderRadius='0 0 6px 6px'>
                    <UnorderedList
                        display='flex'
                        flexWrap='wrap'
                        listStyleType='none'
                        lineHeight='141.66%'
                        fontSize='100%'
                        sx={{ marginLeft: "0px" }}
                        color="#336699"
                        textDecor="underline"
                    >
                        {typeLink.links.map(anchors => (
                            <ListItem _notFirst={{ marginLeft: "1rem" }}><Link href={anchors.linkAnchor} target="_blank">{anchors.linkName}</Link></ListItem>
                        ))
                        }
                    </UnorderedList>
                </Flex>
            </ContainerBox>
        </Box>
    );
}