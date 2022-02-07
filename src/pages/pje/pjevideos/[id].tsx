import { GetServerSideProps } from 'next';
import PageTitle, { BreadCrumbProps } from '../../../components/PageTitle';
import AreaTitle from '../../../components/Home/AreaTitle';
import ContainerBox from '../../../components/ContainerBox';
import AccordionVideoFile from '../../../components/AccordionVideoFile';
import { Box, Flex, GridItem, SimpleGrid, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, List, ListItem, Link, Spacer, } from '@chakra-ui/react';

import MenuCoord from '../../../components/Coordenadoria/MenuCoord';
import Coordenadoria from '../../../components/Coordenadoria/IntroCoord';




interface PageProps {
    title: string,
    titleDescription: string,
    areaTitle: string,
    subtitle: string,
    breadCrumbArray: Array<BreadCrumbProps>
    coordenacao: string,
    contato: string,
    email: string,
    telefone: string,
    content: string
    lastUpdate: string,
    accordion: Array<Videos>
}

interface Videos {
    title: string,
    link: string
}

export default function PjeVideos({ title, subtitle, accordion, areaTitle, titleDescription, breadCrumbArray, coordenacao, contato, email, telefone, lastUpdate }: PageProps) {
    return (
        <>
            <PageTitle
                title={title}
                description={titleDescription}
                showTitle={true}
                breadCrumbArray={breadCrumbArray}
            />
            <MenuCoord linkList={linksInfo} subMenu={subMenu} />
            <ContainerBox mt='56px' sx={{ '@media print': { display: 'block' } }}>
                <SimpleGrid columns={{ base: 2, md: 3 }} spacingX='30px'>
                    <GridItem colSpan={{ base: 2, md: 1 }}>
                        <Coordenadoria
                            coordenacao={coordenacao}
                            contato={contato}
                            email={email}
                            telefone={telefone}
                            lastUpdate={lastUpdate}
                        />
                    </GridItem>

                    <GridItem colSpan={2}>
                        <AreaTitle title={areaTitle} subtitle={subtitle} />
                        <Spacer h='64px' />
                        <AccordionVideoFile
                            allfilesandvideos={pjevideos1}
                        />
                        {/* <List>
                            {accordion.map(video =>
                                <ListItem>
                                    <Link href={video.link}
                                        transition='color, font-weight 0.2s'
                                        _hover={{
                                            color: 'blue.500',
                                            fontWeight: 'bold'
                                        }}>
                                        <Text>{video.title}</Text>
                                    </Link>
                                </ListItem>
                            )}
                        </List> */}
                    </GridItem>
                </SimpleGrid>
            </ContainerBox>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    //const { id } = context.query;
    //const noticia = await (await apinoticia.get('elemento/' + id)).data;
    return {
        props: {
            title: 'Processo Judicial Eletrônico - PJe',
            areaTitle: 'Vídeos - 1º grau',
            subtitle: 'Assista aos vídeos tutoriais sobre o uso das ferramentas do PJe, nos âmbitos Criminal, Crimininal e Cível.',
            titleDescription: 'Informações sobre o que é o poder judiciário, sua história, como se estrutura e seu funionamento etc etc etc etc etc etc etcetcetcetcetcetcetcetcetc etc',
            breadcrumb: { label: 'PJE', link: '#' },
            lastUpdate: '2021-12-03T14:38:51-0300',
            coordenacao: 'FATIMA MARIA COSTA SOARES DE LIMA',
            contato: 'Av. duqe de caxias, 151, 3 andar, ribeira, natal rn',
            email: 'secretariageral@jtnr.jus.br',
            telefone: '+55 84 3673-9216',
            filesvideos: pjevideos1,
            accordion: [
    {
        category: 'PJe Criminal',
        videofiles: [
            { title: 'CADASTRO DE ENTE OU AUTORIDADE – DELEGACIA', link: 'pWOTZyZArgc?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4' },
            { title: 'CADASTRO DE PESSOA FÍSICA COM CPF', link: '6Xj-UlJXrYo?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4' },
            { title: 'CADASTRO DE PESSOA FÍSICA SEM CPF COM OUTRO DOCUMENTO', link: 'DcYu9UUaydU?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4' },
        ]
    },
    {
        category: 'PJe Criminal e Cível',
        videofiles: [
            { title: 'CADASTRO DE PESSOA FÍSICA SEM CPF E SEM OUTRO DOCUMENTO', link: 'Brbjp9uS7D4?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4' },
                { title: 'CADASTRO DE PESSOA JURÍDICA - ÓRGÃO PÚBLICO SEM CNPJ', link: 'np-xJUE4nkg?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4' },
                { title: 'CADASTRO DE PESSOA JURÍDICA COM CNPJ', link: 'J4UyROje79k?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4' },
                { title: '1 - PJE OFFICE', link: 'HRzaIKrXxRU?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '2 - TELA INICIAL DO PJE', link: 'jPFRimuEj5A?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '3 - VISÃO INICIAL DO PAINEL DO USUÁRIO DO PJE', link: 'KCbEHZ0XQF4?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '4 - PERFIS DE ACESSO E ATALHOS', link: '92ih07uLfGA?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '5 - AUTOS DIGITAIS', link: '8V26npJWOfo?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '6 - SÍMBOLOS GERAIS', link: 'bv15SQoltCM?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '7 – MOVIMENTAÇÃO DE PROCESSOS EM LOTE', link: 'WivUmj0mm_Y?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '8 – ÁREA CENTRAL DE VISUALIZAÇÃO DE DOCUMENTOS', link: 'IPcrJejEYO8?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '9 – ABAS LATERAIS Características do processo; Juntar documentos; etc', link: 'STOB8S1nCUE?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '10 - ABAS LATERAIS – AUDIÊNCIAS E CARACTERÍSTICAS', link: 'qMx-V_vJmNs?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '11 - ABAS LATERAIS – SEGREDO OU SIGILO E ACESSO DE TERCEIRO', link: 'JFBOb0jJu18?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '12 - ABAS LATERAIS – REDISTRIBUIÇÕES, PETIÇÕES AVULSAS E DOCUMENTOS', link: 'bq1xl4h69qA?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '13 ABAS LATERAIS – EXPEDIENTES', link: 'xD_ZnFMDXo4?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '14 – MENU VERTICAL Painel, Processo, Configuração, etc E ACESSO RÁPIDO', link: 'hesmkJ3K7-Y?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '15 – GERANDO COMPOSIÇÃO DOS PARTICIPANTES DA SESSÃO DE JULGAMENTO – 2º GRAU', link: '8HxmhKXRiaw?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '16 – CADASTRANDO SESSÃO DE JULGAMENTO – 2º GRAU', link: 'ocKAPO9obrU?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '17 – ALTERANDO A ORDEM DE PROCESSOS APÓS O FECHAMENTO DA PAUTA DA SESSÃO DE JULGAMENTO – 2º GRAU', link: '7PnzOStiq7w?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '18 – EXIBIÇÃO DO NOME DO MAGISTRADO VOTANTE JUNTO AO NOME DO GABINETE NA SESSÃO DE JULGAMENTO – 2º GRAU', link: 'RWtjhUF2dGo?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '19 – PAINEL DO PROCURADOR NA SESSÃO DE JULGAMENTO – 2º GRAU', link: 'GXSw2XdJrN8?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '20 – VINCULANDO PROCURADOR NA SESSÃO DE JULGAMENTO – 2º GRAU', link: 'bAgal9KHC8o?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
        ]
    }
]
        }
    }
}

const pjevideos1 = [
    {
        category: 'PJe Criminal',
        videofiles: [
            { title: 'CADASTRO DE ENTE OU AUTORIDADE – DELEGACIA', link: 'pWOTZyZArgc?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4' },
            { title: 'CADASTRO DE PESSOA FÍSICA COM CPF', link: '6Xj-UlJXrYo?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4' },
            { title: 'CADASTRO DE PESSOA FÍSICA SEM CPF COM OUTRO DOCUMENTO', link: 'DcYu9UUaydU?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4' },
        ]
    },
    {
        category: 'PJe Criminal e Cível',
        videofiles: [
            { title: 'CADASTRO DE PESSOA FÍSICA SEM CPF E SEM OUTRO DOCUMENTO', link: 'Brbjp9uS7D4?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4' },
                { title: 'CADASTRO DE PESSOA JURÍDICA - ÓRGÃO PÚBLICO SEM CNPJ', link: 'np-xJUE4nkg?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4' },
                { title: 'CADASTRO DE PESSOA JURÍDICA COM CNPJ', link: 'J4UyROje79k?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4' },
                { title: '1 - PJE OFFICE', link: 'HRzaIKrXxRU?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '2 - TELA INICIAL DO PJE', link: 'jPFRimuEj5A?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '3 - VISÃO INICIAL DO PAINEL DO USUÁRIO DO PJE', link: 'KCbEHZ0XQF4?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '4 - PERFIS DE ACESSO E ATALHOS', link: '92ih07uLfGA?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '5 - AUTOS DIGITAIS', link: '8V26npJWOfo?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '6 - SÍMBOLOS GERAIS', link: 'bv15SQoltCM?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '7 – MOVIMENTAÇÃO DE PROCESSOS EM LOTE', link: 'WivUmj0mm_Y?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '8 – ÁREA CENTRAL DE VISUALIZAÇÃO DE DOCUMENTOS', link: 'IPcrJejEYO8?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '9 – ABAS LATERAIS Características do processo; Juntar documentos; etc', link: 'STOB8S1nCUE?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '10 - ABAS LATERAIS – AUDIÊNCIAS E CARACTERÍSTICAS', link: 'qMx-V_vJmNs?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '11 - ABAS LATERAIS – SEGREDO OU SIGILO E ACESSO DE TERCEIRO', link: 'JFBOb0jJu18?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '12 - ABAS LATERAIS – REDISTRIBUIÇÕES, PETIÇÕES AVULSAS E DOCUMENTOS', link: 'bq1xl4h69qA?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '13 ABAS LATERAIS – EXPEDIENTES', link: 'xD_ZnFMDXo4?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '14 – MENU VERTICAL Painel, Processo, Configuração, etc E ACESSO RÁPIDO', link: 'hesmkJ3K7-Y?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '15 – GERANDO COMPOSIÇÃO DOS PARTICIPANTES DA SESSÃO DE JULGAMENTO – 2º GRAU', link: '8HxmhKXRiaw?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '16 – CADASTRANDO SESSÃO DE JULGAMENTO – 2º GRAU', link: 'ocKAPO9obrU?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '17 – ALTERANDO A ORDEM DE PROCESSOS APÓS O FECHAMENTO DA PAUTA DA SESSÃO DE JULGAMENTO – 2º GRAU', link: '7PnzOStiq7w?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '18 – EXIBIÇÃO DO NOME DO MAGISTRADO VOTANTE JUNTO AO NOME DO GABINETE NA SESSÃO DE JULGAMENTO – 2º GRAU', link: 'RWtjhUF2dGo?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '19 – PAINEL DO PROCURADOR NA SESSÃO DE JULGAMENTO – 2º GRAU', link: 'GXSw2XdJrN8?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
                { title: '20 – VINCULANDO PROCURADOR NA SESSÃO DE JULGAMENTO – 2º GRAU', link: 'bAgal9KHC8o?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY' },
        ]
    }
]

const linksInfo = [
    { label: 'Início', link: '/pje/0' },
    { label: 'PJe - Primeiro grau', link: '/pje/1' },
    { label: 'PJe - Segundo grau', link: '/pje/2' },
    { label: 'Documentos', link: '/pje/empresas' },
]

const subMenu = [
    { label: 'Sobre o PJe', link: '/pje/0' },
    { label: 'Pje - Primeiro Grau', link: '/pje/0' },
    { label: 'Pje - Segundo Grau', link: '/pje/0' },
    { label: 'Documentos', link: '/pje/0' },
    { label: 'Municípios e Procuradorias', link: '/pje/0' },
]

