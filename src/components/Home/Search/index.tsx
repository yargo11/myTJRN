import { Box, Flex, Input, Button, Text, UnorderedList, ListItem, HStack, List, Link } from '@chakra-ui/react';
import { useState } from 'react';
import ContainerBox from '../../ContainerBox';
import SearchButton from './SearchButton';


interface AbasProps {

    nome: string,
    texto: string,
    link: [
        {
            nome: string,
            link: string,
        }
    ],
    buttonLink: string

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
            buttonLink: { nome: "Ir para consulta processual", anchor: "#" }
        },
        jurisprudencia: {
            nome: "Jurisprudência",
            texto: "Jurisprudência é o termo jurídico que designa o conjunto das decisões sobre interpretações das leis feitas pelos tribunais de uma determinada jurisdição.",
            link: [
                { nome: "link 4", anchor: "#" },
                { nome: "link 5", anchor: "#" },
                { nome: "link 6", anchor: "#" },
            ],
            buttonLink: { nome: "Ir para jurisprudência", anchor: "#" }
        },
        diarioDeJustica: {
            nome: "Diário de Justiça",
            texto: "O Diário da Justiça é um veículo de comunicação através do qual a Imprensa Nacional brasileira tornava públicos assuntos relacionados ao Poder Judiciário.",
            link: [
                { nome: "link 1", anchor: "#" },
                { nome: "link 2", anchor: "#" },
                { nome: "link 3", anchor: "#" },
            ],
            buttonLink: { nome: "Ir para diário de justiça", anchor: "#" }
        },
        precedentes: {
            nome: "Precedentes",
            texto: "Texto para precedentes",
            link: [
                { nome: "link 1", anchor: "#" },
                { nome: "link 2", anchor: "#" },
                { nome: "link 3", anchor: "#" },
            ],
            buttonLink: { nome: "Ir para precedentes", anchor: "#" }
        },
        pje: {
            nome: "Processo Judicial Eletrônico",
            texto: "Texto para Processo Judicial Eletrônico",
            link: [
                { nome: "link 1", anchor: "#" },
                { nome: "link 2", anchor: "#" },
                { nome: "link 3", anchor: "#" },
            ],
            buttonLink: { nome: "Ir para PJe", anchor: "#" }
        },
    }

    const [type, setType] = useState(abas.consultaProcessual);

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

                <Flex px='24px' pt='24px' bgColor='white' borderRadius='0 6px 0 0' direction="column">
                    <Text
                        fontSize="200%"
                        fontWeight="700"
                        lineHeight="40px"
                        color="#00384D"
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