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
    const screenMediumWidth = useBreakpointValue({ base: 'none', sm: 'flex' })
    const screenSmallWidth = useBreakpointValue({ base: 'flex', sm: 'none' })

    return (
        <Flex as={Link} href={link} w='full' border='1px' borderColor='#D8DBDF' borderRadius='md'>
            <Center
                display={screenMediumWidth}
                minW='196px'
                bg={Math.floor((index/2) + 0.5) % 2 == 0 ? 'tj_dark_blue' : 'tj_light_blue'}
                fontWeight='semibold'
                fontSize='187.5%'
                lineHeight='110%'
                color='white'>
                {sigla}
            </Center>
            <Flex flexDir='column' pb='19px'>
                <Center
                    display={screenSmallWidth}
                    w='full'
                    h='100px'
                    bg={Math.floor((index/2) + 0.5) % 2 == 0 ? 'tj_dark_blue' : 'tj_light_blue'}
                    fontWeight='semibold'
                    fontSize='187.5%'
                    lineHeight='110%'
                    color='white'>
                    {sigla}
                </Center>
                <Flex justifyContent='space-between' alignItems='center' pt='24px' px='24px'>
                    <Text fontSize='112.5%' fontWeight='bold' lineHeight='138.88%' color='tj_dark_blue'>{label}</Text>
                    <Image src='/icons/GoTo.svg'/>
                </Flex>
                <Spacer minH='8px'/>
                <Text ml='24px' fontWeight='normal' lineHeight='137,5%'>{description}</Text>
            </Flex>
        </Flex>
    );
}