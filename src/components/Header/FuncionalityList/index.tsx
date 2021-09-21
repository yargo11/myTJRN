import { ListItem, UnorderedList, Link, Flex } from '@chakra-ui/react';

export default function FuncionalityList() {
    return (
        <UnorderedList
            float='right'
            display='flex'
            flexWrap='wrap'
            h='35px'
            listStyleType='none'
            fontFamily='Inter'
            fontWeight='medium'
            lineHeight='19,36px'
            marginTop='10px'
            mx='0'>
            <ListItem><Link>Webmail</Link></ListItem>
            <ListItem ml='1rem'><Link>Intranet</Link></ListItem>
            <ListItem ml='1rem'>S</ListItem>
            <ListItem ml='1rem'>S</ListItem>
        </UnorderedList>
    );
}