import { Link, Flex } from '@chakra-ui/react';

export default function ApplicationList() {
    return (
        <Flex
            flexWrap='wrap'
            h='35px'
            fontFamily='Inter'
            fontWeight='medium'
            lineHeight='1.21rem'
            marginTop='15px'
            mx='0'>
            <Link href='#'>Webmail</Link>
            <Link href='#' ml='1rem'>Intranet</Link>
            <Link href='#' ml='1rem'>S</Link>
            <Link href='#' ml='1rem'>S</Link>
        </Flex>
    );
}