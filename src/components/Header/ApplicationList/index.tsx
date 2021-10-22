import { Link, Flex } from '@chakra-ui/react';


export default function ApplicationList() {
    return (
        <Flex
            fontFamily='Inter'
            fontWeight='medium'
            lineHeight='121%'
            marginTop='10px'
            mx='0' className='no-print'>
            <Link href='#'>Webmail</Link>
            <Link href='#' ml='16px'>Intranet</Link>
            <Link href='#' ml='16px'>S</Link>
            <Link href='#' ml='16px'>S</Link>
        </Flex>
    );
}