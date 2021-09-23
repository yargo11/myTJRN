import { ListItem, UnorderedList, Link } from '@chakra-ui/react';

export default function AreaList () {
    return (
        <UnorderedList
            display='flex'
            flexWrap='wrap'
            h='35px'
            listStyleType='none'
            fontFamily='Inter'
            fontWeight='medium'
            lineHeight='1.21rem'
            marginTop='15px'
            pl='2rem'
            mx='0'>
            <ListItem
                as={Link}
                href='#'
                mr='0.75rem'
                _hover={{
                    'boxShadow': '0px 3px #b8d272'
                }}>Início</ListItem>
            <ListItem
                as={Link}
                href='#'
                mx='0.75rem'
                _hover={{
                    'boxShadow': '0px 3px #b8d272'
                }}>Institucional</ListItem>
            <ListItem
                as={Link}
                href='#'
                mx='0.75rem'
                _hover={{
                    'boxShadow': '0px 3px #b8d272'
                }}>Legislação</ListItem>
            <ListItem
                as={Link}
                href='#'
                ml='0.75rem'
                _hover={{
                    'boxShadow': '0px 3px #b8d272'
                }}>Transparência</ListItem>
        </UnorderedList>
    );
}