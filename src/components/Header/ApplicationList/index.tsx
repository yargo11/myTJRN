import { ListItem, UnorderedList, Link } from '@chakra-ui/react';

export default function ApplicationList() {
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
            mx='0'>
            <ListItem as={Link} href='#'>Webmail</ListItem>
            <ListItem as={Link} href='#' ml='1rem'>Intranet</ListItem>
            <ListItem as={Link} href='#' ml='1rem'>S</ListItem>
            <ListItem as={Link} href='#' ml='1rem'>S</ListItem>
        </UnorderedList>
    );
}