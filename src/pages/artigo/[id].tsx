import { GetServerSideProps } from 'next';
import parse from 'html-react-parser';
import {convert} from 'html-to-text';
import PageTitle, { BreadCrumbProps } from '../../components/PageTitle';
import PageContentList from '../../components/Article/PageContentList';
import AreaTitle from '../../components/Home/AreaTitle';
import ContainerBox from '../../components/ContainerBox';
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
  const contentheader2 = content.matchAll(new RegExp('<h2>([a-z]|[A-Z]|[0-9]|\x20|[\xC0-\xFF]|\-)+</h2>', 'g'));

  const pageTitles = Array.from(contentheader2, value => value[0].substring(4, value[0].length-5));

  let headerIndex = -1;

  while (content.search('<h2>') != -1) {
    content = content.replace('<h2>', () => {
        headerIndex++;
        return `<h2 id="${headerIndex}">`
    })
  }

  return (
    <>
      <PageTitle title={title} breadCrumbArray={breadcrumblist} showTitle={false}/>
      <ContainerBox mt='56px' sx={{'@media print': {display: 'block'}}}>
        <SimpleGrid columns={{base: 1, md: 12}} spacingX='24px'>
          <GridItem colSpan={{base: 1, md: 3}}>
            <Article rootLabel='Adoção' rootLink='#' linkList={linkList} lastUpdate={lastUpdate} listOfContentToRead={['Título: ' + title, 'Subtítulo: ' + subtitle, 'Corpo:' + convert(content)]}/>
          </GridItem>
          <GridItem colSpan={1}></GridItem>
          <GridItem colSpan={{base: 1, md: 8, lg: 7}}>
            <AreaTitle title={title} subtitle={subtitle}/>
            <PageContentList headers={pageTitles}/>
            {parse(content)}
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
                Um de nossos voluntários poderá tirar suas dúvidas e você poderá escolher participar da família Acalanto.</p>`,
        linkList: [link0,link1,link2],
        breadcrumblist: [breadcrumb1, breadcrumb2]
    }
  }
}

const breadcrumb1 = {label: 'Infância, Juventude e Família', link: '/menu/2'}
const breadcrumb2 = {label: 'Adoção', link: '/menu/10'}

const link0={label: 'Como adotar', link: '/artigo/1'}
const link1={label: 'Apadrinhamento', link: '/artigo/2'}
const link2={label: 'Dar filho para adoção', link: '/artigo/3'}