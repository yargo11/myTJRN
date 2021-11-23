import { Box, Flex, Image, Text, Link } from '@chakra-ui/react';

export interface TopicBoxInterface {
    label: string;
    description: string;
    link: string;
}

export default function ServiceAndInformationCard ({ description, label, link }:TopicBoxInterface) {

    return (
        <Box
            as={Link}
            href={link}
            w='full'
            minH={{ base: '109px',sm:'168px', md:'227px', lg:'285px' }}
            pt={{ base: '16px', sm:'30.71px', md:'45.42px', lg:'60.13px' }}
            pb='18px'
            px='24px'
            border='1px'
            borderColor='#D8DBDF'
            borderRadius='md'
            className='card-print'>
            <Image src='icons/TopicBox.svg' ml='8.63px' display={{ base: 'none', sm: 'initial' }}/>
            <Flex justifyContent='space-between'>
                <Box>
                    <Text mt={{ base: '0', sm:'24.62px' }} fontSize='137.5%' fontWeight='semibold' lineHeight='154.54%'>{label}</Text>
                    <Text mt='8px' fontSize='87.5%' fontWeight='normal' lineHeight='157.14%' color='#4F5257'>{description}</Text>
                </Box>
                <Image src='icons/TopicBox.svg' ml='8.63px' display={{ base: 'initial', sm: 'none' }}/>
            </Flex>
        </Box>
    );
}