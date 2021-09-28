import { Box, Button, Flex, Input, Text, Wrap, WrapItem } from '@chakra-ui/react';
import ContainerBox from '../../ContainerBox';

export default function NewsLetter () {
    return (
        <Flex w='full' minH='10.938rem' py='1rem' bgColor='tj_light_blue'>
            <ContainerBox as={Flex}
                h='full'
                justifyContent='space-between'
                alignItems='center' flexWrap='wrap'>

                <Box>
                    <Text
                        fontFamily='Inter'
                        fontWeight='bold'
                        fontSize='2rem'
                        color='tj_light_gray'
                        lineHeight='2.5rem'
                        href='#'>Assine para receber nossa newsletter</Text>
                    <Text
                        fontFamily='Inter'
                        fontWeight='normal'
                        fontSize='1rem'
                        color='tj_light_gray'
                        lineHeight='1.375'
                        href='#'>Seus dados estão seguros conosco, leia nossa política de privacidade.</Text>
                </Box>
                <Wrap spacing='0.5rem'>
                    <WrapItem>
                        <Input w='full' maxW='24.25rem' h='2.813rem' display='flex' placeholder='Digite seu email' bgColor='white'/>
                    </WrapItem>
                    <WrapItem>
                        <Button
                            w='7.5rem'
                            h='2.813rem'
                            fontWeight='medium'
                            lineHeight='1.375'
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