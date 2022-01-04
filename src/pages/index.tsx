import { Box, SimpleGrid } from "@chakra-ui/react"
import ContainerBox from "../components/ContainerBox"
import Agenda from "../components/Home/Agenda"
import News from "../components/Home/News"
import NewsLetter from "../components/Home/NewsLetter"
import PJRN from "../components/Home/PJRN"
import Productivity from "../components/Home/Productivity"
import Search from "../components/Home/Search"
import ServiceAndInformation from "../components/Home/ServiceAndInformation"
import Info from "../components/Home/Info"

export default function Home() {
  const eventList = [event0, event1, event2];
  const newsList = [news0, news1, news2, news3];
  const serviceList = [service0, service1, service2, service3, service4, service5, service6, service7, service8, service9, service10, service11, service12, service13, service14, service15];
  const calendar = { weekday:'TER', monthday:19, month:'OUT'};
  return (
    <>
      <Search />
      <ServiceAndInformation serviceList={serviceList}/>
      <News newsList={newsList}/>
      <PJRN />
      <Info />
      <Box w='full' bgColor='#fff'>
        <ContainerBox pt='80px' pb='112px'>
          <SimpleGrid columns={[1, 1, 2]} justifyContent='center' spacing='134px' >
            <Productivity/>
            <Agenda calendar={calendar} eventList={eventList}/>
          </SimpleGrid>
        </ContainerBox>
      </Box>
      <NewsLetter />
    </>
  )
}

const event0 = {label: 'Sessão da Terceira Câmara Cível', type: 'Ordinária', link:'#'}
const event1 = {label: 'Sessão da Primeira Câmara Cível', type: 'Ordinária', link:'#'}
const event2 = {label: 'Sessão da Câmara Criminal', type: 'Ordinária', link:'#'}

const news0 = {id:0, date:'2019-12-28', title:'CEJAI encessa ano de 2019 com recorde de adoções internacionais', link: '#'}
const news1 = {id:1, date:'2020-01-20', title:'Comarca de Touros seleciona estagiário de pós-graduação em Direito', link: '#'}
const news2 = {id:2, date:'2020-01-17', title:'TJRN divulga edital de seleção temporária com 33 vagas para área de Tecnologia da Informação', link: '#'}
const news3 = {id:3, date:'2019-12-16', title:'Mérito Legislativo: Des. Vivaldo Pinheiro é homenageado pela ALRN', link: '#'}

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