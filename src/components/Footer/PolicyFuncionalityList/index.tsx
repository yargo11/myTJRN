import { UnorderedList, ListItem, Link } from '@chakra-ui/react';

export default function PolicyFuncionalityList () {
    return (
        <UnorderedList
        display='flex'
        flexWrap='wrap'
        listStyleType='none'
        color='#F2F2F2'
        fontFamily='Inter'
        fontWeight='normal'
        lineHeight='1.21rem'
        mt='1rem'
        mx='0'>
        <ListItem as={Link} href='#'>Termos de uso</ListItem>
        <ListItem as={Link} href='#' ml='1rem'>Políticas de privacidade</ListItem>
        <ListItem as={Link} href='#' ml='1rem'>Mapa do site</ListItem>
    </UnorderedList>
    );
}