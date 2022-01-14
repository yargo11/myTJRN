import { Box, Flex, Image, Divider, Text } from '@chakra-ui/react';
import ContainerBox from '../ContainerBox';
import GradientBorder from '../Border/GradientBorder';
import PolicyFuncionalityList from './PolicyFuncionalityList';
import SocialMediaList from './SocialMediaList';
import CardList from '../CardList';

export default function Footer () {
    return (
        <>
            <Box w='full' py='58px' bgColor='tj_dark_blue' className='no-print'>
                <ContainerBox>
                    <CardList columns={[1, 1, 2]}>
                    <Flex color='white' alignItems='center'>
                        <Box h='73px' w='51px' bgImage="url('/icons/TJRNLogo.svg')"></Box>
                        <Box w='2px' minH='77px' mx='16px' bg='linear-gradient(90deg, #B8D272 0%, #20A0CE 100%)'></Box>
                        <Text mt='12px' fontSize='137.5%' lineHeight='121.04%' fontWeight='bold'>Poder Judiciário do <br/> Estado do Rio Grande do Norte</Text>
                    </Flex>
                    <Flex alignItems='end' flexDir='column'>
                        <Text
                            fontWeight='normal'
                            fontSize='75%'
                            color='#F2F2F2'
                            lineHeight='121%'>Siga-nos nas redes sociais</Text>
                            <SocialMediaList />
                            <PolicyFuncionalityList />
                    </Flex>
                    </CardList>
                </ContainerBox>
            </Box>
            <Box w='full' className='no-print'>
                <GradientBorder />
            </Box>
        </>
    );
}