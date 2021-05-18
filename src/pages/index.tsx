import { SearchBanner } from '../components/HomeComponents/SearchBanner/index'
import { HomeNews } from '../components/HomeComponents/HomeNews/index'
import { ServicesAndInformations } from '../components/HomeComponents/ServicesAndInformations/index'
import { createApi } from '../../test/api.test'

export default function Home() {
  createApi();
  return (
    <>
      <SearchBanner />
      <HomeNews />
      <ServicesAndInformations />
    </>
  )
}
