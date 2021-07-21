import { Link, Flex, Box, Text, Image } from '@chakra-ui/react'
import { NoticiaInterface } from '../../../interfaces/noticiaInterface';

interface NoticiaProps {
    noticia: NoticiaInterface;
}

export function NewsCard(props: NoticiaProps) {
    return (
        <Link href={`/noticia/view/${props.noticia.id}`} m='auto'>
            <Flex flexDir='column' w={276} 

                transition='margin-top 0.2s'
                _hover={{
                    marginTop: '-5px'
                }}
            >
                <Image src={props.noticia.imagemTitulo ?? '/images/infanciaJuventudeFamilia.svg'} alt={props.noticia.titulo} />
                <Box fontSize='0.75rem' fontWeight='500' lineHeight='1.125rem' color='#626a6e' my='10px'>
                    {new Intl.DateTimeFormat('pt-BR', {
                        dateStyle: 'full'
                    }).format(new Date(props.noticia.dataPublicacao))}
                </Box>
                <Text
                    fontWeight='500' lineHeight='1.4rem' color='#2b70b9'
                    transition='color 0.2s'
                    _hover={{
                        color: 'cyan.900'
                    }}
                >{props.noticia.titulo}</Text>
            </Flex>
        </Link >
    );
}