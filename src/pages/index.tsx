import { Box, SimpleGrid } from "@chakra-ui/react"
import ContainerBox from "../components/ContainerBox"
import Agenda from "../components/Home/Agenda"
import News, { CategoryProps } from "../components/Home/News"
import NewsLetter from "../components/Home/NewsLetter"
import PJRN from "../components/Home/PJRN"
import Productivity from "../components/Home/Productivity"
import Search from "../components/Home/Search"
import ServiceAndInformation from "../components/Home/ServiceAndInformation"
import Info from "../components/Home/Info"
import { GetServerSideProps } from 'next';
import { NewsCardProps } from "../components/NewsList/NewsCard"

interface HomePropsInterface {
  newsList: Array<NewsCardProps>
  categoryList: Array<CategoryProps>
}

export default function Home({ newsList, categoryList }: HomePropsInterface) {
  const eventList = [event0, event1, event2];
  const serviceList = [service0, service1, service2, service3, service4, service5, service6, service7, service8, service9, service10, service11, service12, service13, service14, service15];
  const calendar = { weekday:'TER', monthday:19, month:'OUT'};
  return (
    <>
      <Search />
      <ServiceAndInformation serviceList={serviceList}/>
      <News newsList={newsList} categoryList={categoryList}/>
      <PJRN />
      <Info />
      <Box w='full' bgColor='#fff'>
        <ContainerBox pt='80px' pb='112px'>
          <SimpleGrid columns={[1, 1, 2]} justifyContent='center' spacingX='134px' spacingY='50px'>
            <Productivity/>
            <Agenda calendar={calendar} eventList={eventList}/>
          </SimpleGrid>
        </ContainerBox>
      </Box>
      <NewsLetter />
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  let newsApiResult = await ((await fetch(`${process.env.BACKEND_URL}noticias/home?noticia-size=4&assuntos-size=4`, {
    method: 'GET'
  })).json())

  
  return {
    props: {
      newsList: newsApiResult.noticias,
      categoryList: newsApiResult.assuntos
    },
  }
}

const event0 = {label: 'Sessão da Terceira Câmara Cível', type: 'Ordinária', link:'#'}
const event1 = {label: 'Sessão da Primeira Câmara Cível', type: 'Ordinária', link:'#'}
const event2 = {label: 'Sessão da Câmara Criminal', type: 'Ordinária', link:'#'}

const service0 = {id:0, label: 'Consultas na justiça', description: 'Conheça seus direitos, processos legais, tribunais e mais', link: '#'}
const service1 = {id:1, label: 'Produtos do Tribunal', description: 'Acórdãos, Decisões, Pareceres, Relatórios, Sentenças e mais', link: '#'}
const service2 = {id:2, label: 'Infância, Juventude e Família', description: 'Imperdiet vitae volutpat adipiscing elit tellus commodo.', link: '#'}
const service3 = {id:3, label: 'Seus direitos e a lei', description: 'Aliquet suspendisse neque vulputate sed nunc diam.', link: '#'}
const service4 = {id:4, label: 'Viagens, Transporte e Trânsito', description: 'Massa sit cursus sed sed sit libero non rhoncus.', link: '#'}
const service5 = {id:5, label: 'Crime e punição', description: 'Massa sit cursus sed sed sit libero non rhoncus.', link: '#'}
const service6 = {id:6, label: 'Mediação de conflitos e disputa', description: 'Nunc et, ac et platea ornare nunc aliquet faucibus.', link: '#'}
const service7 = {id:7, label: 'Segurança, crimes e prisões', description: 'Iaculis amet, mattis dictumst nisi, quis cursus risus mattis velit.', link: '#'}
const service8 = {id:8, label: 'Est egestas nunc', description: 'Augue donec vestibulum ultricies neque dolor scelerisque ullamcorper.', link: '#'}
const service9 = {id:9, label: 'Egestas a nunct', description: 'Commodo, condimentum mauris vel accumsan nunc non nunc.', link: '#'}
const service10 = {id:10, label: 'Produtos do Tribunal', description: 'Acórdãos, Decisões, Pareceres, Relatórios, Sentenças e mais', link: '#'}
const service11 = {id:11, label: 'Viagens, Transporte e Trânsito', description: 'Massa sit cursus sed sed sit libero non rhoncus.', link: '#'}
const service12 = {id:12, label: 'Segurança, crimes e prisões', description: 'Iaculis amet, mattis dictumst nisi, quis cursus risus mattis velit.', link: '#'}
const service13 = {id:13, label: 'Produtos do Tribunal', description: 'Acórdãos, Decisões, Pareceres, Relatórios, Sentenças e mais', link: '#'}
const service14 = {id:14, label: 'Infância, Juventude e Família', description: 'Imperdiet vitae volutpat adipiscing elit tellus commodo.', link: '#'}
const service15 = {id:15, label: 'Consultas na justiça', description: 'Conheça seus direitos, processos legais, tribunais e mais', link: '#'}