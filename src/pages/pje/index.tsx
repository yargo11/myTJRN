import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import PageTitle from '../../components/PageTitle';
import PageContentList from '../../components/Article/PageContentList';
import AreaTitle2 from '../../components/Home/AreaTitle2';
import ContainerBox from '../../components/ContainerBox';
import { Box, Flex, GridItem, SimpleGrid, Spacer, useBreakpointValue, Text, AvatarProps } from '@chakra-ui/react';
import Article from '../../components/Aside/Article';
import Coordenadoria from '../../components/Coordenadoria/IntroCoord';
import MenuCoord from '../../components/Coordenadoria/MenuCoord';
import Warnings from '../../components/Warnings';


interface PageProps {
  title: string,
  subtitle: string,
  content: string
  lastUpdate: string
}

export default function Page({ title, subtitle, content, lastUpdate }: PageProps) {

  const router = useRouter()
  const { id } = router.query

  const linkList = linksInfo

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
      <PageTitle
        title='Processo Judicial Eletrônico - PJe'
        description='Informações sobre o que é o poder judiciário, sua história, como se estrutura e seu funionamento etc etc etc etc etc etc etcetcetcetcetcetcetcetcetc etc'
        showTitle={true}
        breadCrumbArray={breadcrumblist}
      />
      <MenuCoord linkList={linksInfo} subMenu={subMenu} />
      <ContainerBox mt='56px' sx={{ '@media print': { display: 'block' } }}>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacingX='30px'>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Coordenadoria
              coordenacao={basicInfo.coordenacao}
              contato={basicInfo.contato}
              email={basicInfo.email}
              telefone={basicInfo.telefone}
              lastUpdate={lastUpdate}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <AreaTitle2 title='Apresentação' subtitle={introInfo.about} />
            {/* <AreaTitle2 title='Projetos' subtitle={introInfo.projects} />
            <AreaTitle2 title='Varas Especializadas' subtitle={introInfo.specialized_rods} /> */}
            <Warnings warnings={warnings} />


            {/* <AreaTitle title={pje[Number(id)].title} subtitle={pje[Number(id)].subtitle} /> */}
            {/* <PageContentList headers={pageTitles} /> */}
            {/* <Text>{parse(pje[Number(id)].content)}</Text> */}
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
      content: ``
    }
  }
}


const breadcrumbpje1 = { label: 'PJE', link: '#' }

const linksInfo = [
  { label: 'Início', link: '/pje/0' },
  { label: 'PJe - Primeiro grau', link: '/pje/pje1grau' },
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

const basicInfo = {
  coordenacao: 'FATIMA MARIA COSTA SOARES DE LIMA',
  contato: 'Av. duqe de caxias, 151, 3 andar, ribeira, natal rn',
  email: 'secretariageral@jtnr.jus.br',
  telefone: '+55 84 3673-9216'
}

const warnings = [{
  warning: 'O cadastro dos advogados no PJe deverá ser feito diretamente ao entrar no sistema, via certificado digital.',
},
{ warning: 'A habilitação do segundo advogado, de qualquer parte, tem que ser solicitada ao Juizado e/ou Vara em que o processo tramite.' },
{ warning: 'Em conformidade com a Portaria n° 392/2014-TJ, informoamos que os processos que estão em fase de Cumprimento de Sentença devem ser cadastrados no PJe, utilizando a classe CUMPRIMENTO DE SENTENÇA.' }
]

const introInfo = {
  about: `O PJe tem como premissa básica ofertar um sistema de informação "capaz de permitir a prática de atos processuais pelos magistrados, servidores e demais participantes da relação processual diretamente no sistema, assim como o acompanhamento desse processo judicial, independentemente de o processo tramitar na Justiça Federal, na Justiça dos Estados, na Justiça Militar dos Estados e na Justiça do Trabalho".
  Entretanto, a adoção do PJe vai mais longe e se apresenta como uma ferramenta robusta, fundamentada em requisitos de segurança e interoperabilidade, que proporcionará aos tribunais grande racionalização de gastos com aquisição e manutenção de softwares, podendo direcionar parte dos recursos financeiros para suas atividades finalísticas.
  Assim, é possível constatar a dimensão do Sistema Processo Judicial Eletrônico (PJe) – projeto do Conselho Nacional de Justiça (CNJ) – e sua importância para o Poder Judiciário brasileiro.
  A partir do dia 16 de maio de 2013, o Tribunal de Justiça do Rio Grande do Norte (TJRN) passou a fazer uso do sistema PJe – Processo Judicial Eletrônico. O projeto piloto do PJe foi implantado nos 1º e 2º Juizados Especiais Cíveis da Zona Sul em Natal.`,
  projects: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nulla, egestas ut nisi quis, dictum consequat lorem. Suspendisse nulla diam, viverra cursus arcu quis, varius laoreet risus. Sed sed fermentum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam gravida tellus ac vulputate tempus. Morbi nec auctor tortor. Maecenas placerat felis eget quam maximus pharetra. Nam viverra ultricies ex at elementum. Aenean non cursus dui. Suspendisse egestas viverra.',
  specialized_rods: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque neque nulla, egestas ut nisi quis, dictum consequat lorem. Suspendisse nulla diam, viverra cursus arcu quis, varius laoreet risus. Sed sed fermentum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam gravida tellus ac vulputate tempus. Morbi nec auctor tortor. Maecenas placerat felis eget quam maximus pharetra. Nam viverra ultricies ex at elementum. Aenean non cursus dui. Suspendisse egestas viverra.'
}

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