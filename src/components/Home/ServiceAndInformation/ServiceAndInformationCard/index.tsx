import { Box, Image, Text, Link } from '@chakra-ui/react';

interface TopicBoxInterface {
    label: string;
    description: string;
    link: string;
}

export default function ServiceAndInformationCard ({ description, label, link }:TopicBoxInterface) {
    return (
        <Box as={Link} href={link} w='full' minH='285px' pt='60.13px' pb='12px' px='24px' border='1px' borderColor='#D8DBDF' borderRadius='md'>
            <Image src='icons/TopicBox.svg' ml='8.63px'/>
            <Text mt='24.62px' fontSize='137.5%' fontWeight='semibold' lineHeight='34px'>{label}</Text>
            <Text mt='8px' fontSize='87.5%' fontWeight='normal' lineHeight='20px' color='#4F5257'>{description}</Text>
        </Box>
    );
}