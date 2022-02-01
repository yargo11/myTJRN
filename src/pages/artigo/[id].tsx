import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import PageTitle from '../../components/PageTitle';
import PageContentList from '../../components/Article/PageContentList';
import AreaTitle from '../../components/Home/AreaTitle';
import ContainerBox from '../../components/ContainerBox';
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

  const contentheader2 = content.matchAll(new RegExp('<h2>([a-z]|[A-Z]|[0-9]|\x20|[\xC0-\xFF]|\-)+</h2>', 'g'));

  const pageTitles = Array.from(contentheader2, value => value[0].substring(4, value[0].length - 5));

  let headerIndex = -1;

  while (content.search('<h2>') != -1) {
    content = content.replace('<h2>', () => {
      headerIndex++;
      return `<h2 id="${headerIndex}">`
    })
  }

  return (
    <>
      <PageTitle title={pje[Number(id)].title} breadCrumbArray={breadcrumblist} showTitle={false} />
      <ContainerBox mt='56px' sx={{ '@media print': { display: 'block' } }}>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacingX='30px'>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Article rootLabel={breadcrumbpje1.label} rootLink='#' linkList={linkList} lastUpdate={pje[Number(id)].lastUpdate} />
          </GridItem>
          <GridItem colSpan={2}>
            <AreaTitle title={pje[Number(id)].title} subtitle={pje[Number(id)].subtitle} />
            <PageContentList headers={pageTitles} />
            <Text>{parse(pje[Number(id)].content)}</Text>
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
      subtitle: 'Na adoção uma criança ou adolescente é acolhido por uma família, passando a ser filho ou filha na sua integralidade.',
      lastUpdate: '2021-12-03T14:38:51-0300',
      content: `<h2>Visão geral</h2>
                <p>A adoção começa no desejo de formar uma família, de acolher e ser acolhido(a). 
                Os trâmites legais são fundamentais para a segurança de crianças, adolescentes e futuros pais e mães, mas o preparo emocional e a rede de apoio também são fundamentais! 
                Por isso, depois (ou antes!) de ler estas orientações, você pode entrar em contato conosco pelo nosso Whatsapp, (84) 99117-7732 e marcar um atendimento. 
                Um de nossos voluntários poderá tirar suas dúvidas e você poderá escolher participar da família Acalanto.</p>
                <h2>Pré-cadastro</h2>
                <p>A adoção começa no desejo de formar uma família, de acolher e ser acolhido(a). 
                Os trâmites legais são fundamentais para a segurança de crianças, adolescentes e futuros pais e mães, mas o preparo emocional e a rede de apoio também são fundamentais! 
                Por isso, depois (ou antes!) de ler estas orientações, você pode entrar em contato conosco pelo nosso Whatsapp, (84) 99117-7732 e marcar um atendimento. 
                Um de nossos voluntários poderá tirar suas dúvidas e você poderá escolher participar da família Acalanto.</p>
                <h2>Documentação</h2>
                <p>A adoção começa no desejo de formar uma família, de acolher e ser acolhido(a). 
                Os trâmites legais são fundamentais para a segurança de crianças, adolescentes e futuros pais e mães, mas o preparo emocional e a rede de apoio também são fundamentais! 
                Por isso, depois (ou antes!) de ler estas orientações, você pode entrar em contato conosco pelo nosso Whatsapp, (84) 99117-7732 e marcar um atendimento. 
                Um de nossos voluntários poderá tirar suas dúvidas e você poderá escolher participar da família Acalanto.</p>
                <h2>Curso preparatório</h2>
                <p>A adoção começa no desejo de formar uma família, de acolher e ser acolhido(a). 
                Os trâmites legais são fundamentais para a segurança de crianças, adolescentes e futuros pais e mães, mas o preparo emocional e a rede de apoio também são fundamentais! 
                Por isso, depois (ou antes!) de ler estas orientações, você pode entrar em contato conosco pelo nosso Whatsapp, (84) 99117-7732 e marcar um atendimento. 
                Um de nossos voluntários poderá tirar suas dúvidas e você poderá escolher participar da família Acalanto.</p>`
    }
  }
}

const breadcrumb1 = { label: 'Infância, Juventude e Família', link: '/menu/2' }
const breadcrumb2 = { label: 'Adoção', link: '/menu/10' }

const breadcrumbpje1 = { label: 'PJE', link: '#' }

// const link0 = { label: 'Como adotar', link: '/artigo/0' }
// const link1 = { label: 'Apadrinhamento', link: '/artigo/1' }
// const link2 = { label: 'Dar filho para adoção', link: '/artigo/2' }
// const link3 = { label: 'PJE', link: '/artigo/3' }



const pjeLinks = [
  { label: 'Apresentação', link: '/artigo/0' },
  { label: 'Documentos', link: '/artigo/1' },
  { label: 'Comarcas Contempladas', link: '/artigo/2' },
  { label: 'Empresas/Órgãos Públicos', link: '/artigo/pje/empresas' },
  { label: 'Municípios - Produradorias', link: '/artigo/4' },
  { label: 'Vídeos tutoriais e manuais - 1º Grau', link: '/artigo/pje/1grau' },
  { label: 'Vídeos tutoriais e manuais - 2º Grau', link: '/artigo/pje/2grau' },
]

// const pjeLinks2 = [
//   { label: 'Apresentação1', link: '/artigo/0' },
//   { label: 'Documentos1', link: '/artigo/1' },
//   { label: 'Comarcas Contem1pladas', link: '/artigo/2' },
//   { label: 'Empresas/Ó1rgãos Públicos', link: '/artigo/3' },
//   { label: 'Municípios - Produ1radorias', link: '/artigo/4' },
// ]

// const lista_de_links = [
//   pjeLinks,
//   pjeLinks2
// ]


const pje = [
  {
    pid: 0,
    title: 'Apresentação',
    subtitle: '',
    content: `
    <p><strong>Apresentação</strong></p>
 
<p>O PJe tem como premissa básica ofertar um sistema de informação 'capaz de permitir a prática de atos processuais pelos magistrados, servidores e demais participantes da relação processual diretamente no sistema, assim como o acompanhamento desse processo judicial, independentemente de o processo tramitar na Justiça Federal, na Justiça dos Estados, na Justiça Militar dos Estados e na Justiça do Trabalho'.</p>

<p>Entretanto, a adoção do PJe vai mais longe e se apresenta como uma ferramenta robusta, fundamentada em requisitos de segurança e interoperabilidade, que proporcionará aos tribunais grande racionalização de gastos com aquisição e manutenção de softwares, podendo direcionar parte dos recursos financeiros para suas atividades finalísticas.</p>

<p>Assim, é possível constatar a dimensão do Sistema Processo Judicial Eletrônico (PJe) – projeto do Conselho Nacional de Justiça (CNJ) – e sua importância para o Poder Judiciário brasileiro.</p>

<p>A partir do dia 16 de maio de 2013, o Tribunal de Justiça do Rio Grande do Norte (TJRN) passou a fazer uso do sistema PJe – Processo Judicial Eletrônico. O projeto piloto do PJe foi implantado nos 1º e 2º Juizados Especiais Cíveis da Zona Sul em Natal.</p>

 

<p>Histórico </p>

<p>A história do sistema Processo Judicial eletrônico (PJe) é bem recente, mas nem por isso representa desconforto para sua adoção. O seu marco inicial, na realidade foi uma retomada, pelo CNJ, em setembro de 2009, do projeto inicial dos cinco Tribunais Regionais Federais (TRF's), a partir da continuidade do TRF da 5a. Região, sediado em Recife/PE.</p>

<p>Com o compartilhamento da experiência do TRF da 5a. Região, foi constatado que ali existia um projeto propenso ao êxito, pois tinha como fundamentos: um modelo de arquitetura em fluxos configuráveis, a utilização de software aberto e a garantia da retenção do conhecimento no Judiciário, requisitos até então não adotados. Logo foi firmado um convênio entre os cinco tribunais federais.</p>

<p>Em pouco tempo novos parceiros foram agregados ao PJe, em uma grande rede formada pelo CNJ, pelo Conselho Superior da Justiça do Trabalho e pelo Tribunal Superior do Trabalho, que incorporou todos os Tribunais Regionais do Trabalho (TRT's). Fechando a rede PJe, também firmaram convênio 16 tribunais de justiça estaduais e o Tribunal de Justiça Militar de Minas Gerais.</p>

<p>Em abril de 2010, na Subseção Judiciária de Natal/RN, vinculada ao TRF da 5a. Região, foi implantada a primeira versão do PJe. A disseminação foi rápida e outras Subseções do TRF da 5a. Região receberam o PJe. Já em dezembro de 2010, a primeira versão nacional foi implantada no Tribunal de Justiça de Pernambuco e no Tribunal Regional Federal da 3a. Região.</p>

 

<p>Principais Características</p>

<p>A seguir são apresentadas algumas características que sinalizam para a quebra de paradigmas com a implantação do sistema Processo Judicial eletrônico (PJe):</p>

<p>Fluxos Configuráveis: Representa o meio termo entre o engessamento total e a liberdade absoluta. A alteração dos fluxos para definir os caminhos não depende da intervenção dos profissionais de Tecnologia da Informação (TI), para efetuar as constantes manutenções no sistema, mas podem ser realizadas por um servidor com conhecimento especializado em processo judicial.</p>

<p>Ato e Movimento integrados: Ato e movimento ocorrem de forma paralela. O tempo de lançamento da movimentação é eliminado e, consequentemente, gera um benefício à tramitação do processo.</p>

<p>Inovação para o Processo Criminal: A partir da criação de um grupo específico criado no CNJ, foram elaboradas novas funcionalidades que permitem o controle mais efetivo e abrangem todo o processo criminal. Várias informações são armazenadas individualmente e de forma detalhada, além da facilidade da emissão de certidões nacionais e do intercâmbio de informações.</p>

<p>Liberdade de Uso com Segurança: Garantia, com precisão, do que pode ser acessado por um usuário, sem a necessidade de intervenção da TI.</p>

<p>Múltiplos Perfis: Um usuário pode ter mais de um perfil, possibilitando a otimização dos recursos humanos.</p>

<p>Modelo de Documentos: Facilidade na automação dos fluxos processuais com a classificação dos modelos de documentos e da adoção de taxonomia de tipos de documentos.</p>

<p>Editor de Texto Incorporado ao Sistema: Possibilita menor custo com aquisição de editor de texto proprietário, menor espaço de armazenamento, maior velocidade de acesso e facilidade de indexação.</p>

<p>Dupla Facilidade de Visualização do Processo: Maior produtividade com o visualizador que mostra as peças sequencialmente, com uso de dois monitores nos computadores e apresentação de metadados.</p>

<p>Ajuda Colaborativa e Intuitiva: Ao acessar a ajuda é mostrado o texto referente a página que estava sendo utilizada no momento da solicitação. O texto da ajuda pode ser editado por usuários devidamente autorizados.</p>

<p>Ferramenta de Busca: Pesquisa de dados como ocorre nas ferramentas de buscas existentes, de forma rápida e eficiente.</p>

<p>Auditoria: Registro de todas das operações ocorridas no sistema.</p>

<p>Unificação de Tabelas: As tabelas unificadas nacionais permitem padronização e diminuem o retrabalho.</p>

<p>Transparência na Distribuição dos Processos: Distribuição objetiva, a partir de um conjunto de fatores, contemplando as mais variadas hipóteses, possibilitando medir o trabalho decorrente do processo.</p>

<p>Assinatura Digital: Uso de assinatura digital certificada pela ICP-Brasil, garantindo a segurança do processo judicial eletrônico.</p>

<p>Replicação Automática: Atualização de forma automática de informações na base do CNJ, sem necessidade de alocar servidores e outros recursos.</p>

<p>Integração com Outros Sistemas: Possibilidade futura de integração com outros sistemas, através de comunicação realizada exclusivamente por meio eletrônico.</p>

 

<p>Utilização do PJe pelo Poder Judiciário</p>

<p>O sistema Processo Judicial eletrônico (PJe) é o sistema padrão de toda a Justiça Federal e já está em implantação em todos os TRT's, além de contar com a adesão de 20 Tribunais Estaduais de Justiça e de 2 Tribunais de Justiça Militar.</p>

<p>A premissa no processo de implantação e utilização do PJe é o trabalho que deve ser realizado de parametrização e configuração, que demanda um tempo inicial para o piloto, mas que depois de configurado sua replicação ocorre de forma rápida.</p>

<p>No Tribunal de Justiça de Pernambuco, o PJe já é utilizado em 23 dos 25 juizados especiais de Recife e em 5 juizados especiais das Comarcas de Olinda, Paulista e Cabo de Santo Agostinho. No Tribunal de Justiça da Paraíba está presente em 10 Varas.</p>

<p>No TRT da 21a. Região, sediado em Natal, o PJe já funciona na Vara de Trabalho de Goianinha e nas três Varas de Trabalho de Mossoró. Também funciona nos mandados de segurança que tramitam na 2a. Instância, o que, segundo informações do próprio TRT tem agilizado o andamento processual das Ações e reduzido o tempo de solução dos processos.</p>

<p>A utilização do PJe em Segunda Instância também é possível e ocorre através de configuração e parametrização. O TRF da 5a. Região, sediado em Recife, já utiliza em seu colegiado e o TJ/PE também irá utilizar, além, claro, do próprio CNJ, que usará nas turmas e colegiado.</p>
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
    <p>O Processo Judicial eletrônico (PJe) é regulamentado pela Lei 11.419/2006 e foi desenvolvido pelo Conselho Nacional de Justiça (CNJ) com o objetivo de padronizar e unificar todas as informações e atos processuais, nas esferas das justiças federal, estadual, militar e do trabalho, em todo o país, tornando a consulta processual mais fácil e ágil.</p>`,
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
    title: 'Empresas/Órgãos Públicos',
    subtitle: '',
    content: ``,
    lastUpdate: ''
  },
  {
    pid: 4,
    title: 'Municípios - Procuradorias',
    subtitle: '',
    content: ``,
    lastUpdate: ''
  },
  {
    pid: 5,
    title: 'Vídeos tutoriais e manuais - 1º Grau',
    subtitle: '',
    content: ``,
    lastUpdate: ''
  },
  {
    pid: 6,
    title: 'Vídeos tutoriais e manuais - 2º Grau',
    subtitle: '',
    content: ``,
    lastUpdate: ''
  },

]