import { GetServerSideProps } from "next";
import { SearchBanner } from '../components/HomeComponents/SearchBanner/index'
import { HomeNews, NoticiaListProps } from '../components/HomeComponents/HomeNews/index'
import { ServicesAndInformations } from '../components/HomeComponents/ServicesAndInformations/index'
import NEWLIST from '../../test/noticia.json';

export default function Home({ noticias }: NoticiaListProps) {
  return (
    <>
      <SearchBanner />
      <HomeNews noticias={noticias} />
      <ServicesAndInformations />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const noticias = NEWLIST;
  return {
      props: {
          noticias
      },
  }
}