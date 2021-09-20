import { ListItem, UnorderedList, Link, Flex } from '@chakra-ui/react';

export default function FuncionalityList() {
    return (
        <Flex w='full' maxW='15.75rem' alignItems='center' flexWrap='wrap'>
            <UnorderedList
                display='flex'
                h='35px'
                listStyleType='none'
                fontFamily='Inter'
                fontWeight='medium'
                lineHeight='19,36px'
                marginTop='10px'>
                <ListItem><Link>Webmail</Link></ListItem>
                <ListItem ml='1rem'><Link>Intranet</Link></ListItem>
                <ListItem ml='1rem'>S</ListItem>
                <ListItem ml='1rem'>S</ListItem>
            </UnorderedList>
        </Flex>
    );
}