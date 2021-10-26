import { Box, Link, Text } from '@chakra-ui/react';

interface LinkCardProps {
    link: string;
    label: string;
    description: string;
}

export default function LinkCard ({ description, label, link }:LinkCardProps) {
    return (
        <Box as={Link} href={link} w='full' p='24px' border='1px' borderColor='#D8DBDF' borderRadius='md'>
            <Text fontSize='150%' fontWeight='semibold' lineHeight='141.66%' color='tj_dark_blue'>{label}</Text>
            <Text fontWeight='normal' lineHeight='137.5%' mt='12px'>{description}</Text>
        </Box>
    );
}