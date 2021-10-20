import { Box, Button, Flex, Input, Text, Wrap, WrapItem } from '@chakra-ui/react';
import ContainerBox from '../../ContainerBox';

export default function NewsLetter () {
    return (
        <Flex w='full' minH='175px' py='16px' bgColor='tj_light_blue'>
            <ContainerBox as={Flex}
                h='full'
                justifyContent='space-between'
                alignItems='center'
                flexWrap='wrap'>
                <Box my='16px'>
                    <Text
                        fontWeight='bold'
                        fontSize='200%'
                        color='tj_light_gray'
                        lineHeight='40px'
                        href='#'>Assine para receber nossa newsletter</Text>
                    <Text
                        mt='12px'
                        fontWeight='normal'
                        color='tj_light_gray'
                        lineHeight='22px'
                        href='#'>Seus dados estão seguros conosco, leia nossa política de privacidade.</Text>
                </Box>
                <Wrap spacing='8px' >
                    <WrapItem>
                        <Input w='full' maxW='388px' h='45px' display='flex' placeholder='Digite seu email' bgColor='white'/>
                    </WrapItem>
                    <WrapItem>
                        <Button
                            w='120px'
                            h='45px'
                            fontWeight='medium'
                            lineHeight='22px'
                            bgColor='tj_dark_blue'
                            color='white'
                            transition='filter 0.2s'
                            _hover={{ filter: 'brightness(120%)' }}
                            _active={{ filter: 'brightness(75%)' }}>Inscrever-se</Button>
                    </WrapItem>
                </Wrap>
            </ContainerBox>
        </Flex>
    );
}