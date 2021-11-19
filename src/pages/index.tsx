import { Center, SimpleGrid } from "@chakra-ui/react"
import ContainerBox from "../components/ContainerBox"
import Agenda from "../components/Home/Agenda"
import News from "../components/Home/News"
import NewsLetter from "../components/Home/NewsLetter"
import Productivity from "../components/Home/Productivity"
import Search from "../components/Home/Search"
import ServiceAndInformation from "../components/Home/ServiceAndInformation"
export default function Home() {

  return (
    <>
      <Search />
      <ServiceAndInformation />
      <News />
      <ContainerBox pt='80px' pb='112px'>
        <SimpleGrid columns={[1, 1, 2]} justifyContent='center' spacing='134px' >
          <Productivity/>
          <Agenda />
        </SimpleGrid>
      </ContainerBox>
      <NewsLetter />
    </>
  )
}