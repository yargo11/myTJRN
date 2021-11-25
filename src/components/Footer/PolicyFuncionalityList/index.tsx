import { Flex, Link, Spacer } from '@chakra-ui/react';

export default function PolicyFuncionalityList () {
    return (
        <Flex
            color='#F2F2F2'
            fontWeight='normal'
            lineHeight='121%'
            mt='16px' flexWrap='wrap'>
            <Link href='#'>Termos de uso</Link>
            <Spacer w='16px'/>
            <Link href='#'>Políticas de privacidade</Link>
            <Spacer w='16px'/>
            <Link href='#'>Mapa do site</Link>
        </Flex>
    );
}