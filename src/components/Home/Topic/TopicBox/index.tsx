import { Box, Image, Text, Link } from '@chakra-ui/react';

interface TopicBoxInterface {
    label: string;
    description: string;
    link: string;
}

export default function TopicBox ({ description, label, link }:TopicBoxInterface) {
    return (
        <Box w='19.125rem' h='17.813rem' pt='3.789rem' px='1.5rem' border='1px' borderColor='#D8DBDF' borderRadius='md'>
            <Link href={link}>
            <Image src='icons/TopicBox.svg' ml='0.539rem'/>
            <Text mt='1.539rem' fontSize='1.375rem' fontWeight='semibold' lineHeight='2.125rem'>{label}</Text>
            <Text mt='0.5rem' fontSize='0.875rem' fontWeight='normal' lineHeight='1.25rem' color='#4F5257'>{description}</Text>
            </Link>
        </Box>
    );
}