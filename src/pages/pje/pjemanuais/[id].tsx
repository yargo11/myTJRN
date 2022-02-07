import { GetServerSideProps } from 'next';
import PageTitle, { BreadCrumbProps } from '../../../components/PageTitle';
import AreaTitle from '../../../components/Home/AreaTitle';
import ContainerBox from '../../../components/ContainerBox';
import { Box, Flex, GridItem, SimpleGrid, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, } from '@chakra-ui/react';

import MenuCoord from '../../../components/Coordenadoria/MenuCoord';
import Coordenadoria from '../../../components/Coordenadoria/IntroCoord';

import { manuaisServidor, manuaisAdovgado, manuaisMagistrado, manuaisOficiaisDeJustica, manuaisMinisterioPublico, manuaisDefensorias, manuaisPraticasJuridicas, manuaisProcuradorias, manuaisDelegacias, manuaisOutrosManuais } from './manuais1';
import AccordionVideoFile from '../../../components/AccordionVideoFile';


interface PageProps {
    title: string,
    areaTitle: string,
    description: string,
    breadCrumbArray: Array<BreadCrumbProps>
    coordenacao: string,
    contato: string,
    email: string,
    telefone: string,
    content: string
    lastUpdate: string,
    accordion: Array<AccordionProps>
}

interface AccordionProps {
    label: string,
    content: Array<Documents>
}

interface Documents {
    title: string,
    anchor: string
}

export default function PjeManuais({ title, accordion, areaTitle, description, breadCrumbArray, coordenacao, contato, email, telefone, lastUpdate }: PageProps) {
    return (
        <>
            <PageTitle
                title={title}
                description={description}
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
                        <AreaTitle title={areaTitle} subtitle='' />
                        <AccordionVideoFile
                            allfilesandvideos={pjemanuais1}
                        />
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
            areaTitle: 'Manuais - 1º grau',
            description: 'Informações sobre o que é o poder judiciário, sua história, como se estrutura e seu funionamento etc etc etc etc etc etc etcetcetcetcetcetcetcetcetc etc',
            breadcrumb: { label: 'PJE', link: '#' },
            lastUpdate: '2021-12-03T14:38:51-0300',
            coordenacao: 'FATIMA MARIA COSTA SOARES DE LIMA',
            contato: 'Av. duqe de caxias, 151, 3 andar, ribeira, natal rn',
            email: 'secretariageral@jtnr.jus.br',
            telefone: '+55 84 3673-9216',
            fileandvideos: [
                { category: 'Servidor', videofiles: manuaisServidor },
                { category: 'Advogados', videofiles: manuaisAdovgado },
                { category: 'Magistrados', videofiles: manuaisMagistrado },
                { category: 'Oficiais de Justiça', videofiles: manuaisOficiaisDeJustica },
                { category: 'Ministério Público', videofiles: manuaisMinisterioPublico },
                { category: 'Defensorias', videofiles: manuaisDefensorias },
                { category: 'Práticas Jurídicas', videofiles: manuaisPraticasJuridicas },
                { category: 'Procuradorias', videofiles: manuaisProcuradorias },
                { category: 'Delegacias', videofiles: manuaisDelegacias },
                { category: 'Outros Manuais', videofiles: manuaisOutrosManuais },
            ]
        }
    }
}


/*
  export const getServerSideProps: GetServerSideProps = async () => {
    //const { id } = context.query;
    //const noticia = await (await apinoticia.get('elemento/' + id)).data;
    return {
      props: {
        title: 'Processo Judicial Eletrônico - PJe',
        areaTitle: 'Manuais - 2º grau',
        description: 'Informações sobre o que é o poder judiciário, sua história, como se estrutura e seu funionamento etc etc etc etc etc etc etcetcetcetcetcetcetcetcetc etc',
        breadcrumb:{ label: 'PJE', link: '#' },
        lastUpdate: '2021-12-03T14:38:51-0300',
        coordenacao: 'FATIMA MARIA COSTA SOARES DE LIMA',
        contato: 'Av. duqe de caxias, 151, 3 andar, ribeira, natal rn',
        email: 'secretariageral@jtnr.jus.br',
        telefone: '+55 84 3673-9216',
        accordion: [{ label: 'servidor', manuais: manuaisServidor }]
      }
    }
  }
*/

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

const pjemanuais1 = [
    { category: 'Servidor', videofiles: manuaisServidor },
    { category: 'Advogados', videofiles: manuaisAdovgado },
    { category: 'Magistrados', videofiles: manuaisMagistrado },
    { category: 'Oficiais de Justiça', videofiles: manuaisOficiaisDeJustica },
    { category: 'Ministério Público', videofiles: manuaisMinisterioPublico },
    { category: 'Defensorias', videofiles: manuaisDefensorias },
    { category: 'Práticas Jurídicas', videofiles: manuaisPraticasJuridicas },
    { category: 'Procuradorias', videofiles: manuaisProcuradorias },
    { category: 'Delegacias', videofiles: manuaisDelegacias },
    { category: 'Outros Manuais', videofiles: manuaisOutrosManuais },
]