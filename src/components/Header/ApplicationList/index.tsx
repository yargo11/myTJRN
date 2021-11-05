import { Box, Link, Flex } from '@chakra-ui/react';


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
            <Link href='#' ml='16px'><Box background='linear-gradient(84.42deg, #20A0CE -34.21%, #B8D272 178.05%)' borderRadius='base'></Box></Link>
        </Flex>
    );
}