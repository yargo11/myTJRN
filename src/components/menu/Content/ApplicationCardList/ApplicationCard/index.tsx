import { Center, Flex, Image, Link, Spacer, Text } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

interface LinkCardProps {
    index: number;
    link: string;
    sigla: string;
    label: string;
    description: string;
}

export default function ApplicationCard ({ description, label, link, sigla, index }:LinkCardProps) {
    const screenWidth = useBreakpointValue({ base: 'none', sm: 'flex' })

    return (
        <Flex as={Link} href={link} w='full' border='1px' borderColor='#D8DBDF' borderRadius='md'>
            <Center
                display={screenWidth}
                minW='196px'
                bg={Math.floor((index/2) + 0.5) % 2 == 0 ? '#00384D' : '#14697F'}
                fontWeight='semibold'
                fontSize='187.5%'
                lineHeight='110%'
                color='white'>
                {sigla}
            </Center>
            <Flex flexDir='column' pt='24px' pb='19px' pl='24px'>
                    <Text fontSize='112.5%' fontWeight='bold' lineHeight='138.88%' color='tj_dark_blue'>{label}</Text>
                <Spacer minH='8px'/>
                <Text fontWeight='normal' lineHeight='137,5%'>{description}</Text>
            </Flex>
                    <Image src='/icons/GoTo.svg' alignSelf='start' mt='28px' mr='22px'/>
        </Flex>
    );
}