import { Flex, Image, Link, Divider, Text } from '@chakra-ui/react';

interface LinkCardProps {
    link: string;
    image: string;
    label: string;
    description: string;
}

export default function ImageCard ({ description, label, link, image }:LinkCardProps) {
    return (
        <Flex as={Link} href={link} w='full'
        borderTop='1px solid #D8DBDF'
        borderBottom='1px solid #D8DBDF'
        borderLeft='1px solid #D8DBDF'
        borderRight='2px solid #77CAED'>
            <Image src={image} display={{ base: 'none', sm: 'flex' }}  w='196px' h='213px'/>
            <Flex w='full' flexDir='column' pb='19px'>
                <Image src={image} display={{ base: 'flex', sm: 'none' }} w='196px' h='213px' alignSelf='center' mt='30px' alt='#'/>
                <Flex justifyContent='space-between' alignItems='center' pt='24px' px='24px'>
                    <Text fontSize='150%' fontWeight='bold' lineHeight='104.17%' color='#14697F'>{label}</Text>
                    <Image src='/icons/GoTo.svg' alt='RightIcon' w='1rem' h='1rem'/>
                </Flex>
                <Divider w='90%' ml='5%' my='16px'/>
                <Text ml='24px' fontWeight='normal' lineHeight='137,5%'>{description}</Text>
            </Flex>
        </Flex>
    );
}