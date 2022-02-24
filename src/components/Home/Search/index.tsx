import { Box, Flex, Input, Button, Text, UnorderedList, ListItem, HStack, List, Link, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import ContainerBox from '../../ContainerBox';
import SearchButton from './SearchButton';

import { BiLinkExternal } from 'react-icons/bi'


interface AbasProps {

    nome: string,
    texto: string,
    link: [
        {
            nome: string,
            link: string,
        }
    ],
    buttonLink: {
        nome: string;
        anchor: string;
        external: Boolean
    }

}

export default function Search() {

    const abas = {
        consultaProcessual: {
            nome: "Consulta Processual",
            texto: "Texto Consulta Processual",
            link: [
                { nome: "link 1", anchor: "#" },
                { nome: "link 2", anchor: "#" },
                { nome: "link 3", anchor: "#" },
            ],
            buttonLink: { nome: "Ir para consulta processual", anchor: "#", external: false }
        },
        jurisprudencia: {
            nome: "Jurisprudência",
            texto: "Jurisprudência é o termo jurídico que designa o conjunto das decisões sobre interpretações das leis feitas pelos tribunais de uma determinada jurisdição.",
            link: [
                { nome: "link 4", anchor: "#" },
                { nome: "link 5", anchor: "#" },
                { nome: "link 6", anchor: "#" },
            ],
            buttonLink: { nome: "Ir para jurisprudência", anchor: "#", external: true },
        },
        diarioDeJustica: {
            nome: "Diário de Justiça",
            texto: "O Diário da Justiça é um veículo de comunicação através do qual a Imprensa Nacional brasileira tornava públicos assuntos relacionados ao Poder Judiciário.",
            link: [
                { nome: "link 1", anchor: "#" },
                { nome: "link 2", anchor: "#" },
                { nome: "link 3", anchor: "#" },
            ],
            buttonLink: { nome: "Ir para diário de justiça", anchor: "#", external: true }
        },
        precedentes: {
            nome: "Precedentes",
            texto: "Texto para precedentes",
            link: [
                { nome: "link 1", anchor: "#" },
                { nome: "link 2", anchor: "#" },
                { nome: "link 3", anchor: "#" },
            ],
            buttonLink: { nome: "Ir para precedentes", anchor: "#", external: false }
        },
        pje: {
            nome: "Processo Judicial Eletrônico",
            texto: "Texto para Processo Judicial Eletrônico",
            link: [
                { nome: "link 1", anchor: "#" },
                { nome: "link 2", anchor: "#" },
                { nome: "link 3", anchor: "#" },
            ],
            buttonLink: { nome: "Ir para PJe", anchor: "#", external: false }
        },
    }

    const [type, setType] = useState(abas.consultaProcessual);

    return (
        <Box
            w='full'
            py='81px'
            background='linear-gradient(88.07deg, #0081B5 -3.33%, #DCE36E 117.18%)'
            display='inline-block'
        >
            <ContainerBox>
                <Flex>
                    <SearchButton
                        actualFunction={type.nome} name={abas.consultaProcessual.nome}
                        onClick={() => { setType(abas.consultaProcessual) }} />
                    <SearchButton
                        actualFunction={type.nome} name={abas.jurisprudencia.nome}
                        onClick={() => { setType(abas.jurisprudencia) }} />
                    <SearchButton
                        actualFunction={type.nome} name={abas.diarioDeJustica.nome}
                        onClick={() => { setType(abas.diarioDeJustica) }} />
                    <SearchButton
                        actualFunction={type.nome} name={abas.precedentes.nome}
                        onClick={() => { setType(abas.precedentes) }} />
                    <SearchButton
                        actualFunction={type.nome} name={abas.pje.nome}
                        onClick={() => { setType(abas.pje) }} />
                </Flex>

                <Flex px='24px' pt='24px' bgColor='white' borderRadius='8px 8px 0 0' direction="column">
                    <Text
                        fontSize="200%"
                        fontWeight="700"
                        lineHeight="40px"
                        color="#00384D"
                        mb="16px"
                    >
                        {type.nome}
                    </Text>
                    <Flex>
                        <Text
                            maxW="832px"
                            fontSize="112.5%"
                            fontWeight="400"
                            lineHeight="25px"
                            color="#4F5257"
                        >
                            {type.texto}
                        </Text>
                        <Button
                            as={Link}
                            href={type.buttonLink.anchor}
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
                            {type.buttonLink.nome}
                            {type.buttonLink.external && <Icon as={BiLinkExternal} ml="8px" w="22px" h="22px" />}
                        </Button>
                    </Flex>
                </Flex>

                <Flex px='24px' pt='16px' pb="32px" flexWrap='wrap' bgColor='white' borderRadius='0 0 8px 8px'>
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
                        {type.link.map(anchors => (
                            <ListItem _notFirst={{ marginLeft: "1rem" }}><Link href={anchors.anchor} target="_blank">{anchors.nome}</Link></ListItem>
                        ))
                        }
                    </UnorderedList>
                </Flex>
            </ContainerBox>
        </Box>
    );
}