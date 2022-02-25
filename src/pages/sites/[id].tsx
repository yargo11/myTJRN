import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import parse from 'html-react-parser';
import PageTitle from '../../components/PageTitle';
import AreaTitle2 from '../../components/Home/AreaTitle2';
import ContainerBox from '../../components/ContainerBox';
import { Flex, GridItem, SimpleGrid, Spacer, useBreakpointValue, Text, AvatarProps } from '@chakra-ui/react';
import Article from '../../components/Aside/Article';
import Coordenadoria from '../../components/Coordenadoria/IntroCoord';
import MenuCoord from '../../components/Coordenadoria/MenuCoord';
import Warnings from '../../components/Warnings';
import SiteNews from '../../components/SiteNews';
import { pje } from './pjeComponent'

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

  // const linkList = linksInfo

  const breadcrumblist = [breadcrumbpje1];

  const contentheader2 = pje.intro.about.matchAll(new RegExp('<h2>([a-z]|[A-Z]|[0-9]|\x20|[\xC0-\xFF]|\-)+</h2>', 'g'));

  const pageTitles = Array.from(contentheader2, value => value[0].substring(4, value[0].length - 5));

  let headerIndex = -1;

  while (pje.intro.about.search('<h2>') != -1) {
    content = content.replace('<h2>', () => {
      headerIndex++;
      return `<h2 id="${headerIndex}">`
    })
  }

  return (
    <>
      <PageTitle
        title={pje.title}
        description='Informações sobre o que é o poder judiciário, sua história, como se estrutura e seu funionamento etc etc etc etc etc etc etcetcetcetcetcetcetcetcetc etc'
        showTitle={true}
        breadCrumbArray={breadcrumblist}
      />
      <MenuCoord linkList={pje.linksInfo} subMenu={pje.subMenu} />
      <ContainerBox mt='56px' sx={{ '@media print': { display: 'block' } }}>
        <SimpleGrid columns={{ base: 2, md: 3 }} spacingX='30px'>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Coordenadoria
              coordenacao={pje.asideInfo.coordenacao}
              contato={pje.asideInfo.contato}
              email={pje.asideInfo.email}
              telefone={pje.asideInfo.telefone}
              lastUpdate={pje.lastUpdate}
            />
          </GridItem>
          <GridItem colSpan={2} maxW='746px'>
            {/* <PageContentList headers={pageTitles} /> */}
            <AreaTitle2 title='Apresentação' subtitle={''} />

            <Text mb="40px">{parse(pje.intro.about)}</Text>

            <Warnings warnings={pje.wanings} />

            <SiteNews linkprops={pje.noticias} />

          </GridItem>
        </SimpleGrid>
      </ContainerBox>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  // const { id } = context.query;
  //const noticia = await (await apinoticia.get('elemento/' + id)).data;
  return {
    props: pje
  }
}

const breadcrumbpje1 = { label: 'PJE', link: '#' }