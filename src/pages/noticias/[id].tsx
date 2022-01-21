import parse from 'html-react-parser';
import PageTitle from '../../components/PageTitle';
import { Box, Flex, Text } from "@chakra-ui/react";
import { GetServerSideProps } from 'next';
import ContainerBox from '../../components/ContainerBox';
import GrayBorder from '../../components//Border/GrayBorder';
import styles from './styles.module.scss';
import ListenPrintSharePanel from '../../components/ListenPrintSharePanel';

interface LerNoticiaProps {
    categoria: string;
    titulo: string;
    ultimaModificacao: string;
    corpo: string;
}

export default function Noticia({ titulo, categoria, ultimaModificacao, corpo }:LerNoticiaProps) {

    const breadcrumblist = [{label: 'Notícias', link: '/noticias'}];
    /*
    useEffect(() => {
        speechSynthesis.speak(new SpeechSynthesisUtterance(corpo))
    },[])
    */
    return (
        <>
            <PageTitle title={titulo} breadCrumbArray={breadcrumblist} showTitle={false}/>
            <ContainerBox>
                <Text mt='42px' mx='10px' fontWeight='bold' fontSize='112.5%' lineHeight='133.33%'>{categoria}</Text>
                <Text mt='16px' fontWeight='bold' fontSize='300%' lineHeight='116.66%' color='tj_light_blue' maxW='1076px'>{titulo}</Text>
                
                <Flex mt='56px' mb='12px' fontSize='87.5%' color='#888889' justifyContent='space-between' flexWrap='wrap'>
                    <Text fontSize='87.5%' lineHeight='142.85%'>{ultimaModificacao}</Text>
                    <ListenPrintSharePanel listOfContentToRead={[corpo]}/>
                </Flex>
                <GrayBorder/>
                <Box mt='48px' mx='auto' mb='155px' maxW='856px'>
                    <div className={styles.Container}>
                        {parse(corpo)}
                    </div>
                </Box>
            </ContainerBox>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;
    let newsApiResult = await ((await fetch(`${process.env.BACKEND_URL}noticias/${id}`, {
        method: 'GET'
      })).json())
    return {
        props: {
            titulo: newsApiResult.titulo,
            categoria: newsApiResult.assunto,
            ultimaModificacao: new Date(newsApiResult.dataAtualizacao).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            }),
            corpo: newsApiResult.corpo
        },
    }
}