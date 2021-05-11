import { SearchBanner } from '../components/HomeComponents/SearchBanner/index'
import { HomeNews } from '../components/HomeComponents/HomeNews/index'
import { ServicesAndInformations } from '../components/HomeComponents/ServicesAndInformations/index'

export default function Home() {
  return (
    <>
      <SearchBanner />
      <HomeNews />
      <ServicesAndInformations />
    </>
  )
}
