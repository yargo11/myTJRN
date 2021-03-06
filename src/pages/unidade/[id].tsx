import { Center, Flex, Text, Link, SimpleGrid, GridItem } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import Unit from "../../components/Aside/Unit";
import ContainerBox from "../../components/ContainerBox";
import ListenPrintSharePanel from "../../components/ListenPrintSharePanel";
import PageTitle from "../../components/PageTitle";
import TreeList, { Tree } from "../../components/TreeList";

interface UnidadeProps {
    name: string,
    about: string,
    aditionalInfo: string,
    image: string,
    endereco: string,
    ultimaAtualizacao: string
    lista: Array<Tree>
}

export default function Unidade({name, about, aditionalInfo, image, endereco, ultimaAtualizacao, lista}: UnidadeProps) {
    const list = [];

    lista.map( elemento => {
        list.push(elemento.label)
        elemento.list.map(item => {
            list.push(item.label ? item.label : '')
            list.push(item.value ? item.value : '')
        })
    })

    return (
        <>
            <PageTitle title='1ª Vara da Comarca de Assu' breadCrumbArray={[]} showTitle={false} />
            <Flex bgColor='#FAFBFC'>
                <ContainerBox as={Center} py='56px' flexWrap='wrap' alignContent='center' justifyContent='space-between'>
                    <Text fontWeight='extrabold' fontSize='250%' lineHeight='115%' color='tj_dark_blue'>{name}</Text>
                    <ListenPrintSharePanel listOfContentToRead={['Unidade: ' + name, 'Sobre:' + about, 'Informações adicionais: ' + aditionalInfo, 'Endereço:' + endereco, ...list]} />
                </ContainerBox>
            </Flex>
            <ContainerBox my='64px'>
                <SimpleGrid columns={{ base: 2, md: 3 }} spacingX='30px'>
                    <GridItem colSpan={{ base: 2, md: 1 }}>
                        <Unit image={image} lastUpdate={ultimaAtualizacao} imgAlt={name} />
                    </GridItem>
                    <GridItem colSpan={2}>
                        <Text fontWeight='bold' fontSize='200%' lineHeight='125%' color='tj_dark_blue'>Sobre</Text>
                        <Text fontWeight='normal' fontSize='112.5%' lineHeight='177.78%' letterSpacing='-0.26px' mt='16px' mb='48px'>{about}</Text>
                        <Text fontWeight='bold' fontSize='200%' lineHeight='125%' color='tj_dark_blue'>Informações adicionais</Text>
                        <Text fontWeight='normal' fontSize='112.5%' lineHeight='177.78%' letterSpacing='-0.26px' mt='16px' mb='48px'>{aditionalInfo}</Text>
                        <Text fontWeight='bold' fontSize='200%' lineHeight='125%' color='tj_dark_blue'>Atendimento</Text>
                        <TreeList elementList={lista} />
                        <Text fontWeight='bold' fontSize='150%' lineHeight='141.68%' color='tj_dark_blue'>Endereço</Text>
                        <Text fontWeight='normal' fontSize='112.5%' lineHeight='138.89%' letterSpacing='-0.26px' mt='16px'>{endereco}</Text>
                        <Link
                            color='tj_navy_blue'
                            lineHeight='112.5%'
                            textDecor='underline'
                            _hover={{ textDecor: 'underline' }}
                            href={`https://www.google.com/maps/search/${encodeURIComponent(endereco)}`}
                            target='_blank'>
                            obter direções
                        </Link>
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
            name: '1ª Vara da Comarca de Assu',
            about: `É a secretaria a quem compete planejar, dirigir e coordenar atividades administrativas 
                        em consonância com diretrizes da Presidência do Tribunal. Define e implementa sistemáticas e instrumentos 
                        de planejamento administrativo, de execução e de controle, além de zelar pelo cumprimento da legislação e 
                        das normas regulamentares.`,
            aditionalInfo: `É a secretaria a quem compete planejar, dirigir e coordenar atividades administrativas em 
                        consonância com diretrizes da Presidência do Tribunal.`,
            image: '/image/Forum.png',
            endereco: 'R. Dr. Lauro Pinto, 315 - Lagoa Nova, Natal - RN, 59064-972',
            ultimaAtualizacao: '2021-12-03T14:38:51-0300',
            lista: [
                {
                    label: 'Horário de funcionamento',
                    list: [
                        { label: 'Abertura', value: 'Segunda a quinta - 8h às 10h e 14h às 18h' },
                        { value: 'Sexta - 8h às 14h' },
                        { label: 'Balcão Virtual', value: 'Segunda a sexta - 8h às 10h | 14h às 18h' },
                    ]
                },
                {
                    label: 'E-mail',
                    list: [
                        { label: 'Geral', value: 'assu1vara@tjrn.jus.br', contactType: 'Email' },
                        { label: 'Plantão', value: 'plantao1varadeassu@tjrn.jus.br', contactType: 'Email' },
                    ]
                },
                {
                    label: 'Telefone',
                    list: [
                        { label: 'Recepção', value: '(84) 3673-8700', contactType: 'Phone' },
                        { label: 'Secretaria', value: '(84) 3673-8112', contactType: 'Phone' },
                    ]
                },
            ]
        }
    }
}