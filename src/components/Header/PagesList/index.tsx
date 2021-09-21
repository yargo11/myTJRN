import { ListItem, UnorderedList, Link } from '@chakra-ui/react';

export default function PagesList () {
    return (
        <UnorderedList
            display='flex'
            flexWrap='wrap'
            h='35px'
            listStyleType='none'
            fontFamily='Inter'
            fontWeight='medium'
            lineHeight='19,36px'
            marginTop='10px'
            px='2rem'
            mx='0'>
            <ListItem
                mr='0.75rem'
                _hover={{
                    'boxShadow': '0px 3px #b8d272'
                }}><Link href='#'>Início</Link></ListItem>
            <ListItem
                mx='0.75rem'
                _hover={{
                    'boxShadow': '0px 3px #b8d272'
                }}><Link href='#'>Institucional</Link></ListItem>
            <ListItem
                mx='0.75rem'
                _hover={{
                    'boxShadow': '0px 3px #b8d272'
                }}><Link href='#'>Legislação</Link></ListItem>
            <ListItem
                ml='0.75rem'
                _hover={{
                    'boxShadow': '0px 3px #b8d272'
                }}><Link href='#'>Transparência</Link></ListItem>
        </UnorderedList>
    );
}