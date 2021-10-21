import { Box, Flex, Link, Text } from '@chakra-ui/react';
import ContainerBox from '../ContainerBox';
import GradientBorder from '../Border/GradientBorder';
import PolicyFuncionalityList from './PolicyFuncionalityList';
import SocialMediaList from './SocialMediaList';

export default function Footer () {
    return (
        <Box w='full' h='227px' bgColor='tj_dark_blue'>
            <ContainerBox as={Flex}
                h='full'
                justifyContent='space-between'
                alignItems='center' flexWrap='wrap'>

                <Box>
                    <Link
                        fontWeight='bold'
                        fontSize='150%'
                        color='#59C4EA'
                        lineHeight='29.05px'
                        href='#'>TJRN.jus.br</Link>
                        <PolicyFuncionalityList />
                </Box>

                <Box>
                    <Text
                        fontWeight='normal'
                        fontSize='75%'
                        color='#F2F2F2'
                        lineHeight='14.52px'>Siga-nos nas redes sociais</Text>
                        <SocialMediaList />
                </Box>
            </ContainerBox>
            <GradientBorder />
        </Box>
    );
}