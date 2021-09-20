import { ListItem, UnorderedList, Link, Flex } from '@chakra-ui/react';

export default function PagesList () {
    return (
        <Flex maxW='50.18rem' w='full' alignItems='center' flexWrap='wrap'>
            <UnorderedList
                display='flex'
                h='35px'
                listStyleType='none'
                fontFamily='Inter'
                fontWeight='medium'
                lineHeight='19,36px'
                marginTop='10px'>

                <ListItem
                    ml='2rem'
                    _hover={{
                        'boxShadow': '0px 3px #b8d272'
                    }}><Link href='#'>Início</Link></ListItem>
                <ListItem
                    ml='1.5rem'
                    _hover={{
                        'boxShadow': '0px 3px #b8d272'
                    }}><Link href='#'>Institucional</Link></ListItem>
                <ListItem
                    ml='1.5rem'
                    _hover={{
                        'boxShadow': '0px 3px #b8d272'
                    }}><Link href='#'>Legislação</Link></ListItem>
                <ListItem
                    ml='1.5rem'
                    _hover={{
                        'boxShadow': '0px 3px #b8d272'
                    }}><Link href='#'>Transparência</Link></ListItem>
            </UnorderedList>
        </Flex>
    );
}