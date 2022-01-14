import { Center, Link, Image } from '@chakra-ui/react';

export default function RightMenuDesktop() {
    return (
        <Center
            display={{base: 'none', sm: 'flex'}}
            fontFamily='Inter'
            fontWeight='medium'
            lineHeight='121%'
            mx='0'
            className='no-print'>
            <Link href='#'>Webmail</Link>
            <Link href='#' ml='16px'>Intranet</Link>
            <Link href='#' ml='16px'><Center w='54px' h='54px' background='linear-gradient(84.42deg, #20A0CE -34.21%, #B8D272 178.05%)' borderRadius='base'><Image src='/icons/Search.svg' alt='busca no site'/></Center></Link>
        </Center>
    );
}