import { Flex, Text, Heading, Image, Link } from '@chakra-ui/react';
import { NoticiaInterface } from '../../../interfaces/noticiaInterface';
import { NewsCard } from '../NewsCard'

export interface NoticiaListProps {
    noticias: NoticiaInterface[];
}

export function News({ noticias }: NoticiaListProps) {
    return (
        <Flex maxW={1230} w='100%' m='auto' mt='52px'>
            <Flex flexFlow='row wrap'>
                <Flex
                    bg='#f5f5f5'
                    w='100%'
                    maxW={582}
                    h={282}
                    p='30px'
                    flexDir='column'
                    mx='15px'
                    mb='60px'
                    transition='color 0.2s'
                    _hover={{
                        color: 'cyan.900'
                    }}
                >
                    <Heading as='h1' fontSize='2rem' fontWeight='500' mb='15px'>Notícias</Heading>
                    <Text fontWeight='400' display='flex' alignItems='center' >
                        Molestie elementum pulvinar leo tincidunt molestie at ultrices morbi ornare. Nulla diam diam ut
                        dignissim. Justo, velit nunc nunc consectetur nunc nec dui. Purus quam at amet a arcu amet, erat.
                    </Text>
                    <Text fontSize='0.875rem' fontWeight='400' display='flex' mt='auto' alignItems='center' transition='color 0.2s'>
                        <Image src="/images/icons/bell.svg" alt="Notificações" mr='20px' />
                        <Link href="#">
                            Inscreva-se para receber atualizações desta página
                        </Link>
                    </Text>
                </Flex>
                {noticias ? noticias
                    .map(noticia => (
                        <NewsCard key={noticia.id} noticia={noticia} />
                    )
                    ) : <></>}
            </Flex>
        </Flex>

    )
}