import { GetServerSideProps } from "next";
import PageTitle, { BreadCrumbProps } from "../../../components/PageTitle";
import AreaTitle from "../../../components/Home/AreaTitle";
import ContainerBox from "../../../components/ContainerBox";
import { GridItem, SimpleGrid, Spacer } from "@chakra-ui/react";

import MenuCoord from "../../../components/Coordenadoria/MenuCoord";
import Coordenadoria from "../../../components/Coordenadoria/IntroCoord";
import AccordionVideoFileList from "../../../components/AccordionVideoFileList";

import { manuaisServidor, manuaisAdovgado, manuaisMagistrado, manuaisOficiaisDeJustica, manuaisMinisterioPublico, manuaisDefensorias, manuaisPraticasJuridicas, manuaisProcuradorias, manuaisDelegacias, manuaisOutrosManuais } from "./manuais1";
import { manuaisAdvogado2, manuaisDefensorias2, manuaisDesembargador2, manuaisMinisterioPublico2, manuaisOficiaisDeJustica2, manuaisPraticasJuridicas2, manuaisProcuradorias2, manuaisServidor2, manuaisRedacaoJudiciaria2 } from "./manuais2";
import { useRouter } from "next/router";


interface PageProps {
    title: string,
    titleDescription: string,
    areaTitle: string,
    subAreaTitle: string,
    breadCrumbArray: Array<BreadCrumbProps>
    coordenacao: string,
    contato: string,
    email: string,
    telefone: string,
    content: string
    lastUpdate: string,
    accordion: Array<AccordionProps>,
    fileandvideos: Array<FileAndVideoProps>,
}

interface AccordionProps {
    label: string,
    content: Array<Documents>
}

interface Documents {
    title: string,
    anchor: string
}

interface AllFilesAndVideosProps {
    allfilesandvideos: Array<FileAndVideoProps>
}

interface FileAndVideoProps {
    category: string;
    videofiles: Array<TitleAndLinkProps>
}

interface TitleAndLinkProps {
    title: string;
    link: string
}

export default function PjeManuais({ title, titleDescription, areaTitle, subAreaTitle, fileandvideos, breadCrumbArray, coordenacao, contato, email, telefone, lastUpdate }: PageProps) {

    // Implementação temporária usando useRouter para receber o id e montar a paginá de acordo com o mesmo (Será mudado quando tivermos recebendo dados do back-end)
    // *pjeid* -> remover após o back-end estar pronto para nos enviar dados e usar o {id} do getServerSideProps, proveniente do context.query


    const router = useRouter()
    const { id } = router.query
    const pjeid = Number(id)

    return (
        <>
            <PageTitle
                title={title}
                description={titleDescription}
                showTitle={true}
                breadCrumbArray={breadCrumbArray}
            />
            <MenuCoord linkList={linksInfo} subMenu={subMenu} />
            <ContainerBox mt="56px" sx={{ "@media print": { display: "block" } }}>
                <SimpleGrid columns={{ base: 2, md: 3 }} spacingX="30px">
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
                        <AreaTitle
                            title={areaTitle[pjeid]}
                            subtitle={subAreaTitle[pjeid]}
                        />
                        <Spacer h="64px" />
                        <AccordionVideoFileList
                            allfilesandvideos={fileandvideos[pjeid]}
                        />
                    </GridItem>
                </SimpleGrid>
            </ContainerBox>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async () => {
    //const { id } = context.query;
    //const noticia = await (await apinoticia.get("elemento/" + id)).data;
    return {
        props: {
            title: "Processo Judicial Eletrônico - PJe",
            titleDescription: "Informações sobre o que é o poder judiciário, sua história, como se estrutura e seu funionamento etc etc etc etc etc etc etcetcetcetcetcetcetcetcetc etc",
            areaTitle: areaTitles,
            subAreaTitle: subAreaTitle,
            breadcrumb: { label: "PJE", link: "#" },
            lastUpdate: "2021-12-03T14:38:51-0300",
            coordenacao: "FATIMA MARIA COSTA SOARES DE LIMA",
            contato: "Av. duqe de caxias, 151, 3 andar, ribeira, natal rn",
            email: "secretariageral@jtnr.jus.br",
            telefone: "+55 84 3673-9216",
            fileandvideos: [pjemanuais1, pjemanuais2, pjevideotutorias1, empresas],
        }
    }
}


/*
  export const getServerSideProps: GetServerSideProps = async () => {
    //const { id } = context.query;
    //const noticia = await (await apinoticia.get("elemento/" + id)).data;
    return {
      props: {
        title: "Processo Judicial Eletrônico - PJe",
        areaTitle: "Manuais - 2º grau",
        description: "Informações sobre o que é o poder judiciário, sua história, como se estrutura e seu funionamento etc etc etc etc etc etc etcetcetcetcetcetcetcetcetc etc",
        breadcrumb:{ label: "PJE", link: "#" },
        lastUpdate: "2021-12-03T14:38:51-0300",
        coordenacao: "FATIMA MARIA COSTA SOARES DE LIMA",
        contato: "Av. duqe de caxias, 151, 3 andar, ribeira, natal rn",
        email: "secretariageral@jtnr.jus.br",
        telefone: "+55 84 3673-9216",
        accordion: [{ label: "servidor", manuais: manuaisServidor }]
      }
    }
  }
*/

const linksInfo = [
    { label: "Início", link: "/pje/0" },
    { label: "PJe - Primeiro grau", link: "/pje/1" },
    { label: "PJe - Segundo grau", link: "/pje/2" },
    { label: "Documentos", link: "/pje/empresas" },
]

const subMenu = [
    { label: "Sobre o PJe", link: "/pje/0" },
    { label: "Pje - Primeiro Grau", link: "/pje/0" },
    { label: "Pje - Segundo Grau", link: "/pje/0" },
    { label: "Documentos", link: "/pje/0" },
    { label: "Municípios e Procuradorias", link: "/pje/3" },
    { label: "Comarcas Contempladas", link: "/pje/0" },
    { label: "Empresas e Órgãos públicos", link: "/pje/0" },
    { label: "Perguntas Frequentes", link: "/pje/0" },
    { label: "Tabelas Processuais Unificadas", link: "https://www.cnj.jus.br/sgt/consulta_publica_classes.php" },
    { label: "Registro de Indisponibilidade", link: "https://apps.tjrn.jus.br/siri/f/public/consultarIndisponibilidade/index.xhtml" },
    { label: "Cadastro de Pessoa Jurídica SisCadPJ", link: "https://siscadpj.tjrn.jus.br/" },
    { label: "Cadastro de Serviços de Informática - Agile", link: "https://agile.tjrn.jus.br/" },
]

const areaTitles = [
    "Manuais - 1º grau",
    "Manuais - 2º grau",
    "Vídeo tutoriais - 1º e 2º grau",
    "Municípios e Procuradorias"
]

const subAreaTitle = [
    "Manuais de 1º grau sobre o usa das ferramentas do PJe",
    "Manuais de 2º grau sobre o usa das ferramentas do PJe",
    "Assista aos vídeos tutoriais sobre o uso das ferramentas do PJe, nos âmbitos Criminal, Crimininal e Cível.",
    "",
]

const pjemanuais1 = [
    { category: "Servidor", videofiles: manuaisServidor },
    { category: "Advogados", videofiles: manuaisAdovgado },
    { category: "Magistrados", videofiles: manuaisMagistrado },
    { category: "Oficiais de Justiça", videofiles: manuaisOficiaisDeJustica },
    { category: "Ministério Público", videofiles: manuaisMinisterioPublico },
    { category: "Defensorias", videofiles: manuaisDefensorias },
    { category: "Práticas Jurídicas", videofiles: manuaisPraticasJuridicas },
    { category: "Procuradorias", videofiles: manuaisProcuradorias },
    { category: "Delegacias", videofiles: manuaisDelegacias },
    { category: "Outros Manuais", videofiles: manuaisOutrosManuais },
]

const pjemanuais2 = [
    { category: "Advogados", videofiles: manuaisAdvogado2 },
    { category: "Servidor", videofiles: manuaisServidor2 },
    { category: "Desembargador", videofiles: manuaisDesembargador2 },
    { category: "Oficiais de Justiça", videofiles: manuaisOficiaisDeJustica2 },
    { category: "Ministério Público", videofiles: manuaisMinisterioPublico2 },
    { category: "Defensorias", videofiles: manuaisDefensorias2 },
    { category: "Práticas Jurídicas", videofiles: manuaisPraticasJuridicas2 },
    { category: "Procuradorias", videofiles: manuaisProcuradorias2 },
    { category: "Redação Judiciária", videofiles: manuaisRedacaoJudiciaria2 },
]

const pjevideotutorias1 = [
    {
        category: "PJe Criminal",
        videofiles: [
            { title: "CADASTRO DE ENTE OU AUTORIDADE – DELEGACIA", link: "https://www.youtube.com/watch?v=pWOTZyZArgc?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4" },
        ]
    },
    {
        category: "PJe Criminal e Cível",
        videofiles: [
            { title: "CADASTRO DE PESSOA FÍSICA COM CPF", link: "https://www.youtube.com/watch?v=6Xj-UlJXrYo?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4" },
            { title: "CADASTRO DE PESSOA FÍSICA SEM CPF COM OUTRO DOCUMENTO", link: "https://www.youtube.com/watch?v=DcYu9UUaydU?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4" },
            { title: "CADASTRO DE PESSOA FÍSICA SEM CPF E SEM OUTRO DOCUMENTO", link: "https://www.youtube.com/watch?v=Brbjp9uS7D4?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4" },
            { title: "CADASTRO DE PESSOA JURÍDICA - ÓRGÃO PÚBLICO SEM CNPJ", link: "https://www.youtube.com/watch?v=np-xJUE4nkg?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4" },
            { title: "CADASTRO DE PESSOA JURÍDICA COM CNPJ", link: "https://www.youtube.com/watch?v=J4UyROje79k?list=PLCaY5Y2kPdwk-kgz5lOYgbcbtSRjrdYY4" },
            { title: "1 - PJE OFFICE", link: "https://www.youtube.com/watch?v=HRzaIKrXxRU?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "2 - TELA INICIAL DO PJE", link: "https://www.youtube.com/watch?v=jPFRimuEj5A?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "3 - VISÃO INICIAL DO PAINEL DO USUÁRIO DO PJE", link: "https://www.youtube.com/watch?v=KCbEHZ0XQF4?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "4 - PERFIS DE ACESSO E ATALHOS", link: "https://www.youtube.com/watch?v=92ih07uLfGA?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "5 - AUTOS DIGITAIS", link: "https://www.youtube.com/watch?v=8V26npJWOfo?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "6 - SÍMBOLOS GERAIS", link: "https://www.youtube.com/watch?v=bv15SQoltCM?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "7 – MOVIMENTAÇÃO DE PROCESSOS EM LOTE", link: "https://www.youtube.com/watch?v=WivUmj0mm_Y?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "8 – ÁREA CENTRAL DE VISUALIZAÇÃO DE DOCUMENTOS", link: "https://www.youtube.com/watch?v=IPcrJejEYO8?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "9 – ABAS LATERAIS Características do processo; Juntar documentos; etc", link: "https://www.youtube.com/watch?v=STOB8S1nCUE?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "10 - ABAS LATERAIS – AUDIÊNCIAS E CARACTERÍSTICAS", link: "https://www.youtube.com/watch?v=qMx-V_vJmNs?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "11 - ABAS LATERAIS – SEGREDO OU SIGILO E ACESSO DE TERCEIRO", link: "https://www.youtube.com/watch?v=JFBOb0jJu18?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "12 - ABAS LATERAIS – REDISTRIBUIÇÕES, PETIÇÕES AVULSAS E DOCUMENTOS", link: "https://www.youtube.com/watch?v=bq1xl4h69qA?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "13 ABAS LATERAIS – EXPEDIENTES", link: "https://www.youtube.com/watch?v=xD_ZnFMDXo4?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "14 – MENU VERTICAL Painel, Processo, Configuração, etc E ACESSO RÁPIDO", link: "https://www.youtube.com/watch?v=hesmkJ3K7-Y?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
        ]
    },
    {
        category: "PJE 2º Grau",
        videofiles: [
            { title: "15 – GERANDO COMPOSIÇÃO DOS PARTICIPANTES DA SESSÃO DE JULGAMENTO – 2º GRAU", link: "https://www.youtube.com/watch?v=8HxmhKXRiaw?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "16 – CADASTRANDO SESSÃO DE JULGAMENTO – 2º GRAU", link: "https://www.youtube.com/watch?v=ocKAPO9obrU?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "17 – ALTERANDO A ORDEM DE PROCESSOS APÓS O FECHAMENTO DA PAUTA DA SESSÃO DE JULGAMENTO – 2º GRAU", link: "https://www.youtube.com/watch?v=7PnzOStiq7w?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "18 – EXIBIÇÃO DO NOME DO MAGISTRADO VOTANTE JUNTO AO NOME DO GABINETE NA SESSÃO DE JULGAMENTO – 2º GRAU", link: "https://www.youtube.com/watch?v=RWtjhUF2dGo?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "19 – PAINEL DO PROCURADOR NA SESSÃO DE JULGAMENTO – 2º GRAU", link: "https://www.youtube.com/watch?v=GXSw2XdJrN8?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
            { title: "20 – VINCULANDO PROCURADOR NA SESSÃO DE JULGAMENTO – 2º GRAU", link: "https://www.youtube.com/watch?v=bAgal9KHC8o?list=PLCaY5Y2kPdwn27b1-d6qFMsrK6kRb-NlY" },
        ]
    }
]

const empresas = [
    {category: "Produradoria Geral do Município de Acari", videofiles:[{title: "MUNICIPIO DE ACARI - CNPJ: 08097008000120"}]},
    {category: "Produradoria Geral do Município de Acari", videofiles:[{title: "MUNICIPIO DE ACARI - CNPJ: 08097008000120"}]},
    {category: "Produradoria Geral do Município de Acari", videofiles:[{title: "MUNICIPIO DE ACARI - CNPJ: 08097008000120"}]},
    {category: "Produradoria Geral do Município de Acari", videofiles:[{title: "MUNICIPIO DE ACARI - CNPJ: 08097008000120"}]},
    {category: "Produradoria Geral do Município de Acari", videofiles:[{title: "MUNICIPIO DE ACARI - CNPJ: 08097008000120"}]},
    {category: "Produradoria Geral do Município de Acari", videofiles:[{title: "MUNICIPIO DE ACARI - CNPJ: 08097008000120"}]},
    {category: "Produradoria Geral do Município de Acari", videofiles:[{title: "MUNICIPIO DE ACARI - CNPJ: 08097008000120"}]},
    {category: "Produradoria Geral do Município de Acari", videofiles:[{title: "MUNICIPIO DE ACARI - CNPJ: 08097008000120"}]},
    {category: "Produradoria Geral do Município de Acari", videofiles:[{title: "MUNICIPIO DE ACARI - CNPJ: 08097008000120"}]},
]