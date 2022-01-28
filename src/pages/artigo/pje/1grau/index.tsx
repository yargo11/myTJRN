import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import PageTitle from '../../../../components/PageTitle';
import PageContentList from '../../../../components/Article/PageContentList';
import AreaTitle from '../../../../components/Home/AreaTitle';
import ContainerBox from '../../../../components/ContainerBox';
import Article from '../../../../components/Aside/Article';
import {
    Box, Flex, GridItem, SimpleGrid, Spacer, useBreakpointValue, Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import FilePdf from '../../../../components/FilePdf';

import {
    manuaisAdovgado,
    manuaisServidor,
    manuaisMagistrado,
    manuaisDefensorias,
    manuaisDelegacias,
    manuaisMinisterioPublico,
    manuaisOficiaisDeJustica,
    manuaisOutrosManuais,
    manuaisPraticasJuridicas,
    manuaisProcuradorias
} from './manuais'

interface PageProps {
    title: string,
    subtitle: string,
    content: string
    lastUpdate: string
}
export default function PrimeiroGrau({ title, subtitle, content, lastUpdate }: PageProps) {

    const router = useRouter()
    const { id } = router.query

    const linkList = pjeLinks

    const breadcrumblist = [breadcrumbpje1];

    //   const contentheader2 = content.matchAll(new RegExp('<h2>([a-z]|[A-Z]|[0-9]|\x20|[\xC0-\xFF]|\-)+</h2>', 'g'));

    //   const pageTitles = Array.from(contentheader2, value => value[0].substring(4, value[0].length - 5));

    let headerIndex = -1;

    //   while (content.search('<h2>') != -1) {
    //     content = content.replace('<h2>', () => {
    //       headerIndex++;
    //       return `<h2 id="${headerIndex}">`
    //     })
    //   }

    return (
        <>
            <PageTitle title='Vídeos Tutoriais e Manuais - 1º grau' breadCrumbArray={breadcrumblist} showTitle={false} />
            <ContainerBox mt='56px' sx={{ '@media print': { display: 'block' } }}>
                <SimpleGrid columns={{ base: 2, md: 3 }} spacingX='30px'>
                    <GridItem colSpan={{ base: 2, md: 1 }}>
                        <Article rootLabel={breadcrumbpje1.label} rootLink='#' linkList={linkList} lastUpdate='' />
                    </GridItem>
                    <GridItem colSpan={2}>
                        <AreaTitle title='Vídeos Tutoriais e Manuais - 1º grau' subtitle='' />
                        {/* <PageContentList headers={pageTitles} /> */}


                        <Accordion allowToggle>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontSize='1.25rem' fontWeight='500'>
                                            Servidor
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {manuaisServidor.map(servidor =>
                                    (
                                        <FilePdf
                                            key={servidor.title}
                                            title={servidor.title}
                                            anchor={servidor.anchor}
                                        />
                                    )
                                    )
                                    }
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontSize='1.25rem' fontWeight='500'>
                                            Magistrado
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {manuaisMagistrado.map(madistrado =>
                                    (
                                        <FilePdf
                                            key={madistrado.title}
                                            title={madistrado.title}
                                            anchor={madistrado.anchor}
                                        />
                                    )
                                    )
                                    }
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontSize='1.25rem' fontWeight='500'>
                                            Advogado
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {manuaisAdovgado.map(advogado =>
                                    (
                                        <FilePdf
                                            key={advogado.title}
                                            title={advogado.title}
                                            anchor={advogado.anchor}
                                        />
                                    )
                                    )
                                    }
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontSize='1.25rem' fontWeight='500'>
                                            Oficial de Justiça
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {manuaisOficiaisDeJustica.map(oficial =>
                                    (
                                        <FilePdf
                                            key={oficial.title}
                                            title={oficial.title}
                                            anchor={oficial.anchor}
                                        />
                                    )
                                    )
                                    }
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontSize='1.25rem' fontWeight='500'>
                                            Ministério Público
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {manuaisMinisterioPublico.map(ministerio =>
                                    (
                                        <FilePdf
                                            key={ministerio.title}
                                            title={ministerio.title}
                                            anchor={ministerio.anchor}
                                        />
                                    )
                                    )
                                    }
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontSize='1.25rem' fontWeight='500'>
                                            Defensorias
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {manuaisDefensorias.map(defensorias =>
                                    (
                                        <FilePdf
                                            key={defensorias.title}
                                            title={defensorias.title}
                                            anchor={defensorias.anchor}
                                        />
                                    )
                                    )
                                    }
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontSize='1.25rem' fontWeight='500'>
                                            Práticas Jurídicas
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {manuaisPraticasJuridicas.map(praticas =>
                                    (
                                        <FilePdf
                                            key={praticas.title}
                                            title={praticas.title}
                                            anchor={praticas.anchor}
                                        />
                                    )
                                    )
                                    }
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontSize='1.25rem' fontWeight='500'>
                                            Procuradorias
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {manuaisProcuradorias.map(procuradorias =>
                                    (
                                        <FilePdf
                                            key={procuradorias.title}
                                            title={procuradorias.title}
                                            anchor={procuradorias.anchor}
                                        />
                                    )
                                    )
                                    }
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontSize='1.25rem' fontWeight='500'>
                                            Delegacias
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {manuaisDelegacias.map(delegacais =>
                                    (
                                        <FilePdf
                                            key={delegacais.title}
                                            title={delegacais.title}
                                            anchor={delegacais.anchor}
                                        />
                                    )
                                    )
                                    }
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontSize='1.25rem' fontWeight='500'>
                                            Outros Manuais
                                        </Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    {manuaisOutrosManuais.map(outros =>
                                    (
                                        <FilePdf
                                            key={outros.title}
                                            title={outros.title}
                                            anchor={outros.anchor}
                                        />
                                    )
                                    )
                                    }
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>



                    </GridItem>
                </SimpleGrid>
            </ContainerBox>
        </>
    );
}

const breadcrumbpje1 = { label: 'PJE', link: '#' }

const pjeLinks = [
    { label: 'Apresentação', link: '/artigo/0' },
    { label: 'Documentos', link: '/artigo/1' },
    { label: 'Comarcas Contempladas', link: '/artigo/2' },
    { label: 'Empresas/Órgãos Públicos', link: '/artigo/3' },
    { label: 'Municípios - Produradorias', link: '/artigo/4' },
    { label: 'Vídeos tutoriais e manuais - 1º Grau', link: '/artigo/pje/1grau' },
    { label: 'Vídeos tutoriais e manuais - 2º Grau', link: '/artigo/pje/2grau' },
]



