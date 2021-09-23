import { Box, Flex, Link, Text } from '@chakra-ui/react';
import ContainerBox from '../ContainerBox';
import PolicyFuncionalityList from './PolicyFuncionalityList';
import SocialMediaList from './SocialMediaList';

export default function Footer () {
    return (
        <Box w='full' h='14.188rem' bgColor='#00384D'>
            <ContainerBox as={Flex}
                h='full'
                justifyContent='space-between'
                alignItems='center' flexWrap='wrap'>

                <Box>
                    <Link
                        fontFamily='Inter'
                        fontWeight='bold'
                        fontSize='1.5rem'
                        color='#59C4EA'
                        lineHeight='1.816rem'
                        href='#'>TJRN.jus.br</Link>
                        <PolicyFuncionalityList />
                </Box>

                <Box>
                    <Text
                        fontFamily='Inter'
                        fontWeight='normal'
                        fontSize='0.75rem'
                        color='#F2F2F2'
                        lineHeight='0.908rem'>Siga-nos nas redes sociais</Text>
                        <SocialMediaList />
                </Box>
            </ContainerBox>
        </Box>
    );
}