import { GetServerSideProps } from "next";
import PageTitle, { BreadCrumbProps } from "../../../components/PageTitle";
import parse from 'html-react-parser';
import AreaTitle from "../../../components/Home/AreaTitle";
import ContainerBox from "../../../components/ContainerBox";
import { Box, Flex, GridItem, SimpleGrid, Text, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Spacer, } from "@chakra-ui/react";

import MenuCoord from "../../../components/Coordenadoria/MenuCoord";
import Coordenadoria from "../../../components/Coordenadoria/IntroCoord";

import { useRouter } from "next/router";
import PageContentList from "../../../components/Article/PageContentList";


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
}

export default function PjeManuais({ title, titleDescription, areaTitle, subAreaTitle, content, breadCrumbArray, coordenacao, contato, email, telefone, lastUpdate }: PageProps) {

    // Implementação temporária usando useRouter para receber o id e montar a paginá de acordo com o mesmo (Será mudado quando tivermos recebendo dados do back-end)
    // *pjeid* -> remover após o back-end estar pronto para nos enviar dados e usar o {id} do getServerSideProps, proveniente do context.query


    const router = useRouter()
    const { id } = router.query
    const pjeid = Number(id)


    // Implementacao do 'formattedContent' para incluir o content dependendo do id da pagina, e adapta-lo para usar as funcoes contentheader2, pageTitles e search
    // Sera removido quando o back-end estiver pronto. (Para remover: apagar a variavel 'let formattedContent' e trocar formattedContent por content onde for possivel)


    let formattedContent = content[pjeid]

    const contentheader2 = formattedContent.matchAll(new RegExp('<h2>([a-z]|[A-Z]|[0-9]|\x20|[\xC0-\xFF]|\-)+</h2>', 'g'));


    const pageTitles = Array.from(contentheader2, value => value[0].substring(4, value[0].length - 5));

    let headerIndex = -1;

    while (formattedContent.search('<h2>') != -1) {
        formattedContent = formattedContent.replace('<h2>', () => {
            headerIndex++;
            return `<h2 id="${headerIndex}">`
        })
    }

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

                    <GridItem colSpan={2} maxW='746px'>
                        <AreaTitle
                            title={areaTitle[pjeid]}
                            subtitle={subAreaTitle[pjeid]}
                        />
                        <PageContentList headers={pageTitles} />
                        <Text>{parse(content[pjeid])}</Text>
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
            content: pageContent,
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
    { label: "Municípios e Procuradorias", link: "/pje/0" },
    { label: "Comarcas Contempladas", link: "/pje/0" },
    { label: "Empresas e Órgãos públicos", link: "/pje/0" },
    { label: "Perguntas Frequentes", link: "/pje/0" },
    { label: "Tabelas Processuais Unificadas", link: "https://www.cnj.jus.br/sgt/consulta_publica_classes.php" },
    { label: "Registro de Indisponibilidade", link: "https://apps.tjrn.jus.br/siri/f/public/consultarIndisponibilidade/index.xhtml" },
    { label: "Cadastro de Pessoa Jurídica SisCadPJ", link: "https://siscadpj.tjrn.jus.br/" },
    { label: "Cadastro de Serviços de Informática - Agile", link: "https://agile.tjrn.jus.br/" },
]

const areaTitles = [
    "Sobre o PJe",
    "PJe - Primeiro Grau",
    "Vídeo tutoriais - 1º e 2º grau"
]

const subAreaTitle = [
    "",
    "Nesta página você encontrará informações sobre o PJe - Primeiro Grau",
    "Assista aos vídeos tutoriais sobre o uso das ferramentas do PJe, nos âmbitos Criminal, Crimininal e Cível.",
    "Assista aos vídeos tutoriais sobre o uso das ferramentas do PJe, nos âmbitos Criminal, Crimininal e Cível.",
]

const pageContent = [
    `
                <strong>
                <h2>Histórico</h2>
                </strong>
                <br/>
                <br/>

                A história do sistema Processo Judicial eletrônico (PJe) é bem recente, mas nem por isso representa desconforto para sua adoção. O seu marco inicial, na realidade foi uma retomada, pelo CNJ, em setembro de 2009, do projeto inicial dos cinco Tribunais Regionais Federais (TRF's), a partir da continuidade do TRF da 5a. Região, sediado em Recife/PE.
                <br/>
                <br/>
                Com o compartilhamento da experiência do TRF da 5a. Região, foi constatado que ali existia um projeto propenso ao êxito, pois tinha como fundamentos: um modelo de arquitetura em fluxos configuráveis, a utilização de software aberto e a garantia da retenção do conhecimento no Judiciário, requisitos até então não adotados. Logo foi firmado um convênio entre os cinco tribunais federais.
                <br/>
                <br/>
                Em pouco tempo novos parceiros foram agregados ao PJe, em uma grande rede formada pelo CNJ, pelo Conselho Superior da Justiça do Trabalho e pelo Tribunal Superior do Trabalho, que incorporou todos os Tribunais Regionais do Trabalho (TRT's). Fechando a rede PJe, também firmaram convênio 16 tribunais de justiça estaduais e o Tribunal de Justiça Militar de Minas Gerais.
                <br/>
                <br/>
                Em abril de 2010, na Subseção Judiciária de Natal/RN, vinculada ao TRF da 5a. Região, foi implantada a primeira versão do PJe. A disseminação foi rápida e outras Subseções do TRF da 5a. Região receberam o PJe. Já em dezembro de 2010, a primeira versão nacional foi implantada no Tribunal de Justiça de Pernambuco e no Tribunal Regional Federal da 3a. Região.

                <br/>
                <br/>
                <strong><h2>Principais Características</h2></strong>
                <br/>
                <br/>

                A seguir são apresentadas algumas características que sinalizam para a quebra de paradigmas com a implantação do sistema Processo Judicial eletrônico (PJe):
                <br/>
                <br/>
                Fluxos Configuráveis: Representa o meio termo entre o engessamento total e a liberdade absoluta. A alteração dos fluxos para definir os caminhos não depende da intervenção dos profissionais de Tecnologia da Informação (TI), para efetuar as constantes manutenções no sistema, mas podem ser realizadas por um servidor com conhecimento especializado em processo judicial.
                <br/>
                <br/>
                Ato e Movimento integrados: Ato e movimento ocorrem de forma paralela. O tempo de lançamento da movimentação é eliminado e, consequentemente, gera um benefício à tramitação do processo.
                <br/>
                <br/>
                Inovação para o Processo Criminal: A partir da criação de um grupo específico criado no CNJ, foram elaboradas novas funcionalidades que permitem o controle mais efetivo e abrangem todo o processo criminal. Várias informações são armazenadas individualmente e de forma detalhada, além da facilidade da emissão de certidões nacionais e do intercâmbio de informações.
                <br/>
                <br/>
                Liberdade de Uso com Segurança: Garantia, com precisão, do que pode ser acessado por um usuário, sem a necessidade de intervenção da TI.
                <br/>
                <br/>
                Múltiplos Perfis: Um usuário pode ter mais de um perfil, possibilitando a otimização dos recursos humanos.
                <br/>
                <br/>
                Modelo de Documentos: Facilidade na automação dos fluxos processuais com a classificação dos modelos de documentos e da adoção de taxonomia de tipos de documentos.
                <br/>
                <br/>
                Editor de Texto Incorporado ao Sistema: Possibilita menor custo com aquisição de editor de texto proprietário, menor espaço de armazenamento, maior velocidade de acesso e facilidade de indexação.
                <br/>
                <br/>
                Dupla Facilidade de Visualização do Processo: Maior produtividade com o visualizador que mostra as peças sequencialmente, com uso de dois monitores nos computadores e apresentação de metadados.
                <br/>
                <br/>
                Ajuda Colaborativa e Intuitiva: Ao acessar a ajuda é mostrado o texto referente a página que estava sendo utilizada no momento da solicitação. O texto da ajuda pode ser editado por usuários devidamente autorizados.
                <br/>
                <br/>
                Ferramenta de Busca: Pesquisa de dados como ocorre nas ferramentas de buscas existentes, de forma rápida e eficiente.
                <br/>
                <br/>
                Auditoria: Registro de todas das operações ocorridas no sistema.
                <br/>
                <br/>
                Unificação de Tabelas: As tabelas unificadas nacionais permitem padronização e diminuem o retrabalho.
                <br/>
                <br/>
                Transparência na Distribuição dos Processos: Distribuição objetiva, a partir de um conjunto de fatores, contemplando as mais variadas hipóteses, possibilitando medir o trabalho decorrente do processo.
                <br/>
                <br/>
                Assinatura Digital: Uso de assinatura digital certificada pela ICP-Brasil, garantindo a segurança do processo judicial eletrônico.
                <br/>
                <br/>
                Replicação Automática: Atualização de forma automática de informações na base do CNJ, sem necessidade de alocar servidores e outros recursos.
                <br/>
                <br/>
                Integração com Outros Sistemas: Possibilidade futura de integração com outros sistemas, através de comunicação realizada exclusivamente por meio eletrônico.
               
                <br/>
                <br/>
                <strong> <h2>Utilização do PJe pelo Poder Judiciário</h2></strong>
                <br/>
                <br/>
                
                O sistema Processo Judicial eletrônico (PJe) é o sistema padrão de toda a Justiça Federal e já está em implantação em todos os TRT's, além de contar com a adesão de 20 Tribunais Estaduais de Justiça e de 2 Tribunais de Justiça Militar.
                <br/>
                <br/>
                A premissa no processo de implantação e utilização do PJe é o trabalho que deve ser realizado de parametrização e configuração, que demanda um tempo inicial para o piloto, mas que depois de configurado sua replicação ocorre de forma rápida.
                <br/>
                <br/>
                No Tribunal de Justiça de Pernambuco, o PJe já é utilizado em 23 dos 25 juizados especiais de Recife e em 5 juizados especiais das Comarcas de Olinda, Paulista e Cabo de Santo Agostinho. No Tribunal de Justiça da Paraíba está presente em 10 Varas.
                <br/>
                <br/>
                No TRT da 21a. Região, sediado em Natal, o PJe já funciona na Vara de Trabalho de Goianinha e nas três Varas de Trabalho de Mossoró. Também funciona nos mandados de segurança que tramitam na 2a. Instância, o que, segundo informações do próprio TRT tem agilizado o andamento processual das Ações e reduzido o tempo de solução dos processos.
                <br/>
                <br/>
                A utilização do PJe em Segunda Instância também é possível e ocorre através de configuração e parametrização. O TRF da 5a. Região, sediado em Recife, já utiliza em seu colegiado e o TJ/PE também irá utilizar, além, claro, do próprio CNJ, que usará nas turmas e colegiado.
            `,
    `
        <h2>Como acessar</h2>
        <p>Pra acessar vc faz isso e aquilo. Pra acessar vc faz isso e aquilo. Pra acessar vc faz isso e aquilo. Pra acessar vc faz isso e aquilo. Pra acessar vc faz isso e aquilo. Pra acessar vc faz isso e aquilo. Pra acessar vc faz isso e aquilo. Pra acessar vc faz isso e aquilo. Pra acessar vc faz isso e aquilo. Pra acessar vc faz isso e aquilo. Pra acessar vc faz isso e aquilo. 
        Acesse o site do PJe. Para ingressar no sistema, informe o seu certificado digital ou o seu login (CPF ou CNPJ) e senha.</p>
        <h2>Fazer consulta pública</h2>
        <p>A consulta pública serve pra fazer isso e aquilo. Pra acesar você faz isso e aquilo.</p>
        <h2>Cadastro Juspotulandi</h2>
        <p>O cadastro como Jus Postulandi noconfere ao cidadão os meios de acionar a Justiça sem o auxílio de Advogado e diretamente pelo sistema.
        Para realizar o cadastro, acesse o site do PJe no Tribunal de Justiça do Rio Grande do Norte.
        Tem dúvidas de como fazer o cadastramento, consulte o vídeo tutorial ou o manual.</p>
        <h2>Autenticação de documentos</h2>
        <p> O curso preparatório para pretendentes a adoção é ofertado pela própria Vara de Infância e Juventude em diferentes modalidades.  O curso preparatório para pretendentes a adoção é ofertado pela própria Vara de Infância e Juventude em diferentes modalidades. </p>
        <h2>Videos tutoriais e manuais</h2>
        <p>A equipe técnica da Vara de Infância deve elaborar um relatório que será enviado ao Ministério Público e ao Sistema Nacional de Adoção. 
        Assista aos videos tutoriais
        Consulte os manuais</p>
    `
]