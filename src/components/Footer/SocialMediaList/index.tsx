import { HStack, Link, Image } from '@chakra-ui/react';

export default function SocialMediaList () {
    return (
        <HStack spacing='8px' mt='8px' mb='35px'>
            <Link href='#'><Image w='32px' h='32px' src='/icons/FacebookLogo.svg' alt='Visitar TJRN no Facebook'/></Link>
            <Link href='#'><Image w='32px' h='32px' src='/icons/InstagramLogo.svg' alt='Visitar TJRN no Instagram'/></Link>
            <Link href='#'><Image w='32px' h='32px' src='/icons/TwitterLogo.svg' alt='Visitar TJRN no Twitter'/></Link>
            <Link href='#'><Image w='32px' h='32px' src='/icons/YouTubeLogo.svg' alt='Visitar TJRN no YouTube'/></Link>
        </HStack >
    );
}