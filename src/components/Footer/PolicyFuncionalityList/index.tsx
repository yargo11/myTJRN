import { Wrap, Link, WrapItem } from '@chakra-ui/react';

export default function PolicyFuncionalityList () {
    return (
        <Wrap
            color='#F2F2F2'
            fontFamily='Inter'
            fontWeight='normal'
            lineHeight='1.21rem'
            mt='1rem'
            spacing='1rem'>
            <WrapItem as={Link} href='#'>Termos de uso</WrapItem>
            <WrapItem as={Link} href='#'>Políticas de privacidade</WrapItem>
            <WrapItem as={Link} href='#'>Mapa do site</WrapItem>
        </Wrap>
    );
}