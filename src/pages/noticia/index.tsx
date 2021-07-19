import { GetServerSideProps } from "next";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { Filters } from "../../components/NewsComponents/Filters";
import { News, NoticiaListProps } from "../../components/NewsComponents/News";
import { NewsIntro } from "../../components/NewsComponents/NewsIntro";

import { Flex } from "@chakra-ui/react"

import NEWLIST from '../../../test/noticia.json';

export default function Noticias({ noticias }: NoticiaListProps) {
  return (
    <Flex direction="column">
      <Breadcrumbs />
      <NewsIntro />
      <Filters />
      <News noticias={noticias}/>
    </Flex>
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