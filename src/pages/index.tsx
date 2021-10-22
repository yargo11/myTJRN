import News from "../components/Home/News"
import NewsLetter from "../components/Home/NewsLetter"
import Search from "../components/Home/Search"
import ServiceAndInformation from "../components/Home/ServiceAndInformation"
export default function Home() {

  return (
    <>
      <Search />
      <ServiceAndInformation />
      <News />
      <NewsLetter />
    </>
  )
}