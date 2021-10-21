import { Wrap, Link, WrapItem } from '@chakra-ui/react';

export default function PolicyFuncionalityList () {
    return (
        <Wrap
            color='#F2F2F2'
            fontWeight='normal'
            lineHeight='121%'
            mt='16px'
            spacing='16px'>
            <WrapItem as={Link} href='#'>Termos de uso</WrapItem>
            <WrapItem as={Link} href='#'>Políticas de privacidade</WrapItem>
            <WrapItem as={Link} href='#'>Mapa do site</WrapItem>
        </Wrap>
    );
}