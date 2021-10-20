import { SimpleGrid, Link, Image } from '@chakra-ui/react';

export default function SocialMediaList () {
    return (
        <SimpleGrid columns={4} spacing='8px' mt='8px'>
            <Link href='#'><Image src='/icons/FacebookLogo.svg'/></Link>
            <Link href='#'><Image src='/icons/InstagramLogo.svg'/></Link>
            <Link href='#'><Image src='/icons/TwitterLogo.svg'/></Link>
            <Link href='#'><Image src='/icons/YouTubeLogo.svg'/></Link>
        </SimpleGrid >
    );
}