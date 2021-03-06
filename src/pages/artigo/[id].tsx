import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import {convert} from 'html-to-text';
import PageTitle, { BreadCrumbProps } from '../../components/PageTitle';
import PageContentList from '../../components/Article/PageContentList';
import AreaTitle from '../../components/Home/AreaTitle';
import ContainerBox from '../../components/ContainerBox';
<<<<<<< HEAD
import { Box, Flex, GridItem, SimpleGrid, Spacer, useBreakpointValue, Text } from '@chakra-ui/react';
import Article from '../../components/Aside/Article';


interface PageProps {
  title: string,
  subtitle: string,
  content: string
  lastUpdate: string
}
export default function Page({ title, subtitle, content, lastUpdate }: PageProps) {

  const router = useRouter()
  const { id } = router.query

  const linkList = pjeLinks
  // const linkList = lista_de_links[Number(id)]

  const breadcrumblist = [breadcrumbpje1];

=======
import { GridItem, SimpleGrid } from '@chakra-ui/react';
import Article, { AsideMenuMidDevicesItemProps } from '../../components/Aside/Article';


interface PageProps {
    title: string,
    subtitle: string,
    content: string,
    lastUpdate: string,
    breadcrumblist: Array<BreadCrumbProps>,
    linkList: Array<AsideMenuMidDevicesItemProps>
}
export default function Page({title, subtitle, content, lastUpdate, breadcrumblist, linkList}:PageProps) {
>>>>>>> novasAbas
  const contentheader2 = content.matchAll(new RegExp('<h2>([a-z]|[A-Z]|[0-9]|\x20|[\xC0-\xFF]|\-)+</h2>', 'g'));

  const pageTitles = Array.from(contentheader2, value => value[0].substring(4, value[0].length - 5));

  let headerIndex = -1;

  while (content.search('<h2>') != -1) {
    content = content.replace('<h2>', () => {
      headerIndex++;
      console.log(headerIndex)
      return `<h2 id="${headerIndex}">`
    })
  }

  return (
    <>
<<<<<<< HEAD
      <PageTitle title={pje[Number(id)].title} breadCrumbArray={breadcrumblist} showTitle={false} />
      <ContainerBox mt='56px' sx={{ '@media print': { display: 'block' } }}>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacingX='30px'>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Article rootLabel={breadcrumbpje1.label} rootLink='#' linkList={linkList} lastUpdate={lastUpdate} />
          </GridItem>
          <GridItem colSpan={2}>
            <AreaTitle title={title} subtitle={subtitle} />
            <PageContentList headers={pageTitles} />
            <Text>{parse(content)}</Text>
=======
      <PageTitle title={title} breadCrumbArray={breadcrumblist} showTitle={false}/>
      <ContainerBox mt='56px' sx={{'@media print': {display: 'block'}}}>
        <SimpleGrid columns={{base: 1, md: 12}} spacingX='24px'>
          <GridItem colSpan={{base: 1, md: 3}}>
            <Article rootLabel='Ado????o' rootLink='#' linkList={linkList} lastUpdate={lastUpdate} listOfContentToRead={['T??tulo: ' + title, 'Subt??tulo: ' + subtitle, 'Corpo:' + convert(content)]}/>
          </GridItem>
          <GridItem colSpan={1}></GridItem>
          <GridItem colSpan={{base: 1, md: 8, lg: 7}}>
            <AreaTitle title={title} subtitle={subtitle}/>
            <PageContentList headers={pageTitles}/>
            {parse(content)}
>>>>>>> novasAbas
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
      title: 'Como adotar',
      subtitle: 'Na ado????o uma crian??a ou adolescente ?? acolhido por uma fam??lia, passando a ser filho ou filha na sua integralidade.',
      lastUpdate: '2021-12-03T14:38:51-0300',
      content: `<h2>Vis??o geral</h2>
                <p>A ado????o come??a no desejo de formar uma fam??lia, de acolher e ser acolhido(a). 
                Os tr??mites legais s??o fundamentais para a seguran??a de crian??as, adolescentes e futuros pais e m??es, mas o preparo emocional e a rede de apoio tamb??m s??o fundamentais! 
                Por isso, depois (ou antes!) de ler estas orienta????es, voc?? pode entrar em contato conosco pelo nosso Whatsapp, (84) 99117-7732 e marcar um atendimento. 
                Um de nossos volunt??rios poder?? tirar suas d??vidas e voc?? poder?? escolher participar da fam??lia Acalanto.</p>
                <h2>Pr??-cadastro</h2>
                <p>A ado????o come??a no desejo de formar uma fam??lia, de acolher e ser acolhido(a). 
                Os tr??mites legais s??o fundamentais para a seguran??a de crian??as, adolescentes e futuros pais e m??es, mas o preparo emocional e a rede de apoio tamb??m s??o fundamentais! 
                Por isso, depois (ou antes!) de ler estas orienta????es, voc?? pode entrar em contato conosco pelo nosso Whatsapp, (84) 99117-7732 e marcar um atendimento. 
                Um de nossos volunt??rios poder?? tirar suas d??vidas e voc?? poder?? escolher participar da fam??lia Acalanto.</p>
                <h2>Documenta????o</h2>
                <p>A ado????o come??a no desejo de formar uma fam??lia, de acolher e ser acolhido(a). 
                Os tr??mites legais s??o fundamentais para a seguran??a de crian??as, adolescentes e futuros pais e m??es, mas o preparo emocional e a rede de apoio tamb??m s??o fundamentais! 
                Por isso, depois (ou antes!) de ler estas orienta????es, voc?? pode entrar em contato conosco pelo nosso Whatsapp, (84) 99117-7732 e marcar um atendimento. 
                Um de nossos volunt??rios poder?? tirar suas d??vidas e voc?? poder?? escolher participar da fam??lia Acalanto.</p>
                <h2>Curso preparat??rio</h2>
                <p>A ado????o come??a no desejo de formar uma fam??lia, de acolher e ser acolhido(a). 
                Os tr??mites legais s??o fundamentais para a seguran??a de crian??as, adolescentes e futuros pais e m??es, mas o preparo emocional e a rede de apoio tamb??m s??o fundamentais! 
                Por isso, depois (ou antes!) de ler estas orienta????es, voc?? pode entrar em contato conosco pelo nosso Whatsapp, (84) 99117-7732 e marcar um atendimento. 
                Um de nossos volunt??rios poder?? tirar suas d??vidas e voc?? poder?? escolher participar da fam??lia Acalanto.</p>`,
        linkList: [link0,link1,link2],
        breadcrumblist: [breadcrumb1, breadcrumb2]
    }
  }
}

const breadcrumb1 = { label: 'Inf??ncia, Juventude e Fam??lia', link: '/menu/2' }
const breadcrumb2 = { label: 'Ado????o', link: '/menu/10' }

const breadcrumbpje1 = { label: 'PJE', link: '#' }

// const link0 = { label: 'Como adotar', link: '/artigo/0' }
// const link1 = { label: 'Apadrinhamento', link: '/artigo/1' }
// const link2 = { label: 'Dar filho para ado????o', link: '/artigo/2' }
// const link3 = { label: 'PJE', link: '/artigo/3' }



const pjeLinks = [
  { label: 'Apresenta????o', link: '/artigo/0' },
  { label: 'Documentos', link: '/artigo/1' },
  { label: 'Comarcas Contempladas', link: '/artigo/2' },
  { label: 'Empresas/??rg??os P??blicos', link: '/artigo/pje/empresas' },
  { label: 'Munic??pios - Produradorias', link: '/artigo/4' },
  { label: 'V??deos tutoriais e manuais - 1?? Grau', link: '/artigo/pje/1grau' },
  { label: 'V??deos tutoriais e manuais - 2?? Grau', link: '/artigo/pje/2grau' },
]

// const pjeLinks2 = [
//   { label: 'Apresenta????o1', link: '/artigo/0' },
//   { label: 'Documentos1', link: '/artigo/1' },
//   { label: 'Comarcas Contem1pladas', link: '/artigo/2' },
//   { label: 'Empresas/??1rg??os P??blicos', link: '/artigo/3' },
//   { label: 'Munic??pios - Produ1radorias', link: '/artigo/4' },
// ]

// const lista_de_links = [
//   pjeLinks,
//   pjeLinks2
// ]


const pje = [
  {
    pid: 0,
    title: 'Apresenta????o',
    subtitle: '',
    content: `
    <p><strong>Apresenta????o</strong></p>
 
<p>O PJe tem como premissa b??sica ofertar um sistema de informa????o 'capaz de permitir a pr??tica de atos processuais pelos magistrados, servidores e demais participantes da rela????o processual diretamente no sistema, assim como o acompanhamento desse processo judicial, independentemente de o processo tramitar na Justi??a Federal, na Justi??a dos Estados, na Justi??a Militar dos Estados e na Justi??a do Trabalho'.</p>

<p>Entretanto, a ado????o do PJe vai mais longe e se apresenta como uma ferramenta robusta, fundamentada em requisitos de seguran??a e interoperabilidade, que proporcionar?? aos tribunais grande racionaliza????o de gastos com aquisi????o e manuten????o de softwares, podendo direcionar parte dos recursos financeiros para suas atividades final??sticas.</p>

<p>Assim, ?? poss??vel constatar a dimens??o do Sistema Processo Judicial Eletr??nico (PJe) ??? projeto do Conselho Nacional de Justi??a (CNJ) ??? e sua import??ncia para o Poder Judici??rio brasileiro.</p>

<p>A partir do dia 16 de maio de 2013, o Tribunal de Justi??a do Rio Grande do Norte (TJRN) passou a fazer uso do sistema PJe ??? Processo Judicial Eletr??nico. O projeto piloto do PJe foi implantado nos 1?? e 2?? Juizados Especiais C??veis da Zona Sul em Natal.</p>

 

<p>Hist??rico </p>

<p>A hist??ria do sistema Processo Judicial eletr??nico (PJe) ?? bem recente, mas nem por isso representa desconforto para sua ado????o. O seu marco inicial, na realidade foi uma retomada, pelo CNJ, em setembro de 2009, do projeto inicial dos cinco Tribunais Regionais Federais (TRF's), a partir da continuidade do TRF da 5a. Regi??o, sediado em Recife/PE.</p>

<p>Com o compartilhamento da experi??ncia do TRF da 5a. Regi??o, foi constatado que ali existia um projeto propenso ao ??xito, pois tinha como fundamentos: um modelo de arquitetura em fluxos configur??veis, a utiliza????o de software aberto e a garantia da reten????o do conhecimento no Judici??rio, requisitos at?? ent??o n??o adotados. Logo foi firmado um conv??nio entre os cinco tribunais federais.</p>

<p>Em pouco tempo novos parceiros foram agregados ao PJe, em uma grande rede formada pelo CNJ, pelo Conselho Superior da Justi??a do Trabalho e pelo Tribunal Superior do Trabalho, que incorporou todos os Tribunais Regionais do Trabalho (TRT's). Fechando a rede PJe, tamb??m firmaram conv??nio 16 tribunais de justi??a estaduais e o Tribunal de Justi??a Militar de Minas Gerais.</p>

<p>Em abril de 2010, na Subse????o Judici??ria de Natal/RN, vinculada ao TRF da 5a. Regi??o, foi implantada a primeira vers??o do PJe. A dissemina????o foi r??pida e outras Subse????es do TRF da 5a. Regi??o receberam o PJe. J?? em dezembro de 2010, a primeira vers??o nacional foi implantada no Tribunal de Justi??a de Pernambuco e no Tribunal Regional Federal da 3a. Regi??o.</p>

 

<p>Principais Caracter??sticas</p>

<p>A seguir s??o apresentadas algumas caracter??sticas que sinalizam para a quebra de paradigmas com a implanta????o do sistema Processo Judicial eletr??nico (PJe):</p>

<p>Fluxos Configur??veis: Representa o meio termo entre o engessamento total e a liberdade absoluta. A altera????o dos fluxos para definir os caminhos n??o depende da interven????o dos profissionais de Tecnologia da Informa????o (TI), para efetuar as constantes manuten????es no sistema, mas podem ser realizadas por um servidor com conhecimento especializado em processo judicial.</p>

<p>Ato e Movimento integrados: Ato e movimento ocorrem de forma paralela. O tempo de lan??amento da movimenta????o ?? eliminado e, consequentemente, gera um benef??cio ?? tramita????o do processo.</p>

<p>Inova????o para o Processo Criminal: A partir da cria????o de um grupo espec??fico criado no CNJ, foram elaboradas novas funcionalidades que permitem o controle mais efetivo e abrangem todo o processo criminal. V??rias informa????es s??o armazenadas individualmente e de forma detalhada, al??m da facilidade da emiss??o de certid??es nacionais e do interc??mbio de informa????es.</p>

<p>Liberdade de Uso com Seguran??a: Garantia, com precis??o, do que pode ser acessado por um usu??rio, sem a necessidade de interven????o da TI.</p>

<p>M??ltiplos Perfis: Um usu??rio pode ter mais de um perfil, possibilitando a otimiza????o dos recursos humanos.</p>

<p>Modelo de Documentos: Facilidade na automa????o dos fluxos processuais com a classifica????o dos modelos de documentos e da ado????o de taxonomia de tipos de documentos.</p>

<p>Editor de Texto Incorporado ao Sistema: Possibilita menor custo com aquisi????o de editor de texto propriet??rio, menor espa??o de armazenamento, maior velocidade de acesso e facilidade de indexa????o.</p>

<p>Dupla Facilidade de Visualiza????o do Processo: Maior produtividade com o visualizador que mostra as pe??as sequencialmente, com uso de dois monitores nos computadores e apresenta????o de metadados.</p>

<p>Ajuda Colaborativa e Intuitiva: Ao acessar a ajuda ?? mostrado o texto referente a p??gina que estava sendo utilizada no momento da solicita????o. O texto da ajuda pode ser editado por usu??rios devidamente autorizados.</p>

<p>Ferramenta de Busca: Pesquisa de dados como ocorre nas ferramentas de buscas existentes, de forma r??pida e eficiente.</p>

<p>Auditoria: Registro de todas das opera????es ocorridas no sistema.</p>

<p>Unifica????o de Tabelas: As tabelas unificadas nacionais permitem padroniza????o e diminuem o retrabalho.</p>

<p>Transpar??ncia na Distribui????o dos Processos: Distribui????o objetiva, a partir de um conjunto de fatores, contemplando as mais variadas hip??teses, possibilitando medir o trabalho decorrente do processo.</p>

<p>Assinatura Digital: Uso de assinatura digital certificada pela ICP-Brasil, garantindo a seguran??a do processo judicial eletr??nico.</p>

<p>Replica????o Autom??tica: Atualiza????o de forma autom??tica de informa????es na base do CNJ, sem necessidade de alocar servidores e outros recursos.</p>

<p>Integra????o com Outros Sistemas: Possibilidade futura de integra????o com outros sistemas, atrav??s de comunica????o realizada exclusivamente por meio eletr??nico.</p>

 

<p>Utiliza????o do PJe pelo Poder Judici??rio</p>

<p>O sistema Processo Judicial eletr??nico (PJe) ?? o sistema padr??o de toda a Justi??a Federal e j?? est?? em implanta????o em todos os TRT's, al??m de contar com a ades??o de 20 Tribunais Estaduais de Justi??a e de 2 Tribunais de Justi??a Militar.</p>

<p>A premissa no processo de implanta????o e utiliza????o do PJe ?? o trabalho que deve ser realizado de parametriza????o e configura????o, que demanda um tempo inicial para o piloto, mas que depois de configurado sua replica????o ocorre de forma r??pida.</p>

<p>No Tribunal de Justi??a de Pernambuco, o PJe j?? ?? utilizado em 23 dos 25 juizados especiais de Recife e em 5 juizados especiais das Comarcas de Olinda, Paulista e Cabo de Santo Agostinho. No Tribunal de Justi??a da Para??ba est?? presente em 10 Varas.</p>

<p>No TRT da 21a. Regi??o, sediado em Natal, o PJe j?? funciona na Vara de Trabalho de Goianinha e nas tr??s Varas de Trabalho de Mossor??. Tamb??m funciona nos mandados de seguran??a que tramitam na 2a. Inst??ncia, o que, segundo informa????es do pr??prio TRT tem agilizado o andamento processual das A????es e reduzido o tempo de solu????o dos processos.</p>

<p>A utiliza????o do PJe em Segunda Inst??ncia tamb??m ?? poss??vel e ocorre atrav??s de configura????o e parametriza????o. O TRF da 5a. Regi??o, sediado em Recife, j?? utiliza em seu colegiado e o TJ/PE tamb??m ir?? utilizar, al??m, claro, do pr??prio CNJ, que usar?? nas turmas e colegiado.</p>
    `,
    lastUpdate: '',
  },
  {
    pid: 1,
    title: 'Documentos',
    subtitle: '',
    content: `
    <strong><p>Documentos Legais</p></strong>
    <br/>
    <p>O Processo Judicial eletr??nico (PJe) ?? regulamentado pela Lei 11.419/2006 e foi desenvolvido pelo Conselho Nacional de Justi??a (CNJ) com o objetivo de padronizar e unificar todas as informa????es e atos processuais, nas esferas das justi??as federal, estadual, militar e do trabalho, em todo o pa??s, tornando a consulta processual mais f??cil e ??gil.</p>`,
    lastUpdate: ''
  },
  {
    pid: 2,
    title: 'Comarcas Contempladas',
    subtitle: '',
    content: ``,
    lastUpdate: ''
  },
  {
    pid: 3,
    title: 'Empresas/??rg??os P??blicos',
    subtitle: '',
    content: ``,
    lastUpdate: ''
  },
  {
    pid: 4,
    title: 'Munic??pios - Procuradorias',
    subtitle: '',
    content: ``,
    lastUpdate: ''
  },
  {
    pid: 5,
    title: 'V??deos tutoriais e manuais - 1?? Grau',
    subtitle: '',
    content: ``,
    lastUpdate: ''
  },
  {
    pid: 6,
    title: 'V??deos tutoriais e manuais - 2?? Grau',
    subtitle: '',
    content: ``,
    lastUpdate: ''
  },

]