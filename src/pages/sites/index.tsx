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
import SiteNews from '../../components/SiteNews';


interface PageProps {
  title: string,
  subtitle: string,
  content: string,
  lastUpdate: string,
  linkprops: Array<LinkProps>
}

interface LinkProps {
  title: string;
  link: string;
  lastUpdate: string;
}

export default function Page({ title, subtitle, content, lastUpdate, linkprops }: PageProps) {

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
          <GridItem colSpan={2} maxW='746px'>
            {/* <PageContentList headers={pageTitles} /> */}
            <AreaTitle2 title='Apresentação' subtitle={''} />

            <Text mb="40px">{parse(content)}</Text>

            <Warnings warnings={warnings} />

            <SiteNews linkprops={linkprops} />

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
      content: `
      <p>O PJe tem como premissa básica ofertar um sistema de informação "capaz de permitir a prática de atos processuais pelos magistrados, servidores e demais participantes da relação processual diretamente no sistema, assim como o acompanhamento desse processo judicial, independentemente de o processo tramitar na Justiça Federal, na Justiça dos Estados, na Justiça Militar dos Estados e na Justiça do Trabalho".</p>
      <p>Entretanto, a adoção do PJe vai mais longe e se apresenta como uma ferramenta robusta, fundamentada em requisitos de segurança e interoperabilidade, que proporcionará aos tribunais grande racionalização de gastos com aquisição e manutenção de softwares, podendo direcionar parte dos recursos financeiros para suas atividades finalísticas.</p>
      <p>Assim, é possível constatar a dimensão do Sistema Processo Judicial Eletrônico (PJe) – projeto do Conselho Nacional de Justiça (CNJ) – e sua importância para o Poder Judiciário brasileiro.</p>
      <p>A partir do dia 16 de maio de 2013, o Tribunal de Justiça do Rio Grande do Norte (TJRN) passou a fazer uso do sistema PJe – Processo Judicial Eletrônico. O projeto piloto do PJe foi implantado nos 1º e 2º Juizados Especiais Cíveis da Zona Sul em Natal.</p>
      `,
      linkprops: [
        { title: 'CEJAI encessa ano de 2019 com recorde de adoções internacionais', link: '#', lastUpdated: '08 de Fevereiro de 2022' },
        { title: 'Comarca de Touros seleciona estagiário de pós-graduação em Direito ', link: '#', lastUpdated: '08 de Fevereiro de 2022' },
        { title: 'TJRN divulga edital de seleção temporária com 33 vagas para área de Tecnologia da Informação', link: '#', lastUpdated: '08 de Fevereiro de 2022' },
      ]
    }
  }
}


const breadcrumbpje1 = { label: 'PJE', link: '#' }

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

