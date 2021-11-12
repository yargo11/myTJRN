import { GetServerSideProps } from 'next';
import ContainerBox from '../components/ContainerBox';
import AreaTitle from '../components/Content/AreaTitle';
import parse from 'html-react-parser';
import PageContent from '../components/Content/PageContent';

interface PageProps {
    title: string,
    subtitle: string,
    content: string
}
export default function Page({title, subtitle, content}:PageProps) {

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
    <ContainerBox>
      <AreaTitle title={title} subtitle={subtitle}/>
      <PageContent headers={pageTitles}/>
      {parse(content)}
    </ContainerBox>
  );
}


export const getServerSideProps: GetServerSideProps = async () => {
  //const { id } = context.query;
  //const noticia = await (await apinoticia.get('elemento/' + id)).data;
  return {
    props: {
      title: 'Como adotar',
      subtitle: 'Na adoção uma criança ou adolescente é acolhido por uma família, passando a ser filho ou filha na sua integralidade.',
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
