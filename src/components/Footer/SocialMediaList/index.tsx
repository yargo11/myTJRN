import { UnorderedList, ListItem, Link, Image } from '@chakra-ui/react';

export default function SocialMediaList () {
    return (
        <UnorderedList
        display='flex'
        flexWrap='wrap'
        listStyleType='none'
        color='#F2F2F2'
        fontFamily='Inter'
        fontWeight='normal'
        lineHeight='1.21rem'
        mt='0.5rem'
        mx='0'>
        <ListItem as={Link} href='#'><Image src='icons/FacebookLogo.svg'/></ListItem>
        <ListItem as={Link} href='#' ml='0.5rem'><Image src='icons/InstagramLogo.svg'/></ListItem>
        <ListItem as={Link} href='#' ml='0.5rem'><Image src='icons/TwitterLogo.svg'/></ListItem>
        <ListItem as={Link} href='#' ml='0.5rem'><Image src='icons/YouTubeLogo.svg'/></ListItem>
    </UnorderedList>
    );
}