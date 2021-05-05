import { SearchBanner } from '../components/SearchBanner/index'
import { News } from '../components/News/index'
import { ServicesAndInformations } from '../components/ServicesAndInformations/index'

export default function Home() {
  return (
    <>
      <SearchBanner />
      <News />
      <ServicesAndInformations />
    </>
  )
}
