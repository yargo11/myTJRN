import { Box, Center, Flex, Link, Text } from '@chakra-ui/react';

interface LinkCardProps {
    index: number;
    link: string;
    sigla: string;
    label: string;
    description: string;
}

export default function ApplicationCard ({ description, label, link, sigla, index }:LinkCardProps) {
    return (
        <Flex as={Link} href={link} w='full' border='1px' borderColor='#D8DBDF' borderRadius='md'>
            <Center w='196px' minW='150px' bg={index % 2 == 0 ? '#00384D' : '#14697F'} color='white'>
                {sigla}
            </Center>
            <Box>
                <Text fontSize='150%' fontWeight='semibold' lineHeight='141.66%' color='tj_dark_blue'>{label}</Text>
                <Text fontWeight='normal' lineHeight='137.5%' mt='12px'>{description}</Text>
            </Box>
        </Flex>
    );
}