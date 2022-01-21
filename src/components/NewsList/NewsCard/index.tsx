import { Image, Text, Link } from '@chakra-ui/react';

export interface NewsCardProps {
    id: number,
    titulo: string,
    tituloUrl: string
    urlImg?: string,
    dataPublicacao: string
}

export default function NewsCard ({urlImg, dataPublicacao, titulo, tituloUrl}:NewsCardProps) {
    return (
        <Link href={`/noticias/${tituloUrl}`} w='full' mb='14px'>
            <Image w='306px' h='204px' borderRadius='8px' src={urlImg?? '/image/NewsTmpImage.png'} alt={"notícia "}/>
            <Text mt='16px' mb='8px' fontSize='75%' fontWeight='medium' lineHeight='141.66%' color='#888889'>
                {new Date(dataPublicacao).toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: 'long',
                year: 'numeric'
            })}
            </Text>
            <Text fontSize='112.5%' fontWeight='medium' lineHeight='138.88%' color='tj_light_blue'>{titulo}</Text>
        </Link>
    );
}