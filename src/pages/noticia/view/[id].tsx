import { Box, Heading } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { NoticiaInterface } from "../../../interfaces/noticiaInterface";
import parse from 'react-html-parser';
import NEWLIST from '../../../../test/noticia.json';

interface NoticiaProps {
  noticia: NoticiaInterface;
}

export default function view({ noticia } : NoticiaProps) {
  return (
    <Box m='auto auto' maxW='1230px'>
      <Heading>{noticia.titulo}</Heading>
      {parse(noticia.corpo)}
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  const noticia = NEWLIST.find( element => element.id.toString() === id)
  return {
      props: {
          noticia
      },
  }
}