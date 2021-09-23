import News from "../components/Home/News"
import Pjrn from "../components/Home/Pjrn"
import Search from "../components/Home/Search"
import ServiceAndInformation from "../components/Home/ServiceAndInformation"
export default function Home() {
  return (
    <>
      <Search />
      <ServiceAndInformation />
      <News />
      <Pjrn />
    </>
  )
}