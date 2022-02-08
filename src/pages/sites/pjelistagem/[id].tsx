import { GetServerSideProps } from 'next';
import PageTitle, { BreadCrumbProps } from '../../../components/PageTitle';
import AreaTitle from '../../../components/Home/AreaTitle';
import ContainerBox from '../../../components/ContainerBox';
import { Box, Flex, GridItem, SimpleGrid, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, } from '@chakra-ui/react';

import MenuCoord from '../../../components/Coordenadoria/MenuCoord';
import Coordenadoria from '../../../components/Coordenadoria/IntroCoord';

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
    title: string,
    content: Array<Empresas>
}

interface Empresas {
    empresa: string,
    cnpj: string,
}

export default function PjeListagem({ title, accordion, areaTitle, description, breadCrumbArray, coordenacao, contato, email, telefone, lastUpdate }: PageProps) {
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
                        <Accordion allowToggle>
                            {accordion.map(accordionElement =>
                            (
                                <AccordionItem>
                                    <AccordionButton>
                                        <Box flex='1' textAlign='left'>
                                            <Text key={accordionElement.title} fontSize='1.25rem' fontWeight='500'>
                                                {accordionElement.title}
                                            </Text>
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    <AccordionPanel pb={4}>
                                        {accordionElement.content.map(local =>
                                            <>
                                                <Text key={local.cnpj}>
                                                    {local.empresa}
                                                </Text>
                                                <Text>
                                                    CNPJ:  {local.cnpj}
                                                </Text>
                                            </>
                                        )}
                                    </AccordionPanel>
                                </AccordionItem>
                            )
                            )
                            }
                        </Accordion>
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
            areaTitle: 'Municípios e Procuradorias',
            description: 'Informações sobre o que é o poder judiciário, sua história, como se estrutura e seu funionamento etc etc etc etc etc etc etcetcetcetcetcetcetcetcetc etc',
            breadcrumb: { label: 'PJE', link: '#' },
            lastUpdate: '2021-12-03T14:38:51-0300',
            coordenacao: 'FATIMA MARIA COSTA SOARES DE LIMA',
            contato: 'Av. duqe de caxias, 151, 3 andar, ribeira, natal rn',
            email: 'secretariageral@jtnr.jus.br',
            telefone: '+55 84 3673-9216',
            accordion: [
                { title: 'Procuradoria Geral do Municipio de Acari', content: [{ empresa: 'Municipio de Acari', cnpj: '08097008000120' }] },
                { title: 'Procuradoria Geral do Municipio de Acari', content: [{ empresa: 'Municipio de Acari', cnpj: '08097008000121' }, { empresa: 'Municipio de Acari', cnpj: '08097008000122' }] },
            ]
        }
    }
}

const linksInfo = [
    { label: 'Início', link: '/pje/0' },
    { label: 'PJe - Primeiro grau', link: '/pje/1' },
    { label: 'PJe - Segundo grau', link: '/pje/2' },
    { label: 'Documentos', link: '/pje/empresas' },
]

const subMenu = [
    { label: 'Sobre o PJe', link: '/pje/0' },
    { label: 'Pje - Primeiro Grau', link: '/pje/1' },
    { label: 'Pje - Segundo Grau', link: '/pje/2' },
    { label: 'Documentos', link: '/pje/3' },
    { label: 'Municípios e Procuradorias', link: '/pje/4' },
]